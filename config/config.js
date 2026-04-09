/**
 * Loader de configuration pour La RST
 * Version : 1.0.0
 */

import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config(); // Charge .env

// Détermine l'environnement
const ENV = process.env.NODE_ENV || "development";

// Charge un fichier JSON
function loadJSON(file) {
  const filePath = path.join(process.cwd(), "config", file);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

// Charge les fichiers de config
const defaultConfig = loadJSON("default.json");
const envConfig = loadJSON(`${ENV}.json`);

// Fusion profonde simple
function merge(a, b) {
  const result = { ...a };
  for (const key in b) {
    if (b[key] && typeof b[key] === "object" && !Array.isArray(b[key])) {
      result[key] = merge(result[key] || {}, b[key]);
    } else {
      result[key] = b[key];
    }
  }
  return result;
}

// Fusionne default + env
let config = merge(defaultConfig, envConfig);

// Remplace les variables ${ENV_VAR}
function resolveEnvVars(obj) {
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "string" && value.startsWith("${") && value.endsWith("}")) {
      const envVar = value.slice(2, -1);
      obj[key] = process.env[envVar] || null;
    } else if (typeof value === "object" && value !== null) {
      resolveEnvVars(value);
    }
  }
}

resolveEnvVars(config);

export default config;
