# Skill: Classic ASP Analysis & Reverse Engineering

Expertise in analyzing, parsing, and documenting legacy Classic ASP (Active Server Pages) applications to extract business logic, data models, and UI structures.

## Core Expertise

### 1. VBScript and Classic ASP Architecture
- **Object Model Mastery**: Deep understanding of `Request`, `Response`, `Session`, `Application`, and `Server` objects.
- **Dependency Tracking**: Ability to resolve `<!--#include -->` (file and virtual) and `Server.Execute` chains to build a complete dependency graph.
- **Spaghetti Code Deciphering**: Skill in untangling deeply nested conditionals, global variables, and procedural logic often found in legacy systems.

### 2. Data Layer Extraction (ADO & SQL)
- **Recordset Analysis**: Identifying data retrieval patterns using `ADODB.Recordset` and connection management.
- **SQL Analysis**: Parsing embedded SQL strings (often dynamic/concatenated) to identify table schemas, relationships, and CRUD operations.
- **Connection Management**: Locating `db-connection` includes and connection strings to understand the data source architecture.

### 3. Business Logic Identification
- **Form Processing**: Mapping `Request.Form` inputs to server-side validation and database updates.
- **Workflow State**: Identifying how `Session` variables are used to maintain state across pages (the precursor to modern state management).
- **Conditional Routing**: Analyzing `Response.Redirect` calls to map user journeys.

## Analysis Workflow

### Phase 1: Dependency Mapping
1. Start at the target `.asp` file.
2. Recursively identify all `#include` files.
3. Check for `Server.Execute` or `Server.Transfer` calls.
4. Build a visual/tabular tree of all constituent files.

### Phase 2: Logic Extraction
1. **Input Map**: List every `Request` parameter (QueryString or Form).
2. **Data Map**: List every SQL query and identifying the tables/columns affected.
3. **Logic Map**: Identify key `If/Then`, `Select Case`, and `For Each` loops that drive business decisions.
4. **Output Map**: Identify `Response.Write` sections and how they correlate to the input data.

### Phase 3: Security & Performance Audit
- Identify SQL Injection risks (concatenated strings in `conn.Execute`).
- Identify XSS risks (raw `Response.Write` of user input).
- Identify performance bottlenecks (loops with database calls).

## Best Practices for ASP Analysis
- **Context is King**: Always look for `Session("UserType")` or similar guards at the top of the file to understand authorization.
- **Don't Ignore Javascript**: Legacy ASP often mixes server-side VBScript with client-side JavaScript for validation; both are critical for the React migration.
- **Identify Dead Code**: Many legacy pages contain commented-out code or unreachable blocks; flag these to avoid migrating "junk" logic.
