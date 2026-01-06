# Day 3: Express.js & MVC Architecture
Express js is a nvm package
## MVC 
learned about Model-View-Controller**, the blueprint for organized apps.
1. **Model :** Handles the data (Database).
2. **View :** What the user sees (JSON or HTML).
3. **Controller :** The logic that connects the user to the data.

##  express.js vs Node HTTP
Why switched to Express:
1.  **Less Code:** Replaced 50 lines of if/else routing with simple app.get().
2.  **Clean Syntax:** No need to manually set Headers or Status Codes for simple requests.
3.  **Auto-JSON:** res.json() handles JSON.stringify() and content-type headers automatically.

## Methods
1. `express(): Initializes the app.
2. app.get('/', callback): Handles GET requests for a specific route.
3. res.send(): Sends text/html.
4. res.json(): Sends objects as JSON (API mode).
5. app.listen(): Starts the server.

# Dynamic routing
useful for multiple users or entries
