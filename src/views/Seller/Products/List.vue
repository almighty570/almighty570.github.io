<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">All Products</h1>
          </div>
          <div class="col-sm-6">
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
      <div class="container">
        <div class="card">
          <div class="card-body">
            <div class="toolbar d-flex">
              <router-link
                :to="{name: 'Seller-Product-Create'}"
                class="btn btn-primary mr-2"
              >Add New</router-link>
              <button
                class="btn btn-primary mr-2"
                data-toggle="modal"
                data-target="#import-products-modal"
              >Import</button>
              <button class="btn btn-primary mr-2" @click="exportProducts()">Export</button>
            </div>

            <hr />
            <DataTable :columns="productColumns" :rows="productData" />
          </div>
        </div>
      </div>
    </section>

    <Modal id="import-products-modal">
      <template slot="header">
        <h5 class="modal-title">
          <i class="fal fa-file-import mr-2"></i>Import Products
        </h5>
      </template>
      <template slot="body">
        <p class="lead text-center">Drop the file here to upload it to the system</p>
        <vue-dropzone ref="importDropZone" id="import-dropzone" :options="importDropzoneOptions"></vue-dropzone>
      </template>
    </Modal>
  </div>
</template>

<script>
import DataTable from "@/components/core/DataTable";
import Modal from "@/components/core/Modal";
import Button from "@/components/core/Button";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import Swal from "sweetalert2";

export default {
  name: "Products-List",
  components: { DataTable, Modal, vueDropzone: vue2Dropzone },
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
          isActive: true,
          pathName: "Seller-Products"
        }
      ],

      productsLoading: false,
      productColumns: null,
      productData: null,

      importDropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" }
      }
    };
  },

  beforeMount() {
    // this.fetchProducts();
  },

  created() {
    this.fetchProducts();
  },

  methods: {
    fetchProducts() {
      // make API Call here...
      this.productColumns = [
        {
          headerName: "Item Code",
          field: "item_code",
          sortable: true,
          filter: true,
          checkboxSelection: true,
          width: 100
        },
        {
          headerName: "Description",
          field: "description",
          sortable: true,
          filter: true
        },
        {
          headerName: "Available",
          field: "available",
          sortable: true,
          filter: true
        },
        { headerName: "Order", field: "order", sortable: true, filter: true },
        { headerName: "Stock", field: "stock", sortable: true, filter: true },
        {
          headerName: "View/Edit",
          width: 100
        }
      ];
      this.productData = [
        {
          item_code: 123213,
          description: "Very short intro",
          available: "Yes",
          order: "00bsdf",
          stock: "sdf"
        }
      ];
    },

    exportProducts() {
      Swal.fire("Export file", "File will download in a while", "info").then(() => {});
    }
  }
};
</script>

<style>
</style>