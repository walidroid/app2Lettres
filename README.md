# Application Web Interactive - Production et Publication de Médias

Une application web éducative interactive pour l'apprentissage de la production et publication de médias numériques.

## Structure du Projet

Ce projet est organisé de manière professionnelle avec la structure suivante :

```
app2Lettres/
├── public/                 # Fichiers statiques
│   └── index.html         # Point d'entrée HTML
├── src/                   # Code source principal
│   ├── components/        # Composants React
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ProgressTracker.jsx
│   │   ├── SessionCard.jsx
│   │   ├── SessionDetail.jsx
│   │   ├── badge.jsx
│   │   └── card.jsx
│   ├── styles/           # Fichiers CSS
│   │   └── App.css
│   ├── assets/           # Ressources statiques
│   │   ├── images/       # Images du projet
│   │   └── icons/        # Icônes (à ajouter)
│   ├── utils/            # Utilitaires et helpers
│   ├── pages/            # Pages principales (à développer)
│   ├── App.jsx           # Composant principal
│   ├── main.jsx          # Point d'entrée React
│   └── sessionsData.js   # Données des sessions
├── docs/                 # Documentation
│   ├── Application Web Interactive - Production et Publication de Médias.md
│   └── Conception Application Web - Cours Production et Publication de Médias.md
└── README.md            # Ce fichier
```

## Technologies Utilisées

- **React** - Bibliothèque JavaScript pour interfaces utilisateur
- **Vite** - Outil de build rapide
- **CSS** - Styles et mise en page
- **JavaScript ES6+** - Langage de programmation

## Fonctionnalités

- Interface interactive pour suivre les sessions de formation
- Système de progression visuelle
- Composants réutilisables (Header, Footer, Cards, etc.)
- Support multilingue (français)
- Design responsive

## Installation et Lancement

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation
1. Clonez le repository
2. Installez les dépendances :
   ```bash
   npm install
   ```

### Lancement en développement
```bash
npm run dev
```

### Build pour la production
```bash
npm run build
```

## Structure des Composants

### Composants Principaux
- **App.jsx** : Composant racine de l'application
- **Header.jsx** : En-tête de navigation
- **Footer.jsx** : Pied de page
- **Hero.jsx** : Section principale d'accueil

### Composants de Session
- **SessionCard.jsx** : Carte représentant une session
- **SessionDetail.jsx** : Détails d'une session spécifique
- **ProgressTracker.jsx** : Indicateur de progression

### Composants UI
- **card.jsx** : Composant de carte générique
- **badge.jsx** : Composant badge/badge

## Assets et Ressources

Les images et ressources sont organisées dans `src/assets/` :
- **Images de sessions** : `session*_*.png`
- **Captures d'écran** : `localhost_*.webp`

## Contribution

Pour contribuer au projet :

1. Créez une branche pour votre fonctionnalité
2. Suivez les conventions de code existantes
3. Testez votre code localement
4. Soumettez une pull request

## Licence

Ce projet est développé dans le cadre d'un cours sur la production et publication de médias numériques.

## Contact

Pour toute question ou suggestion, veuillez contacter l'équipe de développement.