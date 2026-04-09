> Voici la documentation technique complète adaptée au dossier backend de LaRST.  
Elle est pensée comme un document de référence interne, lisible par des développeurs, contributeurs open‑source et administrateurs système.

Tu peux la placer dans :

`
docs/backend/technical-documentation.rst
`

ou, si tu veux centraliser toute la doc technique :

`
backend/TECHNICAL_DOCUMENTATION.rst
`

---

📘 Documentation Technique — Backend La RST
`rst
Backend La RST — Documentation Technique
========================================

Cette documentation décrit l’architecture technique, les composants internes,
les dépendances, les conventions et les mécanismes d’exécution du backend
du projet La RST.

Elle constitue la référence officielle pour les développeurs et contributeurs.

Sommaire
--------

1. Architecture générale
2. Structure du projet
3. Stack technique
4. Configuration et variables d’environnement
5. API Express
6. Contrôleurs (Controllers)
7. Services (Business Logic)
8. Modèles PostgreSQL (DAL)
9. Base de données PostgreSQL
10. Scripts (Perl, Ruby, Shell)
11. Tests (Jest + Supertest)
12. Bonnes pratiques
13. Commandes utiles


1. Architecture générale
------------------------

Le backend suit une architecture MVC modulaire :

- Routes : définition des endpoints HTTP
- Controllers : validation, orchestration, réponses HTTP
- Services : logique métier
- Models : accès à la base PostgreSQL
- Config : configuration centralisée
- Database : schémas SQL, migrations, initialisation
- Tests : tests unitaires et d’intégration

L’objectif est de garantir :

- une séparation claire des responsabilités
- une testabilité maximale
- une maintenance simple
- une évolutivité naturelle


2. Structure du projet
----------------------

::

    backend/
    ├── src/
    │   ├── app.js
    │   ├── config/
    │   │   └── db.js
    │   ├── controllers/
    │   ├── routes/
    │   ├── services/
    │   └── models/
    │
    ├── database/
    │   ├── schema.sql
    │   ├── migrations/
    │   │   ├── sql/
    │   │   └── migration.pl
    │   └── init/
    │       └── init-db.rb
    │
    ├── tests/
    └── package.json


3. Stack technique
------------------

- Node.js (LTS)
- Express.js : framework HTTP minimaliste
- PostgreSQL : base de données relationnelle
- pg : client PostgreSQL pour Node.js
- Jest : framework de tests
- Supertest : tests d’intégration HTTP
- Perl : exécution des migrations SQL
- Ruby : initialisation automatique de la base
- dotenv : gestion des variables d’environnement


4. Configuration et variables d’environnement
---------------------------------------------

Les fichiers de configuration se trouvent dans config/.

Variables essentielles :

::

    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=larst
    DB_PASSWORD=secret
    DBNAME=larstdb

    API_PORT=3000
    ADMINTOKEN=tokenadmin

Chargement via config.js et dotenv.


5. API Express
--------------

Le fichier principal est src/app.js.

Il contient :

- middlewares globaux
- CORS
- authentification simple par token
- montage des routes
- gestion des erreurs
- endpoint /health

Aucun app.listen() n’est présent pour permettre les tests.


6. Contrôleurs (Controllers)
----------------------------

Les contrôleurs orchestrent :

- la validation des données
- l’appel aux services
- la gestion des erreurs
- la réponse HTTP

Exemples :

- volunteersController.js
- beneficiariesController.js
- missionsController.js


7. Services (Business Logic)
----------------------------

Les services contiennent la logique métier :

- transformations
- règles métier
- appels aux modèles
- validations avancées

Ils ne connaissent pas Express.


8. Modèles PostgreSQL (DAL)
---------------------------

Les modèles JS utilisent db.query() pour interagir avec PostgreSQL.

Exemples :

- volunteersModel.js
- beneficiariesModel.js
- missionsModel.js

Chaque modèle expose :

- findAll()
- findById()
- create()
- update()
- remove()


9. Base de données PostgreSQL
-----------------------------

Le schéma complet se trouve dans :

::

    backend/database/schema.sql

Les tables principales :

- volunteers
- beneficiaries
- missions

Les scripts SQL individuels sont dans database/migrations/sql/.


10. Scripts (Perl, Ruby, Shell)
-------------------------------

Perl — migration.pl

- exécute toutes les migrations SQL dans l’ordre
- utilise les variables du .env

Ruby — init-db.rb

- crée la base si nécessaire
- applique schema.sql

Shell (scripts/dev et deploy)

- développement local
- déploiement Docker
- backup / restore


11. Tests (Jest + Supertest)
----------------------------

Organisation :

::

    tests/
    ├── api/
    ├── unit/
    ├── mocks/
    └── setupTests.js

Types de tests :

- tests unitaires (services, utils)
- tests d’intégration (API Express)
- mocks DB pour isoler les tests


12. Bonnes pratiques
--------------------

- ne jamais mettre de secrets dans le code
- utiliser .env pour toutes les variables sensibles
- séparer strictement routes / contrôleurs / services / modèles
- écrire des tests pour chaque module
- documenter chaque script
- respecter les conventions de nommage
- utiliser des migrations versionnées


13. Commandes utiles
--------------------

Installer les dépendances :

.. code-block:: bash

   npm install

Lancer le backend :

.. code-block:: bash

   npm run dev

Lancer les tests :

.. code-block:: bash

   npm test

Initialiser la base :

.. code-block:: bash

   ruby backend/database/init/init-db.rb

Appliquer les migrations :

.. code-block:: bash

   perl backend/database/migrations/migration.pl

`

---

🎯 Résultat

Tu as maintenant une documentation technique complète, claire, professionnelle et parfaitement alignée avec l’architecture de La RST.

Elle couvre :

- l’architecture
- la structure du backend
- la stack technique
- la configuration
- les contrôleurs, services, modèles
- PostgreSQL
- les scripts Perl & Ruby
- les tests
- les bonnes pratiques

---
