import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000"
});

// Exemple d’intercepteur simple
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error);
    throw error;
  }
);

export const getVolunteers = async () => {
  const res = await api.get("/volunteers");
  return res.data;
};

export const getBeneficiaries = async () => {
  const res = await api.get("/beneficiaries");
  return res.data;
};

export const getMissions = async () => {
  const res = await api.get("/missions");
  return res.data;
};

export default api;
