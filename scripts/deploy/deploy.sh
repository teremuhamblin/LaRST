#!/usr/bin/env bash
# ============================================================
# La RST — Script de déploiement
# deploy.sh
# Déploie l'application en production via Docker Compose
# ============================================================

set -e

echo "=== Déploiement de La RST ==="

if [ ! -f "../../config/.env" ]; then
    echo "[ERREUR] Le fichier ../../config/.env est manquant."
    exit 1
fi

export NODE_ENV=production

echo "Construction et lancement des services..."
docker compose -f docker-compose.yml up -d --build

echo "Déploiement terminé."
echo "Backend disponible sur le port : ${API_PORT}"
