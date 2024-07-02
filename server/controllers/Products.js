const Product = require('../models/Product');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = { getProducts, getProductById };
