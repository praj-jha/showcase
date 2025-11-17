# India Innovates 2026

World's biggest youth innovation summit featuring political, tech, and business leaders.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for blazing fast development
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Three.js** for 3D particle effects

## Features

- 🎨 Dark theme with purple accents
- ✨ Animated 3D dotted surface background using Three.js
- 🔄 Smooth text rotation animation for key categories
- 📱 Fully responsive design with mobile menu
- 🎯 Modern, clean UI with light font weights for premium feel
- ⚡ Lightning-fast performance with Vite

## Getting Started

### Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## Project Structure

```
ii26/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── dotted-surface.tsx
│   │   │   ├── menu-toggle-icon.tsx
│   │   │   ├── text-rotate.tsx
│   │   │   └── use-scroll.ts
│   │   ├── header.tsx
│   │   └── hero.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Design Decisions

- **Dark Theme**: Modern, elegant dark background with purple highlights
- **Purple Accents**: Used for CTAs and rotating text to create visual interest
- **Light Typography**: Medium-thin fonts for a premium, sophisticated look
- **Smooth Animations**: Framer Motion for buttery smooth transitions
- **3D Background**: Subtle Three.js particle wave for depth and movement
