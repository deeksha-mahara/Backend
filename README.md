# 📚 Backend 

This repository documents my comprehensive journey into Backend Development. It serves as a code library and study guide, covering everything from Node.js internals to Advanced DevOps patterns.

> **Note:** This repo focuses on **concepts, logic, and implementation patterns**. Full-scale projects (like the URL Shortener or Chat App) may be developed here as modules or hosted in separate repositories.

---

## 🗺️ Learning Roadmap & Directory

### 🟢 Phase 1: The Foundations
| Folder | Topic | Key Concepts |
| :--- | :--- | :--- |
| **01-node-basics** | Node.js Runtime | REPL, File System (`fs`), Globals, Modules. |
| **02-http-server** | Raw HTTP | Creating servers without frameworks, Status Codes, Headers. |
| **03-express-server** | Express.js | Routing, Query Params, Handling Requests. |
| **04-middlewares** | Architecture | Request pipeline, Custom Middlewares, Error Handling. |

### 🟡 Phase 2: Database & Architecture
| Folder | Topic | Key Concepts |
| :--- | :--- | :--- |
| **06-mongodb** | NoSQL Databases | Connecting Mongoose, Schema Design, CRUD Operations. |
| **07-ejs** | SSR | Server-Side Rendering, Template Engines, Dynamic Views. |
| **11-mvc** | MVC Pattern | Refactoring code into Models, Views, and Controllers. |

### 🟠 Phase 3: Security & Authentication
| Folder | Topic | Key Concepts |
| :--- | :--- | :--- |
| **08-auth-basics** | Stateful Auth | Sessions, UUIDs, Cookie Management. |
| **09-jwt** | Stateless Auth | JSON Web Tokens, Cryptography, Digital Signatures. |
| **10-authorization** | Access Control | Role-Based Access Control (Admin vs. User). |

### 🔴 Phase 4: Advanced Engineering
| Folder | Topic | Key Concepts |
| :--- | :--- | :--- |
| **12-rest-api** | API Design | JSON Responses, Postman Testing, Universal Backends. |
| **14-uploads** | Binary Data | Handling File Uploads using Multer & Streams. |
| **15-websockets** | Real-Time | Socket.io, Event-Driven Architecture, Broadcasting. |
| **16-redis** | Performance | In-Memory Caching, Cache-Aside Strategy. |

### 🐳 Phase 5: DevOps
| Folder | Topic | Key Concepts |
| :--- | :--- | :--- |
| **17-docker** | Containerization | Dockerfiles, Images, Port Mapping. |
| **18-cicd** | Automation | GitHub Actions, Automated Testing Workflows. |

---

## 🛠️ Tech Stack Mastered
![NodeJS](https://img.shields.io/badge/Node.js-20.x-green) ![Express](https://img.shields.io/badge/Express-4.x-lightgrey) ![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green) ![Redis](https://img.shields.io/badge/Redis-Caching-red) ![Docker](https://img.shields.io/badge/Docker-Containerized-blue) ![Socket.io](https://img.shields.io/badge/Socket.io-RealTime-orange)

---

## 💡 Key Learnings & "Aha!" Moments

### 1. Stateful vs. Stateless Auth
- Learned that **Cookies** are just the transport mechanism.
- The real decision is whether to store the data in **Server RAM (Stateful)** or inside the **Token itself (Stateless JWT)**.

### 2. The Cost of Database Calls
- Realized that database queries take ~50ms.
- Implemented **Redis Caching** to reduce this to ~1ms for high-traffic endpoints.

### 3. Event-Driven vs. Request-Response
- Shifted mental models from "Asking for data" (HTTP) to "Listening for data" (WebSockets) to build the Chat module.

---

**Author:** [Deeksha Mahara](https://github.com/deeksha-mahara)
