const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true,
    },
    price: {
        type: 'number',
        required: true,
        min: 0,
    },
    category: {
        type: 'string',
        upcase: true,
        enum: ["Fruit","Vegetable","Dairy","Animal","Planet"],
    }
})
const Product = mongoose.model('Product',productSchema);
module.exports = Product;