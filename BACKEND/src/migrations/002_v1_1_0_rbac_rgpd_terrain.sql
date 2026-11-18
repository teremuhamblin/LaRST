BEGIN;

-- Extension UUID (PostgreSQL 13+ dispose déjà de gen_random_uuid(), utile en secours)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Optionnel : décommenter si ta v1.0.0 utilisait ces noms sans underscores
-- ALTER TABLE beneficiaries RENAME COLUMN referentvolunteerid TO referent_volunteer_id;
-- ALTER TABLE missions RENAME COLUMN startat TO start_at;
-- ALTER TABLE missions RENAME COLUMN endat TO end_at;

-- 1. Nouvelle table : users (Authentification & RBAC)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role VARCHAR(20) NOT NULL DEFAULT 'volunteer'
    CHECK (role IN ('admin', 'coordinator', 'volunteer')),
  volunteer_id UUID NULL REFERENCES volunteers(id) ON DELETE SET NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);

-- 2. Mise à jour table volunteers (soft delete)
ALTER TABLE volunteers
  ADD COLUMN IF NOT EXISTS archived_at TIMESTAMPTZ NULL;

CREATE INDEX IF NOT EXISTS idx_volunteers_status ON volunteers(status);

-- 3. Mise à jour table beneficiaries (RGPD & pseudonymisation)
ALTER TABLE beneficiaries
  ALTER COLUMN firstname DROP NOT NULL,
  ALTER COLUMN lastname DROP NOT NULL;

ALTER TABLE beneficiaries
  ADD COLUMN IF NOT EXISTS display_name VARCHAR(120),
  ADD COLUMN IF NOT EXISTS consent_given_at TIMESTAMPTZ NULL,
  ADD COLUMN IF NOT EXISTS archived_at TIMESTAMPTZ NULL;

-- Initialise display_name pour les fiches existantes si vide
UPDATE beneficiaries
SET display_name = TRIM(CONCAT(COALESCE(firstname, ''), ' ', COALESCE(lastname, '')))
WHERE display_name IS NULL;

CREATE INDEX IF NOT EXISTS idx_beneficiaries_status ON beneficiaries(status);
CREATE INDEX IF NOT EXISTS idx_beneficiaries_need_type ON beneficiaries(need_type);

-- 4. Mise à jour table missions (statuts avancés)
DO $$
DECLARE
  constraint_name TEXT;
BEGIN
  SELECT conname INTO constraint_name
  FROM pg_constraint
  WHERE conrelid = 'missions'::regclass
    AND contype = 'c'
    AND pg_get_constraintdef(oid) LIKE '%status%';

  IF constraint_name IS NOT NULL THEN
    EXECUTE format('ALTER TABLE missions DROP CONSTRAINT %I', constraint_name);
  END IF;
END $$;

ALTER TABLE missions
  ADD CONSTRAINT missions_status_check
  CHECK (status IN ('draft', 'planned', 'in_progress', 'done', 'cancelled'));

CREATE INDEX IF NOT EXISTS idx_missions_status ON missions(status);
CREATE INDEX IF NOT EXISTS idx_missions_start_at ON missions(start_at);

-- 5. Mise à jour tables de liaison (N:N)
ALTER TABLE mission_volunteers
  ADD COLUMN IF NOT EXISTS assigned_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

ALTER TABLE mission_beneficiaries
  ADD COLUMN IF NOT EXISTS attendance_status VARCHAR(20) NOT NULL DEFAULT 'expected'
    CHECK (attendance_status IN ('expected', 'met', 'absent')),
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

COMMIT;
