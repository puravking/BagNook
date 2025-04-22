const express = require("express");
const cors = require("cors");
const { Product, User } = require("./db");

const app = express();

// Middleware setup (must come before routes)
app.use(cors());
app.use(express.json());

// Signup route
app.post("/signup", async (req, res) => {
    const { username, password, mobile } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ msg: "User already exists" });
        }

        const newUser = await User.create({ username, password, mobile });
        return res.status(200).json(newUser);
    } catch (err) {
        console.error("Signup error:", err);
        res.status(500).json({ msg: "Server error" });
    }
});

// Signin route
app.post("/signin", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (user && user.password === password) {
            return res.status(200).json(user);
        }
        res.status(401).json({ msg: "Invalid credentials" });
    } catch (err) {
        console.error("Signin error:", err);
        res.status(500).json({ msg: "Server error" });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
