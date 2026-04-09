# Modèle de données — La RST v1.0.0

Ce document décrit le schéma de données utilisé dans la version 1.0.0.

---

## 1. Table : volunteers

| Champ | Type | Description |
|-------|------|-------------|
| id | UUID | Identifiant unique |
| first_name | TEXT | Prénom |
| last_name | TEXT | Nom |
| email | TEXT | Email (unique) |
| phone | TEXT | Téléphone |
| skills | TEXT | Compétences |
| availability | TEXT | Disponibilités |
| notes | TEXT | Notes internes |
| status | TEXT | active / archived |
| created_at | TIMESTAMP | Création |
| updated_at | TIMESTAMP | Mise à jour |

---

## 2. Table : beneficiaries

| Champ | Type | Description |
|-------|------|-------------|
| id | UUID | Identifiant |
| first_name | TEXT | Prénom |
| last_name | TEXT | Nom |
| contact | TEXT | Téléphone / email |
| need_type | TEXT | Type d’accompagnement |
| notes | TEXT | Notes internes |
| referent_volunteer_id | UUID | FK → volunteers.id |
| status | TEXT | active / archived |
| created_at | TIMESTAMP | Création |
| updated_at | TIMESTAMP | Mise à jour |

---

## 3. Table : missions

| Champ | Type | Description |
|-------|------|-------------|
| id | UUID | Identifiant |
| title | TEXT | Titre |
| description | TEXT | Description |
| location | TEXT | Lieu |
| start_at | TIMESTAMP | Début |
| end_at | TIMESTAMP | Fin |
| status | TEXT | planned / done / cancelled |
| created_at | TIMESTAMP | Création |
| updated_at | TIMESTAMP | Mise à jour |

---

## 4. Relations

### mission_volunteers
- mission_id (FK)
- volunteer_id (FK)
- role (optionnel)

### mission_beneficiaries
- mission_id (FK)
- beneficiary_id (FK)

---

## 5. Évolutions prévues

- Historique des missions par bénévole
- Journalisation des actions
- Champs personnalisables
