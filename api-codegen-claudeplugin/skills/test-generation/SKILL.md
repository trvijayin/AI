---
name: test-generation
description: Unit test patterns, mocking strategies, and coverage optimization
---

# Test Generation Skill

Expert knowledge in creating comprehensive, maintainable test suites with high coverage and best practices.

## Testing Principles

### Test Pyramid

```
        /\
       /E2E\
      /------\
     /  INT   \
    /----------\
   /    UNIT    \
  /--------------\
```

**Unit Tests (70%):**
- Test individual functions/methods
- Fast execution
- No external dependencies
- High coverage

**Integration Tests (20%):**
- Test component interactions
- Database, API calls
- Slower than unit tests
- Verify data flow

**E2E Tests (10%):**
- Test complete workflows
- User perspective
- Slowest tests
- Critical paths only

### AAA Pattern

**Arrange:**
```javascript
// Set up test data and mocks
const user = { id: 1, name: 'John' };
const mockDb = jest.fn().mockResolvedValue(user);
```

**Act:**
```javascript
// Execute the code under test
const result = await userService.getUser(1);
```

**Assert:**
```javascript
// Verify the outcome
expect(result).toEqual(user);
expect(mockDb).toHaveBeenCalledWith(1);
```

## Test Structure

### Descriptive Test Names

**Good:**
```javascript
describe('UserService', () => {
  describe('createUser', () => {
    it('should create user with valid data', () => {});
    it('should throw error when email is invalid', () => {});
    it('should hash password before saving', () => {});
  });
});
```

**Bad:**
```javascript
describe('UserService', () => {
  it('test1', () => {});
  it('test2', () => {});
});
```

### Test Organization

```javascript
describe('ComponentName', () => {
  // Setup
  beforeEach(() => {
    // Common setup
  });

  afterEach(() => {
    // Cleanup
  });

  describe('methodName', () => {
    // Happy path
    it('should handle normal case', () => {});
    
    // Edge cases
    it('should handle empty input', () => {});
    it('should handle null values', () => {});
    
    // Error cases
    it('should throw error for invalid input', () => {});
  });
});
```

## Mocking Strategies

### Mock External Dependencies

**API Calls:**
```javascript
// Jest
jest.mock('axios');
axios.get.mockResolvedValue({ data: { id: 1 } });

// Python
from unittest.mock import patch

@patch('requests.get')
def test_api_call(mock_get):
    mock_get.return_value.json.return_value = {'id': 1}
```

**Database:**
```javascript
// Mock repository
const mockRepository = {
  findById: jest.fn().mockResolvedValue(user),
  save: jest.fn().mockResolvedValue(user)
};
```

**Time/Dates:**
```javascript
// Jest
jest.useFakeTimers();
jest.setSystemTime(new Date('2024-01-01'));

// Python
from freezegun import freeze_time

@freeze_time("2024-01-01")
def test_with_frozen_time():
    pass
```

### Spy vs Mock vs Stub

**Spy:**
```javascript
const spy = jest.spyOn(object, 'method');
// Calls real implementation
expect(spy).toHaveBeenCalled();
```

**Mock:**
```javascript
const mock = jest.fn().mockReturnValue('mocked');
// Replaces implementation
```

**Stub:**
```javascript
const stub = jest.fn()
  .mockReturnValueOnce('first')
  .mockReturnValueOnce('second');
```

## Test Patterns

### Testing Async Code

**Promises:**
```javascript
it('should resolve with data', async () => {
  const result = await asyncFunction();
  expect(result).toBe('data');
});

it('should reject with error', async () => {
  await expect(asyncFunction()).rejects.toThrow('Error');
});
```

**Callbacks:**
```javascript
it('should call callback with data', (done) => {
  functionWithCallback((err, data) => {
    expect(data).toBe('result');
    done();
  });
});
```

### Testing Exceptions

```javascript
it('should throw error for invalid input', () => {
  expect(() => {
    functionThatThrows();
  }).toThrow('Expected error message');
});

// Async
it('should reject for invalid input', async () => {
  await expect(asyncFunction()).rejects.toThrow('Error');
});
```

