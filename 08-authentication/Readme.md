##  Authentication & Security: From Stateful to Stateless
## 08: Stateful Authentication (Session-Based)

 we built a login system where the server remembers every logged-in user.

- **Mechanism:**
  1. User logs in.
  2. Server generates a random ID (`uuid`).
  3. Server saves this ID in a Map/Memory (`sessionIdToUserMap`).
  4. Server gives the ID to the user as a **Cookie**.
- **Pros:** Simple to understand.
- **Cons:** - **Memory Heavy:** If 1 million users log in, the server runs out of RAM.
  - **Fragile:** If the server restarts, the Map is erased, and everyone is logged out.

## 09: Stateless Authentication (JWT)

In this chapter, we upgraded to **JSON Web Tokens (JWT)** to solve the memory issues.

- **Mechanism:**
  1. User logs in.
  2. Server creates a **Token** containing the user's data (email, id).
  3. Server **Signs** the token with a Secret Key (`jwt.sign`).
  4. Server sends the token as a Cookie.
  5. No Memory Needed: When the user returns, the server just checks the signature (`jwt.verify`).
- Key Library: `jsonwebtoken`
- **Pros:** - Server memory stays empty.
  - Works across multiple servers.
  - Survive server restarts.

-