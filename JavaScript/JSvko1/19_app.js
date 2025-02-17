const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require('./routes/users');

app.use(express.json());  // Middleware, joka parsee JSON-bodyt

// Middleware-funktio, joka toimii ennen reittejä
app.use((req, res, next) => {
    console.log('Middleware is running...');
    next();  // Jatkaa seuraavaan käsittelyyn
});

// Reitit
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
