<template>
  <div class="card" :class="custom_class" :id="id">
    <div class="card-header pb-2" v-if="hasCardTitleSlot">
      <h3 class="card-title" v-if="hasCardTitleSlot">
        <slot name="title"></slot>
      </h3>
      <div class="card-tools">
        <!-- :data-card-widget="card_widget_type" -->
        <button type="button" class="btn btn-tool" @click="toggle()">
          <i class="fas" :class="{'fa-minus': state, 'fa-plus': !state}"></i>
        </button>
      </div>
    </div>
    <div class="card-body" v-if="hasCardBodySlot && state">
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

  data() {
    return {
      state: true
    };
  },

  methods: {
    toggle() {
      this.state = !this.state;
    }
  },

  mounted() {
    //   $('.card').CardWidget('toggle');
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

<style lang="scss" scoped>
// .card-body {
//   overflow: hidden;
//   transition: all 0.2s ease-in-out;
//   &.--hidden {
//     height: 0px;
//   }
// }
</style>