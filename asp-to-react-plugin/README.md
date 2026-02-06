# Classic ASP to React Modernization Plugin

A comprehensive Claude plugin for modernizing Classic ASP applications to modern React applications. This plugin provides intelligent reverse engineering, migration planning, and automated code migration with confidence scoring.

## 🎯 Overview

This plugin transforms legacy Classic ASP applications into modern React applications through a systematic three-phase approach:

1. **Reverse Engineering** - Analyze ASP code and generate comprehensive technical documentation
2. **Migration Planning** - Create detailed migration plans with component mapping
3. **Code Migration** - Perform automated migration with confidence scoring and citations

## 📋 Installation

```bash
# Install the plugin
claude plugins add /path/to/asp-to-react-plugin

# Install MCP server dependencies
cd mcp-servers/asp-analyzer && npm install
cd ../react-generator && npm install
```

## 🎯 Commands

### 1. `/reverse-engineer` - Analyze ASP Code

Reverse engineer Classic ASP files to generate comprehensive technical documentation.

**Features:**
- Scans ASP file and all dependencies
- Analyzes includes, child files, and database connections
- Identifies business logic, data flow, and UI components
- Generates detailed technical documentation

**Usage:**
```bash
/reverse-engineer Analyze the ASP file at ./legacy/user-management.asp
```

**Output:**
- Complete technical documentation
- Dependency tree
- Database schema analysis
- Business logic breakdown
- UI component identification

---

### 2. `/generate-plan` - Create Migration Plan

Generate a detailed migration plan based on reverse engineering output.

**Features:**
- Creates component-level migration strategy
- Maps ASP logic to React patterns
- Identifies reusable components
- Plans state management approach
- Defines API requirements

**Usage:**
```bash
/generate-plan Create migration plan from the technical documentation for user-management.asp
```

**Output:**
- Detailed migration roadmap
- Component hierarchy
- State management strategy
- API endpoint definitions
- Migration phases and timeline

---

### 3. `/migrate-asp-to-react` - Perform Migration

Execute the actual migration from ASP to React with confidence scoring.

**Features:**
- Migrates ASP code to React components
- Follows existing React standards
- Generates reusable components
- Includes confidence scores
- Provides TODO lists
- Citations to original ASP code

**Usage:**
```bash
/migrate-asp-to-react Migrate user-management.asp using the generated plan and technical documentation
```

**Output:**
- React components (functional with hooks)
- State management code
- API integration
- Confidence scores per component
- TODO list for manual review
- Citations linking React code to ASP source

---

### 4. `/capture-screenshot` - Webpage Capture

Capture high-quality screenshots of webpages for UI analysis and documentation.

**Features:**
- Full-page capture
- Responsive viewport options
- Automatically waits for network idle
- Saves in PNG format

**Usage:**
```bash
/capture-screenshot https://example.com landing-page.png
```

**Output:**
- PNG screenshot file
- Confirmation message with file path

---

## 🎓 Skills

### 1. `asp-analysis`
Expert knowledge in analyzing Classic ASP code, including:
- VBScript syntax and patterns
- ASP object model (Request, Response, Session, Application)
- Database connectivity (ADO, SQL)
- Include file dependencies
- Business logic extraction

### 2. `migration-planning`
Strategic planning for ASP to React migrations:
- Component decomposition
- State management patterns
- API design for backend separation
- Data flow analysis
- Migration risk assessment

### 3. `react-modernization`
Modern React development patterns:
- Functional components with hooks
- State management (Context, Redux)
- Component composition
- API integration
- TypeScript patterns
- Testing strategies
 
### 4. `web-capture`
Browser automation for UI documentation:
- Playwright-based screenshot capture
- Dynamic content handling
- Responsive design analysis
- Visual parity checking
 
---

## 📚 Example Workflow

### Complete Migration Workflow

```bash
# Step 1: Reverse Engineer ASP Application
/reverse-engineer Analyze ./legacy/customer-portal/login.asp including all dependencies

# Output: technical-doc-login.md

# Step 2: Generate Migration Plan
/generate-plan Create migration plan from technical-doc-login.md, considering:
- Existing React components in ./src/components
- Current state management (Redux)
- API patterns in ./src/api

# Output: migration-plan-login.md

# Step 3: Perform Migration
/migrate-asp-to-react Migrate login.asp using:
- Migration plan: migration-plan-login.md
- Technical doc: technical-doc-login.md
- ASP source: ./legacy/customer-portal/login.asp
- React standards: ./src/standards.md

# Output:
# - LoginPage.tsx (confidence: 95%)
# - LoginForm.tsx (confidence: 90%)
# - useAuth.ts (confidence: 85%)
# - api/auth.ts (confidence: 95%)
# - TODO.md (manual review items)
# - CITATIONS.md (ASP to React mapping)
```

---

## 🎯 Use Cases

### 1. Large-Scale ASP Application Modernization
Systematically migrate enterprise ASP applications to React with full traceability.

### 2. Incremental Migration
Migrate ASP pages one at a time while maintaining existing functionality.

### 3. Legacy Code Documentation
Generate comprehensive documentation for undocumented ASP applications.

### 4. Migration Risk Assessment
Analyze complexity and identify high-risk areas before migration.

---

## 📊 Output Examples

### Reverse Engineering Output

