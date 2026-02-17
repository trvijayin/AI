# Hello World REST API

A simple Hello World REST API built with Spring Boot following Maven folder structure.

## Project Structure

```
├── pom.xml
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── example/
│   │   │           └── helloworld/
│   │   │               ├── HelloWorldApplication.java
│   │   │               ├── controller/
│   │   │               │   └── HelloWorldController.java
│   │   │               └── model/
│   │   │                   └── HelloResponse.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/
│       └── java/
│           └── com/
│               └── example/
│                   └── helloworld/
│                       ├── HelloWorldApplicationTest.java
│                       └── controller/
│                           └── HelloWorldControllerTest.java
└── README.md
```

## Features

- RESTful API endpoints
- JSON responses
- CORS enabled
- Unit tests included
- Maven build system
- Spring Boot framework

## API Endpoints

### GET /api/hello
Returns a simple hello world message.

**Response:**
```json
{
  "message": "Hello, World!",
  "timestamp": "2025-08-13T07:30:00",
  "status": "success"
}
```

### GET /api/hello/{name}
Returns a personalized hello message.

**Response:**
```json
{
  "message": "Hello, John!",
  "timestamp": "2025-08-13T07:30:00",
  "status": "success"
}
```

### POST /api/hello
Returns a personalized hello message from request body.

**Request Body:**
```json
{
  "name": "Alice"
}
```

**Response:**
```json
{
  "message": "Hello, Alice!",
  "timestamp": "2025-08-13T07:30:00",
  "status": "success",
  "method": "POST"
}
```

### GET /api/status
Returns application status information.

**Response:**
```json
{
  "application": "Hello World REST API",
  "version": "1.0.0",
  "status": "running",
  "timestamp": "2025-08-13T07:30:00"
}
```

## Requirements

- Java 17 or higher
- Maven 3.6 or higher

## How to Run

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd AI
   ```

2. **Build the project:**
   ```bash
   mvn clean compile
   ```

3. **Run tests:**
   ```bash
   mvn test
   ```

4. **Run the application:**
   ```bash
   mvn spring-boot:run
   ```

5. **Access the API:**
   - Base URL: `http://localhost:12000`
   - Example: `http://localhost:12000/api/hello`

## Building JAR

To create an executable JAR file:

```bash
mvn clean package
java -jar target/helloworld-rest-api-1.0.0.jar
```

## Configuration

The application runs on port 12000 by default. You can modify this in `src/main/resources/application.properties`:

```properties
server.port=12000
server.address=0.0.0.0
```

## Testing

Run all tests:
```bash
mvn test
```

Run specific test class:
```bash
mvn test -Dtest=HelloWorldControllerTest
```