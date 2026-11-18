const { authenticate, authorize } = require('../../middleware/auth.middleware');

// Tous les endpoints nécessitent d'être connecté
router.use(authenticate);

// Lecture réservée aux admins/coordinateurs (les bénévoles passent par /api/missions/:id/roadmap)
router.get('/', authorize('admin', 'coordinator'), beneficiariesController.getAll);
router.get('/:id', authorize('admin', 'coordinator'), beneficiariesController.getById);

// Création / Modification / Archivage : admin et coordinator uniquement
router.post('/', authorize('admin', 'coordinator'), beneficiariesController.create);
router.put('/:id', authorize('admin', 'coordinator'), beneficiariesController.update);
router.delete('/:id', authorize('admin', 'coordinator'), beneficiariesController.archive);
