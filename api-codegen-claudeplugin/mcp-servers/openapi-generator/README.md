# OpenAPI Generator MCP Server

A Model Context Protocol (MCP) server that provides tools for OpenAPI specification validation, parsing, and code generation.

## Features

- **Validate OpenAPI Specs**: Validate OpenAPI 3.0 specifications
- **Parse and Dereference**: Parse OpenAPI specs and resolve all $ref references
- **Generate API Code**: Generate API code for multiple frameworks
- **Create OpenAPI Specs**: Generate OpenAPI specifications from descriptions

## Installation

```bash
npm install
```

## Usage

### As MCP Server

The server runs on stdio and is designed to be used with Claude or other MCP clients.

```bash
npm start
```

### Configuration

Add to your Claude configuration (`.mcp.json`):

```json
{
  "mcpServers": {
    "openapi-generator": {
      "type": "stdio",
      "command": "node",
      "args": ["mcp-servers/openapi-generator/index.js"]
    }
  }
}
```

## Available Tools

### validate_openapi

Validates an OpenAPI specification file.

**Input:**
```json
{
  "specPath": "path/to/openapi.yaml"
}
```

**Output:**
```json
{
  "valid": true,
  "title": "My API",
  "version": "1.0.0",
  "pathCount": 5,
  "message": "OpenAPI specification is valid"
}
```

### parse_openapi

Parses and dereferences an OpenAPI specification.

**Input:**
```json
{
  "specPath": "path/to/openapi.yaml"
}
```

**Output:** Complete dereferenced OpenAPI specification

### generate_api_code

Generates API code from an OpenAPI specification.

**Input:**
```json
{
  "specPath": "path/to/openapi.yaml",
  "framework": "express",
  "outputDir": "generated/"
}
```

**Supported Frameworks:**
- `express` - Express.js (Node.js)
- `fastapi` - FastAPI (Python)
- `spring-boot` - Spring Boot (Java) [Coming soon]
- `django` - Django REST Framework (Python) [Coming soon]
- `nestjs` - NestJS (Node.js) [Coming soon]

**Output:**
```json
{
  "success": true,
  "framework": "express",
  "outputDir": "generated/",
  "filesGenerated": ["generated/routes.js"],
  "message": "Successfully generated express API code"
}
```

### create_openapi_spec

Creates an OpenAPI specification from a description.

**Input:**
```json
{
  "title": "My API",
  "version": "1.0.0",
  "description": "API for managing users",
  "endpoints": [
    {
      "path": "/users",
      "method": "GET",
      "summary": "Get all users",
      "responses": {
        "200": {
          "description": "Success"
        }
      }
    }
  ],
  "outputPath": "openapi.yaml"
}
```

## Development

```bash
# Install dependencies
npm install

# Run in development mode with auto-reload
npm run dev
```

## Example Usage with Claude

```
# Validate an OpenAPI spec
User: Validate the OpenAPI spec at ./api-spec.yaml

# Generate Express code
User: Generate Express.js code from ./api-spec.yaml and save to ./generated

# Create a new OpenAPI spec
User: Create an OpenAPI spec for a blog API with posts and comments endpoints
```

## License

MIT
