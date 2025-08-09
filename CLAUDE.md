# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Start development server:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Lint code:**
```bash
npm run lint
```

**Preview production build:**
```bash
npm run preview
```

## Project Architecture

This is a **React + TypeScript personal portfolio website** built with Vite, using Tailwind CSS for styling and Lucide React for icons.

### Key Architecture Components

**Main App Structure:** Single-page application with section-based layout (Hero, About, Expertise, Experience, Projects, Skills, Certifications, Contact, Footer)

**Theme System:** Context-based dark/light theme management with:
- `src/contexts/ThemeContext.tsx` - Theme state management with localStorage persistence
- System preference detection for initial theme
- CSS class-based theme switching (`dark` class on document root)

**Component Organization:**
- `src/App.tsx` - Main app layout with all sections
- `src/components/` - Individual section components (Hero, Navigation, About, etc.)
- Each component is self-contained with its own styling and logic

**Styling Architecture:**
- Tailwind CSS with custom configuration
- Custom color palette: navy (#1B365D), steel-blue (#4A90A4), orange (#F4A261)
- Custom animations: fade-in variants with staggered delays
- Responsive design with dark mode support

**State Management:**
- React Context for theme state only
- Component-level state for UI interactions (navigation menu, scrolling effects)

### Technical Stack
- **Build Tool:** Vite
- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS with PostCSS
- **Icons:** Lucide React
- **Linting:** ESLint with React and TypeScript rules

### File Organization
```
src/
├── components/     # All page sections as React components
├── contexts/       # React Context providers (theme)
├── App.tsx        # Main application layout
├── main.tsx       # React root rendering
└── index.css      # Global styles and Tailwind imports
```

This is a static portfolio site with no backend, routing, or complex state management beyond theme switching.