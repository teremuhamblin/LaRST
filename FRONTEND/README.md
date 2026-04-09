README.md complet adapté au FRONTEND de La RST.  
Il suit une logique moderne, scalable, open‑source friendly, avec une documentation claire pour contributeurs, développeurs et intégrateurs.

Tu peux le placer dans :

`
frontend/README.md
`

---

📘 README.md — Frontend La RST

`markdown

La RST — Frontend
Interface utilisateur officielle du projet La Roulotte Solidaire Toulouse (La RST).  
Ce frontend fournit une application moderne, accessible et maintenable permettant la gestion :

- des bénévoles  
- des bénéficiaires  
- des missions  
- des opérations quotidiennes de terrain  

Il est conçu pour être simple à utiliser, rapide, responsive, et entièrement compatible avec le backend Node.js + PostgreSQL.

---

🚀 Stack Technique

Framework principal
- React 18+
- Vite (build ultra rapide)

Langage
- JavaScript ES2022+

UI / UX
- TailwindCSS (ou autre framework si modifié)
- Headless UI / Radix UI (optionnel)
- Icons : Heroicons / Lucide

Gestion d’état
- Zustand ou Redux Toolkit (selon ton choix actuel)

API
- Appels REST vers le backend La RST :
  - /api/volunteers
  - /api/beneficiaries
  - /api/missions

Qualité & Outils
- ESLint + Prettier
- Husky (pré‑commit)
- Vitest (tests unitaires)
- Playwright (tests end‑to‑end)

---

📁 Arborescence du projet

`
frontend/
│── public/
│── src/
│   ├── api/
│   │   ├── volunteers.js
│   │   ├── beneficiaries.js
│   │   └── missions.js
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   └── forms/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Volunteers.jsx
│   │   ├── Beneficiaries.jsx
│   │   └── Missions.jsx
│   ├── store/
│   ├── hooks/
│   ├── utils/
│   ├── styles/
│   └── main.jsx
│
├── .env.example
├── package.json
├── vite.config.js
└── README.md
`

---

⚙️ Installation & Développement

1. Cloner le projet

`bash
git clone https://github.com/La-RST/frontend.git
cd frontend
`

2. Installer les dépendances

`bash
npm install
`

3. Configurer les variables d’environnement

Créer un fichier .env :

`
VITEAPIURL=http://localhost:3000
`

4. Lancer le serveur de développement

`bash
npm run dev
`

L’application sera disponible sur :

`
http://localhost:5173
`

---

🧪 Tests

Tests unitaires

`bash
npm run test
`

Tests end‑to‑end

`bash
npm run test:e2e
`

---

🧱 Build & Production

Générer le build optimisé

`bash
npm run build
`

Prévisualiser le build

`bash
npm run preview
`

---

🔌 Intégration avec le Backend

Le frontend communique avec le backend via des endpoints REST.

Exemple d’appel API :

`js
import axios from "axios";

export const getVolunteers = async () => {
  const res = await axios.get(${import.meta.env.VITEAPIURL}/volunteers);
  return res.data;
};
`

---

🛡️ Qualité, Sécurité & Conventions

- Code formaté automatiquement via Prettier
- Analyse statique via ESLint
- Hooks Git via Husky
- Architecture modulaire et évolutive
- Séparation stricte :
  - UI
  - Logique
  - API
  - Store

---

🤝 Contribution

Les contributions sont les bienvenues.

Workflow Git recommandé

1. Créer une branche :
   `bash
   git checkout -b feature/nom-fonctionnalite
   `
2. Développer la fonctionnalité
3. Lancer les tests
4. Créer une Pull Request propre et documentée

---

📜 Licence

Projet sous licence MIT (modifiable selon ton choix).

---

🧭 Roadmap Frontend

- [ ] Dashboard opérationnel
- [ ] Authentification + rôles
- [ ] Mode offline (PWA)
- [ ] Cartographie (Leaflet / Mapbox)
- [ ] Gestion avancée des missions
- [ ] Interface mobile dédiée

---

📞 Contact

Projet La Roulotte Solidaire Toulouse  
Développement : Équipe LaRST  
`

---
