<template>
  <div class="h-100 p-2">
    <Card custom_class="h-100">
      <div slot="title" class="w-100">
        <Stepper :steps="5" :currentStepIndex="2" variant="success" />
      </div>
      <div slot="body" style="overflow: scroll">
        <router-view></router-view>
      </div>
    </Card>

    <!-- <div class="stepper p-3">
      <Stepper :steps="5" :currentStepIndex="2" variant="success" />
    </div>-->
  </div>
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

<style>
</style>