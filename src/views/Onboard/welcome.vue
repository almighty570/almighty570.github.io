<template>
  <div>
    <h1>Welcome</h1>

    <router-link :to="{name: 'Onboard-Details'}" class="btn btn-success">Add details</router-link>
  </div>
</template>

<script>
export default {
  name: "Onboard-Welcome"
};
</script>

<style>
</style>