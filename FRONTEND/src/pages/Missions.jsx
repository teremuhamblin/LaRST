import React, { useEffect, useState } from "react";
import { getMissions } from "../api/apiClient.js";

const Missions = () => {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const data = await getMissions();
        setMissions(data);
      } catch (err) {
        setError("Impossible de charger les missions.");
      } finally {
        setLoading(false);
      }
    };

    fetchMissions();
  }, []);

  if (loading) return <p>Chargement des missions…</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h2>Missions</h2>
      {missions.length === 0 ? (
        <p>Aucune mission trouvée.</p>
      ) : (
        <ul>
          {missions.map((m) => (
            <li key={m.id || m.uuid}>
              {m.title || m.name || "Mission sans titre"}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Missions;
