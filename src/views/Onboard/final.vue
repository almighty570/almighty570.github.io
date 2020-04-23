<template>
  <div class="final">
    <h4 class="text-center">Let’s TEST Ship an item to your self, on US !</h4>

    <p class="lead text-center mt-4">
      Here’s your shipping label, simply print this out;
      and drop it off, at the POST OFFICE
    </p>

    <div class="shipping-label">Design of shipping label goes here</div>

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
    ...mapGetters("onboard", ["details"])
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
  line-height: 200px;
}
</style>