# AI Coding Agent Instructions for react_bfd_marica

## Architecture Overview
This repository is an educational codebase for the "REACT BFD MARICA RJ" course, structured as a series of progressive lessons (aulas) building front-end skills from HTML/CSS/JS basics to advanced React/TypeScript applications.

- **Early aulas (04-14)**: Static HTML pages with inline CSS/JS for fundamental concepts
- **Mid aulas (15-19)**: Introduction to build tools (PostCSS, Tailwind CSS, TypeScript)
- **Later aulas (20-28)**: React applications using Vite, with TypeScript in aula-28
- **Special projects**: `app-aulas` (React with Tailwind and routing), `webert_meu_site` (personal site)

Each aula is self-contained, demonstrating specific concepts without complex interdependencies.

## Developer Workflows

### Running Projects
- **Vite-based aulas (20, 28, app-aulas)**: `cd aula-XX && npm install && npm run dev`
- **Simple HTML aulas (04-14)**: Open `index.html` directly in browser
- **Build production**: `npm run build` (generates `dist/` folder)
- **Preview build**: `npm run preview`

### Testing
- Automated tests only in aula-28: `npm run test` (uses Vitest)
- Manual testing: Open in browser or use dev server for interactive testing

### Linting
- Run `npm run lint` for ESLint checks (configured in aulas 20, 28, app-aulas)
- Fix common issues: semicolons, unused variables, React hooks rules

### Debugging
- Use browser DevTools for client-side debugging
- React DevTools extension for component inspection in React aulas
- Console logging for quick checks (e.g., `console.log(state)` in components)

## Project-Specific Conventions

### File Structure
- `index.html`: Entry point for all aulas
- `src/`: React components and logic (aulas 20+)
- `public/`: Static assets
- `package.json`: Dependencies and scripts
- `vite.config.js`: Vite configuration with React plugin

### Code Patterns
- **React components**: Functional with hooks (useState, useEffect) - see `app-aulas/src/`
- **Styling**: Tailwind CSS classes in `app-aulas`, custom CSS in early aulas
- **TypeScript**: Strict typing in aula-28, interfaces for props
- **Imports**: ES6 modules, absolute paths not used

### Dependencies
- React 19.x with React DOM
- Vite for fast development
- ESLint with React-specific rules
- Tailwind CSS in select projects (app-aulas, aula-15)

## Key Files for Reference
- `README.md`: Course overview and navigation
- `modulo-01/README.md`: Detailed module structure
- `fluxo_sala_de_aula_parque_tecnologico/app-aulas/package.json`: Full React setup example
- `fluxo_sala_de_aula_parque_tecnologico/aula-28/src/`: TypeScript React patterns
- `fluxo_sala_de_aula_parque_tecnologico/aula-15/`: Tailwind integration example

## Integration Points
- No external APIs or databases; all examples are self-contained
- Static hosting assumed; no server-side components
- Browser-only execution; no Node.js backends

Focus on educational clarity over optimization. When adding features, maintain progressive complexity matching the aula sequence.