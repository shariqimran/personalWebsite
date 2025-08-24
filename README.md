# Shariq Imran Hassan - Personal Portfolio Website

A modern, responsive portfolio website built with Gatsby, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with dark/light mode
- ⚡ Fast performance with Gatsby
- 📱 Mobile-first responsive design
- 🎭 Smooth animations with Framer Motion
- 🎨 Beautiful UI with Tailwind CSS
- 📝 TypeScript for type safety
- 🔍 SEO optimized

## Tech Stack

- **Framework**: Gatsby 5
- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Gatsby

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd your-site-name
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Run TypeScript type checking

## Customization

### Personal Information

The following files have been updated with Shariq's information:

1. **`src/pages/index.tsx`** - Name, bio, projects, and contact information
2. **`src/components/SEO.tsx`** - SEO metadata
3. **`package.json`** - Project name and description

### Projects

The projects array in `src/pages/index.tsx` showcases Shariq's work:

```typescript
const projects = [
  {
    title: "Climate Analysis Vancouver",
    subtitle: "Time-series forecasting models",
    desc: "Implemented advanced time-series forecasting models...",
    tech: "Python • Pandas • Prophet • ARIMA • Time Series Analysis",
    link: "#",
    github: "#",
    // ... other properties
  }
];
```

### Styling

Customize colors, fonts, and layout by modifying:
- `tailwind.config.ts` - Tailwind CSS configuration
- `src/styles/global.css` - Global styles
- Component-specific classes in the JSX files

## Deployment

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `public`

### Vercel

1. Push your code to GitHub
2. Import your repository to Vercel
3. Build command: `npm run build`
4. Output directory: `public`

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ using Gatsby and modern web technologies.
