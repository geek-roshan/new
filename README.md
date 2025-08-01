# Astro Static Project

A modern static website built with Astro, featuring HTML, CSS, and JavaScript with Three.js and GSAP animations.

## Features

- **Astro Framework**: Fast static site generation
- **Three.js Integration**: 3D background animations with floating particles
- **GSAP Animations**: Smooth scroll-triggered animations and interactive effects
- **React Components**: Ready for interactive UI components
- **Modern CSS**: Responsive design with glassmorphism effects
- **Performance Optimized**: Static generation for fast loading

## Dependencies

- `astro`: ^4.0.0 - Static site generator
- `@astrojs/react`: ^3.0.0 - React integration for interactive components
- `three`: ^0.160.0 - 3D graphics library
- `gsap`: ^3.12.0 - Animation library

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:4321`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── public/
│   ├── styles/
│   │   └── main.css          # Main stylesheet
│   └── scripts/
│       └── main.js           # JavaScript with Three.js and GSAP
├── src/
│   └── pages/
│       └── index.astro       # Main page
├── astro.config.mjs          # Astro configuration
├── package.json              # Dependencies and scripts
└── README.md                # This file
```

## Features Explained

### Three.js Background
- Floating particles in 3D space
- Responsive canvas that adapts to window size
- Transparent overlay that doesn't interfere with content

### GSAP Animations
- Hero section entrance animations
- Scroll-triggered feature card animations
- Interactive button hover effects
- Smooth scrolling navigation

### CSS Features
- Glassmorphism design with backdrop blur
- Responsive grid layout
- Modern gradient backgrounds
- Hover effects and transitions

## Customization

### Adding New Pages
Create new `.astro` files in `src/pages/` directory. They will automatically become routes.

### Styling
Modify `public/styles/main.css` to customize the appearance.

### Animations
Edit `public/scripts/main.js` to add or modify GSAP animations.

### 3D Effects
Modify the `ThreeBackground` class in `main.js` to change the 3D particle system.

## Browser Support

- Modern browsers with WebGL support
- ES6+ JavaScript features
- CSS Grid and Flexbox

## Performance

- Static generation for optimal loading speed
- Optimized images and assets
- Minimal JavaScript bundle
- Efficient CSS with modern features

## License

This project is open source and available under the MIT License.
