<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-md-6 col-sm-12">
            <h1 class="m-0 text-dark">
              <i class="nav-icon fal fa-arrow-circle-left mr-2 btn-back" @click="cancel()"></i>
             {{$t('products.show.label')}}
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
        <div v-if="productDetail">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6 col-sm-12">
                  <p class="lead">{{$t('products.show.detail_card.label')}}</p>
                  <table class="table table-striped table-sm">
                    <tr>
                      <td>
                        <label>{{$t('products.show.detail_card.code')}}:</label>
                      </td>
                      <td>{{productDetail.sku}}</td>
                    </tr>
                    <tr>
                      <td>
                        <label>{{$t('products.show.detail_card.description')}}:</label>
                      </td>
                      <td>{{productDetail.description}}</td>
                    </tr>
                    <tr>
                      <td>
                        <label>{{$t('products.show.detail_card.stock')}}:</label>
                      </td>
                      <td>{{productDetail.stock.remaining}}/{{productDetail.stock.total}}</td>
                    </tr>
                    <tr>
                      <td>
                        <label>{{$t('products.show.detail_card.cost')}}:</label>
                      </td>
                      <td>{{productDetail.cost}}</td>
                    </tr>
                    <tr>
                      <td>
                        <label>{{$t('products.show.detail_card.sale_price')}}:</label>
                      </td>
                      <td>{{productDetail.salePrice}}</td>
                    </tr>
                    <tr>
                      <td>
                        <label>{{$t('products.show.detail_card.weight')}}:</label>
                      </td>
                      <td>{{productDetail.weightApprox}}</td>
                    </tr>
                    <tr>
                      <td>
                        <label>{{$t('products.show.detail_card.box_size')}}:</label>
                      </td>
                      <td>{{$t('products.show.detail_card.large')}}</td>
                    </tr>
                  </table>
                </div>

                <div class="col-md-6 col-sm-12">
                  <div v-if="productDetail.variations && productDetail.variations.length">
                    <p class="lead">Product Variations</p>
                    <div v-for="variation in productDetail.variations" :key="variation.key">
                      <label>{{variation.name}}</label>
                      <table class="table table-bordered table-sm">
                        <tr v-for="option in variation.options" :key="option.key">
                          <td>
                            <label>{{option.name}}</label>
                          </td>
                          <td>{{option.stock}}</td>
                          <td>{{option.sku}}</td>
                        </tr>
                      </table>
                    </div>
                    <hr />
                  </div>

                  <p class="lead">{{$t('products.show.deal_price.label')}}</p>
                  <table class="table table-striped table-sm">
                    <tr v-for="bundlePrice in productDetail.bundlePrices" :key="bundlePrice.key">
                      <td>
                        <label>{{bundlePrice.amount}} {{$t('products.show.deal_price.items')}}</label>
                      </td>
                      <td>{{bundlePrice.price}} {{$t('products.show.deal_price.bhatt')}}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div class="card">
                <div class="card-body">
                  <p class="lead">{{$t('products.show.history.product')}}</p>
                  <div class="toolbar d-flex mb-2">
                    <button class="btn btn-primary btn-sm mr-2">{{$t('products.show.history.import')}}</button>
                    <button
                      class="btn btn-primary btn-sm mr-2"
                      @click="exportProductHistory()"
                    >{{$t('products.show.history.export')}}</button>
                  </div>

                  <DataTable id="product-history" :columns="historyColumns" :rows="historyData" />
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="card">
                <div class="card-body">
                  <p class="lead">{{$t('products.show.history.sales')}}</p>
                  <div class="toolbar d-flex mb-2">
                    <button class="btn btn-primary btn-sm mr-2">{{$t('products.show.history.import')}}</button>
                    <button class="btn btn-primary btn-sm mr-2" @click="exportSalesHistory()">{{$t('products.show.history.export')}}</button>
                  </div>

                  <DataTable id="product-history" :columns="historyColumns" :rows="historyData" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <Spinner size="lg" variation="primary" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DataTable from "@/components/core/DataTable";
import Swal from "sweetalert2";
import Spinner from "@/components/core/Spinner";

export default {
  name: "Seller-Product-Show",
  components: {
    DataTable,
    Spinner
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
      productDetail: null,

      historyColumns: [
        {
          headerName: "#",
          field: "sn",
          sortable: true,
          checkboxSelection: true,
          width: 100
        },
        {
          headerName: "Date",
          field: "date",
          sortable: true,
          filter: true,
          width: 200
        },
        {
          headerName: "Note",
          field: "note",
          sortable: true,
          filter: true,
          width: "auto"
        }
      ],

      historyData: [
        { sn: "0", date: "12th March, 2020", note: "Product added" },
        { sn: "1", date: "13th March, 2020", note: "Product changed" },
        { sn: "2", date: "15th March, 2020", note: "Product shiped" },
        { sn: "3", date: "1st April, 2020", note: "Product deleted" }
      ]
    };
  },

  created() {
    this.fetchProduct();
  },

  methods: {
    cancel() {
      this.$router.push({ name: "Seller-Product-List" });
    },

    fetchProduct() {
      this.$store.dispatch("products/fetchProductDetail", {
        id: this.$route.params.id,
        callback: data => {
          this.productDetail = data;
        }
      });
    },

    exportSalesHistory() {
      Swal.fire(
        "Export file",
        "File will download in a while",
        "info"
      ).then(() => {});
    },

    exportProductHistory() {
      Swal.fire(
        "Export file",
        "File will download in a while",
        "info"
      ).then(() => {});
    }
  }
};
</script>

<style>
</style>