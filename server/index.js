// const express = require("express");
// const app = express();
// const PORT = 4000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.get("/api", (req, res) => {
//     res.json({
//         message: "Hello world",
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
// });

const express = require("express");
const app = express();
const PORT = 4000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define the /api route
app.get("/api", (req, res) => {
    res.json({
        message: "Hello world",
    });
});

// Define the /register route
app.post("/register", (req, res) => {
    const { email, username, password } = req.body;

    // You can add logic to store this data in your database
    if (!email || !username || !password) {
        return res.status(400).json({ error_message: "All fields are required." });
    }

    // Simulating a successful registration for now
    res.json({
        message: "User registered successfully",
        data: {
            _id: "unique_user_id",
            _email: email,
            _username: username,
        },
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
