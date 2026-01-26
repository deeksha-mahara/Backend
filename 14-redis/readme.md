## Redis (High-Performance Caching)

**Goal:** Making the backend "Superhumanly" fast by reducing Database calls.
 we integrated **Redis**, an in-memory database, to act as a high-speed cache for our application.


## Problem: Database Latency
When a user requests data (e.g., a URL redirect):
1.  Node.js asks MongoDB (Hard Drive).
2.  MongoDB searches thousands of records.
3.  **Result:** This takes time (e.g., 50ms - 200ms).
4.  **Issue:** If 1 million users ask at once, the database crashes.

## Solution: Redis (RAM)
We placed Redis **in front** of MongoDB.
* Redis lives in **RAM (Random Access Memory)**.
* Reading from RAM is nanoseconds fast.
* **Analogy:** MongoDB is a "Library Archive" in the basement. Redis is a "Sticky Note" on your desk.

---

##  The Pattern: Cache-Aside
We implemented the industry-standard **"Cache-Aside"** strategy:

1.  **Check Cache First:**
    * "Do we have this ID in Redis?"
    *  **HIT:** Return data immediately (Speed: ~1ms).
    *  **MISS:** Go to Step 2.

2.  **Fetch from DB & Update Cache:**
    * Ask MongoDB for the data.
    * **Save** the result to Redis (so the next user gets the fast speed).
    * Return data to user.

###  Code Snippet
```javascript
async function getData(key) {
    const cached = await client.get(key);
    if (cached) return JSON.parse(cached);

    const data = await Database.find(key);

    await client.set(key, JSON.stringify(data), { EX: 60 });
    
    return data;
}