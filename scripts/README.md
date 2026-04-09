`
scripts/README.md
`

---

📘 README.md — Dossier scripts/
> Scripts — LaRST

- Ce dossier contient l’ensemble des scripts utilisés pour le développement,
l’automatisation et le déploiement de La RST. - Il est organisé en deux sous‑dossiers : dev/ et deploy/.

> L’objectif est de fournir des outils simples, reproductibles et accessibles
pour faciliter le travail des développeurs et des administrateurs techniques.

---

📁 Structure

```text
scripts/
│── dev/
│   └── start-dev.sh
│
└── deploy/
    └── docker-compose.yml
```

---

🧪 Dossier dev/

Ce dossier contient les scripts destinés au développement local.

start-dev.sh
Script permettant de lancer rapidement l’environnement de développement :

- démarre le backend en mode développement
- recharge automatique (selon configuration)
- vérifie la présence du fichier .env
- affiche les informations essentielles (port API, base de données, etc.)

Ce script est conçu pour être simple et utilisable même par des contributeurs non experts.

---

🚀 Dossier deploy/

Ce dossier contient les outils nécessaires au déploiement de La RST.

docker-compose.yml
Fichier permettant de déployer :

- la base de données PostgreSQL
- le backend Node.js
- les volumes persistants
- les variables d’environnement

Il fournit une base solide pour un déploiement :

- en production
- en pré‑production
- sur un serveur associatif
- ou sur un hébergement mutualisé compatible Docker

---

🎯 Objectifs du dossier scripts/

- automatiser les tâches répétitives
- simplifier l’installation pour les bénévoles techniques
- garantir une reproductibilité totale
- réduire les erreurs humaines
- préparer l’arrivée de scripts supplémentaires (migrations, backups, maintenance)

---

🛠️ Bonnes pratiques

- ne jamais inclure de secrets dans les scripts
- utiliser les variables du fichier .env
- documenter chaque script avec un en‑tête clair
- tester les scripts sur un environnement isolé avant publication
- conserver une compatibilité Linux / macOS

---

📌 Évolutions prévues

- scripts de migration de base de données
- scripts de backup / restore PostgreSQL
- scripts de maintenance (clean logs, rotation)
- scripts de déploiement avancé (CI/CD)
- scripts d’installation automatisée pour associations

---

📜 Licence

Les scripts sont distribués sous licence MIT, comme le reste du projet.

`

---
