# Politique de protection des données (RGPD) — La RST

Ce document définit les principes de collecte, de traitement et de protection des données personnelles au sein de **La RST** (notamment pour **La Roulotte Solidaire Toulouse**).

---

## 1. Finalités du traitement
Les données collectées via La RST ont pour uniques finalités :
- L’organisation et la planification des missions solidaires (maraudes, distributions, accompagnements) ;
- La coordination des équipes de bénévoles ;
- Le suivi des besoins exprimés par les personnes bénéficiaires.

Aucune donnée n’est vendue, cédée ou utilisée à des fins commerciales ou statistiques externes sans anonymisation complète.

---

## 2. Minimisation et pseudonymisation
- **Bénéficiaires** : l’enregistrement du nom et du prénom civils est **facultatif**. Un alias ou prénom d’usage (`display_name`) suffit pour assurer le suivi sur le terrain.
- **Notes internes (`notes`)** : doivent rester factuelles, non discriminantes, strictement nécessaires à l’accompagnement et exemptes de données médicales détaillées.
- **Consentement** : la date de recueil du consentement oral ou écrit est tracée via `consent_given_at`.

---

## 3. Cloisonnement des accès (RBAC)
L’accès aux données est strictement limité selon le rôle de l’utilisateur :

| Donnée | `admin` | `coordinator` | `volunteer` |
| :--- | :---: | :---: | :---: |
| Liste des missions assignées | ✅ | ✅ | ✅ |
| `display_name` & `need_type` (bénéficiaire) | ✅ | ✅ | ✅ *(mission assignée uniquement)* |
| Coordonnées complètes (`contact`) | ✅ | ✅ | ❌ |
| Notes internes (`notes`) | ✅ | ✅ | ❌ *(masquées par l’API)* |
| Gestion des comptes utilisateurs | ✅ | ❌ | ❌ |

---

## 4. Durées de conservation et archivage
- **Archivage logique (`archived`)** : lorsqu’un bénévole ou un bénéficiaire n’est plus actif, sa fiche est archivée (`status = 'archived'`, `archived_at` renseigné) afin de préserver l’intégrité statistique des missions passées sans exposer la fiche dans les listes actives.
- **Purge définitive recommandée** :
  - Bénéficiaires inactifs depuis plus de **24 mois** : anonymisation ou suppression définitive.
  - Bénévoles inactifs depuis plus de **36 mois** après dernier contact : suppression des coordonnées personnelles.

---

## 5. Droits des personnes concernées
Conformément au RGPD, toute personne enregistrée (bénévole ou bénéficiaire) dispose d’un droit d’accès, de rectification, d’opposition et d’effacement de ses données.  
Ces demandes sont traitées par l’administrateur ou le coordinateur référent de l’association utilisatrice.

---

## 6. Mesures de sécurité techniques
- Mots de passe hachés via `bcrypt` (jamais stockés en clair).
- Authentification par jeton JWT signé avec durée de validité limitée.
- Déploiement recommandé derrière un proxy HTTPS (TLS).
- Sauvegardes chiffrées et accès restreints à la base PostgreSQL.
