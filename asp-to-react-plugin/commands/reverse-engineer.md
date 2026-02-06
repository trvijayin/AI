---
description: Reverse engineer Classic ASP files to generate comprehensive technical documentation
argument-hint: "<asp-file-path>"
---

# /reverse-engineer - Analyze Classic ASP Code

Reverse engineer Classic ASP files and generate detailed technical documentation including all dependencies, business logic, data flow, and UI components.

## Usage

```
/reverse-engineer <path-to-asp-file>
```

## Workflow

### 1. Initial File Analysis

Parse the target ASP file and identify:

- **File Purpose**: Main functionality and business purpose
- **File Type**: Page, include, component, API endpoint
- **Complexity Level**: Simple, moderate, complex, very complex
- **Dependencies**: All included files and references
- **Database Connections**: Connection strings and database access

### 2. Dependency Scanning

Recursively scan and analyze all dependencies:

**Include Files:**
```vbscript
<!--#include file="includes/db-connection.asp"-->
<!--#include virtual="/common/header.asp"-->
```

**Child Files:**
- Server.Execute calls
- Response.Redirect targets
- Form action targets
- AJAX endpoints

**External Resources:**
- Database connections
- COM objects
- External APIs
- File system access

### 3. Business Logic Extraction

Identify and document all business logic:

**Data Validation:**
```vbscript
If Len(Request.Form("email")) = 0 Then
    errors = errors & "Email is required<br>"
ElseIf InStr(Request.Form("email"), "@") = 0 Then
    errors = errors & "Invalid email format<br>"
End If
```

**Business Rules:**
- Validation logic
- Calculation formulas
- Workflow rules
- Authorization checks
- Data transformations

**Database Operations:**
- CRUD operations
- Stored procedure calls
- Transaction handling
- Connection management

### 4. Data Flow Analysis

Map complete data flow:

**Input Sources:**
- Request.Form (POST data)
- Request.QueryString (GET parameters)
- Request.Cookies
- Session variables
- Application variables

**Processing:**
- Data validation
- Business logic execution
- Database operations
- External API calls

**Output:**
- Response.Write (HTML output)
- Response.Redirect (navigation)
- Session/Cookie updates
- Database updates

### 5. UI Component Identification

Analyze UI structure:

**HTML Structure:**
- Forms and input fields
- Tables and grids
- Navigation elements
- Dynamic content areas

**Client-Side Code:**
- JavaScript functions
- Event handlers
- AJAX calls
- Form validation

**Styling:**
- Inline styles
- CSS classes
- Style includes

### 6. Database Schema Analysis

Extract database schema information:

**Tables Used:**
- Table names
- Column references
- Relationships
- Indexes used

**Queries:**
- SELECT statements
- INSERT/UPDATE/DELETE operations
- Stored procedures
- Dynamic SQL

**Data Model:**
- Entity relationships
- Data types
- Constraints
- Business keys

### 7. Security Analysis

Identify security concerns:

**Vulnerabilities:**
- SQL injection risks
- XSS vulnerabilities
- CSRF risks
- Authentication weaknesses

**Security Measures:**
- Input validation
- Output encoding
- Authentication checks
- Authorization logic

### 8. Generate Documentation

Create comprehensive technical documentation:

**Document Structure:**
```markdown
# Technical Documentation: [filename].asp

## Executive Summary
- Purpose
- Complexity
- Dependencies count
- Risk level

## File Information
- Path
- Size
- Last modified
- Author (if available)

## Dependencies
### Direct Includes
- List of all included files
- Purpose of each include

### Child Files
- Files called via Server.Execute
- Redirect targets
- AJAX endpoints

### External Dependencies
- Database connections
- COM objects
- External APIs

## Business Logic
### Overview
- Main functionality
- Business rules

### Detailed Logic
#### [Function/Section Name]
- Purpose
- Input parameters
- Processing steps
- Output
- Code snippet

## Data Flow
### Input
- Form fields
- Query parameters
- Session data
- Cookies

### Processing
- Validation steps
- Business logic
- Database operations

### Output
- HTML rendering
- Redirects
- Session updates
- Database changes

## Database Schema
### Tables
- Table name
- Columns used
- Relationships

### Queries
- SQL statements
- Stored procedures
- Parameters

## UI Components
### Forms
- Form fields
- Validation
- Submit actions

### Display Elements
- Tables/Grids
- Lists
- Dynamic content

### Client-Side Code
- JavaScript functions
- Event handlers
- AJAX calls

## Security Analysis
### Vulnerabilities
- SQL injection points
- XSS risks
- CSRF concerns

### Security Measures
- Input validation
- Authentication
- Authorization

## Complexity Metrics
- Lines of code
- Cyclomatic complexity
- Dependency count
- Database operations count

## Migration Considerations
### Challenges
- Complex business logic
- Database dependencies
- Session management
- File uploads

### Recommendations
- Component breakdown
- API requirements
- State management needs
- Testing priorities

## Code Snippets
### Key Functions
[Relevant code snippets with explanations]

## Appendix
### Full Dependency Tree
### Database ERD
### Data Flow Diagram
```

