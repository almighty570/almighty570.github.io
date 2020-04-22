<template>
  <div>
    <h1>Shipping</h1>
    <ValidationObserver v-slot>
      <div class="container">
        <Card class="card-shipping">
          <div slot="body">
            <form @submit.prevent="handleFormSubmit">
              <div class="row">
                <div class="container-fluid">
                  <h4>Pick a Shipping method</h4>
                  <Select id="shipping-method" :options="shippingMethods" v-model="shippingMethod" />
                </div>
              </div>
              <div class="row">
                    <button type="submit" class="btn btn-success">Proceed</button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </ValidationObserver>
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
        { name: "EMS", value: 1 },
        { name: "KERRY", value: 2 },
        { name: "ALPHA", value: 3 },
        { name: "FLASH", value: 4 },
        { name: "BEST", value: 5 },
        { name: "J&T", value: 6 },
        { name: "SCG", value: 7 }
      ]
    };
  },
  methods:{
    handleFormSubmit(){
      let data = this.shippingMethod;
      this.$store.dispatch('onboard/storeShipping',{
        shipping:data,
        callback:data=>{
          this.$router.push({name:"Onboard-Final"});
        }
      });
    }
  }
};
</script>

<style>
.card-shipping{
  height: 450px;
  width:500px;
}
</style>