---
description: Generate detailed migration plan from ASP technical documentation
argument-hint: "<technical-doc-path> [options]"
---

# /generate-plan - Create Migration Plan

Generate a comprehensive migration plan for converting Classic ASP to React based on reverse engineering documentation and existing React codebase standards.

## Usage

```
/generate-plan <technical-doc-path> [options]
```

## Workflow

### 1. Analyze Technical Documentation

Review the reverse engineering output:

- **Business Logic**: Understand what needs to be preserved
- **Data Flow**: Map input/output patterns
- **Dependencies**: Identify shared components
- **Complexity**: Assess migration difficulty
- **Security**: Note security requirements

### 2. Analyze Existing React Codebase

Scan existing React application to understand:

**Component Patterns:**
```typescript
// Identify existing patterns
- Functional components with hooks
- Class components (legacy)
- HOCs and render props
- Component composition patterns
```

**State Management:**
```typescript
// Current state management approach
- Redux/Redux Toolkit
- Context API
- React Query
- Local state patterns
```

**Styling Approach:**
```typescript
// Styling methodology
- CSS Modules
- Styled Components
- Tailwind CSS
- Material-UI/Ant Design
```

**API Integration:**
```typescript
// API patterns
- Axios/Fetch
- API client structure
- Error handling
- Authentication
```

### 3. Component Decomposition

Break down ASP page into React components:

**Identify Component Hierarchy:**
```
ASP Page → React Component Tree

user-management.asp
├── UserManagementPage (Container)
│   ├── UserListSection
│   │   ├── UserTable
│   │   │   ├── UserRow
│   │   │   └── UserActions
│   │   └── Pagination
│   ├── UserFormSection
│   │   ├── UserForm
│   │   │   ├── PersonalInfoFields
│   │   │   ├── ContactFields
│   │   │   └── RoleSelector
│   │   └── FormActions
│   └── UserDetailsModal
│       ├── UserInfo
│       └── ActivityLog
```

**Component Responsibilities:**
- **Container Components**: Data fetching, state management
- **Presentational Components**: UI rendering
- **Form Components**: Input handling, validation
- **Utility Components**: Shared UI elements

### 4. State Management Strategy

Define state management approach:

**Global State (Redux/Context):**
```typescript
// User management state
interface UserState {
  users: User[];
  selectedUser: User | null;
  filters: UserFilters;
  pagination: PaginationState;
  loading: boolean;
  error: string | null;
}
```

**Local Component State:**
```typescript
// Form state
const [formData, setFormData] = useState<UserFormData>({});
const [errors, setErrors] = useState<FormErrors>({});
const [isSubmitting, setIsSubmitting] = useState(false);
```

**Server State (React Query):**
```typescript
// API data caching
const { data: users, isLoading, error } = useQuery('users', fetchUsers);
const mutation = useMutation(createUser);
```

### 5. API Design

Design RESTful APIs to replace ASP backend logic:

**Endpoint Mapping:**
```
ASP Logic → REST API

user-management.asp?action=list
→ GET /api/users?page=1&limit=20

user-management.asp?action=create (POST)
→ POST /api/users

user-management.asp?action=update&id=123 (POST)
→ PUT /api/users/123

user-management.asp?action=delete&id=123
→ DELETE /api/users/123
```

**API Specifications:**
```typescript
// Request/Response types
interface CreateUserRequest {
  username: string;
  email: string;
  password: string;
  roleId: number;
}

interface UserResponse {
  id: number;
  username: string;
  email: string;
  role: Role;
  createdAt: string;
  updatedAt: string;
}
```

### 6. Data Migration Strategy

Plan data transformation:

**ASP Session → JWT/Cookies:**
```
Session("UserID") → JWT token with user claims
Session("Role") → Included in JWT payload
```

**ASP Application State → Redis/Database:**
```
Application("ActiveUsers") → Redis cache
Application("Settings") → Database configuration
```

**Form Data:**
```
Request.Form("field") → React controlled inputs
Request.QueryString("param") → URL parameters (React Router)
```

### 7. Routing Strategy

Map ASP pages to React routes:

```typescript
// Route mapping
const routes = [
  {
    asp: '/admin/user-management.asp',
    react: '/admin/users',
    component: 'UserManagementPage'
  },
  {
    asp: '/admin/user-edit.asp?id=:id',
    react: '/admin/users/:id/edit',
    component: 'UserEditPage'
  }
];
```

### 8. Authentication & Authorization

Migrate ASP authentication to modern approach:

**ASP Authentication:**
```vbscript
If Session("UserID") = "" Then
    Response.Redirect("login.asp")
End If
```

**React Authentication:**
```typescript
// Protected route
<ProtectedRoute 
  path="/admin/users" 
  component={UserManagementPage}
  requiredRole="admin"
/>

// Auth hook
const { user, isAuthenticated } = useAuth();
```

### 9. Testing Strategy

Define testing approach:

**Unit Tests:**
- Component rendering
- Hook logic
- Utility functions
- Form validation

**Integration Tests:**
- API integration
- State management
- User workflows

