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
      <div class="container-fluid">
        <Card>
          <div slot="body">
            <ListTable
              id="products-list"
              :columns="productColumns"
              :rows="productData"
              create_path_name="Seller-Product-Create"
              edit_path_name="Seller-Product-Edit"
              detail_path_name="Seller-Product-Detail"
              color_scheme="primary"
              sample_file_link="#"
            />
          </div>
        </Card>
      </div>
    </section>
  </div>
</template>

<script>
import ListTable from "@/components/derived/ListTable";
import Card from "@/components/core/Card";

export default {
  name: "Products-List",
  components: { ListTable, Card },
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
      productData: null
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
          name: "item_code",
          title: "Item Code",
          sortField: "item_code"
        },

        {
          name: "product_code",
          title: "Product Code",
          sortField: "product_code"
        },

        {
          name: "description",
          title: "Description",
          sortField: "description"
        },

        {
          name: "available",
          title: "Available",
          sortField: "available",
          formatter(value) {
            let status = {
              Yes: "success",
              No: "warning"
            }[value];
            return `<span class="status text-${status}"> <i class="fas fa-circle mr-1"></i> ${value} </span>`;
          }
        },

        {
          name: "order",
          title: "Order",
          sortField: "order"
        },

        {
          name: "stock",
          title: "Stock",
          sortField: "stock"
        },
        "actions"
      ];

      this.productData = [
        {
          id: 1,
          item_code: "I-45424",
          product_code: "P-45424",
          description: "Short description 1...",
          available: "No",
          order: "O-2342",
          stock: "some stock 1"
        },

        {
          id: 2,
          item_code: "I-123534",
          product_code: "P-0234",
          description: "Short description 2...",
          available: "Yes",
          order: "O-98934",
          stock: "some stock 2"
        },

        {
          id: 3,
          item_code: "I-123534",
          product_code: "P-0234",
          description: "Short description 2...",
          available: "Yes",
          order: "O-98934",
          stock: "some stock 2"
        },

        {
          id: 4,
          item_code: "I-123534",
          product_code: "P-0234",
          description: "Short description 2...",
          available: "Yes",
          order: "O-98934",
          stock: "some stock 2"
        },

        {
          id: 5,
          item_code: "I-123534",
          product_code: "P-0234",
          description: "Short description 2...",
          available: "Yes",
          order: "O-98934",
          stock: "some stock 2"
        },

        {
          id: 6,
          item_code: "I-123534",
          product_code: "P-0234",
          description: "Short description 2...",
          available: "Yes",
          order: "O-98934",
          stock: "some stock 2"
        }
      ];
    }
  }
};
</script>

<style lang="scss">
</style>