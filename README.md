# 📋 Task Manager App

A full-stack task management application built with **JHipster**, **Spring Boot**, and **Angular**.

## 🚀 Tech Stack

| Layer           | Technology               |
| --------------- | ------------------------ |
| Backend         | Spring Boot 3.4, Java 21 |
| Frontend        | Angular 17               |
| Database (dev)  | H2 (in-memory)           |
| Database (prod) | PostgreSQL               |
| Authentication  | JWT (JSON Web Tokens)    |
| DB Migrations   | Liquibase                |
| API Docs        | Swagger / OpenAPI 3.1    |
| Scaffolding     | JHipster 8               |

---

## ✨ Features

- ✅ Full CRUD for Tasks (Create, Read, Update, Delete)
- ✅ Task fields: Title, Description, Status, Due Date, Priority
- ✅ Task statuses: `TODO`, `IN_PROGRESS`, `DONE`
- ✅ **Custom REST endpoint** — filter tasks by status (`GET /api/tasks/by-status/{status}`)
- ✅ **Kanban Board** — custom Angular component displaying tasks in 3 columns
- ✅ JWT Authentication — secure login/logout
- ✅ Admin dashboard — user management, logs, API docs
- ✅ Pagination on task list
- ✅ Swagger UI for API exploration

---

## 🏗 Architecture

```
Angular (Frontend)
    ↓ HTTP + JWT
Spring Boot (Backend)
    ↓ Spring Data JPA
H2 / PostgreSQL (Database)
```

### Backend layers (per entity):

- **Resource** (`TaskResource.java`) — REST controller, handles HTTP
- **Repository** (`TaskRepository.java`) — data access via Spring Data JPA
- **Domain** (`Task.java`) — JPA entity mapped to DB table
- **Liquibase** — automatic DB schema versioning

### Frontend layers (per entity):

- **Service** (`task.service.ts`) — HttpClient calls to backend
- **Components** — list, detail, update, delete, kanban-board
- **Routes** (`task.routes.ts`) — Angular routing with auth guards

---

## 🔧 Custom Code (beyond JHipster generation)

### 1. Custom filtering endpoint

```java
// TaskRepository.java
List<Task> findByStatus(TaskStatus status);

// TaskResource.java
@GetMapping("/by-status/{status}")
public ResponseEntity<List<Task>> getTasksByStatus(@PathVariable TaskStatus status) {
  List<Task> tasks = taskRepository.findByStatus(status);
  return ResponseEntity.ok(tasks);
}

```

### 2. Angular service method

```typescript
// task.service.ts
getTasksByStatus(status: string): Observable<EntityArrayResponseType> {
  return this.http
    .get<RestTask[]>(`${this.resourceUrl}/by-status/${status}`, { observe: 'response' })
    .pipe(map(res => this.convertResponseArrayFromServer(res)));
}
```

### 3. Kanban Board Component

Custom Angular component that fetches tasks grouped by status and displays them in a 3-column Kanban layout.

---

## 🛠 How to Run Locally

### Prerequisites

- Java 21+
- Node.js 18+
- Git

### Steps

**1. Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/TaskManager-app.git
cd TaskManager-app
```

**2. Start the backend**

```bash
./mvnw
# Windows CMD: mvnw
```

Backend runs at: `http://localhost:8080`

**3. Start the frontend**

```bash
npm install
npm start
```

Frontend runs at: `http://localhost:9000`

**4. Login**

- URL: `http://localhost:9000`
- Username: `admin`
- Password: `admin`

---

## 📡 API Endpoints

| Method   | URL                             | Description                   |
| -------- | ------------------------------- | ----------------------------- |
| `POST`   | `/api/authenticate`             | Login, returns JWT token      |
| `GET`    | `/api/tasks`                    | Get all tasks (paginated)     |
| `GET`    | `/api/tasks/{id}`               | Get task by ID                |
| `POST`   | `/api/tasks`                    | Create new task               |
| `PUT`    | `/api/tasks/{id}`               | Update task                   |
| `DELETE` | `/api/tasks/{id}`               | Delete task                   |
| `GET`    | `/api/tasks/by-status/{status}` | **Custom** — filter by status |

Full API docs available at: `http://localhost:8080/swagger-ui/index.html`

---

## 🔐 Security

- JWT-based stateless authentication
- Spring Security configuration with role-based access (`ROLE_USER`, `ROLE_ADMIN`)
- Angular HTTP interceptor automatically attaches JWT token to every request
- Token stored in `localStorage` on the client side

---

## 📁 Project Structure

```
src/
├── main/
│   ├── java/com/taskmanager/
│   │   ├── config/          ← Spring configs (Security, Cache, etc.)
│   │   ├── domain/          ← JPA entities
│   │   ├── repository/      ← Spring Data repositories
│   │   ├── service/         ← Business logic
│   │   └── web/rest/        ← REST controllers
│   ├── resources/
│   │   └── config/liquibase/ ← DB migration changelogs
│   └── webapp/app/
│       ├── core/            ← Auth, interceptors, utilities
│       ├── entities/task/   ← Task components, service, routes
│       └── layouts/         ← Navbar, footer
└── test/                    ← Unit & integration tests
```

---

## 👨‍💻 Author

Built as part of an internship interview preparation project.
