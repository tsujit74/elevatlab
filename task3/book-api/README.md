

````markdown
# 📚 Book API - Task 3 (Web Development Internship)

This project is part of **Task 3** from the Web Development Internship program.  
The objective was to **create a REST API using Node.js and Express.js** to manage a list of books with basic CRUD operations.  
The books are stored **in memory (no database used)**.

---

## 🎯 Objective
- Build a simple REST API for **CRUD operations** on books.
- Learn the basics of:
  - REST API
  - Express.js
  - HTTP Methods
  - JSON handling
  - Middleware in Express
  - CRUD operations

---

## 🚀 Features / Endpoints

| Method | Endpoint     | Description              |
|--------|-------------|--------------------------|
| GET    | `/books`    | Get all books            |
| POST   | `/books`    | Add a new book           |
| PUT    | `/books/:id`| Update a book by ID      |
| DELETE | `/books/:id`| Delete a book by ID      |

---

## 🛠 Tools & Technologies
- **Node.js** (runtime)
- **Express.js** (framework)
- **Postman** (API testing)

---

## ▶️ How to Run the Project

1. Clone the repository:
   ```bash
   git clone git clone https://github.com/tsujit74/elevatlab
   cd book-api-task3
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm run dev
   ```

   The API will run on: **[http://localhost:3000](http://localhost:3000)**

---

##  Example API Usage

###  GET all books

```http
GET /books
```

**Response:**

```json
[
  { "id": 1, "title": "Atomic Habits", "author": "James Clear" },
  { "id": 2, "title": "The Alchemist", "author": "Paulo Coelho" }
]
```

### ➤ POST a new book

```http
POST /books
```

**Request Body:**

```json
{
  "title": "Deep Work",
  "author": "Cal Newport"
}
```

**Response:**

```json
{
  "id": 3,
  "title": "Deep Work",
  "author": "Cal Newport"
}
```

###  PUT update book

```http
PUT /books/1
```

**Request Body:**

```json
{
  "title": "Atomic Habits (Updated)"
}
```

###  DELETE a book

```http
DELETE /books/2
```

---

## 🧪 Testing

* Use **Postman** to test all endpoints.

---

## 📖 Key Concepts Learned

1. **REST API** basics
2. **HTTP Methods** (GET, POST, PUT, DELETE) and their uses
3. Handling **routes** in Express
4. Using **middleware** in Express (`express.json()`)
5. Parsing and returning **JSON data**
6. Correct usage of **status codes** in CRUD operations
7. Basic **error handling** in Express
8. What is **CORS** and when it is needed
9. Understanding **Request and Response objects** in Express
10. Testing endpoints with **Postman**


