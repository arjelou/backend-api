const mongoose = require('mongoose');

const Product = require('./models/product');



//CREATE a new Product
const createProduct = async (req, res, next) => {
    const { name, price, uid } = req.body;
    const createdProduct = new Product({
        name,
        price,
        uid
    });

    const result = await createdProduct.save();
    res.json(result);
};

//GET all products
const getProducts = async (req, res, next) => {
    const results = await Product.find().exec();
    res.json(results);
};

//GET products by ID
const getProduct = async (req, res, next) => {

    try {
        const result = await Product.findById(req.params.id).exec();
        res.json(result);
    }catch {
        res.status(500).json('Invalid Product');
    }
    
};

//GET product by user ID
const getProductUsersID = async (req, res, ) => {
    const userID = req.params.id;
    let places;

   try {
    places = await Product.find({uid: userID});

   }catch {
     res.status(404).json('Invalid user ID');
   }

//    res.json({places: places.map(place => place.toObject({getters:true})) });
   res.json(places);
   console.log(userID);

  
}

exports.createProduct = createProduct;
exports.getProducts = getProducts;
exports.getProduct = getProduct;
exports.getProductUsersID = getProductUsersID;