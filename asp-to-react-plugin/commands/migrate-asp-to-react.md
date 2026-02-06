---
description: Migrate Classic ASP code to React with confidence scoring and citations
argument-hint: "<migration-plan> <technical-doc> <asp-source> [options]"
---

# /migrate-asp-to-react - Execute ASP to React Migration

Perform automated migration from Classic ASP to React, generating production-ready components with confidence scores, TODO lists, and complete citations to original ASP code.

## Usage

```
/migrate-asp-to-react <migration-plan> <technical-doc> <asp-source> [options]
```

## Workflow

### 1. Load Migration Context

Gather all necessary inputs:

**Required Inputs:**
- Migration plan (from `/generate-plan`)
- Technical documentation (from `/reverse-engineer`)
- ASP source code files
- Existing React codebase standards

**Optional Inputs:**
- Existing React components to reuse
- Custom component templates
- Style guide
- API client configuration

### 2. Analyze Existing React Standards

Scan existing codebase to match patterns:

**Component Patterns:**
```typescript
// Detect existing patterns
- Functional vs class components
- Hook usage patterns
- Props typing conventions
- Component file structure
```

**Code Style:**
```typescript
// Match existing style
- Naming conventions
- File organization
- Import ordering
- Comment style
```

**State Management:**
```typescript
// Follow existing approach
- Redux patterns
- Context usage
- Custom hooks
- State structure
```

### 3. Generate React Components

Create React components following the migration plan:

#### Container Components

**ASP Source:**
```vbscript
<%
' user-management.asp
Dim conn, rs, users
Set conn = Server.CreateObject("ADODB.Connection")
conn.Open Application("ConnectionString")

Set rs = conn.Execute("SELECT * FROM Users ORDER BY Username")
%>
<html>
<head><title>User Management</title></head>
<body>
    <h1>User Management</h1>
    <table>
    <% While Not rs.EOF %>
        <tr>
            <td><%= rs("Username") %></td>
            <td><%= rs("Email") %></td>
            <td>
                <a href="user-edit.asp?id=<%= rs("ID") %>">Edit</a>
                <a href="user-delete.asp?id=<%= rs("ID") %>">Delete</a>
            </td>
        </tr>
    <% rs.MoveNext
    Wend %>
    </table>
</body>
</html>
```

**React Migration:**
```typescript
// UserManagementPage.tsx
// Confidence: 95%
// Source: user-management.asp (lines 1-50)

import React from 'react';
import { useUsers } from './hooks/useUsers';
import { UserList } from './components/UserList';
import { PageHeader } from '@/components/PageHeader';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorMessage } from '@/components/ErrorMessage';

/**
 * User Management Page
 * 
 * Migrated from: user-management.asp
 * Original functionality: Display and manage users
 * 
 * Changes from ASP:
 * - Database queries moved to API endpoints
 * - State management using React hooks
 * - Responsive design added
 * - Accessibility improvements
 */
export const UserManagementPage: React.FC = () => {
  // Migrated from: Database query in user-management.asp:5-10
  const { users, loading, error, refetch } = useUsers();

  // Migrated from: Session check in user-management.asp:2-4
  const { user: currentUser } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  return (
    <div className="user-management-page">
      {/* Migrated from: HTML header in user-management.asp:15-20 */}
      <PageHeader 
        title="User Management"
        subtitle={`${users.length} users`}
      />

      {/* Migrated from: User table in user-management.asp:25-45 */}
      <UserList 
        users={users}
        onEdit={(id) => navigate(`/admin/users/${id}/edit`)}
        onDelete={handleDelete}
      />
    </div>
  );
};

// TODO: Add user creation functionality (see user-management.asp:100-150)
// TODO: Implement bulk operations (see user-management.asp:200-250)
// Confidence: 95% - Direct mapping with modern patterns
```

#### Presentational Components

