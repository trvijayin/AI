---
description: Create comprehensive unit test suites for existing code
argument-hint: "<code-description>"
---

# /generate-tests - Generate Unit Tests

Generate comprehensive unit test suites with high coverage, edge case handling, and best practices for testing.

## Usage

```
/generate-tests <description of code to test>
```

## Workflow

### 1. Analyze Code Structure

Understand what needs to be tested:

- **Code Type**:
  - **Functions/Methods**: Pure functions, class methods, async functions
  - **Classes**: Object-oriented code with state and behavior
  - **API Endpoints**: HTTP handlers, controllers, routes
  - **Services**: Business logic, data access layers
  - **Components**: UI components (React, Vue, etc.)
- **Dependencies**: External services, databases, APIs
- **Complexity**: Cyclomatic complexity, branching logic
- **Current Coverage**: Existing tests and gaps

### 2. Identify Test Scenarios

Determine what to test:

**Happy Path:**
- Normal input with expected output
- Typical use cases
- Standard workflows

**Edge Cases:**
- Boundary values (min, max, zero, negative)
- Empty inputs (null, undefined, empty strings/arrays)
- Large datasets
- Special characters and encoding

**Error Cases:**
- Invalid inputs
- Missing required parameters
- Type mismatches
- Network failures
- Database errors
- Permission denied scenarios

**Integration Points:**
- External API calls
- Database operations
- File system access
- Third-party services

### 3. Generate Test Structure

Create organized test suites:

**Test Organization:**
```
describe('ComponentName', () => {
  describe('methodName', () => {
    it('should handle normal case', () => {})
    it('should handle edge case', () => {})
    it('should throw error for invalid input', () => {})
  })
})
```

**Test Components:**
- Setup (beforeEach, beforeAll)
- Test cases with descriptive names
- Assertions with clear expectations
- Teardown (afterEach, afterAll)
- Test fixtures and data

### 4. Add Mocking and Stubbing

Handle dependencies:

**Mock External Services:**
- API calls (fetch, axios)
- Database queries
- File system operations
- Third-party libraries

**Stub Functions:**
- Date/time functions
- Random number generators
- External dependencies

**Test Doubles:**
- Spies for function calls
- Stubs for controlled responses
- Mocks for behavior verification
- Fakes for simplified implementations

### 5. Generate Test Code

Create tests following framework conventions:

**JavaScript/TypeScript (Jest):**
- Use `describe`, `it`, `expect`
- Mock with `jest.fn()`, `jest.mock()`
- Async tests with `async/await`
- Snapshot testing where appropriate

**Python (Pytest):**
- Use fixtures for setup
- Parametrize tests for multiple inputs
- Mock with `unittest.mock` or `pytest-mock`
- Use `assert` statements

**Java (JUnit):**
- Use `@Test`, `@BeforeEach`, `@AfterEach`
- Mock with Mockito
- Assertions with AssertJ or Hamcrest
- Parameterized tests

### 6. Add Coverage Targets

Ensure comprehensive coverage:

- **Line Coverage**: Aim for 80%+ coverage
- **Branch Coverage**: Test all conditional paths
- **Function Coverage**: Test all functions/methods
- **Statement Coverage**: Execute all statements

### 7. Validate Tests

Before presenting:

- **Syntax**: Tests compile and run
- **Independence**: Tests don't depend on each other
- **Deterministic**: Tests produce consistent results
- **Fast**: Tests run quickly
- **Readable**: Clear test names and assertions

### 8. Present Test Suite

Organize the output:

1. **Overview**: What's being tested and coverage goals
2. **Test Files**: Complete test code with explanations
3. **Fixtures/Mocks**: Shared test data and mocks
4. **Configuration**: Test framework setup
5. **Running Tests**: Commands to execute tests
6. **Coverage Report**: How to generate coverage

## Examples

**Test a Function:**
```
/generate-tests Create tests for the calculateDiscount function with edge cases for percentages and amounts
```

**Test a Class:**
```
/generate-tests Generate comprehensive tests for the UserService class including all CRUD operations
```

**Test API Endpoints:**
```
/generate-tests Create integration tests for the /api/users endpoints with authentication
```

**Test React Component:**
```
/generate-tests Generate tests for the LoginForm component including validation and submission
```

## Framework-Specific Features

### Jest (JavaScript/TypeScript)
- Snapshot testing
- Code coverage reports
- Async/await testing
- Mock functions and modules
- Timer mocking

### Pytest (Python)
- Fixtures for setup/teardown
- Parametrized tests
- Markers for test organization
- Coverage with pytest-cov
- Mocking with pytest-mock

### JUnit (Java)
- Annotations for lifecycle
- Parameterized tests
- Test suites
- Mockito integration
- AssertJ fluent assertions

### Mocha/Chai (JavaScript)
- BDD-style assertions
- Async testing
- Hooks for setup/teardown
- Sinon for mocking
- Istanbul for coverage

## Test Types

### Unit Tests
- Test individual functions/methods in isolation
- Mock all external dependencies
- Fast execution
- High coverage

### Integration Tests
- Test interactions between components
- Use real or test databases
- Test API endpoints end-to-end
- Verify data flow

### Contract Tests
- Verify API contracts
- Test request/response schemas
- Ensure backward compatibility

### Performance Tests
- Test execution time
- Memory usage
- Concurrent operations
- Load testing

## Best Practices

Automatically included:

- **AAA Pattern**: Arrange, Act, Assert
- **Descriptive Names**: Clear test descriptions
- **Single Assertion**: One logical assertion per test
- **Independent Tests**: No test dependencies
- **Fast Tests**: Optimize for speed
- **Maintainable**: Easy to update and understand

## Tips

- Specify the testing framework you're using
- Mention coverage targets (e.g., "90% coverage")
- Include specific edge cases you want tested
- Request integration tests if needed
- Specify mocking strategy preferences
- Mention if you need performance tests

## Related Commands

- `/generate-api` - Generate API code to test
- `/validate-api` - Validate code quality
- `/scaffold-service` - Create service with tests included
