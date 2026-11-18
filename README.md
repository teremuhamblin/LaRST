# LaRST

**Plateforme open-source de gestion des bénévoles, bénéficiaires et missions solidaires**

* **Version actuelle :** `1.0.0` (MVP) — **Prochaine version :** `1.1.0` *(en préparation)*
* **Licence :** MIT

> **La RST** est une plateforme web open-source destinée aux structures solidaires, et notamment à **La Roulotte Solidaire Toulouse**.  
> Elle permet de gérer efficacement les bénévoles, les bénéficiaires et les missions, avec une approche simple, éthique, accessible et respectueuse des données personnelles.

---

### 🎯 Objectifs du projet

La plateforme couvre les besoins essentiels d’une association de terrain, de la coordination en amont jusqu’à l’action mobile :

**👥 Gestion des bénévoles**
- Création, modification et archivage (soft delete)
- Coordonnées, compétences, disponibilités et notes internes
- Historique des missions effectuées *(v1.1.0)*

**🤝 Gestion des bénéficiaires**
- Fiches individuelles avec possibilité de pseudonymisation (`display_name`) *(v1.1.0)*
- Coordonnées, type d’accompagnement (`need_type`), référent bénévole
- Suivi du consentement RGPD et archivage automatique *(v1.1.0)*
- Cloisonnement des notes internes sensibles selon le rôle *(v1.1.0)*

**📅 Gestion des missions & Mode Terrain**
- Création de missions (titre, description, lieu, créneau, statuts avancés)
- Assignation des bénévoles et association des bénéficiaires
- **Feuille de route terrain** *(v1.1.0)* : vue mobile épurée et version imprimable pour les maraudes/distributions, avec pointage simplifié sur place

---

### 🧱 Architecture du projet

Le projet repose sur une architecture volontairement sobre et modulaire :

**Backend (API REST)**
- Node.js + Express
- PostgreSQL + migrations SQL versionnées *(v1.1.0)*
- Architecture modulaire par domaines (`auth`, `volunteers`, `beneficiaries`, `missions`)
- Contrôle d’accès basé sur les rôles — RBAC (`admin`, `coordinator`, `volunteer`) *(v1.1.0)*

**Frontend (Web minimaliste)**
- HTML / CSS / JavaScript léger (sans framework lourd)
- Composants réutilisables et feuille d’impression terrain (`print.css`) *(v1.1.0)*
- Consommation directe de l’API REST

**Documentation & Déploiement**
- Architecture, modèle de données, gouvernance et politique RGPD
- Conteneurisation via Docker & Docker Compose *(v1.1.0)*

---

### 🗂️ Arborescence du projet

```text
la-rst/
│── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── migrations/              # (v1.1.0) Scripts de migration PostgreSQL
│   │   ├── modules/
│   │   │   ├── auth/                # (v1.1.0) Authentification & RBAC
│   │   │   ├── volunteers/
│   │   │   ├── beneficiaries/
│   │   │   └── missions/
│   │   └── middleware/
│   ├── tests/
│   ├── Dockerfile                   # (v1.1.0)
│   └── package.json
│
│── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── styles/
│   │       └── print.css            # (v1.1.0) Feuille de route imprimable
│   └── src/
│       ├── components/              # (v1.1.0) Composants JS réutilisables
│       ├── volunteers.html
│       ├── beneficiaries.html
│       ├── missions.html
│       └── roadmap.html             # (v1.1.0) Vue « Mode Terrain » mobile
│
│── docs/
│   ├── README.md
│   ├── architecture.md
│   ├── data-model.md
│   ├── governance.md
│   ├── privacy-policy.md            # (v1.1.0) Politique de données (RGPD)
│   └── installation.md              # (v1.1.0) Guide pour les associations
│
│── config/
│   └── .env.example
│
│── scripts/
│   ├── dev/
│   └── deploy/
│
│── docker-compose.yml               # (v1.1.0)
│── LICENSE
└── README.md
```

---

### 🗃️ Modèle de données (cible v1.1.0)

**Utilisateurs (`users`)** *(v1.1.0)*
- `id` (UUID)
- `email`, `password_hash`
- `role` (`admin` / `coordinator` / `volunteer`)
- `volunteer_id` (UUID, nullable)
- `is_active` (boolean)
- `created_at`, `updated_at`

**Bénévoles (`volunteers`)**
- `id` (UUID)
- `firstname`, `lastname`
- `email`, `phone`
- `skills`, `availability`
- `notes` *(accès restreint)*
- `status` (`active` / `archived`)
- `archived_at` *(v1.1.0)*, `created_at`, `updated_at`

**Bénéficiaires (`beneficiaries`)**
- `id` (UUID)
- `display_name` *(alias ou prénom affiché sur le terrain — v1.1.0)*
- `firstname`, `lastname` *(optionnels pour respect de l’anonymat)*
- `contact`
- `need_type`
- `notes` *(masqué pour le rôle `volunteer` — v1.1.0)*
- `referent_volunteer_id` (UUID)
- `consent_given_at` *(v1.1.0)*
- `status` (`active` / `archived`)
- `archived_at` *(v1.1.0)*, `created_at`, `updated_at`

