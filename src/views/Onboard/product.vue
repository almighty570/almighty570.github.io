<template>
  <div class="container">
    <Card class="card-product">
      <div slot="body">
         <h2>Let's add a Product</h2>
        <form  @submit.prevent="handleFormSubmit">
          <div class="row">         
           
            <div>
              <h4>What do you Sell?</h4>
              <TextBox type="text" id="selling-item" rules="required" v-model="productForm.item" />
            </div>

            <div>
              <h4>How much do you sell it for?</h4>
              <TextBox type="text" id="selling-price" rules="required" v-model="productForm.price" />
            </div>
            <div>
              <h4>How much do you have in stock?</h4>
              <NumberField id="stock-qty" rules="required" v-model.number="productForm.stock" />
            </div>        
         
          </div>
          <div class="row">
              <button
              type="submit"
              class="btn btn-success"
            >Add shipping method</button>
        </div>
        </form>
        

        
      </div>
    </Card>
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
  methods:{
    handleFormSubmit(){
      let data={
        ...this.productForm
      }
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
.card-product {
  height: 400px;
  width: 500px;
}
</style>