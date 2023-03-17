<script step></script>
<template>
    <div>
      <h1>Product List</h1>
      <ul>
        <li v-for="product in productList" :key="product._id">
          {{ product.name }}
          <button @click="deleteProduct(product._id)">Delete</button>
        </li>
      </ul>
      <form @submit.prevent="addProduct">
        <input type="text" v-model="newProduct.name" placeholder="Product Name" />
        <input type="number" v-model="newProduct.price" placeholder="Price" />
        <button type="submit">Add Product</button>
      </form>
    </div>
  </template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      productList: [],
      newProduct: {
        name: '',
        price: 0,
      },
    };
  },
  created() {
    this.getProductList();
  },
  methods: {
    getProductList() {
      axios.get('/api/products').then((response) => {
        this.productList = response.data;
      });
    },
    addProduct() {
      axios.post('/api/products', this.newProduct).then(() => {
        this.getProductList();
        this.newProduct = {
          name: '',
          price: 0,
        };
      });
    },
    deleteProduct(id) {
      axios.delete(`/api/products/${id}`).then(() => {
        this.getProductList();
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>