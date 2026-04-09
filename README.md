
README.md >> markdown

# LaRST
- Plateforme de gestion des bénévoles et bénéficiaires
- Version 1.0.0
- Initialisation du projet

> La RST est une plateforme `web open‑source` destinée aux structures solidaires, et notamment à ```La Roulotte Solidaire Toulouse```. 
Elle permet de gérer efficacement les bénévoles, les bénéficiaires et les missions, avec une approche simple, éthique et accessible.

---

### 🎯 Objectifs du projet

> La version 1.0.0 constitue un MVP fonctionnel, utilisable en conditions réelles pour :

👥 Gestion des bénévoles
- Création, modification et archivage  
- Coordonnées, compétences, disponibilités  
- Notes internes  

🤝 Gestion des bénéficiaires
- Fiches individuelles  
- Coordonnées, type d’accompagnement  
- Référent bénévole  
- Notes internes  

📅 Gestion des missions
- Création de missions (titre, description, lieu, date/heure)  
- Assignation de bénévoles  
- Association de bénéficiaires  

Cette version pose les fondations d’une plateforme solide, extensible et adaptée aux besoins des associations locales.

---

### 🧱 Architecture du projet

Le projet est organisé en trois blocs principaux :

> Backend (API REST)
- Node.js + Express  
- PostgreSQL  
- Architecture modulaire par domaines (volunteers, beneficiaries, missions)  
- Endpoints CRUD simples et robustes  

> Frontend (Web minimaliste)
- HTML / CSS / JavaScript léger  
- Pages dédiées : bénévoles, bénéficiaires, missions  
- Consommation directe de l’API REST  

> Documentation
- Architecture  
- Modèle de données  
- Gouvernance  
- Politique de données  

---

### 🗂️ Arborescence du projet

```text
la-rst/
│── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── modules/
│   │   │   ├── volunteers/
│   │   │   ├── beneficiaries/
│   │   │   └── missions/
│   │   └── middleware/
│   ├── tests/
│   └── package.json
│
│── frontend/
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── volunteers.html
│       ├── beneficiaries.html
│       └── missions.html
│
│── docs/
│   ├── README.md
│   ├── architecture.md
│   ├── data-model.md
│   └── governance.md
│
│── config/
│   └── .env.example
│
│── scripts/
│   ├── dev/
│   └── deploy/
│
│── tests/
│── LICENSE
└── README.md
```
`

---

### 🗃️ Modèle de données (v1.0.0)

> Bénévoles (volunteers)
- id (UUID)  
- firstname, lastname  
- email, phone  
- skills, availability  
- notes  
- status (active / archived)  
- timestamps  

> Bénéficiaires (beneficiaries)
- id (UUID)  
- firstname, lastname  
- contact  
- need_type  
- notes  
- referentvolunteerid  
- status  
- timestamps  

> Missions (missions)
- id (UUID)  
- title, description  
- location  
- startat, endat  
- status (planned / done / cancelled)  
- timestamps  

>Relations
- mission_volunteers (N:N)  
- mission_beneficiaries (N:N)  

---

### 🧩 Endpoints API (v1.0.0)

> Volunteers
- GET /api/volunteers  
- POST /api/volunteers  
- GET /api/volunteers/:id  
- PUT /api/volunteers/:id  
- DELETE /api/volunteers/:id  

> Beneficiaries
- GET /api/beneficiaries  
- POST /api/beneficiaries  
- GET /api/beneficiaries/:id  
- PUT /api/beneficiaries/:id  
- DELETE /api/beneficiaries/:id  

> Missions
- GET /api/missions  
- POST /api/missions  
- GET /api/missions/:id  
- PUT /api/missions/:id  
- DELETE /api/missions/:id  
- POST /api/missions/:id/volunteers  
- POST /api/missions/:id/beneficiaries  

---

### 🧭 Roadmap 1.0.0 → 1.1.0

> 1.0.0 — MVP (actuel)
- [x] Modèle de données  
- [x] API CRUD  
- [x] Pages HTML simples  
- [x] Documentation initiale  
- [ ] Auth admin simple  

---

> 1.1.0 — Confort d’usage & gouvernance

Fonctionnel :
- [ ] Système de rôles (admin / coordinateur / bénévole)  
- [ ] Recherche et filtres  
- [ ] Historique des missions par personne  
- [ ] Statuts avancés des missions  

Technique :
- [ ] Dockerisation  
- [ ] Tests backend  
- [ ] Composants frontend réutilisables  

Documentation :
- [ ] Gouvernance (rôles, processus)  
- [ ] Politique de données (RGPD)  
- [ ] Guide d’installation pour associations  

---

### 📜 Licence
Projet distribué sous licence MIT, ouvert, libre et réutilisable.

---

### 🤝 Contribution
La RST est pensée comme un projet communautaire.  
Les contributions sont les bienvenues : documentation, code, retours terrain, idées.

---

### 🏁 État du projet
Version actuelle : 1.0.0 — MVP fonctionnel  
La 1.1.0 se concentrera sur l’expérience utilisateur, la gouvernance et la robustesse.

`

---
