<template>
  <div class="d-flex flex-column justify-content-center text-center h-100">
    <!-- <ValidationObserver v-slot>
      <div class="container">
        <Card class="card-options">
          <div slot="body">
            <div class="row">
              <form>
                <div>
                  <h4>Do you want to use Product Management?</h4>
                  <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-success mr-3">
                      <input
                        v-model="product_mgt"
                        value="1"
                        type="radio"
                        name="product-mgt"
                        id="product-mgt-yes"
                        autocomplete="off"
                      /> Yes
                    </label>
                    <label class="btn btn-danger">
                      <input
                        type="radio"
                        name="product-mgt"
                        v-model="product_mgt"
                        value="0"
                        id="product-mgt-no"
                        autocomplete="off"
                      /> No
                    </label>
                  
                  </div>
                </div>
                <div>
                  <h4>Do you need help managing inventory and quantities?</h4>
                  <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-success mr-3">
                      <input
                      
                        value="1"
                        type="radio"
                        name="inventory-mgt"
                        id="inventory-mgt-yes"
                   
                      /> Yes
                    </label>
                    <label class="btn btn-danger">
                      <input
                       
                        value="0"
                        type="radio"
                        name="inventory-mgt"
                        id="inventory-mgt-no"                       
                      /> No
                    </label>
                  </div>
                </div>
              </form>
            </div>
              <p>hello{{inventory_mgt}}</p>
              <p>{{product_mgt}}</p>
            <div class="row">
              <router-link :to="{name: 'Onboard-Product'}" class="btn btn-success">Add product</router-link>
            </div>
          </div>
        </Card>
      </div>
    </ValidationObserver>-->

    <div class="option" v-if="!showInventoryMgtOption">
      <h3>Do you want to use Product Management ?</h3>

      <div class="buttons d-flex flex-column">
        <Button
          variant="success"
          custom_class="mt-5"
          id="product-mgt-yes"
          @click="setProductMgt(true)"
        >YES</Button>

        <Button
          variant="outline-success"
          custom_class="mt-2"
          id="product-mgt-no"
          @click="setProductMgt(false)"
        >No</Button>
      </div>
    </div>

    <div class="option animated bounceInRight fast" v-else>
      <h3>Do you need help managing inventory &amp; quantities?</h3>

      <div class="buttons d-flex flex-column">
        <Button
          variant="success"
          custom_class="mt-5"
          id="product-mgt-yes"
          @click="setInventoryMgt(true)"
        >YES</Button>

        <Button
          variant="outline-success"
          custom_class="mt-2"
          id="product-mgt-no"
          @click="setInventoryMgt(false)"
        >No</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/core/Button";

export default {
  name: "Onboard-Options",
  components: {
    Button
  },
  data() {
    return {
      showInventoryMgtOption: false,
      inventoryMgt: false,
      productMgt: false
    };
  },

  methods: {
    setProductMgt(val) {
      this.productMgt = val;
      if (val) this.showInventoryMgtOption = true;
      else this.next();
    },

    setInventoryMgt(val) {
      this.inventoryMgt = val;
      this.next();
    },

    next() {
      this.$router.push({ name: "Onboard-Product" });
    }
  }
};
</script>

<style>
</style>