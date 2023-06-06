const mongoose = require('mongoose');

const Product = require('./models/product');

const createProduct = async (req, res, next) => {
    const createdProduct = new Product({
        name: req.body.name,
        price: req.body.price,
    });

    const result = await createdProduct.save();
    res.json(result);
};

const getProducts = async (req, res, next) => {
    const results = await Product.find().exec();
    res.json(results);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;