<template>
  <div>
    <Card>
      <div slot="body">
        <div class="toolbar d-flex justify-content-between mb-2">
          <p class="lead mb-0 align-self-center">Sales Agents</p>

          <Button variant="outline-primary" size="sm" custom_class="mr-1 align-self-center" id="btn-add-sales-agent">
            <i class="fal fa-plus"></i> Add New
          </Button>
        </div>

        <DataTable
          :id="id"
          :columns="salesAgentsColumns"
          :rows="salesAgentsData"
          :per_page="5"
          responsive
          custom_class="table-sm"
        >
          <div slot="actions">
            <Button variant="outline-primary" size="sm" custom_class="mr-1" id="btn-action-detail">
              <i class="fal fa-eye"></i>
            </Button>
            <Button variant="outline-primary" size="sm" custom_class="mr-1" id="btn-action-edit">
              <i class="fal fa-pen"></i>
            </Button>
            <Button variant="outline-primary" size="sm" id="btn-action-delete">
              <i class="fal fa-trash-alt"></i>
            </Button>
          </div>
        </DataTable>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/core/Card";
import Button from "@/components/core/Button";
import DataTable from "@/components/core/DataTable";

export default {
  name: "SellerSettingsPayment",
  components: {
    Card,
    DataTable,
    Button
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

<style lang="scss" scoped>
.setting__header {
  font-weight: bold;
  font-size: 18px;
}
.setting__description {
  font-weight: thin;
  font-size: 13px;
}

.setting {
  &.--inline {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.--table {
    .setting__text {
      margin-bottom: 20px;
    }
  }

  margin-bottom: 30px;
}

.settings-wrapper {
  margin-top: 24px;
}

.setting-status-tag {
  text-transform: uppercase;

  font-weight: bold;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 2px;
  text-align: center;
  width: 68px;
  height: 29px;

  &.--warning {
    background-color: #ffc107;
    color: black;
  }

  &.--success {
    background-color: #28a745;
    color: white;
  }

  &.--danger {
    background-color: #dc3545;
    color: white;
  }

  &.--info {
    background-color: #007bff;
    color: white;
  }
}
</style>