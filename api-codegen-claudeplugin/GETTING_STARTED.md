# Getting Started with Code Generation Plugin

This guide will help you install and start using the Code Generation plugin for Claude.

## Prerequisites

- Claude Desktop or Claude Code
- Node.js 18+ (for MCP servers)
- npm or yarn

## Installation

### Option 1: Install from Local Directory

1. Clone or download this repository to your local machine

2. Install the plugin in Claude:
```bash
claude plugins add /path/to/antigravity-claudeplugin
```

### Option 2: Install from GitHub (if published)

```bash
claude plugins add username/codegen-plugin
```

## Setting Up MCP Servers

The plugin includes an OpenAPI Generator MCP server that enhances code generation capabilities.

### Install MCP Server Dependencies

1. Navigate to the MCP server directory:
```bash
cd /path/to/antigravity-claudeplugin/mcp-servers/openapi-generator
```

2. Install dependencies:
```bash
npm install
```

3. Test the server:
```bash
npm start
```

You should see: `OpenAPI Generator MCP server running on stdio`

Press Ctrl+C to stop the test.

### Verify Plugin Installation

1. Start Claude
2. Type: `/help`
3. You should see the code generation commands listed

## Quick Start Examples

### Example 1: Generate a REST API

```
/generate-api Create a REST API for a task management system with the following:
- Users with authentication
- Projects with CRUD operations
- Tasks with status tracking
- Use Express.js and PostgreSQL
```

Claude will generate:
- Complete Express.js application structure
- Route handlers with validation
- Database models
- Authentication middleware
- API documentation

### Example 2: Generate Unit Tests

```
/generate-tests Create comprehensive tests for the UserService class with:
- 90% code coverage
- Test all CRUD operations
- Mock database calls
- Use Jest
```

Claude will generate:
- Complete test suite with Jest
- Mock setup for dependencies
- Test fixtures
- Coverage configuration

### Example 3: Create OpenAPI Specification

```
/create-openapi Generate an OpenAPI spec for an e-commerce API with:
- Products (CRUD)
- Shopping cart
- Orders
- User authentication
```

Claude will generate:
- Complete OpenAPI 3.0 specification
- Request/response schemas
- Authentication definitions
- Example requests

### Example 4: Scaffold a Microservice

```
/scaffold-service Create a payment processing microservice with:
- FastAPI framework
- Stripe integration
- PostgreSQL database
- Docker support
- Comprehensive tests
```

Claude will generate:
- Complete project structure
- All necessary files
- Docker configuration
- CI/CD setup
- Documentation

## Using the Plugin

### Available Commands

Type any of these commands in Claude:

- `/generate-api` - Generate API endpoints
- `/generate-tests` - Create unit tests
- `/create-openapi` - Generate OpenAPI specs
- `/scaffold-service` - Create complete microservice
- `/add-middleware` - Add middleware functionality
- `/validate-api` - Validate API code

### Command Tips

**Be Specific:**
```
Good: /generate-api Create a REST API for user management with JWT auth using Express.js
Bad: /generate-api Make an API
```

**Specify Framework:**
```
/generate-api ... using FastAPI
/generate-tests ... with Jest
```

**Request Features:**
```
/generate-api ... include authentication, validation, and error handling
```

## Working with OpenAPI Specs

### Validate an Existing Spec

If you have an OpenAPI specification file, Claude can validate it using the MCP server:

```
Validate the OpenAPI spec at ./examples/blog-api.yaml
```

### Generate Code from Spec

```
Generate Express.js code from the OpenAPI spec at ./examples/blog-api.yaml
```

### Test the Example Spec

The plugin includes a sample blog API specification at `examples/blog-api.yaml`. Try:

```
Generate FastAPI code from examples/blog-api.yaml and save to ./generated
```

## Project Structure

After using the plugin, your project might look like:

```
my-project/
├── src/
│   ├── api/
│   │   ├── routes/
│   │   │   ├── users.js
│   │   │   └── posts.js
│   │   ├── controllers/
│   │   └── middleware/
│   ├── models/
│   ├── services/
│   └── config/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── fixtures/
├── openapi.yaml
├── package.json
└── README.md
```

## Customizing Generated Code

### Modify Templates

The plugin generates code based on best practices, but you can customize:

1. **Framework versions**: Specify in your request
2. **Code style**: Request specific patterns
3. **Additional features**: Ask for specific integrations

Example:
```
/generate-api Create a REST API using Express.js v4, with TypeScript, ESLint, and Prettier
```

### Extend Generated Code

Generated code is a starting point. You can:
- Add business logic to handlers
- Customize validation rules
- Add additional middleware
- Extend test coverage

## Troubleshooting

### Plugin Not Found

```bash
# List installed plugins
claude plugins list

# Reinstall
claude plugins remove codegen
claude plugins add /path/to/antigravity-claudeplugin
```

### MCP Server Not Working

```bash
# Check Node.js version
node --version  # Should be 18+

# Reinstall dependencies
cd mcp-servers/openapi-generator
rm -rf node_modules package-lock.json
npm install

# Test server
npm start
```

### Commands Not Appearing

1. Restart Claude
2. Check `.claude-plugin/plugin.json` exists
3. Verify `commands/` directory has .md files

### Generated Code Has Errors

The plugin generates working code, but:
- Install dependencies: `npm install`
- Check framework versions
- Review error messages
- Ask Claude to fix specific issues

## Best Practices

### 1. Start with Specifications

Create OpenAPI specs first, then generate code:
```
/create-openapi Design an API for [your use case]
/generate-api Generate code from the spec
```

### 2. Generate Tests Alongside Code

Always generate tests for your code:
```
/generate-api Create user API
/generate-tests Create tests for the user API
```

### 3. Use Scaffolding for New Projects

For new microservices, use scaffolding:
```
/scaffold-service Create a complete [service type] with [framework]
```

### 4. Validate Before Deploying

```
/validate-api Check the user API for security issues and best practices
```

### 5. Iterate and Refine

Generated code is a starting point:
- Review and customize
- Add business logic
- Enhance error handling
- Improve documentation

## Next Steps

1. **Explore Examples**: Check the `examples/` directory
2. **Read Skills**: Review `skills/` for detailed best practices
3. **Try Commands**: Experiment with different commands
4. **Customize**: Adapt generated code to your needs
5. **Contribute**: Share improvements and feedback

## Getting Help

- **Documentation**: Read `README.md` and `CONNECTORS.md`
- **Examples**: Check `examples/` directory
- **Skills**: Review `skills/` for patterns
- **Ask Claude**: Claude can help with plugin usage

## Example Workflow

Here's a complete workflow for creating a new API:

```bash
# 1. Design the API
/create-openapi Create an OpenAPI spec for a blog API with posts, comments, and users

# 2. Generate the code
/generate-api Generate Express.js code from the OpenAPI spec

# 3. Generate tests
/generate-tests Create comprehensive tests for all endpoints with 90% coverage

# 4. Validate
/validate-api Check the generated code for security and best practices

# 5. Review and customize
# - Add business logic
# - Customize validation
# - Add integrations

# 6. Run tests
npm test

# 7. Start development server
npm run dev
```

## Resources

- [OpenAPI Specification](https://swagger.io/specification/)
- [REST API Best Practices](https://restfulapi.net/)
- [Testing Best Practices](https://testingjavascript.com/)
- [MCP Protocol](https://modelcontextprotocol.io)

Happy coding! 🚀
