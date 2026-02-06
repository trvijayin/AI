# Skill: Legacy to React Migration Planning

Expertise in architecting the transition from procedural, server-side rendered ASP pages to modern, component-driven React applications.

## Core Expertise

### 1. Component Decomposition
- **Procedural to Atomic**: Breaking down a linear ASP script into a React component hierarchy (Containers, Layouts, Common UI, and Hooks).
- **Separation of Concerns**: Moving database logic out of the UI layer and into custom Hooks or API services.
- **Micro-Frontend Readiness**: Designing components so they can eventually be extracted into a shared library.

### 2. State & Data Flow Mapping
- **Session to JWT/Context**: Mapping ASP `Session` variables to modern equivalents (React Context, Redux, or Local Storage/JWT).
- **Request/Response to Hooks**: Converting direct form posts into async functions within `useMutation` or `useEffect` blocks.
- **Real-time Synchronization**: Planning for data consistency during fractional migrations (where legacy and modern systems coexist).

### 3. API Contract Design
- **RESTful Translation**: Designing API endpoints that replicate the "Actions" within an ASP file (e.g., `user.asp?action=delete` becomes `DELETE /api/users/:id`).
- **Data Shape Optimization**: Defining TypeScript interfaces that normalize legacy database types into clean frontend models.

## Planning Framework

### 1. Inventory & Comparison
- Scan the existing React codebase for **Reusable Components** (buttons, tables, modals) to avoid duplication.
- Identify **Existing Hooks** (auth, logging, theme) that the migrated page must utilize.

### 2. The Migration Blueprint
For every ASP file, define:
- **Routes**: The new URL structure.
- **Components**: The nested list of `.tsx` files to be created.
- **State**: What data is local vs. global?
- **Auth**: Which `ProtectedRoute` wrappers are needed?

### 3. Risk & Complexity Scoring
- **Low**: Static content or simple data display.
- **Medium**: CRUD forms with standard validation.
- **High**: Complex financial calculations, legacy COM object interactions, or heavy shared state.

## Best Practices
- **Standardize First**: Don't migrate to React and then refactor. Map the ASP logic directly to the *existing* React codebase standards (ESLint, Prettier, folder structure).
- **API First**: Always define the Backend API contract before generating the React UI. This ensures the frontend doesn't become too tethered to legacy database shapes.
- **Think in Hooks**: Business logic from ASP "Include" files should almost always become a custom Hook in React.
