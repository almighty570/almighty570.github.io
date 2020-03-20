<template>
  <div>
    <div class="content-header">
      <div class="container">
        <h1 class="text-dark">View Order</h1>
      </div>
    </div>
    <div class="content-body">
      <div class="container">
        <CardWidget id="test-card-widget" class="card-success" card_widget_type="collapse">
          <div slot="title">Order Details</div>
          <div slot="body">
            <div class="row">
              
            </div>
          </div>
        </CardWidget>
        <CardWidget id="test-card-widget" class="card-info" card_widget_type="collapse">
          <div slot="title">Order item(s)</div>
          <div slot="body">
            <Table
              id="test-table"
              :values="[{name:'Roshan',caste:'Chapagain',age:'21',gender:'Male'},{name:'Simran',caste:'Panthi',age:'11'}]"
            ></Table>
          </div>
        </CardWidget>
        <CardWidget id="test-card-widget" class="card-warning" card_widget_type="collapse">
          <div slot="title">Order history</div>
          <div slot="body">
            <Table
              id="test-table"
              :values="[{name:'Roshan',caste:'Chapagain',age:'21',gender:'Male'},{name:'Simran',caste:'Panthi',age:'11'}]"
            ></Table>
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
  }
};
</script>

<style>
</style>