```markdown
# Technical Documentation: user-management.asp

## Overview
- **File**: user-management.asp
- **Purpose**: User CRUD operations and authentication
- **Dependencies**: 12 files
- **Database Tables**: Users, Roles, Permissions
- **Complexity**: High

## Dependencies
1. includes/db-connection.asp (Database connectivity)
2. includes/auth-check.asp (Authentication)
3. includes/header.asp (UI Header)
...

## Business Logic
### User Creation
- Validates email format
- Checks for duplicate users
- Hashes password (MD5)
- Assigns default role
...
```

### Migration Plan Output

```markdown
# Migration Plan: user-management.asp → React

## Component Structure
```
UserManagement/
├── UserManagementPage.tsx (Main container)
├── UserList.tsx (User listing)
├── UserForm.tsx (Create/Edit form)
├── UserDetails.tsx (View user)
└── hooks/
    └── useUsers.ts (User data management)
```

## State Management
- Use Redux for user list state
- Local state for form inputs
- React Query for API calls

## API Requirements
- GET /api/users (List users)
- POST /api/users (Create user)
- PUT /api/users/:id (Update user)
- DELETE /api/users/:id (Delete user)
...
```

### Migration Output

```typescript
// UserManagementPage.tsx
// Confidence: 95%
// Source: user-management.asp (lines 1-450)

import React from 'react';
import { UserList } from './UserList';
import { useUsers } from './hooks/useUsers';

export const UserManagementPage: React.FC = () => {
  // Migrated from: Session("UserID") check in user-management.asp:5-10
  const { users, loading, error } = useUsers();
  
  // TODO: Implement role-based access control (see CITATIONS.md #1)
  
  return (
    <div className="user-management">
      {/* Migrated from: HTML section in user-management.asp:50-100 */}
      <h1>User Management</h1>
      <UserList users={users} loading={loading} />
    </div>
  );
};
```

---

## 🔧 Configuration

### Customize Migration Standards

Create `migration-config.json`:

```json
{
  "reactVersion": "18.x",
  "typescript": true,
  "stateManagement": "redux",
  "styling": "styled-components",
  "apiClient": "axios",
  "testFramework": "jest",
  "componentStyle": "functional",
  "confidenceThreshold": 80
}
```

---

## 📈 Confidence Scoring

Each migrated component includes a confidence score:

- **95-100%**: Direct mapping, minimal manual review needed
- **85-94%**: Good migration, some edge cases to review
- **70-84%**: Moderate complexity, manual review recommended
- **Below 70%**: High complexity, significant manual work needed

---

## ✅ TODO List Format

```markdown
# TODO: User Management Migration

## High Priority
- [ ] Review password hashing migration (MD5 → bcrypt)
- [ ] Implement session management (ASP Session → JWT)
- [ ] Verify SQL injection prevention

## Medium Priority
- [ ] Add loading states for async operations
- [ ] Implement error boundaries
- [ ] Add accessibility attributes

## Low Priority
- [ ] Optimize re-renders
- [ ] Add animations
- [ ] Improve mobile responsiveness
```

---

## 📖 Citation Format

```markdown
# Citations: ASP to React Mapping

## LoginPage.tsx

### Line 15-25: Authentication Logic
**ASP Source**: login.asp, lines 45-67
```vbscript
If Request.Form("username") <> "" Then
    Set rs = conn.Execute("SELECT * FROM Users WHERE username='" & Request.Form("username") & "'")
    If Not rs.EOF Then
        Session("UserID") = rs("ID")
        Response.Redirect("dashboard.asp")
    End If
End If
```

**React Migration**:
```typescript
const handleLogin = async (username: string, password: string) => {
  const user = await authAPI.login({ username, password });
  dispatch(setUser(user));
  navigate('/dashboard');
};
```

**Confidence**: 90%
**Notes**: Migrated to async/await, added proper authentication
```

---

## 🎯 Best Practices

1. **Always start with reverse engineering** to understand the full scope
2. **Review the migration plan** before executing migration
3. **Check confidence scores** - manually review items below 85%
4. **Use TODO lists** to track manual work required
5. **Verify citations** to ensure business logic is preserved
6. **Test incrementally** after each migration

---

## 🚀 Advanced Features

### Batch Migration

```bash
/reverse-engineer Analyze all ASP files in ./legacy/admin-portal

/generate-plan Create comprehensive migration plan for admin portal

/migrate-asp-to-react Migrate entire admin portal following the plan
```

### Custom Component Mapping

```bash
/migrate-asp-to-react Migrate user-list.asp using:
- Existing component: ./src/components/DataTable.tsx for grid display
- Existing hook: ./src/hooks/usePagination.ts for pagination
- API pattern: ./src/api/base.ts for API calls
```

---

## 📚 Documentation

- [Reverse Engineering Guide](commands/reverse-engineer.md)
- [Migration Planning Guide](commands/generate-plan.md)
- [Migration Execution Guide](commands/migrate-asp-to-react.md)
- [ASP Analysis Skill](skills/asp-analysis/SKILL.md)
- [Migration Planning Skill](skills/migration-planning/SKILL.md)
- [React Modernization Skill](skills/react-modernization/SKILL.md)

---

## 🎊 Summary

This plugin provides a complete solution for modernizing Classic ASP applications to React:

✅ **Comprehensive Analysis** - Understand legacy code completely  
✅ **Strategic Planning** - Plan before you code  
✅ **Automated Migration** - Generate React code automatically  
✅ **Quality Assurance** - Confidence scores and citations  
✅ **Traceability** - Full mapping from ASP to React  

**Version**: 1.0.0  
**License**: Apache 2.0  
**Author**: Vijay Bharathy
