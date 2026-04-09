import React, { useEffect, useState } from "react";
import { getBeneficiaries } from "../api/apiClient.js";

const Beneficiaries = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBeneficiaries = async () => {
      try {
        const data = await getBeneficiaries();
        setBeneficiaries(data);
      } catch (err) {
        setError("Impossible de charger les bénéficiaires.");
      } finally {
        setLoading(false);
      }
    };

    fetchBeneficiaries();
  }, []);

  if (loading) return <p>Chargement des bénéficiaires…</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h2>Bénéficiaires</h2>
      {beneficiaries.length === 0 ? (
        <p>Aucun bénéficiaire trouvé.</p>
      ) : (
        <ul>
          {beneficiaries.map((b) => (
            <li key={b.id || b.uuid}>
              {b.name || b.full_name || "Sans nom"}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Beneficiaries;
