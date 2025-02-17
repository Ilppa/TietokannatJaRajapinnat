const express = require('express');
const router = express.Router();

// GET-metodi ilman parametreja
router.get('/', (req, res) => {
    res.send('All users');
});

// GET-metodi yhdellä parametrilla
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User with ID: ${userId}`);
});

// GET-metodi kahdella parametrilla
router.get('/:id/:name', (req, res) => {
    const userId = req.params.id;
    const userName = req.params.name;
    res.send(`User ID: ${userId}, User Name: ${userName}`);
});

// POST-metodi
router.post('/', (req, res) => {
    const newUser = req.body;  // Odottaa JSON-dataa request-bodysta
    res.status(201).send(`New user created: ${JSON.stringify(newUser)}`);
});

module.exports = router;
