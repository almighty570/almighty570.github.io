import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

import SellerDashboard from '../views/Seller/Dashboard.vue'
import SellerProductList from '../views/Seller/Products/List.vue'
import SellerProductCreate from '../views/Seller/Products/Create.vue'
import SellerProductEdit from '../views/Seller/Products/Edit.vue'
import SellerProductDetail from '../views/Seller/Products/Show.vue'

import SellerOrderDetail from "../views/Seller/Orders/Show.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Seller-Home',
    meta: { layout: 'seller' },
    component: SellerDashboard
  },

  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'auth' },
    component: Login
  },

  {
    path: '/seller/dashboard',
    name: 'Seller-Dashboard',
    meta: { layout: 'seller' },
    component: SellerDashboard
  },

  {
    path: '/seller/products',
    name: 'Seller-Product-List',
    meta: { layout: 'seller' },
    component: SellerProductList
  },

  {
    path: '/seller/products/create',
    name: 'Seller-Product-Create',
    meta: { layout: 'seller' },
    component: SellerProductCreate
  },

  {
    path: '/seller/products/:id/edit',
    name: 'Seller-Product-Edit',
    meta: { layout: 'seller' },
    component: SellerProductEdit
  },

  {
    path: '/seller/products/:id',
    name: 'Seller-Product-Detail',
    meta: { layout: 'seller' },
    component: SellerProductDetail
  },

  {
    path: '/seller/orders/view',
    name: 'Seller-Orders-Detail',
    meta: { layout: 'seller' },
    component: SellerOrderDetail
  },

  {
    path: '/about',
    name: 'About',
    meta: { layout: 'default' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
