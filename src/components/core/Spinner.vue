<template>
  <div class="loading">
    <div class="loader" :class="'--' + variant + ' --' + size"></div>
    <label v-if="message">{{ message }}</label>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    variant: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "md"
    },
    message: {
      type: String
    },
    wrapper_class: {
      type: String
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
.loader {
  margin: 0 auto;
  border: 10px solid lightgrey;
  border-radius: 50%;
  margin-bottom: 1rem;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;

  // variant
  @each $variant, $color in $variants {
    &.--#{$variant} {
      border-top-color: $color;
    }
  }

  // size
  @each $size, $value in $spinner-sizes {
    &.--#{$size} {
      width: #{$value}px;
      height: #{$value}px;
      border-width: #{$value/10}px;
    }
  }
}
/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
