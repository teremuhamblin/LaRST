#!/usr/bin/env bash
# ============================================================
# La RST — Restore DB
# restore-db.sh
# Restaure une sauvegarde PostgreSQL
# ============================================================

set -e

if [ -z "$1" ]; then
    echo "Usage : ./restore-db.sh <fichier.sql>"
    exit 1
fi

BACKUP_FILE="$1"

echo "=== Restauration de la base La RST ==="

source ../../config/.env

cat "$BACKUP_FILE" | docker exec -i larst_postgres psql -U "$DB_USER" "$DB_NAME"

echo "Restauration terminée."
