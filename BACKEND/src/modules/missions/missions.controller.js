const { sanitizeBeneficiaryForRole } = require('../../middleware/auth.middleware');

// Lorsque tu retournes la liste des bénéficiaires d'une mission :
const safeBeneficiaries = beneficiaries.map((b) =>
  sanitizeBeneficiaryForRole(b, req.user.role)
);
