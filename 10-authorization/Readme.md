## Authorization RoleBased Access Control

 upgraded Authentication system to include Authorization.
Who is this user to What is this user allowed to do.

## Key Concepts

Authentication (AuthN) Who are you? , Logging in with Email/Password. 
Authorization (AuthZ) Are you allowed here?, An Admin deleting someone else's post. 

## Implementation 

### 1. Database Schema Update (models/user.js)
We added a role field to the User schema to distinguish between Admins and Normal users.

role: {
    type: String,
    required: true,
    default: "NORMAL", 
}

### 2.upgrading jwt

embedded the user's role directly into their JWT. This allows us to check permissions instantly without querying the database every time.

 Payload includes the role now-
jwt.sign({
    _id: user._id,
    email: user.email,
    role: user.role, //Crucial for checking permissions later
}, secret);

### 3. The Middleware middleware/auth.js
We created a flexible middleware function restrictTo that accepts a list of allowed roles.
function restrictTo(roles) {
    return function(req, res, next) {
        if (!req.user) return res.redirect("/login");
        
        if (!roles.includes(req.user.role)) {
            return res.end("UnAuthorized");
        }
        return next();
    };
}