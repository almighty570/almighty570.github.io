<template>
  <Card custom_class="onboard-card">
    <div slot="title" class="w-100">
      <Stepper :steps="6" :currentStepIndex="currentStep" variant="success" />
    </div>
    <div slot="body">
      <div class="h-100" style="max-width: 400px; margin: 0 auto">
        <router-view></router-view>
      </div>
    </div>
  </Card>
</template>

<script>
import Stepper from "@/components/core/Stepper";
import Card from "@/components/core/Card";

export default {
  name: "Onboard",
  components: { Stepper, Card },
  data() {
    return {
      currentStep: 1
    };
  },

  created() {
    this.setCurrentStep(this.$route.name);
  },

  methods: {
    setCurrentStep(routeName) {
      const routeStep = {
        Onboard: 1,
        "Onboard-Welcome": 1,
        "Onboard-Details": 2,
        "Onboard-Options": 3,
        "Onboard-Product": 4,
        "Onboard-Shipping": 5,
        "Onboard-Final": 6
      };
      this.currentStep = routeStep[routeName];
    }
  },

  watch: {
    "$route.name": function(val) {
      this.setCurrentStep(val);
    }
  }
};
</script>

<style lang="scss" scoped>
.onboard-card {
  width: 100%;
  min-height: 100%;
}
</style>