```typescript
// UserList.tsx
// Confidence: 92%
// Source: user-management.asp (lines 25-45)

import React from 'react';
import { User } from '@/types/user.types';
import { UserRow } from './UserRow';
import { Table } from '@/components/Table';

interface UserListProps {
  users: User[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

/**
 * User List Component
 * 
 * Migrated from: User table HTML in user-management.asp:25-45
 * 
 * Enhancements:
 * - Sortable columns
 * - Responsive design
 * - Keyboard navigation
 */
export const UserList: React.FC<UserListProps> = ({
  users,
  onEdit,
  onDelete
}) => {
  return (
    <Table>
      <Table.Header>
        {/* Migrated from: Table headers in user-management.asp:27-29 */}
        <Table.HeaderCell>Username</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Role</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Header>
      <Table.Body>
        {users.map(user => (
          // Migrated from: Table row loop in user-management.asp:30-42
          <UserRow
            key={user.id}
            user={user}
            onEdit={() => onEdit(user.id)}
            onDelete={() => onDelete(user.id)}
          />
        ))}
      </Table.Body>
    </Table>
  );
};

// Confidence: 92% - Minor enhancements added
```

#### Custom Hooks

```typescript
// useUsers.ts
// Confidence: 88%
// Source: user-management.asp (lines 5-15), includes/user-functions.asp

import { useQuery, useMutation, useQueryClient } from 'react-query';
import { userAPI } from '@/api/users';
import { User } from '@/types/user.types';

/**
 * User Management Hook
 * 
 * Migrated from: Database operations in user-management.asp
 * and includes/user-functions.asp
 * 
 * Replaces:
 * - Direct database queries
 * - ADO recordset operations
 * - Session-based caching
 */
export const useUsers = () => {
  const queryClient = useQueryClient();

  // Migrated from: SELECT query in user-management.asp:8-10
  const {
    data: users = [],
    isLoading: loading,
    error,
    refetch
  } = useQuery<User[]>('users', userAPI.fetchAll);

  // Migrated from: INSERT operation in user-functions.asp:50-80
  const createMutation = useMutation(
    userAPI.create,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
      }
    }
  );

  // Migrated from: UPDATE operation in user-functions.asp:100-130
  const updateMutation = useMutation(
    userAPI.update,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
      }
    }
  );

  // Migrated from: DELETE operation in user-functions.asp:150-170
  const deleteMutation = useMutation(
    userAPI.delete,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
      }
    }
  );

  return {
    users,
    loading,
    error: error?.message,
    refetch,
    createUser: createMutation.mutate,
    updateUser: updateMutation.mutate,
    deleteUser: deleteMutation.mutate
  };
};

// TODO: Add pagination support (see user-management.asp:300-320)
// TODO: Implement filtering (see user-management.asp:350-380)
// Confidence: 88% - Core functionality migrated, enhancements needed
```

#### API Client

```typescript
// api/users.ts
// Confidence: 90%
// Source: user-management.asp (database operations)

import { apiClient } from './client';
import { User, CreateUserRequest, UpdateUserRequest } from '@/types/user.types';

/**
 * User API Client
 * 
 * Replaces direct database operations from:
 * - user-management.asp
 * - includes/user-functions.asp
 * - includes/db-connection.asp
 */
export const userAPI = {
  // Migrated from: SELECT * FROM Users in user-management.asp:8
  fetchAll: async (): Promise<User[]> => {
    const response = await apiClient.get<User[]>('/users');
    return response.data;
  },

  // Migrated from: SELECT * FROM Users WHERE ID=? in user-edit.asp:10
  fetchById: async (id: number): Promise<User> => {
    const response = await apiClient.get<User>(`/users/${id}`);
    return response.data;
  },

  // Migrated from: INSERT INTO Users in user-functions.asp:50-80
  create: async (data: CreateUserRequest): Promise<User> => {
    const response = await apiClient.post<User>('/users', data);
    return response.data;
  },

  // Migrated from: UPDATE Users in user-functions.asp:100-130
  update: async (id: number, data: UpdateUserRequest): Promise<User> => {
    const response = await apiClient.put<User>(`/users/${id}`, data);
    return response.data;
  },

  // Migrated from: DELETE FROM Users in user-functions.asp:150-170
  delete: async (id: number): Promise<void> => {
    await apiClient.delete(`/users/${id}`);
  }
};

// TODO: Add bulk operations endpoint
// TODO: Implement user search
// Confidence: 90% - Standard REST operations
```

