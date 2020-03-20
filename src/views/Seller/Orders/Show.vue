<template>
  <div>
    <div class="content-header">
      <div class="container">
        <h1 class="text-dark">View Order</h1>
      </div>
    </div>
    <div class="content-body">
      <div class="container">
        <CardWidget id="order-details-card" class="card" card_widget_type="collapse">
          <div slot="body">
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <table class="table table-sm table-striped">
                  <tr v-for="(value, key, index) in orderDetails" :key="index">
                    <td>
                      <label>{{key}}</label>
                    </td>
                    <td>{{value}}</td>
                  </tr>
                </table>
              </div>

              <div class="col-md-6 col-sm-12">
                <table class="table table-sm table-striped">
                  <tr v-for="(value, key, index) in orderDetails" :key="index">
                    <td>
                      <label>{{key}}</label>
                    </td>
                    <td>{{value}}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </CardWidget>

        <CardWidget id="order-items-card" class="card" card_widget_type="collapse">
          <div slot="title">Order Items</div>
          <div slot="body">
            <Table custom_class="table-sm" id="order-items" :values="orderItems"></Table>
          </div>
        </CardWidget>

        <CardWidget id="order-history-card" class="card" card_widget_type="collapse">
          <div slot="title">Order History</div>
          <div slot="body">
            <Table custom_class="table-sm" id="order-history" :values="orderHistory"></Table>
          </div>
        </CardWidget>
      </div>
    </div>
  </div>
</template>

<script>
import CardWidget from "@/components/core/CardWidget.vue";
import Table from "@/components/core/Table.vue";

export default {
  name: "Dashbaord",
  components: {
    CardWidget,
    Table
  },
  data() {
    return {
      orderDetails: {
        "Order Code": "2002-123123-1231",
        "Customer Name": "Test User",
        Address: "Thailand",
        Distrct: "Some district",
        Province: "Soe Province",
        "Mobile No": "123123213",
        Phone: "Not set"
      },

      orderItems: [
        {
          No: 1,
          itemNumber: "008-asd",
          sakochanCode: "SO-se324",
          itemName: "sfd asd ",
          quantity: 1
        },
        {
          No: 2,
          itemNumber: "007-and",
          sakochanCode: "SO-de324",
          itemName: "sfd asd asd ",
          quantity: 4
        }
      ],

      orderHistory: [
        {
          DateTime: "2019-02-34",
          Location: "Thailand",
          Status: "Active",
          Remark: "Some remark 1"
        },

        {
          DateTime: "2019-06-14",
          Location: "Thailand",
          Status: "Inactive",
          Remark: "Some remark 2"
        },

        {
          DateTime: "2020-03-12",
          Location: "Thailand",
          Status: "Pending",
          Remark: "Some remark 3"
        }
      ]
    };
  }
};
</script>

<style>
</style>