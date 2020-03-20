<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-md-6 col-sm-12">
            <h1 class="m-0 text-dark">
              <i class="nav-icon fal fa-arrow-circle-left mr-2 btn-back" @click="cancel()"></i>
              Product Details
            </h1>
          </div>
          <div class="col-md-6 col-sm-12">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item" v-for="(item, index) in breadcrumbLinks" :key="index">
                <router-link
                  :to="{name: item.pathName}"
                  :class="{'breadcrumb-item': true, 'active': item.isActive}"
                >{{item.title}}</router-link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <section class="content">
      <div class="container-fluid">
        <div class="card">
          <div class="card-body"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TextBox from "@/components/core/TextBox";

export default {
  name: "Dashbaord",
  components: {
    TextBox
  },
  data() {
    return {
      breadcrumbLinks: [
        {
          title: "Dashboard",
          isActive: false,
          pathName: "Seller-Dashboard"
        },
        {
          title: "Products",
          isActive: false,
          pathName: "Seller-Product-List"
        },
        {
          title: this.$route.params.id,
          isActive: true,
          pathName: "Seller-Product-Detail"
        }
      ],
      productDetail: null
    };
  },

  created() {
    this.fetchProduct();
  },

  methods: {
    fetchProduct() {
      this.productEditForm = {
        itemCode: "123213",
        description: "descriptio ksdfa fas d as",
        stock: "asda",
        cost: 12312,
        salePrice: 234,
        weightApprox: 345.456,
        image: "asdasd",
        boxSize: 1,
        customBoxSize: null,
        variations: [
          {
            key: "key-1",
            val: "val-1"
          },
          {
            key: "key-2",
            val: "val-2"
          },
          {
            key: "key-3",
            val: "val-3"
          }
        ],
        dealPrices: [
          {
            key: 1,
            val: 100
          },
          {
            key: 2,
            val: 150
          },
          {
            key: 3,
            val: 200
          }
        ]
      };
      this.productHasVariations = true;
    }
  }
};
</script>

<style>
</style>