`
config/README.md
`

---

# 📘 README.md — Dossier config/

`markdown

## Dossier config/ — LaRST

> Ce dossier contient l’ensemble des fichiers de configuration utilisés par La RST.
Il centralise les paramètres de l’application, les variables d’environnement,
les configurations par environnement et le système de chargement dynamique.

> La configuration est conçue pour être :
- simple
- modulaire
- sécurisée
- adaptée aux environnements development / production

---

### 📁 Contenu du dossier

```text
config/
│── .env.example
│── default.json
│── development.json
│── production.json
└── config.js
```

---

### 🔐 .env.example

- Ce fichier contient les variables d’environnement nécessaires au fonctionnement
de La RST.  
- Il sert de modèle pour créer un fichier .env local (non versionné).

Exemples :
- API_PORT
- ADMIN_TOKEN
- DBHOST, DBUSER, DB_PASSWORD
- CORS_ORIGIN

> Les valeurs sensibles ne doivent jamais être commitées.

---

### ⚙️ default.json

- Configuration par défaut, commune à tous les environnements.

Elle définit :
- le nom du projet
- le port par défaut
- la structure de la base de données
- les paramètres CORS
- les options API (rate limit, préfixe)

> Toutes les valeurs sensibles sont remplacées par des placeholders ${ENV_VAR}.

---

### 🧪 development.json

> Configuration spécifique à l’environnement de développement.

Elle surcharge default.json avec :
- logs détaillés (debug)
- CORS permissif
- rate‑limit désactivé

Objectif : faciliter le développement local.

---

### 🚀 production.json

> Configuration utilisée en production.

Elle surcharge default.json avec :
- logs réduits (info)
- CORS strict
- rate‑limit activé

Objectif : sécurité et stabilité.

---

### 🧩 config.js — Loader de configuration

Ce fichier charge et fusionne automatiquement :

1. default.json
2. le fichier correspondant à NODE_ENV (development.json ou production.json)
3. les variables d’environnement du fichier .env

Il gère également :
- la fusion profonde des objets JSON
- la substitution automatique des variables ${ENV_VAR}

Exemple d’utilisation dans le backend :

```js
import config from "../config/config.js";

console.log("API running on port:", config.app.port);
console.log("Database host:", config.database.host);
```

---

### 🧭 Logique de chargement

1. NODE_ENV détermine l’environnement :
   - development
   - production

2. default.json est chargé en premier.

3. Le fichier d’environnement surcharge uniquement les valeurs nécessaires.

4. Les variables ${ENV_VAR} sont remplacées par les valeurs du .env.

5. Le résultat final est exporté sous forme d’objet JavaScript.

---

### 🛡️ Bonnes pratiques

- Ne jamais commiter un fichier .env
- Toujours utiliser .env.example comme référence
- Ne jamais mettre de secrets dans les fichiers JSON
- Utiliser config.js comme unique source de vérité dans le backend
- Garder les fichiers JSON simples et lisibles

---

### 📌 Résumé

> Le dossier config/ fournit une architecture de configuration robuste,
professionnelle et adaptée à un projet open‑source comme La RST.

Il permet :
- une gestion propre des environnements
- une séparation claire entre valeurs par défaut et valeurs sensibles
- une configuration centralisée et maintenable
- une sécurité renforcée

`

---

# Variables necessaires 
- pour la version 1.0.0

Explications rapides

### 🔐 ADMIN_TOKEN
Pour la v1.0.0, l’auth est simple : 
- un token admin transmis dans les headers.  
- En 1.1.0, on passera à un système de rôles + JWT.

### 🗄️ DB_*
- Variables standard PostgreSQL.  
- Elles permettent de configurer facilement un environnement local ou Docker.

### 🌐 CORS_ORIGIN
- Permet au frontend (HTML/JS) d’appeler l’API.

---
