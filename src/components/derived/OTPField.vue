<template>
  <div class="otp-wrapper">
    <NumberField id="phone-textbox" class="otp-field"  v-model="otp1" />
    <NumberField id="phone-textbox" class="otp-field"  v-model="otp2" />
    <NumberField id="phone-textbox" class="otp-field"  v-model="otp3" />
    <NumberField id="phone-textbox" class="otp-field"  v-model="otp4" />
    <NumberField id="phone-textbox" class="otp-field"  v-model="otp5" />
  </div>
</template>

<script>
import NumberField from "@/components/core/NumberField";

export default {
  name: "OTPField",
  components: {
    NumberField
  },
  mounted() {

  },
  data() {
    return {
      otp1: null,
      otp2: null,
      otp3: null,
      otp4: null,
      otp5: null
    };
  },
  methods: {

  }
};
</script>

<style scoped>
.otp-wrapper {
  display: flex;
  justify-content: space-between;
}
.otp-field {
  width: 40px;
}
</style>