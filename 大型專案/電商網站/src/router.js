import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import ProductList from "./pages/ProductList.vue";
import Product from "./pages/Product.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", 
    component: Home, 
    name: "Home" },
    {
      path: "/productList/:category",
      component: ProductList,
      name: "ProductList",
      props: true,
    },
    {
      path: "/product/:id",
      component: Product,
      name: "Product",
      props: true,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});
export default router;

import axios from "axios";

export function getProducts(category) {
  return axios.get(`http://localhost:3000/api/products/${category}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
}
export function getProduct(id) {
  return axios.get(`http://localhost:3000/api/product/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
}