**E2E Tests:**
- Critical user journeys
- Authentication flows
- CRUD operations

### 10. Migration Phases

Break migration into manageable phases:

**Phase 1: Foundation (Week 1-2)**
- Set up React project structure
- Implement authentication
- Create base components
- Set up API client

**Phase 2: Core Features (Week 3-4)**
- Migrate main pages
- Implement state management
- Create API endpoints
- Basic testing

**Phase 3: Advanced Features (Week 5-6)**
- Complex business logic
- Advanced UI components
- Comprehensive testing
- Performance optimization

**Phase 4: Polish & Deploy (Week 7-8)**
- Bug fixes
- UI/UX improvements
- Documentation
- Deployment

## Output Format

### Migration Plan Document

```markdown
# Migration Plan: [ASP File] → React

## Executive Summary
- **Source**: user-management.asp
- **Target**: React application
- **Complexity**: High
- **Estimated Effort**: 6-8 weeks
- **Risk Level**: Medium
- **Dependencies**: 15 files

## Component Architecture

### Component Hierarchy
```
UserManagementPage/
├── components/
│   ├── UserList/
│   │   ├── UserList.tsx
│   │   ├── UserTable.tsx
│   │   ├── UserRow.tsx
│   │   └── UserActions.tsx
│   ├── UserForm/
│   │   ├── UserForm.tsx
│   │   ├── PersonalInfoSection.tsx
│   │   └── RoleSelector.tsx
│   └── UserDetails/
│       └── UserDetailsModal.tsx
├── hooks/
│   ├── useUsers.ts
│   ├── useUserForm.ts
│   └── useUserFilters.ts
├── api/
│   └── users.ts
├── types/
│   └── user.types.ts
└── UserManagementPage.tsx
```

### Component Specifications

#### UserManagementPage.tsx
**Purpose**: Main container component
**State**: User list, filters, pagination
**Props**: None
**Hooks**: useUsers, useAuth
**Complexity**: Medium

**ASP Source Mapping**:
- Lines 1-50: Page initialization → useEffect
- Lines 51-100: User list display → UserList component
- Lines 101-150: Form handling → UserForm component

#### UserList.tsx
**Purpose**: Display user list with filtering
**State**: Selected users, sort order
**Props**: users, onEdit, onDelete
**Complexity**: Low

**ASP Source Mapping**:
- Lines 200-250: User table HTML → UserTable component
- Lines 251-280: Pagination → Pagination component

[Continue for all components...]

## State Management

### Redux Store Structure
```typescript
interface RootState {
  auth: AuthState;
  users: UserState;
  ui: UIState;
}

interface UserState {
  list: User[];
  selectedUser: User | null;
  filters: UserFilters;
  pagination: {
    page: number;
    pageSize: number;
    total: number;
  };
  loading: boolean;
  error: string | null;
}
```

### Actions
- fetchUsers
- createUser
- updateUser
- deleteUser
- setFilters
- setPagination

### Reducers
- usersReducer
- Handle loading states
- Handle errors
- Update pagination

## API Endpoints

### User Management API

#### GET /api/users
**Purpose**: Fetch user list
**Query Parameters**:
- page: number
- limit: number
- search: string
- role: string

**Response**:
```typescript
{
  users: User[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
  };
}
```

**ASP Source**: user-management.asp, lines 300-350

#### POST /api/users
**Purpose**: Create new user
**Request Body**:
```typescript
{
  username: string;
  email: string;
  password: string;
  roleId: number;
}
```

**ASP Source**: user-management.asp, lines 400-450

[Continue for all endpoints...]

## Data Migration

### Session Management
| ASP | React |
|-----|-------|
| Session("UserID") | JWT token (localStorage) |
| Session("Username") | User object in Redux |
| Session("Role") | JWT claims |

### Form Data
| ASP | React |
|-----|-------|
| Request.Form("username") | Controlled input (useState) |
| Request.QueryString("id") | URL params (useParams) |

### Application State
| ASP | React |
|-----|-------|
| Application("Settings") | API endpoint + Redux |
| Application("Cache") | React Query cache |

## Routing

### Route Mapping
| ASP Page | React Route | Component |
|----------|-------------|-----------|
| user-management.asp | /admin/users | UserManagementPage |
| user-edit.asp?id=:id | /admin/users/:id/edit | UserEditPage |
| user-details.asp?id=:id | /admin/users/:id | UserDetailsPage |

### Route Configuration
```typescript
<Routes>
  <Route path="/admin/users" element={<UserManagementPage />} />
  <Route path="/admin/users/:id/edit" element={<UserEditPage />} />
  <Route path="/admin/users/:id" element={<UserDetailsPage />} />
