// ============================================================
// La RST — Volunteers Controller
// src/controllers/volunteersController.js
// ============================================================

export const getAllVolunteers = async (_req, res, next) => {
  try {
    const volunteers = [
      { id: 1, name: "Alice", phone: "0600000000" },
      { id: 2, name: "Bob", phone: "0700000000" }
    ];

    res.json(volunteers);
  } catch (err) {
    next(err);
  }
};

export const getVolunteerById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    res.json({
      id,
      name: "Exemple",
      phone: "0600000000"
    });
  } catch (err) {
    next(err);
  }
};

export const createVolunteer = async (req, res, next) => {
  try {
    const { name, phone } = req.body;

    res.status(201).json({
      id: Date.now(),
      name,
      phone
    });
  } catch (err) {
    next(err);
  }
};

export const updateVolunteer = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { name, phone } = req.body;

    res.json({
      id,
      name,
      phone
    });
  } catch (err) {
    next(err);
  }
};

export const deleteVolunteer = async (req, res, next) => {
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
