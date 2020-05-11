import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

import SellerDashboard from '../views/Seller/Dashboard.vue'

import SellerProduct from "../views/Seller/Products/index.vue";
import SellerProductList from '../views/Seller/Products/List.vue'
import SellerProductCreate from '../views/Seller/Products/Create.vue'
import SellerProductEdit from '../views/Seller/Products/Edit.vue'
import SellerProductDetail from '../views/Seller/Products/Show.vue'

import SellerOrder from "../views/Seller/Orders/index.vue";
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

import Onboard from "../views/Onboard/index.vue";
import OnboardWelcome from "../views/Onboard/welcome.vue";
import OnboardDetails from "../views/Onboard/details.vue";
import OnboardOptions from "../views/Onboard/options.vue";
import OnboardProduct from "../views/Onboard/product.vue";
import OnboardShipping from "../views/Onboard/shipping.vue";
import OnboardFinal from "../views/Onboard/final.vue";

import PaymentDetails from "../views/Buyer/PaymentDetails.vue";
import BuyerThanks from "../views/Buyer/Thanks.vue";

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
    meta: { layout: 'seller' },
    component: SellerProduct,
    children: [
      {
        path: '',
        name: 'Seller-Product-List',
        component: SellerProductList
      },

      {
        path: 'create',
        name: 'Seller-Product-Create',
        component: SellerProductCreate
      },

      {
        path: ':id',
        name: 'Seller-Product-Detail',
        component: SellerProductDetail
      },
      {
        path: ':id/edit',
        name: 'Seller-Product-Edit',
        component: SellerProductEdit
      },
    ]
  },


  // orders
  {
    path: '/seller/orders',
    meta: { layout: 'seller' },
    component: SellerOrder,
    children: [
      {
        path: '',
        name: 'Seller-Order-List',
        component: SellerOrderList
      },

      {
        path: 'create',
        name: 'Seller-Order-Create',
        component: SellerOrderCreate
      },

      {
        path: ':id',
        name: 'Seller-Order-Detail',
        component: SellerOrderDetail
      },
      {
        path: ':id/edit',
        name: 'Seller-Order-Edit',
        component: SellerOrderEdit
      },
    ]
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
  },

  {
    path: '/onboard',
    component: Onboard,
    children: [
      {
        path: '',
        meta: { layout: 'onboard' },
        name: 'Onboard',
        component: OnboardWelcome
      },

      {
        path: '',
        meta: { layout: 'onboard' },
        name: 'Onboard-Welcome',
        component: OnboardWelcome
      },

      {
        path: 'details',
        meta: { layout: 'onboard' },
        name: 'Onboard-Details',
        component: OnboardDetails
      },

      {
        path: 'options',
        meta: { layout: 'onboard' },
        name: 'Onboard-Options',
        component: OnboardOptions
      },

      {
        path: 'product',
        meta: { layout: 'onboard' },
        name: 'Onboard-Product',
        component: OnboardProduct
      },

      {
        path: 'shipping',
        meta: { layout: 'onboard' },
        name: 'Onboard-Shipping',
        component: OnboardShipping
      },

      {
        path: 'final',
        meta: { layout: 'onboard' },
        name: 'Onboard-Final',
        component: OnboardFinal
      },


    ]
  },

  //Buyer
  {
    path: '/payment-details',
    meta: { layout: 'buyer' },
    name: 'Payment-Details',
    component: PaymentDetails
  },
  {
    path: '/thanks',
    meta: { layout: 'buyer' },
    name: 'Buyer-Thanks',
    component: BuyerThanks
  }

]

const router = new VueRouter({
  routes
})

export default router
