<template>
  <div class="p-5">
    <SmartAddress label="Smart Address" id="s-a" rules="required" />
  </div>
</template>

<script>
import SmartAddress from "@/components/derived/SmartAddress";

export default {
  name: "Test",
  components: {SmartAddress},
  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
</style>