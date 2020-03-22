<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">All Orders</h1>
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
      <div class="container-fluid">
        <div class="card mb-4">
          <div class="card-body">
            <div class="toolbar d-flex">
              <router-link :to="{name: 'Seller-Order-Create'}" class="btn btn-primary mr-2">Add New</router-link>
              <button
                class="btn btn-primary mr-2"
                data-toggle="modal"
                data-target="#import-products-modal"
              >Import</button>
              <button class="btn btn-primary mr-2" @click="exportProducts()">Export</button>
            </div>

            <hr />
            <div class="d-flex mb-2">
              <button class="btn btn-sm btn-outline-info mr-2">All</button>
              <button class="btn btn-sm btn-outline-info mr-2">New</button>
              <button class="btn btn-sm btn-outline-info mr-2">Pending</button>
              <button class="btn btn-sm btn-outline-info mr-2">Shipped</button>
              <button class="btn btn-sm btn-outline-info mr-2">Delivered</button>
              <button class="btn btn-sm btn-outline-info mr-2">Cancelled</button>
              <button class="btn btn-sm btn-success mr-2">Date Select</button>
            </div>
            <DataTable
              id="orders-list"
              :columns="orderColumns"
              :rows="orderData"
              responsive
              custom_class="table-striped table-sm"
            />
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
  name: "Orders-List",
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
          title: "Orders",
          isActive: true,
          pathName: "Seller-Orders"
        }
      ],

      productsLoading: false,

      orderColumns: [
        { title: "Order code", sortable: false },
        { title: "Order No" },
        { title: "Representative" },
        { title: "Customer Name" },
        { title: "Shipping" },
        { title: "Qty" },
        { title: "Order Status" },
        { title: "Tracking No" },
        { title: "Created by User" },
        { title: "COD" },
        { title: "Updated" },
        {
          title: "",
          sortable: false,
          render: (data, type, row) => {
            return `<a href="#/seller/orders/${data}" class="btn btn-info btn-sm"> View </a>`;
          }
        }
      ],
      orderData: [
        [
          "O-23234",
          "1232234",
          "",
          "Customer 1",
          "SPP",
          1,
          "Inprocess",
          "EBS234325463",
          "System",
          100.23,
          "2020/02/12",
          1
        ],
        [
          "O-234534",
          "90004",
          "",
          "Customer 2",
          "EMO",
          1,
          "Pending",
          "EBS234562423",
          "System",
          100.23,
          "2020/34/12",
          2
        ],
        [
          "O-0294334",
          "12345354",
          "",
          "Customer 3",
          "FED",
          1,
          "Delivered",
          "EBS2344523",
          "System",
          100.23,
          "2020/03/12",
          3
        ],
        [
          "O-78234",
          "1269154",
          "",
          "Customer 4",
          "SPP",
          1,
          "Inprocess",
          "EBS235623",
          "System",
          100.23,
          "2020/06/23",
          4
        ],
        [
          "O-67867234",
          "12334534",
          "",
          "Customer 5",
          "SPP",
          1,
          "Inprocess",
          "EBS234893",
          "System",
          100.23,
          "2020/02/30",
          5
        ],
        [
          "O-232456",
          "12345154",
          "",
          "Customer 6",
          "SPP",
          1,
          "Inprocess",
          "EBS27832423",
          "System",
          100.23,
          "2020/02/12",
          6
        ],
        [
          "O-23234",
          "1232154",
          "",
          "Customer 7",
          "SPP",
          1,
          "Pending",
          "EBS23432423",
          "System",
          100.23,
          "2020/02/12",
          7
        ]
      ],

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
    hello() {
      alert("hello");
    },

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