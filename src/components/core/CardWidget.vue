<template>
  <div class="card" :class="custom_class" :id="id">
    <div class="card-header" v-if="hasCardToolsSlot || hasCardTitleSlot">
      <h3 class="card-title" v-if="hasCardTitleSlot">
        <slot name="title"></slot>
      </h3>
      <div class="card-tools">
        <button type="button" class="btn btn-tool" :data-card-widget="card_widget_type">
          <i class="fas fa-minus"></i>
        </button>
      </div>
    </div>
    <div class="card-body" v-if="hasCardBodySlot">
      <slot name="body"></slot>
    </div>
    <div class="card-footer" v-if="hasFooterSlot">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardWidget",
  props: {
    custom_class: String,
    id: String,
    card_widget_type: String
  },
  computed: {
    hasFooterSlot() {
      return !!this.$slots.footer;
    },
    hasCardBodySlot() {
      return !!this.$slots.body;
    },
    hasCardTitleSlot() {
      return !!this.$slots.title;
    }
  }
};
</script>

<style>
</style>