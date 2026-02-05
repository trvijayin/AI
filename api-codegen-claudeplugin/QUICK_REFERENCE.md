# Quick Reference - Code Generation Plugin

## 🚀 Quick Start

```bash
# Install plugin
claude plugins add /path/to/antigravity-claudeplugin

# Install MCP server dependencies
cd mcp-servers/openapi-generator && npm install
```

## 📋 Commands Cheat Sheet

| Command | Usage | Example |
|---------|-------|---------|
| `/generate-api` | Generate API code | `/generate-api Create a REST API for user management with Express` |
| `/generate-tests` | Create unit tests | `/generate-tests Create tests for UserService with 90% coverage` |
| `/create-openapi` | Generate OpenAPI spec | `/create-openapi Create spec for blog API with posts and comments` |
| `/scaffold-service` | Create microservice | `/scaffold-service Create payment service with FastAPI and Stripe` |

## 🎯 Common Use Cases

### 1. Create New API
```
/generate-api Create a REST API for [resource] with [features] using [framework]
```

### 2. Add Tests
```
/generate-tests Create tests for [component] with [coverage]% coverage using [framework]
```

### 3. Generate from OpenAPI
```
Generate [framework] code from [path/to/spec.yaml]
```

### 4. New Microservice
```
/scaffold-service Create [service-type] microservice with [framework], [database], and [features]
```

## 🛠️ Supported Frameworks

### Backend
- **Node.js**: Express, NestJS, Fastify
- **Python**: FastAPI, Django, Flask
- **Java**: Spring Boot
- **Go**: Gin, Echo
- **C#**: ASP.NET Core

### Testing
- **JavaScript**: Jest, Mocha, Chai
- **Python**: Pytest, unittest
- **Java**: JUnit, Mockito
- **Go**: testing, testify

## 📝 Example Workflows

### Workflow 1: API-First
```
1. /create-openapi Design blog API spec
2. /generate-api Generate Express code from spec
3. /generate-tests Create test suite
```

### Workflow 2: Quick Prototype
```
1. /scaffold-service Create user service with FastAPI
2. Customize business logic
3. /generate-tests Add comprehensive tests
```

### Workflow 3: From Existing Spec
```
1. Validate OpenAPI spec at ./api-spec.yaml
2. Generate FastAPI code from spec
3. /generate-tests Create integration tests
```

## 🔧 MCP Server Tools

### validate_openapi
```json
{ "specPath": "path/to/spec.yaml" }
```

### parse_openapi
```json
{ "specPath": "path/to/spec.yaml" }
```

### generate_api_code
```json
{
  "specPath": "path/to/spec.yaml",
  "framework": "express",
  "outputDir": "generated/"
}
```

### create_openapi_spec
```json
{
  "title": "My API",
  "version": "1.0.0",
  "endpoints": [...],
  "outputPath": "openapi.yaml"
}
```

## 💡 Pro Tips

### Be Specific
✅ **Good**: `/generate-api Create REST API for user management with JWT auth, input validation, and error handling using Express.js`

❌ **Bad**: `/generate-api Make an API`

### Specify Framework
Always mention the framework:
- "using Express.js"
- "with FastAPI"
- "using Spring Boot"

### Request Features
Include specific features:
- Authentication (JWT, OAuth)
- Validation (Joi, Pydantic)
- Database (PostgreSQL, MongoDB)
- Caching (Redis)
- Testing (Jest, Pytest)

### Ask for Best Practices
- "following REST best practices"
- "with comprehensive error handling"
- "including security headers"
- "with API documentation"

## 🐛 Troubleshooting

### Plugin Not Found
```bash
claude plugins list
claude plugins add /path/to/antigravity-claudeplugin
```

### MCP Server Issues
```bash
cd mcp-servers/openapi-generator
npm install
npm start  # Test server
```

### Commands Not Working
1. Restart Claude
2. Check `.claude-plugin/plugin.json` exists
3. Verify `commands/*.md` files exist

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Overview and features |
| `GETTING_STARTED.md` | Installation and tutorials |
| `CONNECTORS.md` | MCP server setup |
| `PROJECT_STRUCTURE.md` | Complete structure guide |
| `examples/blog-api.yaml` | Sample OpenAPI spec |

## 🎓 Skills Available

### api-design
- REST principles
- HTTP methods
- Status codes
- URL design
- Security

### test-generation
- Testing pyramid
- AAA pattern
- Mocking
- Coverage
- Best practices

## 📦 Example Files

### Blog API Example
```bash
# Located at: examples/blog-api.yaml
# Try:
Generate Express code from examples/blog-api.yaml
```

## 🔑 Key Features

- ✅ Multi-framework support
- ✅ OpenAPI integration
- ✅ Comprehensive testing
- ✅ Best practices built-in
- ✅ Security standards
- ✅ Docker support
- ✅ CI/CD templates
- ✅ API documentation

## 🚦 Status Codes Reference

| Code | Meaning | Use Case |
|------|---------|----------|
| 200 | OK | Successful GET, PUT, PATCH |
| 201 | Created | Successful POST |
| 204 | No Content | Successful DELETE |
| 400 | Bad Request | Invalid input |
| 401 | Unauthorized | Auth required |
| 403 | Forbidden | Not authorized |
| 404 | Not Found | Resource missing |
| 422 | Unprocessable | Validation error |
| 500 | Server Error | Internal error |

## 🔒 Security Checklist

- [ ] Input validation
- [ ] Authentication
- [ ] Authorization
- [ ] HTTPS only
- [ ] Rate limiting
- [ ] CORS configuration
- [ ] Security headers
- [ ] SQL injection prevention
- [ ] XSS protection

## 📊 Testing Checklist

- [ ] Happy path tests
- [ ] Edge cases
- [ ] Error cases
- [ ] Boundary values
- [ ] Null/empty inputs
- [ ] Integration tests
- [ ] 80%+ coverage
- [ ] Mock external deps

## 🎯 Next Steps

1. **Try the examples**: Use blog-api.yaml
2. **Read the guides**: GETTING_STARTED.md
3. **Explore skills**: Check skills/ directory
4. **Generate code**: Start with /generate-api
5. **Add tests**: Use /generate-tests
6. **Customize**: Adapt to your needs

---

**Quick Help**: Type `/help` in Claude to see all commands

**Version**: 1.0.0 | **License**: Apache 2.0
