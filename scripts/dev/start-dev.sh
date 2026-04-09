#!/usr/bin/env bash
# ============================================================
# La RST — Script de développement
# start-dev.sh
# Démarre le backend en mode développement
# ============================================================

set -e

echo "=== La RST — Mode développement ==="

# Vérification du fichier .env
if [ ! -f "./config/.env" ]; then
    echo "[ERREUR] Le fichier ./config/.env est manquant."
    echo "Créez-le à partir de ./config/.env.example"
    exit 1
fi

export NODE_ENV=development

echo "Chargement de la configuration..."
API_PORT=$(grep API_PORT ./config/.env | cut -d '=' -f2)

echo "Backend démarré sur le port : $API_PORT"
echo "Logs : mode développement (debug)"

# Lancement du backend
npm run dev
