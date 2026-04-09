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
