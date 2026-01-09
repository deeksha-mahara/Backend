# Backend Architecture & Server-Side Rendering

##  1. Architecture: API vs. Server-Side Rendering (SSR)
backend logic and frontend display.

### The Shift
* **REST API:** The server sends raw JSON data. The frontend (React/Vue) builds the UI.
* **SSR :** The server builds the HTML page itself and sends the finished view to the browser.

### EJS (Embedded JavaScript)
* **What is it?** A Template Engine. It acts like Mad Libs for HTML.
* **How it works:**
    1.  Server fetches data from MongoDB.
    2.  Server injects that data into placeholders (e.g., `<%= user.name %>`) inside the HTML.
    3.  Server sends the fully populated HTML page to the client.
* **Key Config:** `app.set("view engine", "ejs")` and storing files in `views/`.

##  2. Project Structure 

* **`models/` (The Blueprint):**
    * **Role:** Defines the shape of data (Schema).
    * **Rule:** Strictly for database logic. Doesn't care about HTTP requests.
* **`views/` (The Face):**
    * **Role:** Contains the UI templates (EJS/HTML).
    * **Rule:** Strictly for display. Doesn't touch the database directly.
* **`index.js` (The Controller):**
    * **Role:** The Traffic Cop. Connects the Model to the View.

Express checks routes from **Top to Bottom**.
1.  **Specific Routes First:** `/analytics`, `/login`, `/about`.
2.  **Dynamic Routes Last:** `/:id`, `/:shortUrl`.


##  4. Advanced Database Concepts (MongoDB)

### Atomic Operations (`$push`)
* **The Problem:** Read-Modify-Write creates Race Conditions. If two users click a link at the exact same millisecond, simple JavaScript updates (`arr.push()`) might overwrite data.
 Use MongoDB Operators.
    ```javascript
    // Updates the DB directly without bringing data to the server first
    { $push: { visitHistory: { timestamp: Date.now() } } }
    ```

### Indexing (`unique: true`)
* Defined in the Schema to enforce rules at the database engine level.
* Prevents duplicate entries (e.g., two users getting the same short URL) efficiently.

---

