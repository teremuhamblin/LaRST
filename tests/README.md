`
tests/README.rst
`

---

`rst
Tests — La RST
==============`

Ce dossier contient l’ensemble des tests automatisés du projet La RST.
Ils permettent de garantir la stabilité, la qualité et la cohérence du code.

Dépendances nécessaires
-----------------------

Les tests utilisent les outils suivants :

- Jest : framework de tests JavaScript
- Supertest : tests d’intégration pour l’API REST
- Cross-env : gestion des variables d’environnement pour les tests
- Dotenv : chargement du fichier .env dédié aux tests
- pg : client PostgreSQL utilisé pour les tests de base de données
- nodemon (optionnel) : relance automatique en mode développement

Installation
------------

Les dépendances sont installées automatiquement via :

`
npm install
`

Organisation
------------

Les tests sont organisés par modules :

- volunteers/
- beneficiaries/
- missions/
- utils/

Chaque test doit être isolé, reproductible et ne jamais dépendre de données réelles.

Version
-------

La RST — 1.0.0
`

---
