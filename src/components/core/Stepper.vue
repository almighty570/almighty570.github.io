<template>
  <div class="sub-nav mb-4 pt-2">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="steps mb-2">
            <div class="d-flex justify-content-around">
              <template v-for="(step, i) in steps">
                <div
                  class="step"
                  :class="{'active': currentStepIndex - 1 === i, 'completed': i < currentStepIndex - 1}"
                  :key="i"
                >{{i+1}}</div>
                <div
                  class="line align-self-center"
                  :class="{'line-complete': i < currentStepIndex - 1}"
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
  props: ["steps", "currentStepIndex"]
};
</script>

<style lang="scss">
$step-size: 30px;
$step-incomplete-color: lightgrey;
$step-complete-color: #007bff;
$white: whitesmoke;

.steps {
  .line {
    flex: 1;
    height: 1px;
    width: 100%;
    background: $step-incomplete-color;
  }

  .line-complete {
    background: $step-complete-color;
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
    background-color: $white;
    border: solid 2px $step-incomplete-color;
    color: $step-incomplete-color;
  }

  .step.completed {
    border: solid 2px $step-complete-color;
    background-color: white;
    color: $step-complete-color;
  }

  .step.active {
    border: solid 2px $step-complete-color;
    background-color: $step-complete-color;
    color: $white;
  }
}
</style>