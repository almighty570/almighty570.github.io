import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

import SellerDashboard from '../views/Seller/Dashboard.vue'
import SellerProductList from '../views/Seller/Products/List.vue'
import SellerProductCreate from '../views/Seller/Products/Create.vue'
import SellerProductEdit from '../views/Seller/Products/Edit.vue'
import SellerProductDetail from '../views/Seller/Products/Show.vue'

import SellerOrderList from "../views/Seller/Orders/List.vue";
import SellerOrderCreate from '../views/Seller/Orders/Create.vue'
import SellerOrderDetail from "../views/Seller/Orders/Show.vue";
import SellerOrderEdit from "../views/Seller/Orders/Edit.vue";

import SellerSalesAgentList from "../views/Seller/SalesAgents/List.vue";
import SellerSalesAgentCreate from '../views/Seller/SalesAgents/Create.vue'
import SellerSalesAgentDetail from "../views/Seller/SalesAgents/Show.vue";
import SellerSalesAgentEdit from "../views/Seller/SalesAgents/Edit.vue";

import SellerSettings from "../views/Seller/Settings/index.vue";
import SellerSettingsGeneral from "../views/Seller/Settings/general.vue";
import SellerSettingsAccount from "../views/Seller/Settings/account.vue";


import SellerReports from "../views/Seller/Reports.vue";

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
    path: '/register',
    name: 'Register',
    meta: { layout: 'auth' },
    component: Register
  },

  {
    path: '/seller/dashboard',
    name: 'Seller-Dashboard',
    meta: { layout: 'seller' },
    component: SellerDashboard
  },

  // Products
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

  // orders
  {
    path: '/seller/orders',
    name: 'Seller-Order-List',
    meta: { layout: 'seller' },
    component: SellerOrderList
  },

  {
    path: '/seller/orders/create',
    name: 'Seller-Order-Create',
    meta: { layout: 'seller' },
    component: SellerOrderCreate
  },

  {
    path: '/seller/orders/:id',
    name: 'Seller-Order-Detail',
    meta: { layout: 'seller' },
    component: SellerOrderDetail
  },

  {
    path: '/seller/orders/:id/edit',
    name: 'Seller-Order-Edit',
    meta: { layout: 'seller' },
    component: SellerOrderEdit
  },

  // Sales Agents
  {
    path: '/seller/sales-agents',
    name: 'Seller-Sales-Agent-List',
    meta: { layout: 'seller' },
    component: SellerSalesAgentList
  },

  {
    path: '/seller/sales-agents/create',
    name: 'Seller-Sales-Agent-Create',
    meta: { layout: 'seller' },
    component: SellerSalesAgentCreate
  },

  {
    path: '/seller/sales-agents/:id',
    name: 'Seller-Sales-Agent-Detail',
    meta: { layout: 'seller' },
    component: SellerSalesAgentDetail
  },

  {
    path: '/seller/sales-agents/:id/edit',
    name: 'Seller-Sales-Agent-Edit',
    meta: { layout: 'seller' },
    component: SellerSalesAgentEdit
  },

  {
    path: '/seller/reports',
    name: 'Seller-Reports',
    meta: { layout: 'seller' },
    component: SellerReports
  },

  {
    path: '/seller/settings',
    meta: { layout: 'seller' },
    component: SellerSettings,
    children: [
      {
        path: '',
        name: 'Seller-Settings',
        component: SellerSettingsGeneral
      },
      {
        path: '/general',
        name: 'Seller-Settings-General',
        component: SellerSettingsGeneral
      }, {
        path: '/account',
        name: 'Seller-Settings-Account',
        component: SellerSettingsAccount
      }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
