const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../../config/db');
const { getJwtSecret } = require('../../middleware/auth.middleware');

const SALT_ROUNDS = 10;

async function login(email, password) {
  const { rows } = await pool.query(
    `SELECT id, email, password_hash, role, volunteer_id, is_active
     FROM users
     WHERE LOWER(email) = LOWER($1)`,
    [email]
  );

  const user = rows[0];
  if (!user || !user.is_active) {
    return null;
  }

  const isValid = await bcrypt.compare(password, user.password_hash);
  if (!isValid) {
    return null;
  }

  const token = jwt.sign(
    {
      sub: user.id,
      email: user.email,
      role: user.role,
      volunteer_id: user.volunteer_id,
    },
    getJwtSecret(),
    { expiresIn: process.env.JWT_EXPIRES_IN || '8h' }
  );

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
      volunteer_id: user.volunteer_id,
    },
  };
}

async function getUserById(id) {
  const { rows } = await pool.query(
    `SELECT id, email, role, volunteer_id, is_active, created_at
     FROM users
     WHERE id = $1`,
    [id]
  );
  return rows[0] || null;
}

async function createUser({ email, password, role = 'volunteer', volunteer_id = null }) {
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  const { rows } = await pool.query(
    `INSERT INTO users (email, password_hash, role, volunteer_id)
     VALUES (LOWER($1), $2, $3, $4)
     RETURNING id, email, role, volunteer_id, is_active, created_at`,
    [email, passwordHash, role, volunteer_id]
  );

  return rows[0];
}

module.exports = {
  login,
  getUserById,
  createUser,
};
