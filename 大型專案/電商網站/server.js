import express from "express";

import cors from "cors";
import dotenv from "dotenv";
const app = express();
const port = process.env.PORT || 3000;

import mongoose from "mongoose";
import Product from "./productSchema.js";
const dbUrl =
  "mongodb+srv://dhoper777:apollo777@ecommerce-website.v7ymhpd.mongodb.net/?retryWrites=true&w=majority" ||
  "mongodb://127.0.0.1:27017/ecommerce-website";

async function main() {
  await mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
main()
  .then((solved) => console.log(solved, "success!!!"))
  .catch((err) => console.log("777", err));

  app.use(cors({
    origin: 'http://localhost:5173', // 允許跨來源的網域
    optionsSuccessStatus: 200, // 將所有請求的 HTTP 狀態碼設定為 200
    credentials: true // 允許搭配驗證資訊 (例如 Cookie) 傳送
  }));

///////////////API/////////////////

app.get("/api/products/:parameter", async (req, res) => {
  const searcher = req.params.parameter;
  try {
    const products = await Product.find({ category: searcher });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/api/product/:parameter", async (req, res) => {
  const searcher = req.params.parameter;
  try {
    const product = await Product.find({ _id: searcher });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// API to get product by ID
// app.get('/api/products/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     const product = await Product.findById(id);
//     res.json(product);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

app.listen(port, () => console.log(`Server running on port ${port}`));
