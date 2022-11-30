const Product = require('./models/product');

const mongoose = require('mongoose');
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/framStand');
}
main().then(res => console.log(res, "success!!!"))
    .catch(err => console.log(err));


let seedProducts = [
    {
        name: "Ruby Grapefruit",
        price: 11,
        category: "Fruit",
    },
    {
        name: "Apple",
        price: 22,
        category: "Fruit",
    },
    {
        name: "Berries",
        price: 33,
        category: "Fruit",
    },
    {
        name: "Water Melon milk",
        price: 44,
        category: "Dairy",
    },
    {
        name: "Mango",
        price: 777,
        category: "Fruit",
    },
    {
        name: "Ox",
        price: 88888,
        category: "Animal",
    },
    {
        name: "Jupiter",
        price: 777777777777777,
        category: "Planet",
    },
]
// Product.deleteMany({});
Product.insertMany(seedProducts)
       .then(res => console.log("success!!!",res))
       .catch(err => console.log(err));


