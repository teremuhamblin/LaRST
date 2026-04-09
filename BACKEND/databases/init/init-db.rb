#!/usr/bin/env ruby
# ============================================================
# La RST — Script d'initialisation PostgreSQL
# init-db.rb
# Crée la base + applique le schéma complet
# ============================================================

require 'pg'

# Chargement du .env
env_path = File.expand_path("../../config/.env", __dir__)
File.readlines(env_path).each do |line|
  next if line.start_with?("#") || !line.include?("=")
  key, value = line.strip.split("=", 2)
  ENV[key] = value
end

db_host = ENV["DB_HOST"]
db_user = ENV["DB_USER"]
db_pass = ENV["DB_PASSWORD"]
db_name = ENV["DB_NAME"]

puts "=== Initialisation de la base La RST ==="

# Connexion au serveur PostgreSQL (sans DB)
conn = PG.connect(host: db_host, user: db_user, password: db_pass, dbname: "postgres")

# Création de la base si elle n'existe pas
res = conn.exec("SELECT 1 FROM pg_database WHERE datname='#{db_name}'")
if res.ntuples == 0
  puts "Création de la base #{db_name}..."
  conn.exec("CREATE DATABASE #{db_name}")
else
  puts "La base #{db_name} existe déjà."
end

conn.close

# Application du schéma
schema_path = File.expand_path("../schema.sql", __dir__)
puts "Application du schéma : #{schema_path}"

cmd = "psql -h #{db_host} -U #{db_user} -d #{db_name} -f #{schema_path}"
system(cmd) or abort("Erreur lors de l'application du schéma")

puts "Base initialisée avec succès."
