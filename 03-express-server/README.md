# Day 3: Express.js & MVC Architecture
Express js is a nvm package
## Theory: The MVC Pattern
learned about Model-View-Controller**, the blueprint for organized apps.
* **Model (Kitchen):** Handles the data (Database).
* **View (Platter):** What the user sees (JSON or HTML).
* **Controller (Waiter):** The logic that connects the user to the data.

##  Express.js vs Node HTTP
Why switched to Express:
1.  **Less Code:** Replaced 50 lines of `if/else` routing with simple `app.get()`.
2.  **Clean Syntax:** No need to manually set Headers or Status Codes for simple requests.
3.  **Auto-JSON:** `res.json()` handles `JSON.stringify()` and content-type headers automatically.

##  Key Methods
* `express()`: Initializes the app.
* `app.get('/', callback)`: Handles GET requests for a specific route.
* `res.send()`: Sends text/html.
* `res.json()`: Sends objects as JSON (API mode).
* `app.listen()`: Starts the server.

# Dynamic routing
useful for multiple users or entries