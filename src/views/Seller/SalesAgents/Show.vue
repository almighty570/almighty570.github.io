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
          <div class="card-body">
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <p class="lead">Product description</p>
                <table class="table table-striped table-sm">
                  <tr>
                    <td>
                      <label>Item Code:</label>
                    </td>
                    <td>{{productDetail.itemCode}}</td>
                  </tr>
                  <tr>
                    <td>
                      <label>Description:</label>
                    </td>
                    <td>{{productDetail.description}}</td>
                  </tr>
                  <tr>
                    <td>
                      <label>Stock:</label>
                    </td>
                    <td>{{productDetail.stock}}</td>
                  </tr>
                  <tr>
                    <td>
                      <label>Cost:</label>
                    </td>
                    <td>{{productDetail.cost}}</td>
                  </tr>
                  <tr>
                    <td>
                      <label>Sale Price:</label>
                    </td>
                    <td>{{productDetail.salePrice}}</td>
                  </tr>
                  <tr>
                    <td>
                      <label>Weight Approx:</label>
                    </td>
                    <td>{{productDetail.weightApprox}}</td>
                  </tr>
                  <tr>
                    <td>
                      <label>Box Size:</label>
                    </td>
                    <td>Large</td>
                  </tr>
                </table>
              </div>

              <div class="col-md-6 col-sm-12">
                <p class="lead">Product Variations</p>
                <table class="table table-striped table-sm">
                  <tr v-for="variation in productDetail.variations" :key="variation.key">
                    <td>
                      <label>{{variation.key}}</label>
                    </td>
                    <td>{{variation.val}}</td>
                  </tr>
                </table>

                <p class="lead">Deal prices</p>
                <table class="table table-striped table-sm">
                  <tr v-for="dealPrice in productDetail.dealPrices" :key="dealPrice.key">
                    <td>
                      <label>{{dealPrice.key}} item(s)</label>
                    </td>
                    <td>{{dealPrice.val}} Bhatt</td>
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
                <p class="lead">Product History</p>
                <div class="toolbar d-flex mb-2">
                  <button class="btn btn-primary btn-sm mr-2">Import</button>
                  <button class="btn btn-primary btn-sm mr-2" @click="exportProductHistory()">Export</button>
                </div>

                <DataTable :columns="historyColumns" :rows="historyData" />
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="card">
              <div class="card-body">
                <p class="lead">Sales History</p>
                <div class="toolbar d-flex mb-2">
                  <button class="btn btn-primary btn-sm mr-2">Import</button>
                  <button class="btn btn-primary btn-sm mr-2" @click="exportSalesHistory()">Export</button>
                </div>

                <DataTable :columns="historyColumns" :rows="historyData" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DataTable from "@/components/core/DataTable";
import Swal from "sweetalert2";

export default {
  name: "Seller-Product-Show",
  components: {
    DataTable
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
      this.productDetail = {
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