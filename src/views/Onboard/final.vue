<template>
  <div>
    <div class="container">
    <h1>Final</h1>
    <Card  class="card-final">
      <div v-if="details" slot="body">
        <h4>From:</h4>
      <p>{{details.address}}</p>
      <p>{{details.subdistrict}},{{details.district}}</p>
      <p>{{details.province}},{{details.zip}}</p>
      <router-link :to="{name: 'Onboard-Welcome'}" class="btn btn-success">First Screen</router-link>
      </div>      
    </Card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "@/components/core/Card";
export default {
  name: "Onboard-Final",
  components: {
    Card
  },
  computed: {
    ...mapGetters("onboard", ["details"])
  }
};
</script>

<style>
.card-final {
  height: 450px;
  width: 500px;
}
</style>