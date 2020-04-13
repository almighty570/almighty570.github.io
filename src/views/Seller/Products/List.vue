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
              :rows="products"
              create_path_name="Seller-Product-Create"
              edit_path_name="Seller-Product-Edit"
              detail_path_name="Seller-Product-Detail"
              color_scheme="primary"
              sample_file_link="#"
              @deleted="handleDelete()"
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
import { mapState, mapGetters } from "vuex";

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
      productColumns: null
    };
  },

  created() {
    setTimeout(() => this.fetchProducts(), 500);

    this.productColumns = [
      {
        name: "sku",
        title: "SKU",
        sortField: "sku"
      },

      {
        name: "proship_code",
        title: "Proship Code",
        sortField: "proship_code"
      },

      {
        name: "description",
        title: "Description",
        sortField: "description",
        formatter(value) {
          return value.length > 20 ? value.substring(0, 20) + "..." : value;
        }
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
        name: "stock",
        title: "Stock",
        sortField: "stock.remaining",
        formatter(value) {
          let percent = Math.floor((value.remaining / value.total) * 100);
          return `
            <div class="progress" style="height: 4px;">
              <div class="progress-bar" role="progressbar" style="width: ${percent}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <small> ${value.remaining} out of ${value.total} </small>
            `;
          return `<span class="status text-${status}"> <i class="fas fa-circle mr-1"></i> ${value} </span>`;
        }
      },
      "actions"
    ];
  },

  methods: {
    fetchProducts() {
      this.$store.dispatch("seller/fetchProducts");
    },

    handleDelete() {
      // debugger;
      this.$forceUpdate();
    }
  },

  computed: {
    ...mapGetters("seller", ["products"])
  }
};
</script>

<style lang="scss">
</style>