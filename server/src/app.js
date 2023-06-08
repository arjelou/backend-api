const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const planetRouter = require("./routes/planets/planets.route");
const launchRouter = require("./routes/launches/launches.route");
const mongoPractice = require("./mongoose");

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(morgan('combined'));

app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..','public')));

//simple approach to create a new data
app.post('/products',mongoPractice.createProduct)
app.get('/product',mongoPractice.getProducts)
app.get('/product/:id',mongoPractice.getProduct)
app.get('/product/user/:id',mongoPractice.getProductUsersID)




app.use(planetRouter);
app.use(launchRouter);




module.exports = app;