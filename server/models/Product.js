const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    imageUrl: String,
    category: String,
    stock: Number,
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
