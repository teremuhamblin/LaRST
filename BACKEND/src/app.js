// ============================================================
// La RST — Application Express
// src/app.js
// Version : 1.0.0
// ============================================================

import express from "express";
import cors from "cors";
import config from "../config/config.js";

// Import des routes (exemples)
import volunteersRouter from "./routes/volunteers.js";
import beneficiariesRouter from "./routes/beneficiaries.js";
import missionsRouter from "./routes/missions.js";

const app = express();

// ------------------------------------------------------------
// Middlewares globaux
// ------------------------------------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
if (config.security.cors.enabled) {
  app.use(
    cors({
      origin: config.security.cors.origin,
      credentials: true
    })
  );
}

// ------------------------------------------------------------
// Middleware d’auth simple (v1.0.0)
// ------------------------------------------------------------
app.use((req, res, next) => {
  const token = req.headers["authorization"]?.replace("Bearer ", "");

  if (!token || token !== config.auth.adminToken) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
});

// ------------------------------------------------------------
// Routes API
// ------------------------------------------------------------
app.use(`${config.api.prefix}/volunteers`, volunteersRouter);
app.use(`${config.api.prefix}/beneficiaries`, beneficiariesRouter);
app.use(`${config.api.prefix}/missions`, missionsRouter);

// ------------------------------------------------------------
// Route de test / healthcheck
// ------------------------------------------------------------
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    env: config.app.environment,
    version: config.app.version
  });
});

// ------------------------------------------------------------
// Gestion des erreurs
// ------------------------------------------------------------
app.use((err, req, res, _next) => {
  console.error("Erreur API :", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// ------------------------------------------------------------
// Export uniquement l'app (pas de app.listen ici !)
// ------------------------------------------------------------
export default app;
