<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
const default_layout = "seller";

export default {
  created() {
    this.checkIfMobile();
    window.onresize = () => this.checkIfMobile();
  },

  methods: {
    checkIfMobile() {
      let os = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      let width = window.innerWidth < 768;
      if (os || width) window.isMobile = true;
      else window.isMobile = false;
    }
  },

  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  }
};
</script>

<style lang="scss">
</style>
