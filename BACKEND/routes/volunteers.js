// ============================================================
// La RST — Routes Volunteers
// src/routes/volunteers.js
// ============================================================

import { Router } from "express";

const router = Router();

// GET /volunteers — liste des bénévoles
router.get("/", async (_req, res) => {
  res.json([
    // Exemple statique (à remplacer par DB/service)
    { id: 1, name: "Alice", phone: "0600000000" },
    { id: 2, name: "Bob", phone: "0700000000" }
  ]);
});

// GET /volunteers/:id — un bénévole
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);

  res.json({
    id,
    name: "Exemple",
    phone: "0600000000"
  });
});

// POST /volunteers — créer un bénévole
router.post("/", async (req, res) => {
  const { name, phone } = req.body;

  res.status(201).json({
    id: Date.now(),
    name,
    phone
  });
});

// PUT /volunteers/:id — modifier un bénévole
router.put("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { name, phone } = req.body;

  res.json({
    id,
    name,
    phone
  });
});

// DELETE /volunteers/:id — supprimer un bénévole
router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);

  res.json({
    deleted: true,
    id
  });
});

export default router;
