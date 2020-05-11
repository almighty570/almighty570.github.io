<template>
  <div>
    <ValidationProvider :rules="rules" v-slot="{errors}">
      <div
        class="shipping-methods d-flex flex-wrap justify-content-center"
        :class="wrapper_class"
        :id="id"
      >
        <div
          v-for="(sm, index) in options"
          :key="index"
          class="shipping-method"
          :class="smClass(sm)"
          @click="toggle(sm)"
        >{{sm.name}}</div>
      </div>
      <div class="template-error">
        <span class="text-danger text-sm" v-for="(error, index) in errors" :key="index">{{error}}</span>
      </div>
    </ValidationProvider>
  </div>
</template>

<script>
export default {
  name: "ShippingMethodInput",
  props: {
    id: {
      type: String
    },
    options: {
      type: Array,
      default: () => {
        return [
          { name: "EMS", available: true },
          { name: "KERRY", available: true },
          { name: "ALPHA", available: true },
          { name: "FLASH", available: false },
          { name: "BEST", available: false },
          { name: "J&T", available: false },
          { name: "SCG", available: false }
        ];
      }
    },
    values: {
      type: Array
    },
    variant: {
      type: String,
      default: "success"
    },
    size: {
      type: String,
      default: "lg"
    },
    wrapper_class: {
      type: String
    },
    rules: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      selectedMethods: null
    };
  },

  created() {
    this.selectedMethods = this.values || [];
    this.emitUpdate();
  },

  methods: {
    toggle(sm) {
      if (!sm.available) return;
      let name = sm.name;
      let index = this.selectedMethods.findIndex(sm => sm === name);
      if (index == -1) this.selectedMethods.push(name);
      else this.selectedMethods.splice(index, 1);

      this.emitUpdate();
    },

    checkIfSelected(name) {
      return this.selectedMethods.includes(name);
    },

    emitUpdate() {
      this.$emit("input", this.selectedMethods);
    },

    smClass(sm) {
      let css = {
        "--disabled": !sm.available,
        "--active": this.checkIfSelected(sm.name)
      };
      css["--" + this.variant] = true;
      css["--" + this.size] = true;
      return css;
    }
  },

  watch: {
    values: function(newVal, oldVal) {
      this.selectedMethods = newVal || [];
      this.emitUpdate();
    }
  }
};
</script>

<style lang="scss" scoped>
.shipping-method {
  margin: 0.5rem 1rem;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  min-width: 100px;
  text-align: center;

  // apply color according to variant
  @each $variant, $color in $variants {
    &.--#{$variant} {
      border: 2px solid #{$color};
      color: $color;

      &.--active {
        background-color: $color;
        // border-color: lightgrey;
        color: white;
      }
    }
  }

  &.--disabled {
    background-color: whitesmoke;
    border-color: lightgrey;
    color: lightgrey;
  }

  &.--sm {
    margin: 0.15rem 0.25rem;
    padding: 0.15rem;
    font-size: 12px;
    border-width: 1px;
    min-width: 50px;
  }
}
</style>