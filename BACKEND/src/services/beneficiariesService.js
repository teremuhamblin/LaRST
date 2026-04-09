// ============================================================
// La RST — Beneficiaries Service
// src/services/beneficiariesService.js
// ============================================================

let beneficiaries = [
  { id: 1, name: "Jean", situation: "hébergement" },
  { id: 2, name: "Maria", situation: "alimentaire" }
];

export const findAllBeneficiaries = async () => {
  return beneficiaries;
};

export const findBeneficiaryById = async (id) => {
  return beneficiaries.find((b) => b.id === id) || null;
};

export const createBeneficiary = async (data) => {
  const newBeneficiary = {
    id: Date.now(),
    ...data
  };

  beneficiaries.push(newBeneficiary);
  return newBeneficiary;
};

export const updateBeneficiary = async (id, data) => {
  const index = beneficiaries.findIndex((b) => b.id === id);
  if (index === -1) return null;

  beneficiaries[index] = { ...beneficiaries[index], ...data };
  return beneficiaries[index];
};

export const removeBeneficiary = async (id) => {
  const index = beneficiaries.findIndex((b) => b.id === id);
  if (index === -1) return false;

  beneficiaries.splice(index, 1);
  return true;
};
