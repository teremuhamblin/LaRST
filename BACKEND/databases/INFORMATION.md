> Voici info.rst, un fichier adapté à ton dossier database/ ou scripts/, pour expliquer comment installer Perl, Ruby et toutes les dépendances nécessaires pour exécuter tes scripts migration.pl et init-db.rb.

---

📁 Où placer INFORMATION.rst ?

Place-le dans :

```
backend/database/INFORMATION.rst
```

ou, si tu préfères centraliser la documentation technique :

```
docs/database/INFORMATION.rst
```

Les deux sont valides.  
La version la plus professionnelle : docs/database/info.rst.

---

📘 info.rst — Installation de Perl, Ruby et dépendances

`rst
Installation des outils nécessaires
===================================

Ce document décrit l'installation de Perl, Ruby et des dépendances requises
pour exécuter les scripts de migration et d'initialisation de la base de
données du projet La RST.

Les scripts concernés sont :

- migration.pl (Perl)
- init-db.rb (Ruby)

Ils se trouvent dans le dossier backend/database/.

Prérequis généraux
------------------

Avant toute installation, assurez-vous d'avoir :

- Un système Linux ou macOS
- PostgreSQL installé et accessible via la commande psql
- Un accès au fichier config/.env contenant les variables de connexion

Installation de Perl
--------------------

Perl est généralement installé par défaut sur Linux et macOS.  
Pour vérifier :

.. code-block:: bash

   perl -v

Si Perl n'est pas installé :

Ubuntu / Debian :

.. code-block:: bash

   sudo apt update
   sudo apt install perl

Fedora / CentOS :

.. code-block:: bash

   sudo dnf install perl

macOS (Homebrew) :

.. code-block:: bash

   brew install perl

Aucune bibliothèque Perl supplémentaire n'est requise pour migration.pl.

Installation de Ruby
--------------------

Pour vérifier si Ruby est installé :

.. code-block:: bash

   ruby -v

Si Ruby n'est pas installé :

Ubuntu / Debian :

.. code-block:: bash

   sudo apt update
   sudo apt install ruby-full

Fedora / CentOS :

.. code-block:: bash

   sudo dnf install ruby

macOS (Homebrew) :

.. code-block:: bash

   brew install ruby

Dépendances Ruby
----------------

Le script init-db.rb utilise la bibliothèque pg pour communiquer avec PostgreSQL.

Installation :

.. code-block:: bash

   gem install pg

Si pg ne se compile pas, installez les en-têtes PostgreSQL :

Ubuntu / Debian :

.. code-block:: bash

   sudo apt install libpq-dev

Fedora / CentOS :

.. code-block:: bash

   sudo dnf install postgresql-devel

macOS :

.. code-block:: bash

   brew install postgresql

Vérification :

.. code-block:: bash

   ruby -r pg -e "puts PG::VERSION"

Exécution des scripts
---------------------

Migration (Perl) :

.. code-block:: bash

   cd backend/database/migrations
   perl migration.pl

Initialisation (Ruby) :

.. code-block:: bash

   cd backend/database/init
   ruby init-db.rb

Résumé
------

- Perl : utilisé pour exécuter les migrations SQL
- Ruby : utilisé pour initialiser la base et appliquer schema.sql
- PostgreSQL : doit être installé et accessible
- Dépendance Ruby : pg

Ces outils permettent une gestion simple, robuste et portable de la base de données La RST.
`

---

🎯 Résultat

Tu as maintenant :

- un fichier info.rst propre, structuré, professionnel  
- toutes les instructions pour installer Perl, Ruby, PostgreSQL et les dépendances  
- un guide clair pour exécuter tes scripts migration.pl et init-db.rb  
- l’emplacement exact où le mettre  

---