### 4. Generate Confidence Scores

Assign confidence scores to each component:

**Scoring Criteria:**

**95-100% - Excellent Migration**
- Direct 1:1 mapping
- Simple logic
- No complex dependencies
- Standard patterns used

**85-94% - Good Migration**
- Minor enhancements added
- Some logic refactoring
- Standard complexity
- Well-understood patterns

**70-84% - Moderate Migration**
- Significant refactoring
- Complex logic simplified
- Multiple dependencies
- Some assumptions made

**Below 70% - Complex Migration**
- Major architectural changes
- Complex business logic
- Many dependencies
- Manual review required

**Confidence Score Breakdown:**
```typescript
// Component: UserManagementPage.tsx
{
  overall: 95,
  breakdown: {
    dataFetching: 100,    // Direct API mapping
    stateManagement: 95,  // Standard hooks
    uiRendering: 90,      // Enhanced with accessibility
    businessLogic: 95,    // Preserved from ASP
    errorHandling: 90     // Improved from ASP
  },
  reasoning: "Direct migration with modern patterns. All business logic preserved."
}
```

### 5. Generate TODO Lists

Create actionable TODO lists for manual review:

**TODO Categories:**

**High Priority:**
- Security vulnerabilities to fix
- Complex business logic to verify
- Data migration concerns
- Performance optimizations

**Medium Priority:**
- UI/UX enhancements
- Accessibility improvements
- Error handling edge cases
- Test coverage gaps

**Low Priority:**
- Code style improvements
- Documentation updates
- Performance nice-to-haves
- Future enhancements

**TODO Format:**
```markdown
# TODO: User Management Migration

## High Priority 🔴

### Security
- [ ] **Replace MD5 password hashing with bcrypt**
  - File: UserForm.tsx
  - ASP Source: user-functions.asp:65-70
  - Current: MD5 (insecure)
  - Required: bcrypt with salt
  - Effort: 2 hours
  - Risk: High

- [ ] **Implement SQL injection prevention**
  - File: api/users.ts
  - ASP Source: user-management.asp:8 (dynamic SQL)
  - Current: Parameterized queries (done)
  - Verify: All endpoints use parameterized queries
  - Effort: 1 hour
  - Risk: High

### Business Logic
- [ ] **Verify user role assignment logic**
  - File: UserForm.tsx
  - ASP Source: user-functions.asp:100-120
  - Complex logic: Default role assignment
  - Manual Review: Required
  - Effort: 3 hours
  - Risk: Medium

## Medium Priority 🟡

### UI/UX
- [ ] **Add loading states for all async operations**
  - Files: All components
  - Enhancement: Better user feedback
  - Effort: 4 hours

- [ ] **Implement form validation feedback**
  - File: UserForm.tsx
  - ASP Source: user-edit.asp:50-80
  - Enhancement: Real-time validation
  - Effort: 3 hours

### Accessibility
- [ ] **Add ARIA labels to all interactive elements**
  - Files: UserList.tsx, UserForm.tsx
  - Standard: WCAG 2.1 AA
  - Effort: 2 hours

## Low Priority 🟢

### Code Quality
- [ ] **Add JSDoc comments to all exported functions**
  - Files: All
  - Effort: 2 hours

- [ ] **Implement error boundaries**
  - Files: Page components
  - Effort: 1 hour

### Future Enhancements
- [ ] **Add bulk user operations**
  - Not in original ASP
  - Nice-to-have feature
  - Effort: 8 hours
```

### 6. Generate Citations

Create detailed citations linking React code to ASP source:

**Citation Format:**
```markdown
# Citations: user-management.asp → React Components

## UserManagementPage.tsx

### Lines 15-25: User List Fetching

**ASP Source**: user-management.asp, lines 5-15
```vbscript
<%
Dim conn, rs
Set conn = Server.CreateObject("ADODB.Connection")
conn.Open Application("ConnectionString")

