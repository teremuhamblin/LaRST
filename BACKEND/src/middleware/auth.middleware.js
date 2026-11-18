const jwt = require('jsonwebtoken');

function getJwtSecret() {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET non défini dans les variables d’environnement.');
  }
  return process.env.JWT_SECRET;
}

/**
 * Vérifie le token JWT (Authorization: Bearer <token>)
 */
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authentification requise.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, getJwtSecret());
    req.user = {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
      volunteer_id: payload.volunteer_id || null,
    };
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Jeton invalide ou expiré.' });
  }
}

/**
 * Restreint l'accès aux rôles autorisés
 */
function authorize(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentification requise.' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Droits insuffisants pour cette action.' });
    }

    return next();
  };
}

/**
 * Cloisonnement RGPD : masque les données sensibles aux bénévoles
 */
function sanitizeBeneficiaryForRole(beneficiary, role) {
  if (!beneficiary) return beneficiary;

  if (role === 'admin' || role === 'coordinator') {
    return beneficiary;
  }

  // Pour le rôle 'volunteer', on masque les notes internes et le contact direct
  const { notes, contact, ...safeFields } = beneficiary;
  return safeFields;
}

module.exports = {
  authenticate,
  authorize,
  sanitizeBeneficiaryForRole,
  getJwtSecret,
};
