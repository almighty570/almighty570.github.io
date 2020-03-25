<template>
  <div class="orders-page">
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
        <Card>
          <div slot="body">
            <ListTable
              id="orders-list"
              :columns="orderColumns"
              :rows="orderData"
              create_path_name="Seller-Order-Create"
              edit_path_name="Seller-Order-Edit"
              detail_path_name="Seller-Order-Detail"
              color_scheme="success"
              sample_file_link="#"
            >
              <div slot="top">
                <div class="order-status-list d-flex flex-wrap mt-4">
                  <div
                    class="order-status-list-item"
                    :class="{'--active': status === activeOrderStatus}"
                    v-for="(status, index) in orderStatusData"
                    :key="index"
                    @click="setActiveStatus(status)"
                  >
                    {{status.label}}
                    <span>{{status.number}}</span>
                  </div>

                  <DateRangePicker />
                </div>
              </div>
            </ListTable>
          </div>
        </Card>
      </div>
    </section>
  </div>
</template>

<script>
import ListTable from "@/components/derived/ListTable";
import DateRangePicker from "@/components/derived/DateRangePicker";
import Card from "@/components/core/Card";

export default {
  name: "Orders-List",
  components: { ListTable, Card, DateRangePicker },
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

      orderStatusData: [
        { label: "All", number: 120 },
        { label: "Pending", number: 18 },
        { label: "Shipped", number: 32 },
        { label: "Delivered", number: 35 },
        { label: "Cancelled", number: 35 }
      ],
      activeOrderStatus: null,

      fromDate: null,
      toDate: null,

      orderColumns: [
        { name: "order_code", title: "Order code", sortField: "order_code" },
        { name: "order_no", title: "Order No", sortField: "order-no" },
        {
          name: "representative",
          title: "Representative",
          sortField: "representative"
        },
        {
          name: "customer_name",
          title: "Customer Name",
          sortField: "customer_name"
        },
        { name: "shipping", title: "Shipping", sortField: "shipping" },
        { name: "qty", title: "Qty", sortField: "qty" },
        {
          name: "order_status",
          title: "Order Status",
          sortField: "order_status"
        },
        { name: "tracking_no", title: "Tracking No", sortField: "tracking_no" },
        {
          name: "created_by",
          title: "Created by User",
          sortField: "created_by"
        },
        { name: "cod", title: "COD", sortField: "cod" },
        { name: "updated", title: "Updated", sortField: "updated" },
        "actions"
      ],
      orderData: [
        {
          id: 1,
          order_code: "O-1234",
          order_no: "8024",
          representative: "",
          customer_name: "Customer 1",
          shipping: "SPP",
          qty: 1,
          order_status: "Inprocess",
          tracking_no: "EBS234325463",
          created_by: "System",
          cod: 100.23,
          updated: "2020/02/12"
        },
        {
          id: 2,
          order_code: "O-23234",
          order_no: "1232234",
          representative: "",
          customer_name: "Customer 1",
          shipping: "SPP",
          qty: 1,
          order_status: "Inprocess",
          tracking_no: "EBS234325463",
          created_by: "System",
          cod: 100.23,
          updated: "2020/02/12"
        }
      ]
    };
  },

  beforeMount() {
    // this.fetchProducts();
  },

  created() {
    this.fetchProducts();
    this.activeOrderStatus = this.orderStatusData[0];
  },

  methods: {
    setActiveStatus(status) {
      this.activeOrderStatus = status;
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