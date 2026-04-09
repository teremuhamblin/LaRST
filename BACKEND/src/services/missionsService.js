// ============================================================
// La RST — Missions Service
// src/services/missionsService.js
// ============================================================

let missions = [
  { id: 1, title: "Distribution repas", date: "2026-04-10" },
  { id: 2, title: "Collecte vêtements", date: "2026-04-12" }
];

export const findAllMissions = async () => {
  return missions;
};

export const findMissionById = async (id) => {
  return missions.find((m) => m.id === id) || null;
};

export const createMission = async (data) => {
  const newMission = {
    id: Date.now(),
    ...data
  };

  missions.push(newMission);
  return newMission;
};

export const updateMission = async (id, data) => {
  const index = missions.findIndex((m) => m.id === id);
  if (index === -1) return null;

  missions[index] = { ...missions[index], ...data };
  return missions[index];
};

export const removeMission = async (id) => {
  const index = missions.findIndex((m) => m.id === id);
  if (index === -1) return false;

  missions.splice(index, 1);
  return true;
};
