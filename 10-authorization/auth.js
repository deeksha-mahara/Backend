function setUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role, 
    }, secret);
}