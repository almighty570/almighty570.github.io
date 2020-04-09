<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-md-6 col-sm-12">
            <h1 class="m-0 text-dark">
              <i class="nav-icon fal fa-arrow-circle-left mr-2 btn-back" @click="cancel()"></i>
              Sales Agent Details
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
            <TableLeft :values="salesAgentDetail" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TableLeft from "@/components/core/TableLeft.vue";

export default {
  name: "Seller-Product-Show",
  components: {
    TableLeft
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
          title: "Sales Agents",
          isActive: false,
          pathName: "Seller-Sales-Agent-List"
        },
        {
          title: this.$route.params.id,
          isActive: true,
          pathName: "Seller-Sales-Agent-Detail"
        }
      ],
      salesAgentDetail: null
    };
  },

  created() {
    this.fetchSalesAgent();
  },

  methods: {
    cancel() {
      this.$router.push({ name: "Seller-Sales-Agent-List" });
    },

    fetchSalesAgent() {
      this.salesAgentDetail = [
        { id: 5 },
        { name: "Seller" },
        { email: "seller@proship.com" },
        { phone_no: "23423342" },
        { line_id: "seller_line_id" },
        { address: "Address" }
      ];
    }
  }
};
</script>

<style>
</style>