import React, { useEffect, useState } from "react";
import { getVolunteers } from "../api/apiClient.js";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const data = await getVolunteers();
        setVolunteers(data);
      } catch (err) {
        setError("Impossible de charger les bénévoles.");
      } finally {
        setLoading(false);
      }
    };

    fetchVolunteers();
  }, []);

  if (loading) return <p>Chargement des bénévoles…</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h2>Bénévoles</h2>
      {volunteers.length === 0 ? (
        <p>Aucun bénévole trouvé.</p>
      ) : (
        <ul>
          {volunteers.map((v) => (
            <li key={v.id || v.uuid}>
              {v.name || v.full_name || "Sans nom"}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Volunteers;
