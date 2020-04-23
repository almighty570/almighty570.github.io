<template>
  <Card custom_class="onboard-card">
    <div slot="title" class="w-100">
      <Stepper :steps="5" :currentStepIndex="2" variant="success" />
    </div>
    <div slot="body" style="overflow: auto">
      <router-view></router-view>
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
    return {};
  }
};
</script>

<style lang="scss" scoped>
.onboard-card {
  width: 100%;
  min-height: 100%;
}
</style>