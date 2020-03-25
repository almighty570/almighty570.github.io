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
                >
                  <span>{{i+1}}</span>
                </div>
                <div
                  class="line"
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
$step-size: 50px;
$step-incomplete-color: lightgrey;
$step-complete-color: #28a745;
$white: whitesmoke;

.sub-nav {
  background-color: white;
  box-shadow: 1px 1px 2px lightgrey;
}

.steps {
  .line {
    height: 2px;
    width: 100%;
    margin-top: 14px;
    background: $step-incomplete-color;
  }

  .line-complete {
    background: $step-complete-color;
  }

  span {
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    font-weight: bold;
    background-color: $white;
    border: solid 2px $step-incomplete-color;
    color: $step-incomplete-color;
  }

  .step.completed span {
    border: solid 2px $step-complete-color;
    background-color: white;
    color: $step-complete-color;
  }

  .step.active span {
    border: solid 2px $step-complete-color;
    background-color: $step-complete-color;
    color: $white;
  }
}
</style>