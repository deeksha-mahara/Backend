// Authentication
function checkAuth(req, res, next) {
    const user = getUserFromCookieOrHeader(req); 
    
    if (!user) return res.status(401).send("Who are you? (Unauthenticated)");
    
    req.user = user; // Attach badge
    next(); 
}

// 2. Authorization
function checkRole(requiredRole) {
    return function(req, res, next) {
        if (req.user.role !== requiredRole) {
            return res.status(403).send("You are not allowed here! (Unauthorized)");
        }
        next(); 
    }
}

module.exports = { checkAuth, checkRole };