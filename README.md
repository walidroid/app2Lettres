# App2Lettres - Application d'Apprentissage de Rédaction

Une application web éducative interactive pour l'apprentissage de la rédaction de lettres professionnelles, académiques et personnelles.

## Structure du Projet

Ce projet est une application React développée avec Vite.

```
app2Lettres/
├── public/                 # Fichiers statiques
├── src/                    # Code source principal
│   ├── components/         # Composants React
│   │   ├── SessionList.jsx # Liste des sessions
│   │   ├── SessionCard.jsx # Carte d'une session
│   │   ├── SessionDetail.jsx # Page de détail d'une session
│   │   └── ...
│   ├── sessionsData.js     # Données des sessions (Lettres)
│   ├── App.jsx             # Configuration des routes
│   └── main.jsx            # Point d'entrée
└── README.md               # Ce fichier
```

## Technologies Utilisées

- **React** - Bibliothèque JavaScript pour interfaces utilisateur
- **Vite** - Outil de build rapide
- **React Router** - Navigation
- **Tailwind CSS** - Styles
- **PropTypes** - Validation de types

## Fonctionnalités

- Catalogue de sessions de formation sur différents types de lettres (Formelles, Informelles, etc.)
- Page de détail pour chaque session avec objectifs et durée
- Suivi de progression (interface visuelle)
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

## Structure des Sessions

Les données des sessions sont définies dans `src/sessionsData.js` et incluent :
- Lettres Formelles
- Lettres Informelles
- Lettres Professionnelles
- Lettres Académiques
- Et plus...

## Contribution

1. Créez une branche pour votre fonctionnalité
2. Suivez les conventions de code existantes
3. Testez votre code localement
4. Soumettez une pull request

## Licence

MIT
