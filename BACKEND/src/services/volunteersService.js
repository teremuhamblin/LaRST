// ============================================================
// La RST — Volunteers Service
// src/services/volunteersService.js
// ============================================================

// Version mock (à remplacer par DB plus tard)
let volunteers = [
  { id: 1, name: "Alice", phone: "0600000000" },
  { id: 2, name: "Bob", phone: "0700000000" }
];

export const findAllVolunteers = async () => {
  return volunteers;
};

export const findVolunteerById = async (id) => {
  return volunteers.find((v) => v.id === id) || null;
};

export const createVolunteer = async (data) => {
  const newVolunteer = {
    id: Date.now(),
    ...data
  };

  volunteers.push(newVolunteer);
  return newVolunteer;
};

export const updateVolunteer = async (id, data) => {
  const index = volunteers.findIndex((v) => v.id === id);
  if (index === -1) return null;

  volunteers[index] = { ...volunteers[index], ...data };
  return volunteers[index];
};

export const removeVolunteer = async (id) => {
  const index = volunteers.findIndex((v) => v.id === id);
  if (index === -1) return false;

  volunteers.splice(index, 1);
  return true;
};
