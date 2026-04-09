// ============================================================
// La RST — Routes Beneficiaries
// src/routes/beneficiaries.js
// ============================================================

import { Router } from "express";

const router = Router();

// GET /beneficiaries — liste des bénéficiaires
router.get("/", async (_req, res) => {
  res.json([
    { id: 1, name: "Jean", situation: "hébergement" },
    { id: 2, name: "Maria", situation: "alimentaire" }
  ]);
});

// GET /beneficiaries/:id
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);

  res.json({
    id,
    name: "Exemple",
    situation: "alimentaire"
  });
});

// POST /beneficiaries
router.post("/", async (req, res) => {
  const { name, situation } = req.body;

  res.status(201).json({
    id: Date.now(),
    name,
    situation
  });
});

// PUT /beneficiaries/:id
router.put("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { name, situation } = req.body;

  res.json({
    id,
    name,
    situation
  });
});

// DELETE /beneficiaries/:id
router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);

  res.json({
    deleted: true,
    id
  });
});

export default router;
