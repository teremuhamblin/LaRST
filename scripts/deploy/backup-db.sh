#!/usr/bin/env bash
# ============================================================
# La RST — Backup DB
# backup-db.sh
# Sauvegarde la base PostgreSQL en production
# ============================================================

set -e

DATE=$(date +"%Y-%m-%d_%H-%M")
BACKUP_FILE="backup_larst_${DATE}.sql"

echo "=== Sauvegarde de la base La RST ==="

source ../../config/.env

docker exec larst_postgres pg_dump -U "$DB_USER" "$DB_NAME" > "$BACKUP_FILE"

echo "Sauvegarde créée : $BACKUP_FILE"
