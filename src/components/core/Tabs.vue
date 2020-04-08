<template>
  <div class="tabs__wrapper justify-content-md-start mt-4" :id="id" :class="custom_class">
    <div
      class="tab-list-item"
      :class="{'--active': tab === activeOrderStatus}"
      v-for="(tab, index) in tabs"
      :key="index"
      @click="setActiveStatus(tab)"
    >
      {{tab.label}}
      <span v-if="tab.number">{{tab.number}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    custom_class: String,
    id: String,
    tabs: Array,
    show_quantity: true
  },
  created() {
    this.activeOrderStatus = this.tabs[0];
  },
  data() {
    return {
      activeOrderStatus: false
    };
  },
  methods: {
    setActiveStatus(status) {
      this.activeOrderStatus = status;
    }
  }
};
</script>

<style lang="scss" scoped>

$variants: (
  primary: #007bff,
  success: #28a745,
  info: #17a2b8,
  warning: #ffc107,
  danger: #dc3545
);

.tabs__wrapper {
  display: flex;
  justify-content: center;
  .tab-list-item {
    padding: 0.25rem 1rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    border-bottom: 2px solid white;
    transition: 0.5s all;

    span {
      margin-left: 0.5rem;
      font-size: 14px;
      padding: 0.12rem 0.5rem;
      border-radius: 8px;
      font-weight: 600;
      background-color: lightgray;
      transition: 0.5s all;
    }
  }

  @each $variant, $color in $variants {
    &.is-#{$variant} {
      .tab-list-item {
        &.--active {
          border-bottom-color: $color;

          span {
            background-color: $color;
            color: white;
          }
        }
      }
    }
  }
}
</style>