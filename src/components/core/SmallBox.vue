<template>
  <div class="small-box" :class="custom_class" :id="id">
    <div class="inner">
      <slot name="inner"></slot>
    </div>
    <div class="icon" v-if="hasIconSlot">
      <slot name="icon"></slot>
    </div>
    <a href="#" class="small-box-footer" v-if="hasFooterSlot">
      <slot name="footer"></slot>
    </a>
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
    hasIconSlot() {
      return !!this.$slots.icon;
    },
    hasFooterSlot() {
      return !!this.$slots.footer;
    },
  }
};
</script>

<style>
</style>