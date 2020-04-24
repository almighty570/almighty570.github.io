<template>
  <div class="final">
    <h4 class="text-center">Let’s TEST Ship an item to your self, on US !</h4>

    <p class="lead text-center mt-4">
      Here’s your shipping label, simply print this out;
      and drop it off, at the POST OFFICE
    </p>

    <div class="shipping-label p-4">
      <div class="row">
        <div class="col-12 col-md-3 text-center text-md-left" v-if="details">
          <h5>From</h5>
          <p>
            {{details.name}}
            <br />
            {{details.district}}, {{details.subdistrict}}
            <br />
            {{details.province}}, {{details.zip}}
          </p>
        </div>
        <div class="col-12 col-md-6">
          <div v-if="product">
            <h5>Product</h5>
            <p>
              Name: {{product.item}}
              <br />
              Price: Rs.{{product.price}}
              <br />
              Stock: {{product.stock}}
            </p>
          </div>
          <div v-else>
            <h5>No Product found</h5>
          </div>
        </div>

        <div class="col-12 col-md-3 text-center text-md-left" v-if="details">
          <h5>To</h5>
          <p>
            {{details.name}}
            <br />
            {{details.district}}, {{details.subdistrict}}
            <br />
            {{details.province}}, {{details.zip}}
          </p>
        </div>
      </div>
    </div>

    <div class="d-flex flex-column mt-4">
      <Button id="btn-more" variant="success">
        <i class="fal fa-list mr-1"></i>
        Show More
      </Button>

      <Button id="btn-more" variant="success" custom_class="mt-2">
        <i class="fal fa-print mr-1"></i>
        Print Label
      </Button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "@/components/core/Button";
export default {
  name: "Onboard-Final",
  components: {
    Button
  },
  computed: {
    ...mapGetters("onboard", ["details", "product", "shippingMethod"])
  }
};
</script>

<style>
.shipping-label {
  background-color: lightgrey;
  border-radius: 5px;
  height: 200px;
  width: 100%;
  text-align: center;
  overflow-y: auto;
}
.col-left,
.col-right {
  justify-content: center;
}
</style>