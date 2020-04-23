<template>
  <div class="sub-nav pt-2">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="steps mb-2" :class="'--' + variant">
            <div class="d-flex justify-content-around">
              <template v-for="(step, i) in steps">
                <div
                  class="step"
                  :class="{'--active': currentStepIndex - 1 === i, '--completed': i < currentStepIndex - 1}"
                  :key="i"
                >
                  <span v-if="i < currentStepIndex - 1">
                    <i class="fas fa-check"></i>
                  </span>
                  <span v-else>{{i+1}}</span>
                </div>
                <div
                  class="line align-self-center"
                  :class="{'--complete': i < currentStepIndex - 1}"
                  v-if="i < steps - 1"
                  :key="'line-' + i"
                ></div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stepper",
  props: {
    steps: {
      type: Number,
      required: true
    },
    currentStepIndex: {
      type: Number,
      required: true
    },
    variant: {
      type: String,
      default: "primary"
    }
  }
};
</script>

<style lang="scss" scoped>
$step-size: 30px;
$step-incomplete-color: lightgrey;
$step-complete-color: map-get($variants, "success");
$white: whitesmoke;

.steps {
  @each $variant, $color in $variants {
    &.--#{$variant} {
      $step-complete-color: $color;
    }
  }

  .line {
    flex: 1;
    height: 2px;
    width: 100%;
    background: $step-incomplete-color;
    &.--complete {
      background: $step-complete-color;
    }
  }

  .step {
    width: $step-size;
    height: $step-size;
    box-sizing: content-box;
    border-radius: 50%;
    text-align: center;
    line-height: $step-size;
    font-size: 16px;
    font-weight: 600;
    background-color: white;
    border: solid 2px $step-incomplete-color;
    color: $step-incomplete-color;

    &.--completed {
      border-color: $step-complete-color;
      background-color: $step-complete-color;
      color: white;
    }

    &.--active {
      border-color: $step-complete-color;
      color: $step-complete-color;
    }
  }
}
</style>