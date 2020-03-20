<template>
  <div>
    <div class="content-header">
      <div class="container">
        <h1 class="text-dark">View Order</h1>
      </div>
    </div>
    <div class="content-body">
      <div class="container">
        <CardWidget id="test-card-widget" class="card-primary" card_widget_type="collapse">
          <div slot="title">Name</div>
          <div
            slot="body"
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus veniam explicabo eum ut similique repudiandae optio ducimus. Esse, corrupti! Facere harum obcaecati animi fuga eligendi, maxime modi amet beatae soluta?</div>
        </CardWidget>
        <Table thead_class="thead-dark" id="test-table" :values="[{name:'Roshan',caste:'Chapagain',age:'21',gender:'Male'},{name:'Simran',caste:'Panthi',age:'11'}]"></Table>
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