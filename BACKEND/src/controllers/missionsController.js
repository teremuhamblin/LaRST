// ============================================================
// La RST — Missions Controller
// src/controllers/missionsController.js
// ============================================================

export const getAllMissions = async (_req, res, next) => {
  try {
    const missions = [
      { id: 1, title: "Distribution repas", date: "2026-04-10" },
      { id: 2, title: "Collecte vêtements", date: "2026-04-12" }
    ];

    res.json(missions);
  } catch (err) {
    next(err);
  }
};

export const getMissionById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    res.json({
      id,
      title: "Exemple",
      date: "2026-04-10"
    });
  } catch (err) {
    next(err);
  }
};

export const createMission = async (req, res, next) => {
  try {
    const { title, date } = req.body;

    res.status(201).json({
      id: Date.now(),
      title,
      date
    });
  } catch (err) {
    next(err);
  }
};

export const updateMission = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { title, date } = req.body;

    res.json({
      id,
      title,
      date
    });
  } catch (err) {
    next(err);
  }
};

export const deleteMission = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    res.json({
      deleted: true,
      id
    });
  } catch (err) {
    next(err);
  }
};
