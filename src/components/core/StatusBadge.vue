<template>
  <button
    class="btn"
    :class="'btn-' + variant + ' btn-' + size"
    @click="$emit('click')"
    :disabled="loading"
  >
    <i class="fal fa-spinner-third spin mr-1" v-if="loading"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    id: {
      type: String,
      required: true
    },

    type: {
      type: String,
      required: false
    },

    variant: {
      type: String
    },

    size: {
      type: String
    },

    loading: {
      type: Boolean
    },

    custom_class: {
      type: String
    }
  },

  methods: {
    updateValue() {
      this.$emit("input", this.$refs.input.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.spin {
  -webkit-animation: spin 1s linear infinite;
  -moz-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
