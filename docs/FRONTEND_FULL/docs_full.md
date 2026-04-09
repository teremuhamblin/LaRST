Documentation complète du dossier FRONTEND, dans un format professionnel, modulaire, maintenable, parfaitement aligné avec la structure, clair, technique, et prêt pour un projet open‑source.

Fournis :

- tous les fichiers de documentation nécessaires  
- leur contenu complet  
- l’arborescence exacte
- une logique cohérente et professionnelle  

Tu obtiens un pack documentaire complet pour ton frontend.

---

🗂️ 1. Arborescence documentaire recommandée

Voici l’organisation optimale pour un frontend moderne :

`
frontend/
│── README.md
│── docs/
│   ├── architecture.md
│   ├── ui-ux-guidelines.md
│   ├── api-usage.md
│   ├── components-guidelines.md
│   ├── state-management.md
│   ├── testing.md
│   ├── environment.md
│   ├── contributing-frontend.md
│   └── roadmap.md
`

---

📘 2. README.md (racine du frontend)
(Déjà fourni précédemment, tu peux garder celui‑ci ou le remplacer par une version plus avancée si tu veux.)

---

📘 3. docs/architecture.md

`markdown

Architecture Frontend — La RST

Ce document décrit l’architecture interne du frontend La RST.

---

🎯 Objectifs

- Architecture claire, modulaire et scalable
- Séparation stricte des responsabilités
- Code maintenable par plusieurs contributeurs
- Intégration propre avec le backend Node.js + PostgreSQL

---

🧱 Structure générale

`
src/
│── api/               # Appels backend
│── components/        # Composants UI réutilisables
│── pages/             # Pages principales
│── store/             # Gestion d’état
│── hooks/             # Hooks personnalisés
│── utils/             # Fonctions utilitaires
│── styles/            # Styles globaux
└── main.jsx           # Point d’entrée
`

---

🔌 Communication Backend

- API REST
- Axios ou Fetch
- Gestion des erreurs centralisée
- Variables d’environnement via import.meta.env

---

🧩 Principes d’architecture

- Atomic Design (optionnel)
- Composants purs
- Stores isolés
- API découplée
- UI stateless autant que possible
`

---

🎨 4. docs/ui-ux-guidelines.md

`markdown

UI / UX Guidelines — La RST

Ce document définit les règles d’interface et d’expérience utilisateur.

---

🎨 Identité visuelle

- Style simple, accessible, lisible
- Couleurs douces et contrastées
- Icônes : Heroicons ou Lucide

---

📱 Responsive Design

- Mobile-first
- Grilles flexibles
- Composants adaptatifs

---

🧭 Navigation

- Barre latérale ou topbar
- Pages principales :
  - Dashboard
  - Bénévoles
  - Bénéficiaires
  - Missions

---

♿ Accessibilité

- Respect WCAG AA
- Labels explicites
- Navigation clavier
- Contrastes vérifiés

---

🧩 Composants UI

- Boutons cohérents
- Formulaires uniformisés
- Messages d’erreur standardisés
`

---

🔌 5. docs/api-usage.md

`markdown

API Usage — Frontend La RST

Ce document décrit comment le frontend communique avec le backend.

---

🌍 URL de base

`
VITEAPIURL=http://localhost:3000
`

---

📡 Exemple d’appel API

`js
import axios from "axios";

export const getVolunteers = async () => {
  const res = await axios.get(${import.meta.env.VITEAPIURL}/volunteers);
  return res.data;
};
`

---

📁 Organisation des fichiers API

`
src/api/
│── volunteers.js
│── beneficiaries.js
└── missions.js
`

---

🔐 Gestion des erreurs

- Intercepteurs Axios
- Notifications utilisateur
- Logs console en mode dev
`

---

🧩 6. docs/components-guidelines.md

`markdown

Guidelines des Composants — La RST

---

🧱 Structure d’un composant

`
ComponentName.jsx
ComponentName.css (optionnel)
`

---

📌 Règles

- Composants courts et lisibles
- Props typées (PropTypes ou TS si migration)
- Pas de logique métier dans les composants UI
- Préférer les hooks personnalisés

---

🧩 Types de composants

- UI (boutons, inputs…)
- Layout (header, sidebar…)
- Formulaires
- Pages
`

---

🧠 7. docs/state-management.md

`markdown

Gestion d’État — La RST

---

🎯 Objectifs

- Stores simples
- Actions claires
- Pas de duplication de données

---

🧰 Outils possibles

- Zustand (recommandé)
- Redux Toolkit (optionnel)

---

📁 Structure

`
src/store/
│── volunteersStore.js
│── beneficiariesStore.js
└── missionsStore.js
`

---

🔄 Flux de données

1. Page → Store
2. Store → API
3. API → Store
4. Store → UI
`

---

🧪 8. docs/testing.md

`markdown

Tests Frontend — La RST

---

🧪 Types de tests

- Unitaires : Vitest
- E2E : Playwright

---

📁 Structure

`
tests/
│── unit/
└── e2e/
`

---

▶️ Lancer les tests

`
npm run test
npm run test:e2e
`
`

---

🔧 9. docs/environment.md

`markdown

Variables d’Environnement — Frontend La RST

---

📄 Fichier .env

`
VITEAPIURL=http://localhost:3000
`

---

🔐 Sécurité

- Ne jamais committer .env
- Utiliser .env.example
`

---

🤝 10. docs/contributing-frontend.md

`markdown

Guide de Contribution — Frontend La RST

---

🧭 Workflow Git

1. Créer une branche :
`
git checkout -b feature/nom-fonctionnalite
`

2. Développer
3. Lancer les tests
4. Créer une Pull Request propre

---

🧹 Qualité

- ESLint obligatoire
- Prettier obligatoire
- Commits clairs (Conventional Commits recommandé)
`

---

🧭 11. docs/roadmap.md

`markdown

Roadmap Frontend — La RST

---

🚀 Fonctionnalités prévues

- Dashboard opérationnel
- Authentification + rôles
- PWA
- Mode offline
- Cartographie
- Gestion avancée des missions
- Interface mobile dédiée
`

---

🎁 Tu as maintenant un pack documentaire complet pour ton frontend.
