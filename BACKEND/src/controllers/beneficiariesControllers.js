// ============================================================
// La RST — Beneficiaries Controller
// src/controllers/beneficiariesController.js
// ============================================================

export const getAllBeneficiaries = async (_req, res, next) => {
  try {
    const beneficiaries = [
      { id: 1, name: "Jean", situation: "hébergement" },
      { id: 2, name: "Maria", situation: "alimentaire" }
    ];

    res.json(beneficiaries);
  } catch (err) {
    next(err);
  }
};

export const getBeneficiaryById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    res.json({
      id,
      name: "Exemple",
      situation: "alimentaire"
    });
  } catch (err) {
    next(err);
  }
};

export const createBeneficiary = async (req, res, next) => {
  try {
    const { name, situation } = req.body;

    res.status(201).json({
      id: Date.now(),
      name,
      situation
    });
  } catch (err) {
    next(err);
  }
};

export const updateBeneficiary = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { name, situation } = req.body;

    res.json({
      id,
      name,
      situation
    });
  } catch (err) {
    next(err);
  }
};

export const deleteBeneficiary = async (req, res, next) => {
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