**Missions (`missions`)**
- `id` (UUID)
- `title`, `description`
- `location`
- `start_at`, `end_at`
- `status` (`draft` / `planned` / `in_progress` / `done` / `cancelled`) *(statuts étendus v1.1.0)*
- `created_at`, `updated_at`

**Relations**
- `mission_volunteers` (N:N) : `mission_id`, `volunteer_id`, `assigned_at`
- `mission_beneficiaries` (N:N) : `mission_id`, `beneficiary_id`, `attendance_status` (`expected` / `met` / `absent`) *(v1.1.0)*

---

### 🧩 Endpoints API (cible v1.1.0)

**Auth** *(v1.1.0)*
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me`

**Volunteers**
- `GET /api/volunteers` *(filtres v1.1.0 : `?search=&status=&skill=`)*
- `POST /api/volunteers`
- `GET /api/volunteers/:id`
- `PUT /api/volunteers/:id`
- `DELETE /api/volunteers/:id` *(archivage logique)*
- `GET /api/volunteers/:id/missions` *(historique — v1.1.0)*

**Beneficiaries** *(champs filtrés selon le rôle en v1.1.0)*
- `GET /api/beneficiaries` *(filtres v1.1.0 : `?search=&need_type=&status=`)*
- `POST /api/beneficiaries`
- `GET /api/beneficiaries/:id`
- `PUT /api/beneficiaries/:id`
- `DELETE /api/beneficiaries/:id` *(archivage logique)*
- `GET /api/beneficiaries/:id/missions` *(historique — v1.1.0)*

**Missions**
- `GET /api/missions` *(filtres v1.1.0 : `?status=&from=&to=`)*
- `POST /api/missions`
- `GET /api/missions/:id`
- `PUT /api/missions/:id`
- `DELETE /api/missions/:id`
- `GET /api/missions/:id/roadmap` *(vue terrain cloisonnée — v1.1.0)*
- `POST /api/missions/:id/volunteers`
- `DELETE /api/missions/:id/volunteers/:volunteerId` *(v1.1.0)*
- `POST /api/missions/:id/beneficiaries`
- `PATCH /api/missions/:id/beneficiaries/:beneficiaryId` *(pointage terrain — v1.1.0)*
- `DELETE /api/missions/:id/beneficiaries/:beneficiaryId` *(v1.1.0)*

---

### 🚀 Démarrage rapide

#### Prérequis
- Node.js (v18+) et PostgreSQL (v14+) **ou** Docker & Docker Compose *(v1.1.0)*

#### Installation locale (v1.0.0+)
```bash
git clone <url-du-depot>
cd la-rst
cp config/.env.example backend/.env
cd backend && npm install
npm run dev
```

#### Avec Docker *(à partir de la v1.1.0)*
```bash
cp config/.env.example .env
docker compose up -d
```

---

### 🧭 Roadmap 1.0.0 → 1.1.0

#### `1.0.0` — MVP (actuel)
- [x] Modèle de données initial
- [x] API CRUD de base
- [x] Pages HTML simples
- [x] Documentation initiale
- [x] Auth admin simple

#### `1.1.0` — Confort d’usage, terrain & gouvernance *(en cours)*

**Fonctionnel & RGPD :**
- [ ] Système de rôles (`admin` / `coordinator` / `volunteer`)
- [ ] Cloisonnement des données sensibles des bénéficiaires selon le rôle
- [ ] Pseudonymisation (`display_name`) et suivi du consentement RGPD
- [ ] Mode Terrain : feuille de route mobile + vue imprimable (`print.css`)
- [ ] Recherche et filtres multi-critères
- [ ] Historique des missions par bénévole et par bénéficiaire
- [ ] Statuts avancés des missions et désassignation (`DELETE` sur relations N:N)

**Technique :**
- [ ] Migrations SQL versionnées
- [ ] Archivage logique (`soft delete`) généralisé
- [ ] Dockerisation (`Dockerfile` + `docker-compose.yml`)
- [ ] Tests backend (unitaires & intégration)
- [ ] Composants frontend réutilisables

**Documentation :**
- [ ] Gouvernance (rôles, processus de contribution)
- [ ] Politique de données (RGPD & durées de conservation)
- [ ] Guide d’installation clé en main pour les associations

---

### 🤝 Contribution & Licence

La RST est pensée comme un projet communautaire sous **licence MIT**, ouvert, libre et réutilisable.  
Les contributions sont les bienvenues : code, documentation, retours terrain, accessibilité ou idées d’amélioration.

---

### 🏁 État du projet

**Version actuelle : `1.0.0`** — MVP fonctionnel  
**Chantier actif : `1.1.0`** — Sécurisation RGPD, ergonomie terrain et déploiement associatif simplifié.
