# SafeLock 🔌⚡

**SafeLock** est une application web professionnelle conçue pour aider les électriciens et ingénieurs électriques à sélectionner rapidement et précisément les sections de câbles et les disjoncteurs appropriés pour leurs installations électriques, en conformité avec les normes françaises.

## 🎯 Fonctionnalités principales

### 📏 Sélecteur de section de câble
- **Calcul automatique** de la section de câble optimale
- **Paramètres configurables** :
  - Type de courant (monophasé/triphasé)
  - Calibre du disjoncteur (90A, 60A, 30A)
  - Distance de câblage (en mètres)
- **Recommandations précises** en mm²
- **Notes techniques** spécialisées (ex: "16 mm² conseillé pour Linky")
- **Sauvegarde** des sélections effectuées

### ⚡ Sélecteur de disjoncteur
- **Base de données complète** de disjoncteurs
- **Spécifications détaillées** :
  - Type (Différentiel, Magneto-thermique)
  - Calibre et courbe de déclenchement
  - Pouvoir de coupure
  - Tension nominale
  - Nombre de pôles
  - Sensibilité (pour les différentiels)
- **Recommandations d'usage** par type d'installation

### 📞 Formulaire de contact
- Interface de contact intégrée
- Validation des champs
- Confirmation d'envoi

## 🛠️ Technologies utilisées

- **Framework** : Next.js 15.3.0 avec App Router
- **Langage** : TypeScript
- **Interface** : React 18 avec CSS Modules
- **Base de données** : SQLite avec Prisma ORM
- **Gestion d'état** : Zustand
- **Formulaires** : React Hook Form
- **Styling** : CSS Modules avec gradients personnalisés

## 📋 Prérequis

- Node.js 18.x ou supérieur
- npm, yarn, pnpm ou bun

## 🚀 Installation et configuration

### 1. Cloner le repository
```bash
git clone https://github.com/Christophe72/safelock.git
cd safelock
```

### 2. Installer les dépendances
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Configuration de la base de données
```bash
# Générer le client Prisma
npx prisma generate

# Appliquer les migrations (optionnel)
npx prisma migrate dev
```

### 4. Variables d'environnement
Créer un fichier `.env.local` :
```env
DATABASE_URL="file:./dev.db"
```

### 5. Démarrer l'application en développement
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du projet

```
safelock/
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   │   ├── api/               # Routes API
│   │   ├── contact/           # Page de contact
│   │   ├── dashboard/         # Tableau de bord
│   │   ├── safelock/          # Application principale
│   │   └── settings/          # Paramètres
│   ├── components/            # Composants React
│   │   ├── CableSectionSelector.tsx
│   │   ├── DisjoncteurSelector.tsx
│   │   ├── formulaire-contact.tsx
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── hooks/                 # Hooks personnalisés (Zustand)
│   └── lib/                   # Utilitaires et configuration
├── prisma/                    # Schéma et migrations de base de données
└── public/                    # Assets statiques
```

## 🎮 Utilisation

### Page principale (/safelock)
1. **Sélection de câble** :
   - Choisir le type de courant (monophasé/triphasé)
   - Sélectionner le calibre du disjoncteur
   - Entrer la distance de câblage
   - Consulter la recommandation de section
   - Enregistrer la sélection

2. **Sélection de disjoncteur** :
   - Parcourir les différents types disponibles
   - Consulter les spécifications techniques
   - Lire les notes d'application

### Navigation
- **Accueil** : Page d'accueil avec navigation
- **Tableau de bord** : Vue d'ensemble (en développement)
- **Paramètres** : Configuration (en développement)
- **Contact** : Formulaire de contact

## 🔧 Commandes disponibles

```bash
# Développement
npm run dev          # Serveur de développement avec Turbopack

# Production
npm run build        # Construction pour la production
npm start            # Démarrage en mode production

# Qualité de code
npm run lint         # Vérification ESLint

# Base de données
npx prisma studio    # Interface d'administration de la base de données
npx prisma migrate   # Gestion des migrations
```

## 📊 Base de données

### Modèle CableSelection
```prisma
model CableSelection {
  id        Int      @id @default(autoincrement())
  type      String   // monophasé/triphasé
  calibre   String   // 90A, 60A, 30A
  distance  Int      // distance en mètres
  section   Int      // section recommandée en mm²
  note      String?  // notes techniques
  createdAt DateTime @default(now())
}
```

## 🎨 Design et interface

- **Thème** : Dégradés bleus professionnels
- **Interface** : Moderne et intuitive
- **Responsive** : Adapté mobile et desktop
- **Couleurs principales** :
  - Bleu foncé : `#0d47a1`
  - Bleu clair : `#4fc3f7`
  - Bleu moyen : `#0288d1`

## 🚀 Déploiement

### Vercel (recommandé)
```bash
npm install -g vercel
vercel --prod
```

### Autres plateformes
L'application peut être déployée sur toute plateforme supportant Next.js :
- Netlify
- Railway
- Heroku
- AWS
- DigitalOcean

## 📄 Licence et crédits

- **Développé par** : Chris Développement
- **Copyright** : © 2024 SafeLock - Tous droits réservés
- **Licence** : Propriétaire

## 🤝 Contribution

Ce projet est en développement actif. Pour contribuer :

1. Fork le projet
2. Créer une branche pour votre feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 📞 Support et contact

Pour toute question ou support technique, utilisez le formulaire de contact intégré à l'application ou contactez l'équipe de développement.

---

**SafeLock** - Votre assistant intelligent pour la sélection d'équipements électriques ⚡🔧
