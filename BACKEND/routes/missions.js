// ============================================================
// La RST — Routes Missions
// src/routes/missions.js
// ============================================================

import { Router } from "express";

const router = Router();

// GET /missions — liste des missions
router.get("/", async (_req, res) => {
  res.json([
    { id: 1, title: "Distribution repas", date: "2026-04-10" },
    { id: 2, title: "Collecte vêtements", date: "2026-04-12" }
  ]);
});

// GET /missions/:id
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);

  res.json({
    id,
    title: "Exemple",
    date: "2026-04-10"
  });
});

// POST /missions
router.post("/", async (req, res) => {
  const { title, date } = req.body;

  res.status(201).json({
    id: Date.now(),
    title,
    date
  });
});

// PUT /missions/:id
router.put("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { title, date } = req.body;

  res.json({
    id,
    title,
    date
  });
});

// DELETE /missions/:id
router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);

  res.json({
    deleted: true,
    id
  });
});

export default router;
