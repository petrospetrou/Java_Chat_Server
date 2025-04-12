# Simple Chat Server

**A Java Spring Boot-based backend chat system**  
University: **University of Cyprus**  
Course: **ECE318 – Software Engineering / Web Applications**  
Date: **December 2022**

---

## Overview

This project implements a lightweight backend for a messaging system using the Spring Boot framework. The system allows messages to be stored, accessed, and potentially extended into a real-time chat service.

The application was developed for Assignment 3 of the course and demonstrates backend design using RESTful APIs, object-oriented design principles, and Maven for dependency management.

---

## Features

- Java Spring Boot backend with REST API support
- Message creation and storage
- Message retrieval via REST endpoints
- Modular architecture using MVC design pattern
- Easily extensible to include real-time communication with WebSockets
- Build and run using Maven

---

## Repository Contents

| File / Directory        | Description                                                |
|------------------------|------------------------------------------------------------|
| `src/`                 | Contains the main Java source code                         |
| `src/main/java/ucy/ece318/assignment3/` | Package containing controllers, models, and logic      |
| `Assignment3.java`     | Entry point for the Spring Boot application                |
| `Message.java`         | Model class for message entities                           |
| `MessageController.java` | REST controller exposing API endpoints                  |
| `MessageRepository.java` | In-memory repository logic                               |
| `server.java`          | Additional backend setup or configuration                  |
| `pom.xml`              | Maven configuration file                                   |
| `Test_Pictures/`       | Any screenshots or test references used during development |
| `Assignment_3_Backup/` | Backup folder                                               |
| `HELP.md`              | Spring Boot autogenerated help file                        |

---

## Installation & Setup

### Prerequisites

- Java 17 or higher
- Maven 3.6+
- IDE (IntelliJ IDEA, Eclipse, or VS Code)

### Steps

1. **Clone the Repository**
```bash
git clone https://github.com/your-username/assignment-3-chat.git
cd assignment-3-chat
```

2. **Build the Application**
```bash
mvn clean install
```

3. **Run the Application**
```bash
mvn spring-boot:run
```

4. **Access the API**
Once running, the API will be accessible at:  
`http://localhost:8080/api/messages` (or similar endpoint defined in `MessageController`)

---

## Usage

You can interact with the backend using tools like Postman or curl.

- **Get all messages**
  - `GET /api/messages`
- **Post a new message**
  - `POST /api/messages`
  - JSON body: `{ "sender": "John", "content": "Hello, world!" }`

> Note: Actual endpoints and parameters depend on how they're defined in `MessageController.java`.

---

## Known Limitations

- In-memory storage: Messages are not persisted between server restarts
- No frontend implementation: Backend only
- Real-time features (e.g., WebSockets) are not yet implemented

---

## Possible Enhancements

- Add database integration (e.g., PostgreSQL or MongoDB)
- Implement frontend using React or Vue
- Real-time communication using WebSockets
- User authentication and chatroom support

---

## License

This project was developed as part of university coursework.  
All rights reserved. This repository is not licensed for external distribution or reuse without the author's permission.
