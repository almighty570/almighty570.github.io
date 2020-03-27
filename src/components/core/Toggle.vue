<template>
  <div class="d-flex">
    <label class="switch align-self-center mr-2" :class="'--' + variant">
      <input type="checkbox" :id="id" v-model="val" @change="updateValue" />
      <span :style="changeBackground()" class="slider round"></span>
    </label>
    <!-- <label class="align-self-center font-weight-normal">{{label}}</label> -->
  </div>
</template>

<script>
import { ToggleButton } from "vue-js-toggle-button";
export default {
  name: "Toggle",

  components: {
    ToggleButton
  },

  props: {
    labels: {
      type: Object
    },

    variant: {
      type: String,
      default: "primary"
    },

    id: {
      type: String,
      required: true
    },

    value: {
      type: Boolean
    }
  },

  data() {
    return {
      val: this.value || false
    };
  },

  created() {},

  methods: {
    updateValue(data) {
      this.$emit("input", this.val);
    },
    changeBackground() {
      if (this.val) return "backgroundColor:" + this.color;
      else return "backgroundColor:#ccc";
    }
  },

  computed: {
    label() {
      return this.labels[this.val];
    }
  }
};
</script>

<style lang="scss" scoped>
$switch-width: 55px;
$switch-height: 15px;

$variants: (
  primary: #007bff,
  success: #28a745,
  info: #17a2b8,
  warning: #ffc107,
  danger: #dc3545
);

.switch {
  position: relative;
  display: inline-block;
  width: $switch-width;
  height: $switch-height;

  // apply color according to variant
  @each $variant, $color in $variants {
    &.--#{$variant} {
      input:checked + .slider {
        background-color: lighten($color, 40%) !important;
      }

      input:checked + .slider:before {
        background-color: $color !important;
      }
    }
  }
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 23px;
  width: 23px;
  left: 0px;
  bottom: -4px;
  background-color: lightgrey;
  -webkit-transition: 0.4s cubic-bezier(0.5, 1, 0.89, 1);
  transition: 0.2s cubic-bezier(0.5, 1, 0.89, 1);
  box-shadow: 0 2px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

input:checked + .slider:before {
  -webkit-transform: translateX(35px);
  -ms-transform: translateX(35px);
  transform: translateX(35px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
