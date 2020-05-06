<template>
  <div class="buyer">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: "Buyer"
};
</script>

<style scoped >
.buyer{
    background-color: #DCDCDC;
}
.container{
    background-color: #ffffff;
        min-height: 100vh;
    
}

</style>