## Examples

### Example 1: Simple ASP Page

```bash
/reverse-engineer Analyze ./legacy/contact-form.asp
```

**Output:**
```markdown
# Technical Documentation: contact-form.asp

## Executive Summary
- **Purpose**: Contact form submission and email notification
- **Complexity**: Low
- **Dependencies**: 2 files
- **Risk Level**: Low

## Dependencies
1. includes/db-connection.asp (Database connectivity)
2. includes/email-helper.asp (Email sending)

## Business Logic
### Form Submission
- Validates name, email, message fields
- Stores submission in ContactMessages table
- Sends email notification to admin
- Displays thank you message

[Detailed documentation continues...]
```

---

### Example 2: Complex Application Page

```bash
/reverse-engineer Analyze ./legacy/admin/user-management.asp including all dependencies and database schema
```

**Output:**
```markdown
# Technical Documentation: user-management.asp

## Executive Summary
- **Purpose**: Complete user CRUD operations with role management
- **Complexity**: High
- **Dependencies**: 15 files
- **Risk Level**: High (SQL injection vulnerabilities found)

## Dependencies
### Direct Includes (8 files)
1. includes/db-connection.asp
2. includes/auth-check.asp
3. includes/admin-header.asp
4. includes/user-functions.asp
5. includes/role-functions.asp
6. includes/audit-log.asp
7. includes/pagination.asp
8. includes/admin-footer.asp

### Child Files (7 files)
1. user-edit.asp (Edit user form)
2. user-delete.asp (Delete confirmation)
3. role-assign.asp (Role assignment)
4. ajax/check-username.asp (Username availability)
5. ajax/search-users.asp (User search)
6. reports/user-activity.asp (Activity report)
7. export/users-csv.asp (CSV export)

[Detailed analysis continues...]
```

---

### Example 3: Batch Analysis

```bash
/reverse-engineer Analyze all ASP files in ./legacy/customer-portal directory including:
- All page files
- All include files
- All AJAX endpoints
- Complete dependency tree
- Shared database schema
```

## Output Format

### Primary Documentation File

`technical-doc-[filename].md` - Comprehensive documentation

### Supporting Files

- `dependency-tree-[filename].json` - Machine-readable dependency graph
- `database-schema-[filename].sql` - Extracted database schema
- `data-flow-[filename].mmd` - Mermaid diagram of data flow
- `security-report-[filename].md` - Security vulnerability report

## Best Practices

### 1. Start with Entry Points

```bash
# Analyze main pages first
/reverse-engineer ./legacy/index.asp
/reverse-engineer ./legacy/login.asp
/reverse-engineer ./legacy/dashboard.asp
```

### 2. Analyze Shared Components

```bash
# Then analyze shared includes
/reverse-engineer ./legacy/includes/db-connection.asp
/reverse-engineer ./legacy/includes/auth-check.asp
```

### 3. Deep Dive into Complex Areas

```bash
# Detailed analysis of complex modules
/reverse-engineer ./legacy/admin/user-management.asp with:
- Full dependency tree
- Database schema extraction
- Security vulnerability scan
- Complexity metrics
- Migration risk assessment
```

### 4. Batch Analysis for Large Applications

```bash
# Analyze entire application
/reverse-engineer Analyze all ASP files in ./legacy with:
- Dependency mapping
- Shared component identification
- Database schema consolidation
- Common pattern detection
- Migration priority ranking
```

## Advanced Features

### Pattern Recognition

Automatically identify common patterns:
- Authentication/Authorization
- CRUD operations
- Form processing
- File uploads
- Email sending
- Report generation
- Data export

### Code Quality Metrics

- Lines of code
- Cyclomatic complexity
- Code duplication
- Dead code detection
- Best practice violations

### Migration Risk Assessment

Assign risk levels:
- **Low**: Simple forms, static pages
- **Medium**: Standard CRUD, basic business logic
- **High**: Complex workflows, heavy database operations
- **Very High**: Legacy COM objects, file system operations, complex security

## Tips

1. **Provide Context**: Mention the application domain for better analysis
2. **Specify Depth**: Indicate how deep to analyze dependencies
3. **Focus Areas**: Highlight specific areas of concern
4. **Include Database**: Request database schema analysis when needed
5. **Security Scan**: Always request security vulnerability analysis

## Related Commands

- `/generate-plan` - Use this documentation to create migration plan
- `/migrate-asp-to-react` - Use for actual migration

## Notes

- Analysis time depends on file complexity and dependency count
- Large applications may require batch processing
- Database schema extraction requires database access or SQL analysis
- Security scan identifies potential vulnerabilities, not confirmed exploits
