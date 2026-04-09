import db from "../config/db.js";

export const MissionsModel = {
  findAll: async () => {
    const { rows } = await db.query("SELECT * FROM missions ORDER BY date ASC");
    return rows;
  },

  findById: async (id) => {
    const { rows } = await db.query(
      "SELECT * FROM missions WHERE id = $1",
      [id]
    );
    return rows[0] || null;
  },

  create: async ({ title, description, date }) => {
    const { rows } = await db.query(
      `INSERT INTO missions (title, description, date)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [title, description, date]
    );
    return rows[0];
  },

  update: async (id, { title, description, date }) => {
    const { rows } = await db.query(
      `UPDATE missions
       SET title = $1, description = $2, date = $3, updated_at = NOW()
       WHERE id = $4
       RETURNING *`,
      [title, description, date, id]
    );
    return rows[0] || null;
  },

  remove: async (id) => {
    const { rowCount } = await db.query(
      "DELETE FROM missions WHERE id = $1",
      [id]
    );
    return rowCount > 0;
  }
};
