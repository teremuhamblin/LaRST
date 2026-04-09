# ROADMAP — La RST

## 1.0.0 — Noyau fonctionnel (MVP)

- [x] Dépôt initial (`la-rst`)
- [x] Modèle de données (bénévoles, bénéficiaires, missions)
- [x] API REST basique (CRUD)
- [x] Pages HTML simples (liste + formulaire)
- [ ] Auth admin simple (token / basic)
- [ ] Documentation minimale (README, data-model, architecture)

Objectif : plateforme utilisable en interne par une petite équipe.

---

## 1.1.0 — Confort d’usage & gouvernance

### Fonctionnel

- [ ] Système de rôles : admin / coordinateur / bénévole (lecture limitée)
- [ ] Filtrage / recherche sur les listes (par nom, statut, mission)
- [ ] Historique simple des missions par bénévole / bénéficiaire
- [ ] Statut des missions (planifiée, réalisée, annulée)

### Technique

- [ ] Ajout de tests automatisés (backend)
- [ ] Dockerisation simple (backend + base de données)
- [ ] Amélioration de la structure frontend (composants réutilisables)

### Gouvernance & docs

- [ ] `governance.md` — rôles, responsabilités, processus de décision
- [ ] `data-policy.md` — principes RGPD, minimisation, consentement
- [ ] Guide d’installation pour petites associations (docs/)

---

## 1.2.0+ (pistes futures)

- Notifications (email / SMS)
- Interface mobile / PWA
- Statistiques avancées (heures de bénévolat, nombre de missions, etc.)
- Multi‑structures (plusieurs associations sur une même instance)
