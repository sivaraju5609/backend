// src/routes/assignments.js
const express = require('express');
const router = express.Router();

// Mock assignments data
let assignments = [
    { id: 1, title: 'Math Homework', description: 'Solve 10 algebra problems', dueDate: '2024-08-15' },
    { id: 2, title: 'Science Project', description: 'Build a volcano model', dueDate: '2024-08-20' },
];

// Get all assignments
router.get('/', (req, res) => {
    res.json(assignments);
});

// Get assignment by ID
router.get('/:id', (req, res) => {
    const assignment = assignments.find(a => a.id === parseInt(req.params.id));
    if (assignment) {
        res.json(assignment);
    } else {
        res.status(404).json({ message: 'Assignment not found' });
    }
});

// Create new assignment
router.post('/', (req, res) => {
    const newAssignment = {
        id: assignments.length + 1,
        ...req.body,
    };
    assignments.push(newAssignment);
    res.status(201).json(newAssignment);
});

// Update assignment by ID
router.put('/:id', (req, res) => {
    const index = assignments.findIndex(a => a.id === parseInt(req.params.id));
    if (index !== -1) {
        assignments[index] = { id: parseInt(req.params.id), ...req.body };
        res.json(assignments[index]);
    } else {
        res.status(404).json({ message: 'Assignment not found' });
    }
});

// Delete assignment by ID
router.delete('/:id', (req, res) => {
    const index = assignments.findIndex(a => a.id === parseInt(req.params.id));
    if (index !== -1) {
        assignments.splice(index, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'Assignment not found' });
    }
});

module.exports = router;
