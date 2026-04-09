#!/usr/bin/env bash
# ============================================================
# La RST — Reset DB (développement)
# reset-db.sh
# Réinitialise la base PostgreSQL locale
# ============================================================

set -e

echo "=== Réinitialisation de la base La RST ==="

source ./config/.env

psql -h "$DB_HOST" -U "$DB_USER" -d "$DB_NAME" <<EOF
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
EOF

echo "Base réinitialisée."
