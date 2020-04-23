<template>
  <div class="text-center">
    <h2>Pick a shipping method</h2>

    <div class="shipping-methods d-flex flex-wrap mt-5 mb-5 justify-content-center">
      <div
        class="shipping-method"
        :class="{'--disabled': !sm.available, '--active': sm === shippingMethod}"
        v-for="(sm, index) in shippingMethods"
        :key="index"
        @click="selectShippingMethod(sm)"
      >{{sm.name}}</div>
    </div>

    <button @click="next()" class="btn btn-success pl-4 pr-4" :disabled="!shippingMethod">Continue</button>
  </div>
</template>

<script>
import Select from "@/components/core/Select";
import Card from "@/components/core/Card";
export default {
  name: "Onboard-Shipping",
  components: {
    Select,
    Card
  },

  data() {
    return {
      shippingMethod: null,
      shippingMethods: [
        { name: "EMS", available: true },
        { name: "KERRY", available: false },
        { name: "ALPHA", available: false },
        { name: "FLASH", available: true },
        { name: "BEST", available: false },
        { name: "J&T", available: true },
        { name: "SCG", available: true }
      ]
    };
  },

  methods: {
    selectShippingMethod(sm) {
      if (sm.available) this.shippingMethod = sm;
    },

    next() {
      if (this.shippingMethod) {
        let data = this.shippingMethod;
        this.$store.dispatch("onboard/storeshippingMethod", {
          shipping: data,
          callback: data => {
            this.$router.push({ name: "Onboard-Final" });
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.shipping-method {
  margin: 0.5rem 1rem;
  padding: 1rem;
  border: 2px solid map-get($variants, "success");
  border-radius: 5px;
  color: map-get($variants, "success");
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  min-width: 100px;

  &.--disabled {
    background-color: whitesmoke;
    border-color: lightgrey;
    color: lightgrey;
  }

  &.--active {
    background-color: map-get($variants, "success");
    // border-color: lightgrey;
    color: white;
  }
}
</style>