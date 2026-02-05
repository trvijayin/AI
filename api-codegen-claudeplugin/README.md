# Code Generation Plugin

A Claude plugin that transforms Claude into an API development and testing collaborator. It helps you generate REST APIs, GraphQL endpoints, create comprehensive unit tests, and follow best practices for modern API development.

## Installation

```bash
claude plugins add codegen
```

## What It Does

This plugin transforms Claude into a code generation specialist. It helps you:

- **Generate API Code**: Create REST APIs, GraphQL endpoints, and microservices with industry best practices
- **Write Unit Tests**: Generate comprehensive test suites with high coverage and edge case handling
- **Follow Best Practices**: Ensure code follows SOLID principles, design patterns, and security standards
- **Multiple Frameworks**: Support for Express, FastAPI, Spring Boot, Django, and more
- **Test Frameworks**: Jest, Pytest, JUnit, Mocha, and other popular testing libraries

### With MCP Server Connection

When connected to the OpenAPI Generator or Test Framework MCP servers, Claude can:
- Generate code from OpenAPI/Swagger specifications
- Create test suites automatically from API definitions
- Validate generated code against specifications
- Run tests and provide coverage reports

### Without MCP Server Connection

Without MCP servers, Claude can still:
- Generate API code from natural language descriptions
- Create unit tests based on your code structure
- Provide code templates and boilerplate
- Suggest best practices and improvements

## Commands

| Command | Description |
|---------|-------------|
| `/generate-api` | Generate REST or GraphQL API endpoints from specifications or descriptions |
| `/generate-tests` | Create comprehensive unit test suites for existing code |
| `/create-openapi` | Generate OpenAPI/Swagger specifications from code or descriptions |
| `/scaffold-service` | Create complete microservice scaffolding with all boilerplate |
| `/add-middleware` | Generate middleware for authentication, logging, error handling, etc. |
| `/validate-api` | Validate API code against best practices and security standards |

## Skills

| Skill | Description |
|-------|-------------|
| `api-design` | REST API design principles, resource modeling, and HTTP best practices |
| `graphql-patterns` | GraphQL schema design, resolvers, and query optimization |
| `test-generation` | Unit test patterns, mocking strategies, and coverage optimization |
| `api-security` | Authentication, authorization, input validation, and security headers |
| `error-handling` | Error handling patterns, logging, and debugging strategies |
| `code-quality` | SOLID principles, design patterns, and code organization |

## Example Workflows

### API Generation

```bash
/generate-api Create a REST API for a blog system with posts, comments, and users
```

Claude will:
1. Design the resource structure and endpoints
2. Generate controller/route handlers
3. Create data models and validation schemas
4. Add error handling and middleware
5. Include API documentation

### Unit Test Generation

```bash
/generate-tests Create tests for the UserService class with 90% coverage
```

Claude will:
1. Analyze the code structure
2. Identify test scenarios and edge cases
3. Generate test cases with mocks and fixtures
4. Add integration tests where appropriate
5. Provide coverage report

### Microservice Scaffolding

```bash
/scaffold-service Create a payment processing microservice with FastAPI
```

Claude will:
1. Set up project structure
2. Generate API endpoints
3. Add database models and migrations
4. Include Docker configuration
5. Create comprehensive tests

## Connecting Your Development Stack

See [CONNECTORS.md](CONNECTORS.md) for instructions on connecting:
- OpenAPI Generator MCP Server
- Test Framework MCP Server
- CI/CD pipelines
- Code quality tools

## Best Practices

The plugin automatically follows:
- **RESTful Design**: Proper HTTP methods, status codes, and resource naming
- **Security**: Input validation, authentication, authorization, and OWASP guidelines
- **Testing**: Comprehensive test coverage with unit, integration, and e2e tests
- **Documentation**: Auto-generated API docs and inline code comments
- **Error Handling**: Consistent error responses and logging
- **Code Quality**: Clean code principles and design patterns

## Supported Languages & Frameworks

### Backend Frameworks
- **Node.js**: Express, NestJS, Fastify, Koa
- **Python**: FastAPI, Django, Flask
- **Java**: Spring Boot, Quarkus
- **Go**: Gin, Echo, Chi
- **C#**: ASP.NET Core

### Test Frameworks
- **JavaScript/TypeScript**: Jest, Mocha, Chai, Supertest
- **Python**: Pytest, unittest, nose2
- **Java**: JUnit, TestNG, Mockito
- **Go**: testing, testify
- **C#**: xUnit, NUnit, MSTest

## License

Apache 2.0 - See [LICENSE](LICENSE) for details
