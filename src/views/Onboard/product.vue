<template>
  <div class="product">
    <h2 class="text-center">Let's add a Product</h2>

    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="handleFormSubmit">
        <p class="text-center mb-1 mt-5">What do you Sell ?</p>
        <TextBox type="text" id="selling-item" rules="required" v-model="productForm.item" />
        <div class="mt-4"></div>

        <p class="text-center mb-1">How much do you sell it for?</p>
        <TextBox type="text" id="selling-price" rules="required" v-model="productForm.price" />
        <div class="mt-4"></div>

        <p class="text-center mb-1">How much do you have in stock?</p>
        <NumberField id="stock-qty" rules="required" v-model.number="productForm.stock" />
        <div class="mb-5"></div>

        <div class="text-center mt-4">
          <button type="submit" class="btn btn-success" :disabled="invalid">Add shipping method</button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import TextBox from "@/components/core/TextBox";
import NumberField from "@/components/core/NumberField";
import Card from "@/components/core/Card";
export default {
  name: "Onboard-Product",
  components: {
    TextBox,
    NumberField,
    Card
  },
  data() {
    return {
      productForm: {
        item: null,
        price: null,
        stock: null
      }
    };
  },
  methods: {
    handleFormSubmit() {
      let data = {
        ...this.productForm
      };
      this.$store.dispatch("onboard/storeProduct", {
        product: data,
        callback: data => {
          this.$router.push({ name: "Onboard-Shipping" });
        }
      });
    }
  }
};
</script>

<style>
</style>