---
description: Create complete microservice scaffolding with all boilerplate
argument-hint: "<service-description>"
---

# /scaffold-service - Create Microservice Scaffolding

Generate complete microservice project structure with all necessary boilerplate, configuration, and best practices.

## Usage

```
/scaffold-service <service description and framework>
```

## Workflow

### 1. Define Service Requirements

Determine:

- **Framework**: Express, FastAPI, Spring Boot, etc.
- **Database**: PostgreSQL, MongoDB, MySQL, etc.
- **Features**: Authentication, caching, messaging, etc.
- **Deployment**: Docker, Kubernetes, serverless
- **Testing**: Unit, integration, e2e tests

### 2. Create Project Structure

Generate organized directory layout:

```
service-name/
├── src/
│   ├── api/
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── middleware/
│   ├── models/
│   ├── services/
│   ├── utils/
│   └── config/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── fixtures/
├── docker/
├── docs/
├── .env.example
├── docker-compose.yml
├── Dockerfile
├── package.json (or equivalent)
└── README.md
```

### 3. Generate Core Components

**Application Entry Point:**
- Server initialization
- Middleware setup
- Route registration
- Error handling
- Graceful shutdown

**Configuration:**
- Environment variables
- Database connection
- Logging setup
- Security settings

**Database Layer:**
- Models/entities
- Migrations
- Seeders
- Connection pooling

**API Layer:**
- Routes/endpoints
- Controllers
- Request validation
- Response formatting

**Business Logic:**
- Service classes
- Domain logic
- Data transformations

**Middleware:**
- Authentication
- Authorization
- Logging
- Error handling
- Rate limiting
- CORS

### 4. Add Infrastructure

**Docker Configuration:**
- Dockerfile for the service
- docker-compose.yml for local development
- Multi-stage builds
- Health checks

**CI/CD:**
- GitHub Actions / GitLab CI
- Build pipeline
- Test automation
- Deployment scripts

**Monitoring:**
- Health check endpoints
- Metrics collection
- Logging configuration
- Error tracking

### 5. Generate Tests

**Test Structure:**
- Unit tests for services
- Integration tests for API
- E2E tests for workflows
- Test fixtures and factories
- Mocking setup

### 6. Add Documentation

**README.md:**
- Project overview
- Setup instructions
- API documentation
- Development guide
- Deployment guide

**API Documentation:**
- OpenAPI specification
- Endpoint examples
- Authentication guide

**Code Documentation:**
- Inline comments
- JSDoc/docstrings
- Architecture decisions

### 7. Present Scaffolding

Provide:

1. Complete file structure
2. All generated files
3. Setup instructions
4. Development workflow
5. Testing guide
6. Deployment guide

## Examples

**Node.js Microservice:**
```
/scaffold-service Create a user authentication microservice with Express, PostgreSQL, and JWT
```

**Python Microservice:**
```
/scaffold-service Build a payment processing service with FastAPI, Redis, and Stripe integration
```

**Java Microservice:**
```
/scaffold-service Generate a Spring Boot microservice for order management with MongoDB
```

**Event-Driven Service:**
```
/scaffold-service Create a notification service with Node.js, RabbitMQ, and email/SMS providers
```

## Included Features

### Security
- JWT authentication
- API key validation
- Rate limiting
- Input sanitization
- CORS configuration
- Security headers

### Database
- Connection pooling
- Migrations
- Query builders
- Transaction support
- Caching layer

### Observability
- Structured logging
- Request tracing
- Metrics endpoints
- Health checks
- Error tracking

### Development
- Hot reloading
- Environment configs
- Linting setup
- Code formatting
- Git hooks

### Testing
- Unit test setup
- Integration tests
- Test coverage
- Mock factories
- CI integration

### Deployment
- Docker support
- Kubernetes manifests
- Environment configs
- Secrets management
- Scaling configuration

## Tips

- Specify the programming language and framework
- Mention database and caching requirements
- Include authentication/authorization needs
- Request specific integrations (Stripe, SendGrid, etc.)
- Specify deployment target (Docker, K8s, Lambda)
- Mention any specific patterns (CQRS, Event Sourcing, etc.)

## Related Commands

- `/generate-api` - Add more endpoints
- `/generate-tests` - Expand test coverage
- `/add-middleware` - Add custom middleware
