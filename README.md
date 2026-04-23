# Specialised Aquatic Feeds (SAF) — Precision Landing Page

A high-performance, industry-grade landing page for **Specialised Aquatic Feeds**, built with a focus on modern industrial aesthetics, fluid animations, and a seamless Single Page Application (SPA) experience.

## 🏗 Architecture & Design Philosophy

The website follows a **"Brutalist Industrial"** design system:
- **Monochrome & High Contrast:** A strictly curated palette using rich blacks, crisp whites, and a signature aquatic blue (`#2FA8D5`) for interaction highlights.
- **Grids & Frames:** Heavy use of CSS grids and borders to evoke the precision of engineering and manufacturing.
- **Dynamic Imagery:** Grayscale-to-color hover transitions across all industrial and aquatic photography.
- **Micro-Animations:** Sophisticated scroll-triggered reveals and magnetic interactions powered by Framer Motion.

## 🛠 Tech Stack

- **Framework:** [React](https://reactjs.org/) (Vite-based)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Routing:** [React Router v6](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Components:** [Shadcn UI](https://ui.shadcn.com/) (Radix Primitives)

## 🚀 Key Features

### 1. Global Navigation & Routing
- **SPA Experience:** Seamless transitions between the main sections and product detail pages without full-page reloads.
- **Smart Hash Scrolling:** A custom `ScrollToHash` utility ensures that links like `/#about` scroll to the correct section even when navigating from a sub-page.
- **Interactive Navbar:** Features an intersection observer for active section highlighting and a "Brutalist" full-screen mobile menu.

### 2. Immersive Hero & Story
- **Parallax Background:** Industrial factory scenes that respond to mouse movement.
- **Split-Text Reveals:** Custom-built character reveal animations on load.
- **Interactive Narrative:** A timeline-based "Our Story" section with rich historical data and hover-responsive image grids.

### 3. Product Eco-system
- **Dynamic Product Pages:** Each product (Tilapia, Trout, Catfish, Abalone, Koi, Pigeon) features its own detail page.
- **Interactive Gallery:** Product images with grayscale-to-color transitions and a built-in lightbox viewer.
- **Accordion Specs:** Technical feed specifications organized in smooth, animated accordions for clarity.

### 4. Advanced "About" Section
- **Interactive Stats:** Data-driven blocks with mouse-tracking radial glows, scan-line effects, and dynamic progress bars.
- **Precision Typography:** High-scaling font hierarchy for a premium, editorial feel.

## 📁 Project Structure

```text
src/
├── assets/             # Raw imagery and icons
├── components/         # Reusable UI components
│   ├── ui/             # Atomic Shadcn components
│   ├── Navbar.tsx      # Main site navigation
│   ├── ProductPage.tsx # Template for detail pages
│   └── ...
├── pages/              # Page views
│   ├── Index.tsx       # Main Landing Page
│   └── products/       # Individual Product Detail pages
└── App.tsx             # Routing and Global Providers
```

## 🛠 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

---

*Designed and Engineered for Specialised Aquatic Feeds.*
