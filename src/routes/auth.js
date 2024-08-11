// src/routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Mock user data
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
];
const JWT_SECRET = "d03cbf58aaca13061758dce3e46268280869d1f3ed104dfe9636666f5a084fa97c3688d36fcf2530c37269029d1f601c8021b5f4a1c97e5115e1dbb2a9e2e6ee"

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Generate JWT
        const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
