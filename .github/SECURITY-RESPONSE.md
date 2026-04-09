# Security Response — La RST

Ce document décrit la procédure suivie lorsqu’une vulnérabilité de sécurité est signalée dans La RST.

## 1. Réception du signalement

Lorsqu’une vulnérabilité est signalée via le canal privé indiqué dans `SECURITY.md`, l’équipe :

- accuse réception sous 72 heures
- ouvre un ticket interne privé
- évalue la sévérité et l’impact potentiel

Aucun détail n’est rendu public tant que la vulnérabilité n’est pas corrigée.

---

## 2. Analyse

L’équipe de maintenance :

- reproduit la vulnérabilité
- identifie les modules affectés
- évalue les risques (données personnelles, intégrité, disponibilité)
- définit un plan de correction

---

## 3. Correction

Selon la gravité :

- correctif immédiat (hotfix)
- correctif planifié dans une version mineure
- correctif intégré dans une refonte plus large

Les tests de sécurité sont mis à jour pour éviter les régressions.

---

## 4. Publication

Une fois corrigée :

- une nouvelle version est publiée
- une note de sécurité est ajoutée au changelog
- le chercheur est crédité (s’il le souhaite)

Aucune donnée personnelle n’est jamais exposée dans les rapports publics.

---

## 5. Engagement

La RST s’engage à :

- traiter chaque signalement avec sérieux
- protéger les données sensibles des bénévoles et bénéficiaires
- maintenir une transparence responsable