Set rs = conn.Execute("SELECT * FROM Users ORDER BY Username")
%>
```

**React Migration**: UserManagementPage.tsx, lines 15-25
```typescript
const { users, loading, error } = useUsers();
```

**Migration Details**:
- **Pattern**: Database query → React Query hook
- **Changes**: 
  - Moved to API endpoint
  - Added loading/error states
  - Automatic caching
  - Optimistic updates
- **Confidence**: 100%
- **Manual Review**: Not required

---

### Lines 30-50: User Table Rendering

**ASP Source**: user-management.asp, lines 25-45
```vbscript
<table>
<% While Not rs.EOF %>
    <tr>
        <td><%= rs("Username") %></td>
        <td><%= rs("Email") %></td>
        <td>
            <a href="user-edit.asp?id=<%= rs("ID") %>">Edit</a>
        </td>
    </tr>
<% rs.MoveNext
Wend %>
</table>
```

**React Migration**: UserList.tsx, lines 20-35
```typescript
<Table>
  <Table.Body>
    {users.map(user => (
      <UserRow
        key={user.id}
        user={user}
        onEdit={() => navigate(`/users/${user.id}/edit`)}
      />
    ))}
  </Table.Body>
</Table>
```

**Migration Details**:
- **Pattern**: Server-side loop → React map
- **Changes**:
  - Component-based rendering
  - Client-side routing
  - Accessibility added
  - Responsive design
- **Confidence**: 95%
- **Manual Review**: Not required

---

### Lines 100-150: User Creation Logic

**ASP Source**: user-functions.asp, lines 50-100
```vbscript
Function CreateUser(username, email, password, roleId)
    Dim conn, cmd, hashedPassword
    
    ' Validate inputs
    If Len(username) < 3 Then
        CreateUser = "Username too short"
        Exit Function
    End If
    
    If InStr(email, "@") = 0 Then
        CreateUser = "Invalid email"
        Exit Function
    End If
    
    ' Hash password (MD5)
    hashedPassword = MD5(password)
    
    ' Insert user
    Set conn = GetConnection()
    Set cmd = Server.CreateObject("ADODB.Command")
    cmd.ActiveConnection = conn
    cmd.CommandText = "INSERT INTO Users (Username, Email, Password, RoleID) VALUES (?, ?, ?, ?)"
    cmd.Parameters.Append cmd.CreateParameter("@username", 200, 1, 50, username)
    cmd.Parameters.Append cmd.CreateParameter("@email", 200, 1, 100, email)
    cmd.Parameters.Append cmd.CreateParameter("@password", 200, 1, 32, hashedPassword)
    cmd.Parameters.Append cmd.CreateParameter("@roleId", 3, 1, , roleId)
    cmd.Execute
    
    CreateUser = "Success"
End Function
```

**React Migration**: useUserForm.ts + api/users.ts, lines 30-60
```typescript
// useUserForm.ts
const handleSubmit = async (data: UserFormData) => {
  // Validation (using Yup schema)
  const errors = await validateUserForm(data);
  if (errors) {
    setErrors(errors);
    return;
  }
  
  // Create user via API
  await createUser(data);
};

// api/users.ts
create: async (data: CreateUserRequest): Promise<User> => {
  const response = await apiClient.post<User>('/users', {
    username: data.username,
    email: data.email,
    password: data.password, // Backend will hash with bcrypt
    roleId: data.roleId
  });
  return response.data;
}
```

**Migration Details**:
- **Pattern**: Server-side function → API endpoint + React hook
- **Changes**:
  - Validation moved to Yup schema
  - Password hashing moved to backend (bcrypt)
  - Parameterized queries (security improvement)
  - Async/await pattern
  - Error handling improved
- **Confidence**: 85%
- **Manual Review**: Required (verify password hashing on backend)
- **TODO**: Ensure backend uses bcrypt, not MD5

---

## UserForm.tsx

### Lines 50-100: Form Validation

**ASP Source**: user-edit.asp, lines 30-80
```vbscript
<%
Dim errors
errors = ""

