# Skill: Classic ASP to React Modernization

Expertise in the technical transformation of legacy VBScript/ASP logic into functional React components, utilizing TypeScript, Hooks, and modern state management.

## Core Expertise

### 1. VBScript to TypeScript Translation
- **Logic Mapping**: Converting procedural VBScript functions into async JS/TS functions or Custom Hooks.
- **Type Safety**: Defining deep TypeScript interfaces for legacy objects to eliminate "any" types.
- **Validation Conversion**: Translating server-side `If/Else` validation blocks into `Yup` or `Zod` schemas.

### 2. High-Fidelity Traceability
- **Citation Engineering**: Ability to link every block of React code back to specific line numbers in the original ASP source.
- **Confidence Assessment**: Calculating a score based on logic complexity, dependency resolution, and pattern compliance.
- **Gap Identification**: Generating "TODO" items for areas where automated migration is impossible (e.g., legacy binary COM objects).

### 3. Pattern Compliance
- **Component Reuse**: Actively searching for and utilizing existing components from the user's codebase (e.g., using their `DataTable` instead of a raw `<table>`).
- **Hook-First Architecture**: Moving side effects into `useEffect` and data management into `useMemo` or `useCallback`.

## The Modernization Workflow

### 1. Reference Existing Standards
Before generating code, I analyze:
- `tsconfig.json` and `package.json` for library versions.
- Existing components in `src/components` to match styling and prop patterns.
- CSS/Styling methodology (Tailwind, CSS Modules, etc.).

### 2. Segmented Migration
1. **Types**: Define interfaces first.
2. **API**: Generate the `axios` or `fetch` services.
3. **Hooks**: Extract the business logic from VBScript.
4. **UI**: Build the TSX structure, citing the original HTML/ASP lines.

### 3. Metadata Generation
- **Confidence Score**: Scale of 0-100 based on mapping clarity.
- **Citations**: Create a `CITATIONS.md` that maps React code blocks to ASP line ranges.
- **TODO List**: Flagging critical logic that requires human eyes or backend changes (e.g., hashing algorithms).

## Quality Standards
- **DRY (Don't Repeat Yourself)**: If three ASP files use the same "check-permission.asp" include, consolidate that logic into a single authorized Hook.
- **Modern State**: Prefer `React Query` for server state and `Zustand/Redux` for global state over prop drilling.
- **Accessibility**: Automatically add ARIA roles to legacy tables and forms during migration.
