#  Day 4: Middleware, POST Requests.

## 1. Middleware: The Gatekeepers
Middleware functions are the "Traffic Police" of Express. They sit between the incoming request and the final route handler.

### The Chain of Command
* **Request** → **Middleware 1** (Logger) → **Middleware 2** (Auth) → **Route Handler** (Response).
* **`next()`**: The most imp function. If a middleware doesn't call next(), the request hangs and dies. It's like a guard refusing to open the gate.
* **Order Matters:** Middleware placed *before* a route runs for that route. Middleware placed *after* is ignored (except Error Handlers).

##  2. HTTP Methods: The Envelope Analogy
* **GET:** Like a Postcard. Data is visible in the URL (?id=5). insecure for passwords, limited size.
* **POST:** Like a Sealed Envelope. Data is hidden inside the Body.
    * Used for: Login, Registration, Uploading files.
    * Secure? More than GET, but still needs HTTPS to be truly safe.

##  3. The Body Parser (express.json)
**The Problem:** Node.js receives data as a **raw stream** (bits and bytes). It doesn't know if it's text, video, or JSON.
**The Fix:** app.use(express.json())
* It intercepts the raw stream.
* Collects all chunks.
* Parses them into a JavaScript Object.
* Attaches the result to req.body.
* Without this line, req.body is undefined.

