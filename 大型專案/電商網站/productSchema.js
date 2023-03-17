import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  url: String,
  filename: String,
});

// ImageSchema.virtual("thumbnail").get(function () {
//   return this.url.replace("/upload", "/upload/w_100");
// });

const productSchema = new Schema({
  name: { type: Object, required: true },
  introduction: { type: String, required: true },
  features: { type: String, required: true },
  price: { type: Number, required: true },
  contents: { type: Array, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
