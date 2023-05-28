const path = require('path');
const express = require('express');
const cors = require('cors');

const planetRouter = require("./routes/planets/planets.route");

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..','public')));

app.use(planetRouter);


module.exports = app;