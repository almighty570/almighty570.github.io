<template>
  <div class="buyer">
    <div class="container buyer-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buyer"
};
</script>

<style scoped lang="scss">
.buyer {
  background-color: #dcdcdc;
}
.buyer-container {
  background-color: #ffffff;
  min-height: 100vh;
  max-width: 800px;
  padding-bottom: 160px;
}

</style>