const authService = require('./auth.service');

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email et mot de passe requis.' });
    }

    const result = await authService.login(email, password);
    if (!result) {
      return res.status(401).json({ error: 'Identifiants invalides.' });
    }

    return res.json(result);
  } catch (error) {
    console.error('Erreur login:', error);
    return res.status(500).json({ error: 'Erreur serveur lors de la connexion.' });
  }
}

async function logout(_req, res) {
  // Avec JWT stateless, le client supprime le token stocké localement
  return res.json({ message: 'Déconnexion réussie.' });
}

async function me(req, res) {
  try {
    const user = await authService.getUserById(req.user.id);
    if (!user || !user.is_active) {
      return res.status(404).json({ error: 'Utilisateur introuvable.' });
    }
    return res.json({ user });
  } catch (error) {
    console.error('Erreur /me:', error);
    return res.status(500).json({ error: 'Erreur serveur.' });
  }
}

async function createUser(req, res) {
  try {
    const { email, password, role, volunteer_id } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email et mot de passe requis.' });
    }

    const allowedRoles = ['admin', 'coordinator', 'volunteer'];
    if (role && !allowedRoles.includes(role)) {
      return res.status(400).json({ error: 'Rôle invalide.' });
    }

    const user = await authService.createUser({ email, password, role, volunteer_id });
    return res.status(201).json({ user });
  } catch (error) {
    if (error.code === '23505') {
      return res.status(409).json({ error: 'Un compte existe déjà avec cet email.' });
    }
    console.error('Erreur createUser:', error);
    return res.status(500).json({ error: 'Erreur serveur lors de la création.' });
  }
}

module.exports = {
  login,
  logout,
  me,
  createUser,
};
