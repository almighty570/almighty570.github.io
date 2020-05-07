<template>
  <div class="d-flex flex-column justify-content-center text-center h-100">
    <div class="option" v-if="!showInventoryMgtOption">
      <h3>Do you want to use Product Management ?</h3>

      <div class="description-container mt-4">
        <img
          src="https://www.teamgate.com/wp-content/uploads/2018/10/Crm-product-management-featured.png"
          class="img-fluid mb-4"
        />
        Product management is one of the hardest jobs to define in any organization, partially because it’s different in every company
      </div>

      <div class="buttons d-flex flex-column">
        <Button
          variant="success"
          custom_class="mt-4"
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

      <div class="description-container mt-4">
        <img src="@/assets/images/inventory-mgmt.jpg" class="img-fluid mb-4" />
        Inventory management is the supervision of non-capitalized assets, or inventory, and stock items.
      </div>

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
      else this.$router.push({ name: "Onboard-Shipping" });
    },

    setInventoryMgt(val) {
      this.inventoryMgt = val;
      if (val) this.next();
      else this.$router.push({ name: "Onboard-Shipping" });
    },

    next() {
      this.$router.push({ name: "Onboard-Product" });
    }
  }
};
</script>

<style lang="scss">
.description-container {
  background-color: lightgrey;
  border-radius: 5px;
  height: auto;
  width: 100%;
  text-align: center;
  overflow-y: auto;
  padding: 1rem;
}
</style>