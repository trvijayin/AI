---
description: Generate REST or GraphQL API endpoints from specifications or descriptions
argument-hint: "<api-description>"
---

# /generate-api - Generate API Endpoints

Generate complete API endpoints from OpenAPI specifications, natural language descriptions, or existing code patterns.

## Usage

```
/generate-api <natural language description or specification>
```

## Workflow

### 1. Understand Requirements

Parse the user's request and determine:

- **API Type**:
  - **REST API**: Resource-based endpoints with HTTP methods
  - **GraphQL API**: Schema, queries, mutations, and resolvers
  - **gRPC**: Protocol buffer definitions and service implementations
- **Framework**: Express, FastAPI, Spring Boot, Django, NestJS, etc.
- **Features needed**: Authentication, validation, pagination, filtering, etc.
- **Data models**: Entities, relationships, and validation rules

### 2. Design API Structure

**For REST APIs:**

1. Identify resources and their relationships
2. Design endpoint paths following REST conventions
3. Determine HTTP methods (GET, POST, PUT, PATCH, DELETE)
4. Define request/response schemas
5. Plan status codes and error responses

**For GraphQL APIs:**

1. Design GraphQL schema with types and relationships
2. Define queries for data retrieval
3. Create mutations for data modification
4. Plan resolvers and data loaders
5. Consider pagination and filtering strategies

### 3. Generate Code Components

Generate the following components in order:

**Data Models:**
- Entity definitions with validation
- Database schema/migrations
- Type definitions (TypeScript, Python type hints, etc.)

**API Handlers:**
- Route handlers/controllers
- Request validation middleware
- Business logic services
- Response formatting

**Middleware:**
- Authentication/authorization
- Request logging
- Error handling
- Rate limiting
- CORS configuration

**Documentation:**
- OpenAPI/Swagger specifications
- Inline code comments
- API usage examples

### 4. Add Best Practices

Automatically include:

- **Input Validation**: Schema validation for all inputs
- **Error Handling**: Consistent error responses with proper status codes
- **Security**: SQL injection prevention, XSS protection, CSRF tokens
- **Logging**: Request/response logging with correlation IDs
- **Performance**: Database query optimization, caching strategies
- **Testing**: Basic test structure and examples

### 5. Validate Generated Code

Before presenting, check:

- **Syntax**: Code compiles/runs without errors
- **Consistency**: Naming conventions and code style
- **Completeness**: All endpoints have handlers and validation
- **Security**: No obvious vulnerabilities
- **Best Practices**: Follows framework conventions

### 6. Present Code

Organize the output:

1. **Overview**: Brief description of what was generated
2. **File Structure**: Show the directory layout
3. **Code Files**: Present each file with explanations
4. **Setup Instructions**: How to install dependencies and run
5. **Testing**: How to test the API
6. **Next Steps**: Suggestions for enhancements

## Examples

**Simple REST API:**
```
/generate-api Create a REST API for a task management system with users, projects, and tasks. Include authentication.
```

**From OpenAPI Spec:**
```
/generate-api Generate Express.js API from the OpenAPI spec in openapi.yaml
```

**GraphQL API:**
```
/generate-api Create a GraphQL API for an e-commerce store with products, orders, and customers using Apollo Server
```

**Microservice:**
```
/generate-api Build a payment processing microservice with FastAPI, including webhook handlers for Stripe
```

## Framework-Specific Features

### Express.js (Node.js)
- Router configuration
- Middleware chain
- Error handling middleware
- TypeScript support

### FastAPI (Python)
- Pydantic models for validation
- Automatic OpenAPI generation
- Dependency injection
- Async/await support

### Spring Boot (Java)
- Controller annotations
- Service layer with dependency injection
- JPA entities and repositories
- Exception handlers

### Django (Python)
- Django REST Framework serializers
- ViewSets and routers
- Authentication classes
- Permissions and throttling

## Tips

- Specify the programming language and framework for better results
- Mention any specific libraries or patterns you want to use
- Include authentication requirements upfront
- Specify database type if relevant (PostgreSQL, MongoDB, etc.)
- Request specific features like pagination, filtering, or caching
- If you have an OpenAPI spec, provide it for accurate generation

## Related Commands

- `/generate-tests` - Generate tests for the API
- `/add-middleware` - Add specific middleware functionality
- `/validate-api` - Check API against best practices
- `/create-openapi` - Generate OpenAPI specification