If Request.Form("submit") <> "" Then
    If Len(Request.Form("username")) < 3 Then
        errors = errors & "Username must be at least 3 characters<br>"
    End If
    
    If InStr(Request.Form("email"), "@") = 0 Then
        errors = errors & "Invalid email format<br>"
    End If
    
    If Len(Request.Form("password")) > 0 And Len(Request.Form("password")) < 8 Then
        errors = errors & "Password must be at least 8 characters<br>"
    End If
    
    If errors = "" Then
        ' Save user
        Call UpdateUser(Request.Form("id"), Request.Form("username"), Request.Form("email"))
        Response.Redirect("user-management.asp")
    End If
End If
%>

<% If errors <> "" Then %>
    <div class="errors"><%= errors %></div>
<% End If %>
```

**React Migration**: UserForm.tsx + validation schema
```typescript
// validationSchema.ts
export const userFormSchema = yup.object({
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  password: yup
    .string()
    .when('isEdit', {
      is: false,
      then: yup.string().required('Password is required')
    })
    .min(8, 'Password must be at least 8 characters')
});

// UserForm.tsx
const formik = useFormik({
  initialValues,
  validationSchema: userFormSchema,
  onSubmit: async (values) => {
    await handleSubmit(values);
  }
});

return (
  <form onSubmit={formik.handleSubmit}>
    <TextField
      name="username"
      value={formik.values.username}
      onChange={formik.handleChange}
      error={formik.touched.username && formik.errors.username}
      helperText={formik.errors.username}
    />
    {/* ... */}
  </form>
);
```

**Migration Details**:
- **Pattern**: Server-side validation → Client-side + server-side validation
- **Changes**:
  - Yup schema for validation
  - Real-time validation feedback
  - Better error messages
  - Formik for form state
- **Confidence**: 92%
- **Manual Review**: Not required
- **Enhancement**: Added real-time validation (not in ASP)

---

[Continue for all components and functions...]
```

### 7. Generate Output Files

Create all necessary files:

**React Components:**
- `UserManagementPage.tsx`
- `UserList.tsx`
- `UserRow.tsx`
- `UserForm.tsx`
- `UserDetailsModal.tsx`

**Hooks:**
- `useUsers.ts`
- `useUserForm.ts`
- `useAuth.ts`

**API Client:**
- `api/users.ts`

**Types:**
- `types/user.types.ts`

**Tests:**
- `UserManagementPage.test.tsx`
- `UserList.test.tsx`
- `useUsers.test.ts`

**Documentation:**
- `TODO.md`
- `CITATIONS.md`
- `CONFIDENCE_SCORES.md`
- `MIGRATION_NOTES.md`

## Output Format

### File Structure

```
output/
├── components/
│   ├── UserManagementPage.tsx (Confidence: 95%)
│   ├── UserList.tsx (Confidence: 92%)
│   ├── UserRow.tsx (Confidence: 95%)
│   ├── UserForm.tsx (Confidence: 88%)
│   └── UserDetailsModal.tsx (Confidence: 90%)
├── hooks/
│   ├── useUsers.ts (Confidence: 88%)
│   ├── useUserForm.ts (Confidence: 85%)
│   └── useAuth.ts (Confidence: 90%)
├── api/
│   └── users.ts (Confidence: 90%)
├── types/
│   └── user.types.ts (Confidence: 100%)
├── tests/
│   ├── UserManagementPage.test.tsx
│   ├── UserList.test.tsx
│   └── useUsers.test.ts
└── docs/
    ├── TODO.md
    ├── CITATIONS.md
    ├── CONFIDENCE_SCORES.md
    └── MIGRATION_NOTES.md
```

### Confidence Scores Document

