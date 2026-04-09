# Security FAQ — La RST

Cette FAQ répond aux questions les plus courantes concernant la sécurité
et la gestion des données dans La RST.

---

## La RST stocke-t-elle des données sensibles ?
Oui. Les données des bénévoles et bénéficiaires sont considérées comme sensibles.
La plateforme applique une politique stricte de minimisation et de protection.

---

## Où les données sont-elles stockées ?
Dans une base PostgreSQL contrôlée par l’association ou l’hébergeur choisi.
Aucune donnée n’est envoyée à des services externes sans consentement explicite.

---

## Qui peut accéder aux données ?
Dans la version 1.0.0 :
- uniquement les administrateurs disposant du token d’accès API.

Dans la version 1.1.0 :
- rôles : admin, coordinateur, bénévole (lecture limitée).

---

## Comment signaler une vulnérabilité ?
Ne pas ouvrir d’issue publique.  
Suivre les instructions de `SECURITY.md`.

---

## Comment les vulnérabilités sont-elles traitées ?
Voir `SECURITY-RESPONSE.md` :
- analyse
- correction
- publication d’un correctif
- communication responsable

---

## La RST est-elle conforme au RGPD ?
La plateforme applique :
- minimisation des données
- transparence
- droit d’accès / rectification / suppression
- documentation claire (`docs/data-policy.md`)

La conformité finale dépend de l’usage par l’association.

---

## Les données peuvent-elles être exportées ?
Prévu dans la roadmap 1.1.x / 1.2.x.

---

## Les logs contiennent-ils des données personnelles ?
Non. Les logs doivent rester anonymisés.