</Routes>
```

## Authentication & Authorization

### Authentication Flow
1. User logs in → POST /api/auth/login
2. Receive JWT token
3. Store in localStorage
4. Include in API requests (Authorization header)
5. Validate on protected routes

### Authorization
```typescript
// Role-based access
const RequireRole = ({ role, children }) => {
  const { user } = useAuth();
  return user.role === role ? children : <Navigate to="/unauthorized" />;
};
```

**ASP Source**: includes/auth-check.asp

## Testing Strategy

### Unit Tests (Jest + React Testing Library)
- Component rendering
- User interactions
- Form validation
- Hook logic

**Coverage Goal**: 80%

### Integration Tests
- API integration
- State management
- User workflows

**Coverage Goal**: 70%

### E2E Tests (Cypress)
- Login flow
- User CRUD operations
- Role management

**Critical Paths**: 5 scenarios

## Migration Phases

### Phase 1: Foundation (2 weeks)
**Goals**:
- Set up React project
- Implement authentication
- Create base components
- Set up API client

**Deliverables**:
- Project structure
- Auth system
- Base UI components
- API client

**ASP Files**: login.asp, includes/auth-check.asp

### Phase 2: Core Features (2 weeks)
**Goals**:
- Migrate user list
- Implement user creation
- Add user editing
- Basic testing

**Deliverables**:
- UserManagementPage
- UserForm
- User API endpoints
- Unit tests

**ASP Files**: user-management.asp, user-edit.asp

### Phase 3: Advanced Features (2 weeks)
**Goals**:
- Role management
- User permissions
- Advanced filtering
- Comprehensive testing

**Deliverables**:
- Role components
- Permission system
- Filter functionality
- Integration tests

**ASP Files**: role-management.asp, user-permissions.asp

### Phase 4: Polish & Deploy (2 weeks)
**Goals**:
- Bug fixes
- UI/UX improvements
- Performance optimization
- Documentation
- Deployment

**Deliverables**:
- Production build
- Documentation
- Deployment guide
- Training materials

## Risk Assessment

### High Risk Items
1. **Complex Business Logic** (user-management.asp, lines 500-600)
   - Risk: Logic loss during migration
   - Mitigation: Comprehensive testing, code review

2. **Database Schema Changes**
   - Risk: Data migration issues
   - Mitigation: Database migration scripts, rollback plan

3. **Session Management**
   - Risk: Authentication issues
   - Mitigation: Parallel run, gradual migration

### Medium Risk Items
1. File upload functionality
2. Report generation
3. Email notifications

### Low Risk Items
1. Simple forms
2. Static pages
3. Basic CRUD operations

## Dependencies

### External Libraries
- React 18.x
- Redux Toolkit
- React Router v6
- React Query
- Axios
- Formik + Yup
- Material-UI

### Development Tools
- TypeScript
- ESLint
- Prettier
- Jest
- React Testing Library
- Cypress

## Success Criteria

- [ ] All features migrated
- [ ] 80% test coverage
- [ ] Performance: Page load < 2s
- [ ] Zero critical bugs
- [ ] Documentation complete
- [ ] Team trained

## Timeline

**Total Duration**: 8 weeks
**Start Date**: [TBD]
**End Date**: [TBD]

**Milestones**:
- Week 2: Foundation complete
- Week 4: Core features complete
- Week 6: Advanced features complete
- Week 8: Production ready

## Resources Required

**Team**:
- 2 Frontend developers
- 1 Backend developer
- 1 QA engineer
- 1 DevOps engineer

**Infrastructure**:
- Development environment
- Staging environment
- CI/CD pipeline
- Testing infrastructure

## Next Steps

1. Review and approve this plan
2. Set up development environment
3. Begin Phase 1 implementation
4. Schedule weekly progress reviews
```

## Examples

### Example 1: Simple Page Migration

```bash
/generate-plan Create migration plan from technical-doc-contact-form.md considering:
- Existing form components in ./src/components/forms
- Current validation approach (Formik + Yup)
- API patterns in ./src/api
```

**Output**: Concise plan for simple contact form migration

---

### Example 2: Complex Application Module

```bash
/generate-plan Create comprehensive migration plan from technical-doc-user-management.md with:
- Analysis of existing React codebase in ./src
- Current state management (Redux Toolkit)
- Existing component library (Material-UI)
- API client patterns
- Testing standards
- Deployment pipeline
```

**Output**: Detailed multi-phase migration plan

---

### Example 3: Batch Planning

```bash
/generate-plan Create master migration plan for entire admin portal using:
- Technical docs: ./docs/reverse-engineering/*.md
- Existing React app: ./src
- Prioritize by: business value and complexity
- Include: dependency analysis and migration order
```

## Best Practices

1. **Analyze Existing Code First**: Understand current React patterns
2. **Reuse Components**: Identify reusable components
3. **Plan State Management**: Design state structure upfront
4. **API-First**: Design APIs before implementation
5. **Phase Wisely**: Break into manageable phases
6. **Risk Assessment**: Identify and mitigate risks early
7. **Test Strategy**: Plan testing from the start

## Related Commands

- `/reverse-engineer` - Generate technical documentation first
- `/migrate-asp-to-react` - Execute the migration plan

## Notes

- Plans should be reviewed and approved before migration
- Adjust timeline based on team size and complexity
- Include buffer time for unexpected issues
- Regular progress reviews recommended
