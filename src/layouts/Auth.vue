<template>
  <div id="auth-body">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Auth"
};
</script>

<style>
#auth-body{
    background-color: #D2D6DE;
    position: absolute;
    width: 100%;
    height: 100vh;
}
</style>