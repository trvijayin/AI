---
name: api-design
description: REST API design principles, resource modeling, and HTTP best practices
---

# API Design Skill

Expert knowledge in designing robust, scalable, and maintainable REST APIs following industry best practices.

## Core Principles

### RESTful Design

**Resource-Oriented:**
- Use nouns for resources, not verbs
- Organize around resources, not actions
- Use hierarchical URLs for relationships

**Good Examples:**
```
GET    /users              # Get all users
GET    /users/123          # Get specific user
POST   /users              # Create user
PUT    /users/123          # Update user
DELETE /users/123          # Delete user
GET    /users/123/posts    # Get user's posts
```

**Bad Examples:**
```
GET    /getUsers
POST   /createUser
GET    /user/delete/123
```

### HTTP Methods

**GET:**
- Retrieve resources
- Idempotent and safe
- Cacheable
- No request body

**POST:**
- Create new resources
- Non-idempotent
- Returns 201 Created with Location header
- Can have side effects

**PUT:**
- Full update of resource
- Idempotent
- Replace entire resource
- Returns 200 OK or 204 No Content

**PATCH:**
- Partial update of resource
- May or may not be idempotent
- Update specific fields
- Returns 200 OK

**DELETE:**
- Remove resource
- Idempotent
- Returns 204 No Content or 200 OK

### Status Codes

**Success (2xx):**
- `200 OK` - Successful GET, PUT, PATCH, DELETE
- `201 Created` - Successful POST with new resource
- `204 No Content` - Successful request with no response body

**Client Errors (4xx):**
- `400 Bad Request` - Invalid request syntax or validation error
- `401 Unauthorized` - Authentication required
- `403 Forbidden` - Authenticated but not authorized
- `404 Not Found` - Resource doesn't exist
- `409 Conflict` - Request conflicts with current state
- `422 Unprocessable Entity` - Validation errors
- `429 Too Many Requests` - Rate limit exceeded

**Server Errors (5xx):**
- `500 Internal Server Error` - Generic server error
- `502 Bad Gateway` - Invalid response from upstream
- `503 Service Unavailable` - Temporary unavailability
- `504 Gateway Timeout` - Upstream timeout

## URL Design

### Naming Conventions

**Use Plural Nouns:**
```
/users (not /user)
/products (not /product)
/orders (not /order)
```

**Use Kebab-Case:**
```
/user-profiles (not /userProfiles or /user_profiles)
/order-items
```

**Hierarchical Relationships:**
```
/users/123/posts/456/comments
/organizations/abc/teams/xyz/members
```

### Query Parameters

**Filtering:**
```
GET /users?status=active&role=admin
GET /products?category=electronics&price_min=100
```

**Sorting:**
```
GET /users?sort=created_at&order=desc
GET /products?sort=price,name
```

**Pagination:**
```
GET /users?page=2&limit=20
GET /users?offset=40&limit=20
```

**Field Selection:**
```
GET /users?fields=id,name,email
GET /products?include=category,reviews
```

## Request/Response Design

### Request Body

**JSON Format:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

**Validation:**
- Validate all inputs
- Return clear error messages
- Use appropriate status codes

### Response Body

**Single Resource:**
```json
{
  "id": "123",
  "name": "John Doe",
  "email": "john@example.com",
  "created_at": "2024-01-01T00:00:00Z"
}
```

**Collection:**
```json
{
  "data": [
    { "id": "1", "name": "Item 1" },
    { "id": "2", "name": "Item 2" }
  ],
  "meta": {
    "total": 100,
    "page": 1,
    "per_page": 20
  },
  "links": {
    "self": "/items?page=1",
    "next": "/items?page=2",
    "last": "/items?page=5"
  }
}
```

**Error Response:**
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  }
}
```

## Versioning

### URL Versioning:**
```
/v1/users
/v2/users
```

**Header Versioning:**
```
Accept: application/vnd.api.v1+json
```

**Query Parameter:**
```
/users?version=1
```

## Security

### Authentication

**JWT Bearer Token:**
```
Authorization: Bearer <token>
```

**API Key:**
```
X-API-Key: <key>
```

### Input Validation

- Validate all inputs
- Sanitize user data
- Use parameterized queries
- Implement rate limiting

### HTTPS

- Always use HTTPS in production
- Redirect HTTP to HTTPS
- Use HSTS headers

## Performance

### Caching

**Cache Headers:**
```
Cache-Control: public, max-age=3600
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

**Conditional Requests:**
```
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
If-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

### Pagination

- Always paginate large collections
- Provide total count
- Include navigation links
- Use cursor-based pagination for real-time data

### Compression

- Enable gzip/brotli compression
- Compress responses > 1KB

## Documentation

### OpenAPI/Swagger

- Document all endpoints
- Include request/response examples
- Describe error responses
- Document authentication

### Examples

Provide clear examples for:
- Authentication
- Common operations
- Error handling
- Pagination
- Filtering

## Best Practices Checklist

- [ ] Use nouns for resources
- [ ] Use plural names
- [ ] Use proper HTTP methods
- [ ] Return appropriate status codes
- [ ] Implement proper error handling
- [ ] Validate all inputs
- [ ] Use HTTPS
- [ ] Implement authentication
- [ ] Add rate limiting
- [ ] Enable CORS properly
- [ ] Version your API
- [ ] Paginate collections
- [ ] Use caching headers
- [ ] Compress responses
- [ ] Document with OpenAPI
- [ ] Provide examples
- [ ] Log requests/responses
- [ ] Monitor performance
- [ ] Handle errors gracefully
- [ ] Use consistent naming
