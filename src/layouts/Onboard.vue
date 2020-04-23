<template>
  <div class="onboard">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Onboard"
};
</script>

<style lang="scss" scoped>
.onboard {
  width: 100vw;
  height: 100vh;
  background-color: whitesmoke;

  padding: 1rem;
}
</style>