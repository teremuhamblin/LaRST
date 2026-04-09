import db from "../config/db.js";

export const BeneficiariesModel = {
  findAll: async () => {
    const { rows } = await db.query("SELECT * FROM beneficiaries ORDER BY id ASC");
    return rows;
  },

  findById: async (id) => {
    const { rows } = await db.query(
      "SELECT * FROM beneficiaries WHERE id = $1",
      [id]
    );
    return rows[0] || null;
  },

  create: async ({ name, situation, phone }) => {
    const { rows } = await db.query(
      `INSERT INTO beneficiaries (name, situation, phone)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [name, situation, phone]
    );
    return rows[0];
  },

  update: async (id, { name, situation, phone }) => {
    const { rows } = await db.query(
      `UPDATE beneficiaries
       SET name = $1, situation = $2, phone = $3, updated_at = NOW()
       WHERE id = $4
       RETURNING *`,
      [name, situation, phone, id]
    );
    return rows[0] || null;
  },

  remove: async (id) => {
    const { rowCount } = await db.query(
      "DELETE FROM beneficiaries WHERE id = $1",
      [id]
    );
    return rowCount > 0;
  }
};