### Parameterized Tests

**Jest:**
```javascript
it.each([
  [1, 2, 3],
  [2, 3, 5],
  [5, 5, 10]
])('should add %i + %i = %i', (a, b, expected) => {
  expect(add(a, b)).toBe(expected);
});
```

**Pytest:**
```python
@pytest.mark.parametrize("a,b,expected", [
    (1, 2, 3),
    (2, 3, 5),
    (5, 5, 10)
])
def test_add(a, b, expected):
    assert add(a, b) == expected
```

## Coverage Optimization

### Coverage Types

**Line Coverage:**
- Every line executed
- Target: 80%+

**Branch Coverage:**
- Every conditional path
- Target: 75%+

**Function Coverage:**
- Every function called
- Target: 90%+

### Finding Gaps

```bash
# Jest
npm test -- --coverage

# Pytest
pytest --cov=src --cov-report=html

# View uncovered lines
# Check coverage report for gaps
```

### Edge Cases to Test

**Boundary Values:**
```javascript
it('should handle minimum value', () => {});
it('should handle maximum value', () => {});
it('should handle zero', () => {});
it('should handle negative numbers', () => {});
```

**Empty/Null:**
```javascript
it('should handle null', () => {});
it('should handle undefined', () => {});
it('should handle empty string', () => {});
it('should handle empty array', () => {});
```

**Special Characters:**
```javascript
it('should handle special characters', () => {});
it('should handle unicode', () => {});
it('should handle SQL injection attempts', () => {});
```

## Test Fixtures

### Shared Test Data

```javascript
// fixtures/users.js
export const validUser = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com'
};

export const invalidUser = {
  name: '',
  email: 'invalid'
};
```

### Factory Functions

```javascript
function createUser(overrides = {}) {
  return {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    ...overrides
  };
}

// Usage
const user = createUser({ email: 'custom@example.com' });
```

## Integration Testing

### API Testing

```javascript
describe('POST /api/users', () => {
  it('should create user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'John', email: 'john@example.com' })
      .expect(201);
    
    expect(response.body).toMatchObject({
      name: 'John',
      email: 'john@example.com'
    });
  });
});
```

### Database Testing

```javascript
describe('UserRepository', () => {
  beforeEach(async () => {
    await db.migrate.latest();
    await db.seed.run();
  });

  afterEach(async () => {
    await db.migrate.rollback();
  });

  it('should find user by id', async () => {
    const user = await repository.findById(1);
    expect(user).toBeDefined();
  });
});
```

## Best Practices

### Do's

- ✅ Write tests first (TDD)
- ✅ Test behavior, not implementation
- ✅ Keep tests simple and focused
- ✅ Use descriptive test names
- ✅ Mock external dependencies
- ✅ Test edge cases
- ✅ Maintain test independence
- ✅ Keep tests fast
- ✅ Use fixtures for common data
- ✅ Aim for high coverage

### Don'ts

- ❌ Test private methods directly
- ❌ Make tests depend on each other
- ❌ Use real databases in unit tests
- ❌ Ignore failing tests
- ❌ Write tests that are too complex
- ❌ Mock everything
- ❌ Skip error cases
- ❌ Hardcode test data everywhere
- ❌ Test framework code
- ❌ Sacrifice readability for coverage

## Framework-Specific Tips

### Jest
- Use `jest.mock()` for modules
- Use snapshots sparingly
- Configure coverage thresholds
- Use `--watch` mode for development

### Pytest
- Use fixtures for setup
- Use markers for organization
- Parametrize similar tests
- Use `pytest-cov` for coverage

### JUnit
- Use `@BeforeEach` for setup
- Use AssertJ for fluent assertions
- Use Mockito for mocking
- Organize with test suites

## Test Checklist

- [ ] Happy path tested
- [ ] Edge cases covered
- [ ] Error cases handled
- [ ] Async code tested properly
- [ ] External dependencies mocked
- [ ] Test names are descriptive
- [ ] Tests are independent
- [ ] Coverage meets targets
- [ ] Tests run fast
- [ ] No flaky tests
