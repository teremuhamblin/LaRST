# Gouvernance du projet — La RST

## 1. Principes directeurs
**La RST** est un projet open-source à vocation sociale. Les choix techniques et fonctionnels privilégient :
1. **La simplicité d’usage** sur le terrain et en coordination ;
2. **La sobriété technique** (peu de dépendances, hébergement associatif peu coûteux) ;
3. **L’éthique et la protection des personnes vulnérables**.

---

## 2. Rôles au sein de la plateforme (Usage associatif)

### `admin` (Administrateur / Bureau)
- Crée et désactive les comptes utilisateurs (`users`).
- Gère l’ensemble des bénévoles, bénéficiaires et missions.
- Supervise les archives, les purges RGPD et la configuration de l’instance.

### `coordinator` (Coordinateur / Référent maraude)
- Crée et planifie les missions (`draft`, `planned`, `in_progress`, `done`, `cancelled`).
- Assigne les bénévoles et associe les bénéficiaires.
- Consulte et met à jour les fiches complètes des bénéficiaires (y compris `notes` et `contact`).

### `volunteer` (Bénévole de terrain)
- Consulte ses missions assignées et l’historique de ses propres missions.
- Accède à la **feuille de route terrain** (`GET /api/missions/:id/roadmap`).
- Peut mettre à jour le statut de présence/passage d’un bénéficiaire (`expected` / `met` / `absent`) lors d’une mission.
- N’a pas accès aux `notes` internes sensibles ni aux fiches hors de ses missions.

---

## 3. Gouvernance du dépôt open-source

### Rôles communautaires
- **Mainteneurs** : valident les Pull Requests, gèrent les versions (`semver`) et veillent à la cohérence architecturale et RGPD.
- **Contributeurs** : proposent du code, des corrections, de la documentation ou des tests.
- **Référents terrain** *(bénévoles d’associations utilisatrices)* : remontent les besoins réels et testent les parcours avant chaque release.

### Processus de contribution
1. Ouvrir une *Issue* décrivant le besoin ou le bug (avec le contexte terrain si possible).
2. Créer une branche dédiée depuis `main` (`feat/...`, `fix/...`, `docs/...`).
3. Soumettre une *Pull Request* claire, accompagnée des tests et de la documentation associée.
4. Validation requise par au moins un mainteneur avant fusion.
