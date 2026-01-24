## Deployment (Cloud Architecture)

Moving the application from "Localhost" to the "Cloud".
focuses on the architectural changes required to make a Node.js application production-ready . we transitioned from a local development environment to a cloud-compatible setup.

##  Database Migration: MongoDB Atlas
**The Problem:**
A server running on the cloud (e.g., Render, AWS) cannot access the MongoDB installed on laptop (localhost).
**The Solution:**
We migrated the database to **MongoDB Atlas** (DBaaS - Database as a Service).

### Key Configuration Steps
* **Cluster Creation:** Provisioned a free tier (M0) cluster on AWS (Mumbai Region).
* **Network Security:** Configured **IP Whitelisting** to `0.0.0.0/0` (Allow All).
    * *Why?* Cloud hosting providers have dynamic IP addresses; we cannot predict them, so we must allow access from anywhere (secured by password).
* **Connection String:** Generated the mongodb+srv:// URI.

## Environment Variables (The DevOps Standard)
**The Problem:**
Hardcoding sensitive credentials (passwords, API keys) in index.js is a security risk and makes deployment impossible (since the Cloud uses different settings than Local).

**The Solution:**
We implemented Dynamic Configuration using process.env.

### Code Implementation
Updated the connection logic to automatically switch between environments.

// index.js

// 1. Cloud sets the PORT variable automatically.
// 2. If running locally, it falls back to 8001.
const PORT = process.env.PORT || 8001; 

// 1. If a Cloud DB URL is provided (Env Var), use it.
// 2. If not, use the Localhost DB.
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/short-url";

connectToMongoDB(MONGO_URL)
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log("Error", err));