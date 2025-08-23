# Todo List Practice App

This is a Todo List application built with **React**, **TypeScript**, and **Vite**. It demonstrates modern React architecture using context, hooks, and modular components, with a focus on clean code and scalability.

## Features

- Add, edit, delete, and filter todos
- Search todos
- Error and loading states
- Context API for global state management
- Modular component structure (atoms, molecules, organisms, templates)
- TypeScript for type safety
- ESLint for code quality

## Project Structure

```
src/
  assets/styles/         # CSS styles
  components/
   atoms/               # Basic UI elements (Button, Input)
   molecules/           # Composed UI elements (AddTodoForm, TodoItem, etc.)
   organisms/           # Complex UI sections (TodosHeader, TodosList)
   templates/           # Layout templates
  context/               # App and Todos context providers
  hooks/                 # Custom hooks for store, todo logic, queries
  schemas/               # Validation schemas
  services/              # API service for todos
  store/                 # Redux store and slices
  types/                 # Type definitions
  utils/                 # Helper functions
public/                   # Static assets
```

## Getting Started

1. **Install dependencies**

```bash
yarn install
# or
npm install
```

2. **Run the development server**

```bash
yarn dev
# or
npm run dev
```

3. **Open in browser**
   Visit [http://localhost:5173](http://localhost:5173) to view the app.

## Scripts

- `dev` – Start development server
- `build` – Build for production
- `preview` – Preview production build
- `lint` – Run ESLint

## ESLint & TypeScript

The project uses ESLint and TypeScript for code quality and type safety. You can expand ESLint rules in `eslint.config.js` as needed.

## License

MIT
