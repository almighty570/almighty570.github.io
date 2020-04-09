<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">All Sales Agents</h1>
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
              id="sales-agents-list"
              :columns="salesAgentsColumns"
              :rows="salesAgentsData"
              create_path_name="Seller-Sales-Agent-Create"
              edit_path_name="Seller-Sales-Agent-Edit"
              detail_path_name="Seller-Sales-Agent-Detail"
              color_scheme="info"
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
          title: "Sales Agents",
          isActive: true,
          pathName: "Seller-Sales-Agent-List"
        }
      ],
      salesAgentsLoading: false,
      salesAgentsColumns: null,
      salesAgentsData: null
    };
  },

  beforeMount() {
    // this.fetchProducts();
  },

  created() {
    this.fetchSalesAgents();
  },

  methods: {
    fetchSalesAgents() {
      // make API Call here...
      this.salesAgentsColumns = [
        {
          name: "name",
          title: "Name",
          sortField: "name"
        },

        {
          name: "email",
          title: "Email",
          sortField: "email"
        },

        {
          name: "phone_no",
          title: "Phone No.",
          sortField: "phone_no"
        },

        {
          name: "line_id",
          title: "Line ID",
          sortField: "line_id"
        },

        {
          name: "address",
          title: "Address",
          sortField: "address"
        },
        "actions"
      ];

      this.salesAgentsData = [
        {
          id: 1,
          name: "Seller 1",
          email: "seller1@proship.com",
          phone_no: "2342342342",
          line_id: "seller_line_1",
          address: "Address 1"
        },

        {
          id: 2,
          name: "Seller 2",
          email: "seller2@proship.com",
          phone_no: "456423342",
          line_id: "seller_line_2",
          address: "Address 2"
        },

        {
          id: 3,
          name: "Seller 3",
          email: "seller3@proship.com",
          phone_no: "896423342",
          line_id: "seller_line_3",
          address: "Address 3"
        },

        {
          id: 4,
          name: "Seller 4",
          email: "seller4@proship.com",
          phone_no: "666423342",
          line_id: "seller_line_4",
          address: "Address 4"
        },

        {
          id: 5,
          name: "Seller 5",
          email: "seller5@proship.com",
          phone_no: "23423342",
          line_id: "seller_line_5",
          address: "Address 5"
        },

        {
          id: 6,
          name: "Seller 6",
          email: "seller6@proship.com",
          phone_no: "89423342",
          line_id: "seller_line_6",
          address: "Address 6"
        }
      ];
    }
  }
};
</script>

<style lang="scss">
</style>