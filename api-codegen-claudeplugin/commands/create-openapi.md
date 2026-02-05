---
description: Generate OpenAPI/Swagger specifications from code or descriptions
argument-hint: "<api-description>"
---

# /create-openapi - Generate OpenAPI Specification

Generate OpenAPI 3.0 specifications from existing code, natural language descriptions, or API designs.

## Usage

```
/create-openapi <description or code reference>
```

## Workflow

### 1. Analyze Input

Determine the source:

- **From Code**: Parse existing API code to extract endpoints
- **From Description**: Design API from natural language requirements
- **From Examples**: Infer schema from example requests/responses
- **Update Existing**: Modify or extend existing OpenAPI spec

### 2. Design API Schema

Define the OpenAPI structure:

**Info Section:**
- API title and description
- Version number
- Contact and license information

**Servers:**
- Development, staging, production URLs
- Server variables

**Paths:**
- Endpoint paths
- HTTP methods
- Parameters (path, query, header, cookie)
- Request bodies
- Response schemas
- Status codes

**Components:**
- Reusable schemas
- Security schemes
- Parameters
- Responses
- Examples

### 3. Generate Specification

Create complete OpenAPI YAML/JSON:

```yaml
openapi: 3.0.0
info:
  title: API Name
  version: 1.0.0
  description: API description
servers:
  - url: https://api.example.com/v1
paths:
  /resource:
    get:
      summary: Get resources
      responses:
        '200':
          description: Success
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Resource'
components:
  schemas:
    Resource:
      type: object
      properties:
        id:
          type: string
        name:
          type: string
```

### 4. Add Documentation

Include comprehensive details:

- Endpoint descriptions
- Parameter descriptions
- Example requests/responses
- Error responses
- Authentication requirements
- Rate limiting information

### 5. Validate Specification

Check for:

- Valid OpenAPI 3.0 syntax
- Consistent schema references
- Complete response definitions
- Proper data types
- Security scheme definitions

### 6. Present Output

Provide:

1. Complete OpenAPI specification
2. Validation results
3. Documentation preview
4. Tools for testing (Swagger UI, Postman)
5. Code generation options

## Examples

**From Description:**
```
/create-openapi Create OpenAPI spec for a blog API with posts, comments, and users
```

**From Code:**
```
/create-openapi Generate OpenAPI spec from the Express routes in src/routes/
```

**Update Existing:**
```
/create-openapi Add authentication endpoints to the existing openapi.yaml
```

## Tips

- Specify OpenAPI version (3.0 or 3.1)
- Include authentication requirements
- Request examples for better documentation
- Mention if you need YAML or JSON format
- Specify any custom extensions needed

## Related Commands

- `/generate-api` - Generate code from OpenAPI spec
- `/validate-api` - Validate API implementation
