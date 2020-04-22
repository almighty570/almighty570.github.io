<template>
<div class="container">
      <Card>
       <div slot="body">
  <div>
    <h1>Welcome</h1>
    <h2>We will help you Sell and Ship like a Pro!</h2>
    <h4>Using ProShip you will be able to :</h4>
    <ul>
      <li>Manage your Inventory</li>
      <li>Manage your Orders</li>
      <li>Save a lot of money on Shipping</li>
    </ul>
    <p>Our Wizard will help you get started, and you will be on your way shortly.</p>
    <router-link :to="{name: 'Onboard-Details'}" class="btn btn-success">Add details</router-link>
  </div>
        </div>
      </Card>
</div>
</template>

<script>
import Card from "@/components/core/Card";
export default {
  name: "Onboard-Welcome",
  components:{
    Card
  }
};
</script>

<style>
</style>