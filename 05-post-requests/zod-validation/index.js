const express = require('express');
const zod = require('zod'); //importing library
const app = express();

app.use(express.json());

// define the Schema
const registerSchema = zod.object({
    username: zod.string().min(3, "Username must be at least 3 characters long"),
    email: zod.string().email("Invalid email address format"),
    password: zod.string().min(8, "Password must be at least 8 characters"),
    age: zod.number().min(18, "You must be 18 or older").optional() 
});

app.post('/register', (req, res) => {
    const userData = req.body;

    // ask Zod Does this userData follow the rules
    const result = registerSchema.safeParse(userData);

    // Handle the Result
    if (!result.success) {
        return res.status(400).json({
            message: "Input Validation Failed ",
            errors: result.error.issues
        });
    }

    res.json({
        message: "Validation Passed! User registered. ",
        data: result.data
    });
});

app.listen(3000, () => {
    console.log("Validation Server running on port 3000");
});