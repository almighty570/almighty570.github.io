<template>
  <div class="container mt-n4">
    <!-- <Card> -->
      <!-- <div slot="body"> -->
        <div class="text-center">
          <img src="@/assets/logo-dark.png" class="brand-image mt-3 mb-4" />

          <h2>Welcome to ProShip</h2>
          <p class="lead mb-5">We will help you Sell and Ship like a Pro!</p>

          <h5>Using ProShip you will be able to :</h5>
          <div class="text-left mb-5">
            <ul class="no-bullets">
              <li>
                <i class="fas fa-check-circle mr-1"></i>
                Manage your Inventory
              </li>
              <li>
                <i class="fas fa-check-circle mr-1"></i>
                Manage your Orders
              </li>
              <li>
                <i class="fas fa-check-circle mr-1"></i>
                Save a lot of money on Shipping
              </li>
            </ul>
          </div>
          <p>Our Wizard will help you get started, and you will be on your way shortly.</p>
          <router-link :to="{name: 'Onboard-Details'}" class="btn btn-success pl-4 pr-4">Get Started</router-link>
        </div>
      <!-- </div> -->
    <!-- </Card> -->
  </div>
</template>

<script>
import Card from "@/components/core/Card";
export default {
  name: "Onboard-Welcome",
  components: {
    Card
  }
};
</script>

<style lang="scss" scoped>
.no-bullets {
  max-width: 310px;
  margin: 0 auto;
  // padding-left: 0;
  li {
    list-style-type: none;

    i {
      color: map-get($variants, "success");
    }
  }
}

.brand-image {
  width: 80px;
  height: 80px;
}
</style>