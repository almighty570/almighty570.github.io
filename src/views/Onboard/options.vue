<template>
  <div>
    <ValidationObserver v-slot>
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
    </ValidationObserver>
  </div>
</template>

<script>
import Button from "@/components/core/Button";
import Card from "@/components/core/Card";
export default {
  name: "Onboard-Options",
  components: {
    Button,
    Card
  },
  data: {
    
       inventory_mgt:null,
       product_mgt:null

  }
};
</script>

<style>
.card-options {
  height: 450px;
  width: 500px;
}
</style>