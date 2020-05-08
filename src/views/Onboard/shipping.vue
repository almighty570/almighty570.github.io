<template>
  <div class="text-center">
    <h2>Pick a shipping method</h2>

    <ShippingMethodInput v-model="shippingMethods" wrapper_class="mt-5 mb-5" />

    <button
      @click="next()"
      class="btn btn-success pl-4 pr-4"
      :disabled="!shippingMethods || !shippingMethods.length"
    >Continue</button>
  </div>
</template>

<script>
import Select from "@/components/core/Select";
import Card from "@/components/core/Card";
import ShippingMethodInput from "@/components/derived/ShippingMethodInput";

export default {
  name: "Onboard-Shipping",
  components: {
    Select,
    Card,
    ShippingMethodInput
  },

  data() {
    return {
      shippingMethods: null
    };
  },

  methods: {
    next() {
      if (this.shippingMethods) {
        let data = this.shippingMethods;
        this.$store.dispatch("onboard/storeshippingMethods", {
          shippingMethods: data,
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
</style>