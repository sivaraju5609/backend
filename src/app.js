// src/app.js
const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Import routes
const authRoutes = require('./routes/auth');
const assignmentsRoutes = require('./routes/assignments');

// Use routes

app.use('/api/auth', authRoutes);
app.use('/api/assignments', assignmentsRoutes);
app.post("/hey", (req, res)=>{
    res.json({message: "hello"});
})

const PORT = process.env.PORT || 3000;
console.log(PORT);

app.listen(3000, () => console.log(`Server running on port ${PORT}`));
