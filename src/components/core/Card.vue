<template>
  <div class="card" :class="custom_class" :id="id">
    <div class="card-header" v-if="hasCardToolsSlot || hasCardTitleSlot">
      <h3 class="card-title w-100" v-if="hasCardTitleSlot">
        <slot name="title"></slot>
      </h3>
      <div class="card-tools" v-if="hasCardToolsSlot">
        <slot name="tools"></slot>
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
  name: "Card",
  props: {
    custom_class: String,
    id: String
  },
  computed: {
    hasFooterSlot() {
      return !!this.$slots.footer;
    },
    hasCardBodySlot() {
      return !!this.$slots.body;
    },
    hasCardToolsSlot() {
      return !!this.$slots.tools;
    },
    hasCardTitleSlot() {
      return !!this.$slots.title;
    }
  }
};
</script>

<style>
</style>