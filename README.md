# TwitterClone

Un clone moderne de Twitter développé avec des technologies web modernes, offrant une expérience utilisateur fluide et réactive pour le partage de pensées en temps réel.
## Fonctionnalités
### Authentification

Inscription et connexion sécurisées
Gestion des sessions utilisateurs
Réinitialisation de mot de passe

### Publications

- Création de tweets (280 caractères max)
- Support des images et médias
- Threads et réponses
- Retweets et citations
- Système de likes et bookmarks

### Interactions Sociales

- Système de follow/unfollow
- Profils utilisateurs personnalisables
- Notifications en temps réel
- Messages privés
- Recherche d'utilisateurs et de contenu

### Interface Utilisateur

- Design responsive (mobile-first)
- Mode sombre/clair
- Interface intuitive et moderne
- Chargement infini des tweets
- Animations fluides

### Technologies Utilisées
Frontend

- React - Bibliothèque UI
- TypeScript - Typage statique
- Boostrap
- React Query - Gestion des états serveur
- React Router - Navigation côté client
- Socket.io Client - Communication temps réel

Backend

- Node.js - Runtime JavaScript
- Express.js - Framework web
- MongoDB - Base de données NoSQL
- Mongoose - ODM pour MongoDB
- Socket.io - WebSockets temps réel
- JWT - Authentification par tokens
- Multer - Upload de fichiers
- Cloudinary - Stockage d'images

DevOps & Outils

- Docker - Conteneurisation
- GitHub Actions - CI/CD
- ESLint - Linting du code
- Prettier - Formatage du code
- Jest - Tests unitaires

### Installation
Prérequis

- Node.js (v18 ou supérieur)
- MongoDB (v5.0 ou supérieur)
- npm ou yarn

# Configuration Locale

## Cloner le repository

- bashgit clone https://github.com/votre-username/twitter-clone.git
- cd twitter-clone

Installer les dépendances

- bash# Backend
- cd backend
- npm install