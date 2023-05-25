const express = require('express');
const cors = require('cors');
const planetRouter = require("./routes/planets/planets.route");

const app = express();

app.use(cors('http://localhost:3000'));

app.use(express.json());
app.use(planetRouter);


module.exports = app;