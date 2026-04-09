# Architecture — La RST v1.0.0

La RST est construite autour d’une architecture simple, modulaire et extensible,
adaptée aux besoins d’une plateforme associative.

## 1. Vue d’ensemble

La plateforme repose sur trois blocs :

### Backend (API REST)
- Node.js + Express
- PostgreSQL
- Architecture par modules (volunteers, beneficiaries, missions)
- Endpoints CRUD simples

### Frontend (Web minimaliste)
- HTML / CSS / JavaScript léger
- Pages dédiées pour chaque module
- Consommation directe de l’API REST

### Documentation
- Architecture
- Modèle de données
- Gouvernance
- Politique de données

---

## 2. Structure technique

```text
backend/
│── src/
│   ├── app.js
│   ├── config/db.js
│   ├── modules/
│   │   ├── volunteers/
│   │   ├── beneficiaries/
│   │   └── missions/
│   └── middleware/
frontend/
│── public/
│── src/
docs/
```

---

## 3. API REST

### Modules
- Volunteers
- Beneficiaries
- Missions

### Format
- JSON
- Endpoints CRUD
- Auth simple (token)

---

## 4. Base de données

- PostgreSQL
- Relations N:N pour missions ↔ bénévoles / bénéficiaires
- UUID comme identifiants

---

## 5. Évolutions prévues (1.1.0+)

- Auth avancée (rôles)
- Dockerisation
- Tests automatisés
- Frontend modernisé (React/Vue)