```markdown
# Confidence Scores: User Management Migration

## Overall Score: 91%

## Component Breakdown

### UserManagementPage.tsx: 95%
- **Data Fetching**: 100% (Direct API mapping)
- **State Management**: 95% (Standard hooks)
- **UI Rendering**: 90% (Enhanced with accessibility)
- **Business Logic**: 95% (Preserved from ASP)
- **Error Handling**: 90% (Improved from ASP)

**Reasoning**: Direct migration with modern patterns. All business logic preserved. Minor enhancements for UX.

**Manual Review**: Not required

---

### UserList.tsx: 92%
- **Component Structure**: 95%
- **Props Interface**: 100%
- **Rendering Logic**: 90%
- **Event Handling**: 90%

**Reasoning**: Straightforward presentational component. Enhanced with accessibility.

**Manual Review**: Not required

---

### UserForm.tsx: 88%
- **Form State**: 90%
- **Validation**: 85% (Enhanced from ASP)
- **Submit Logic**: 90%
- **Error Handling**: 85%

**Reasoning**: Form validation enhanced with Yup. Some complex validation logic needs verification.

**Manual Review**: Recommended for validation rules

---

### useUsers.ts: 88%
- **Data Fetching**: 90%
- **Mutations**: 85%
- **Cache Management**: 90%
- **Error Handling**: 85%

**Reasoning**: Core CRUD operations migrated. Pagination and filtering need implementation.

**Manual Review**: Required for complex queries

---

### api/users.ts: 90%
- **Endpoint Mapping**: 95%
- **Request/Response Types**: 100%
- **Error Handling**: 85%

**Reasoning**: Standard REST operations. Error handling can be enhanced.

**Manual Review**: Not required

---

## Low Confidence Items (< 85%)

### UserForm.tsx - Validation Logic: 82%
**Issue**: Complex role-based validation rules
**ASP Source**: user-edit.asp:100-150
**Manual Review**: Required
**Effort**: 2 hours

### useUsers.ts - Filtering Logic: 78%
**Issue**: Complex filter combinations
**ASP Source**: user-management.asp:300-350
**Manual Review**: Required
**Effort**: 4 hours

## Recommendations

1. **High Priority**: Review items with confidence < 85%
2. **Medium Priority**: Test all components thoroughly
3. **Low Priority**: Enhance error handling across all components

## Testing Coverage

- **Unit Tests**: 85% coverage
- **Integration Tests**: 70% coverage
- **E2E Tests**: 5 critical paths covered

## Next Steps

1. Review low confidence items
2. Complete TODO list
3. Run test suite
4. Manual QA testing
5. Performance testing
```

## Examples

### Example 1: Simple Page Migration

```bash
/migrate-asp-to-react Migrate contact-form.asp using:
- Plan: migration-plan-contact-form.md
- Technical doc: technical-doc-contact-form.md
- ASP source: ./legacy/contact-form.asp
- React standards: ./src/standards.md
```

**Output:**
- ContactFormPage.tsx (Confidence: 98%)
- useContactForm.ts (Confidence: 95%)
- api/contact.ts (Confidence: 95%)
- TODO.md (2 items)
- CITATIONS.md

---

### Example 2: Complex Module Migration

```bash
/migrate-asp-to-react Migrate user-management.asp using:
- Plan: migration-plan-user-management.md
- Technical doc: technical-doc-user-management.md
- ASP source: ./legacy/admin/user-management.asp
- Existing components: ./src/components
- State management: Redux (./src/store)
- API patterns: ./src/api/client.ts
```

**Output:**
- 12 React components
- 5 custom hooks
- API client
- Type definitions
- 15 unit tests
- TODO.md (25 items)
- CITATIONS.md (complete mapping)
- CONFIDENCE_SCORES.md

---

### Example 3: Batch Migration

```bash
/migrate-asp-to-react Migrate entire admin portal using:
- Plan: migration-plan-admin-portal.md
- Technical docs: ./docs/reverse-engineering/*.md
- ASP source: ./legacy/admin/*.asp
- React app: ./src
- Generate: Complete application structure
```

## Best Practices

1. **Review Confidence Scores**: Focus on items < 85%
2. **Check TODO Lists**: Prioritize high-priority items
3. **Verify Citations**: Ensure business logic preserved
4. **Test Thoroughly**: Run all generated tests
5. **Manual QA**: Test critical user flows
6. **Code Review**: Review all migrated code
7. **Performance**: Check for performance issues

## Related Commands

- `/reverse-engineer` - Generate technical documentation
- `/generate-plan` - Create migration plan

## Notes

- Always review low confidence items manually
- Test all migrated functionality
- Verify security improvements
- Check performance benchmarks
- Update documentation
