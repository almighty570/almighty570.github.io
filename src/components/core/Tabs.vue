<template>
  <div class="tabs__wrapper justify-content-start mt-4" :id="id" :class="custom_class">
    <div
      class="tab-list-item"
      :class="{'--active': tab === activeTab}"
      v-for="(tab, index) in tabs"
      :key="index"
      @click="setActiveTab(index)"
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
    active_tab_index: Number,
    custom_class: String,
    id: String,
    tabs: Array,
    show_quantity: true
  },

  data() {
    return {
      activeTab: false
    };
  },

  created() {
    this.setActiveTab(this.active_tab_index || 0);
  },

  methods: {
    setActiveTab(index) {
      this.activeTab = this.tabs[index];
      this.$emit("tabSelected", index);
    }
  },

  watch: {
    active_tab_index(newVal, oldVal) {
      this.setActiveTab(this.tabs[newVal || 0]);
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
  flex-wrap: wrap;
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