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
      </div>
    </div>
  </div>
</template>

<script>
import CardWidget from "@/components/core/CardWidget.vue";

export default {
  name: "Dashbaord",
  components: {
    CardWidget
  }
};
</script>

<style>
</style>