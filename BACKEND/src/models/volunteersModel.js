import db from "../config/db.js";

export const VolunteersModel = {
  findAll: async () => {
    const { rows } = await db.query("SELECT * FROM volunteers ORDER BY id ASC");
    return rows;
  },

  findById: async (id) => {
    const { rows } = await db.query(
      "SELECT * FROM volunteers WHERE id = $1",
      [id]
    );
    return rows[0] || null;
  },

  create: async ({ name, phone, email }) => {
    const { rows } = await db.query(
      `INSERT INTO volunteers (name, phone, email)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [name, phone, email]
    );
    return rows[0];
  },

  update: async (id, { name, phone, email }) => {
    const { rows } = await db.query(
      `UPDATE volunteers
       SET name = $1, phone = $2, email = $3, updated_at = NOW()
       WHERE id = $4
       RETURNING *`,
      [name, phone, email, id]
    );
    return rows[0] || null;
  },

  remove: async (id) => {
    const { rowCount } = await db.query(
      "DELETE FROM volunteers WHERE id = $1",
      [id]
    );
    return rowCount > 0;
  }
};
