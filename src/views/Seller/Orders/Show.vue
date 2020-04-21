<template>
  <div class="orders-page">
    <div class="content-header">
      <div class="container-fluid">
        <h1 class="m-0 text-dark">
          <i class="nav-icon fal fa-arrow-circle-left mr-2 btn-back" @click="cancel()"></i>
          {{$t('orders.show.label')}}
        </h1>
      </div>
    </div>
    <div class="content-body">
      <div class="container-fluid">
        <CardWidget id="order-details-card" class="card" card_widget_type="collapse">
          <div slot="body">
            <TwoColumnTableLeftLayout :values="orderDetails" />
          </div>
        </CardWidget>
        <CardWidget id="order-items-card" class="card-info" card_widget_type="collapse">
          <div slot="title">{{$t('orders.show.card_order_items_label')}}</div>
          <div slot="body">
            <Table id="order-items-table" custom_class="table-sm" :values="orderItemsData"></Table>
          </div>
        </CardWidget>
        <CardWidget id="order-history-card" class="card-warning" card_widget_type="collapse">
          <div slot="title">{{$t('orders.show.card_order_history_label')}}</div>
          <div slot="body">
            <Table id="order-history-table" custom_class="table-sm" :values="orderHistoryData"></Table>
          </div>
        </CardWidget>
      </div>
    </div>
  </div>
</template>

<script>
import CardWidget from "@/components/core/CardWidget.vue";
import Table from "@/components/core/Table.vue";
import TableLeft from "@/components/core/TableLeft.vue";
import TwoColumnTableLeftLayout from "@/components/derived/TwoColumnTableLeftLayout.vue";
import { getOrderStatus } from "@/helpers/core";

export default {
  name: "Dashbaord",
  components: {
    CardWidget,
    Table,
    TableLeft,
    TwoColumnTableLeftLayout
  },
  data() {
    return {
      orderDetails: [
        { "Order Code": "2030-061-00006" },
        { "Customer Name": "Jacob" },
        { Address: "Thailand" },
        { District: "Some District" },
        { Province: "Soe Province" },
        { "Postal Code": 10220 },
        { Mobile: 6682422138 },
        { Phone: null },
        { "Customer Email": null },
        { Country: "Thailand" },
        { "Order#": "SPE2002URD" },
        { Agent: null },
        { Comment: null },
        { Deliver: "EMS" },
        { "COD Amount": 0.0 },
        { "Package Size": null },
        { Weight: null },
        { "Tracking No": null },
        {
          "Order Status": `<span class='badge badge-${
            getOrderStatus(1).variation
          }'>${getOrderStatus(1).title}</span>`
        }
      ],

      orderItemsData: [
        {
          No: "1",
          ItemNumber: "008-asd",
          "Proship Code": "SO-se324",
          ItemName: "stf asd ",
          Quantity: "1"
        },
        {
          No: "2",
          ItemNumber: "007-and",
          "Proship Code": "SO-de324",
          ItemName: "stf asd asdf",
          Quantity: "2"
        }
      ],

      orderHistoryData: [
        {
          Time: "16/03/2563 21:00",
          Status: "Order Created",
          Remark: "2003-081-00034",
          Agent: "System"
        },
        {
          Time: "16/03/2563 08:01",
          Status: "Order Processed",
          Remark: "",
          Agent: "Supervisor"
        }
      ]
    };
  },

  created() {},

  methods: {
    cancel() {
      this.$router.push({ name: "Seller-Order-List" });
    }
  }
};
</script>

<style>
</style>