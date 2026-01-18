const { setUser } = require('../service/auth');

async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (!user) {
        return res.render("login", { error: "Invalid Username or Password" });
    }

    // OLD WAY:
    // const sessionId = uuidv4();
    // setUser(sessionId, user);
    // res.cookie("uid", sessionId);

    // NEW JWT WAY:
    const token = setUser(user); 
    res.cookie("uid", token); // We send the whole token as the cookie!
    
    return res.redirect("/");
}