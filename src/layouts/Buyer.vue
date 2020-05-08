<template>
  <div class="buyer">
    <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

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
  min-height: 100vh;
  max-width: 800px;
}

</style>