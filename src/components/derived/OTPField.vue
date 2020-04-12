<template>
  <div class="otp-wrapper">
    <form autocomplete="off" class="w-100 d-flex justify-content-between">
      <NumberField
        id="phone-textbox-1"
        class="otp-field ml-1 mr-1"
        :keyup="movetoNext('phone-textbox-1','phone-textbox-2')"
        v-model.number="otp1"
      />
      <NumberField
        id="phone-textbox-2"
        class="otp-field ml-1 mr-1"
        :keyup="movetoNext('phone-textbox-2','phone-textbox-3')"
        v-model.number="otp2"
      />
      <NumberField
        id="phone-textbox-3"
        class="otp-field ml-1 mr-1"
        :keyup="movetoNext('phone-textbox-3','phone-textbox-4')"
        v-model.number="otp3"
      />
      <NumberField
        id="phone-textbox-4"
        class="otp-field ml-1 mr-1"
        :keyup="movetoNext('phone-textbox-4','phone-textbox-5')"
        v-model.number="otp4"
      />
      <NumberField id="phone-textbox-5" class="otp-field ml-1 mr-1" v-model.number="otp5" />
    </form>
  </div>
</template>

<script>
import NumberField from "@/components/core/NumberField";

export default {
  name: "OTPField",
  components: {
    NumberField
  },
  mounted() {},
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
    movetoNext(current, nextFieldID) {
      var otp = document.getElementById(current);
      if (otp != null && otp.value.length >= 1) {
        document.getElementById(nextFieldID).focus();
      }
    }
  }
};
</script>

<style scoped>
.otp-wrapper {
  display: flex;
  justify-content: space-between;
}
.otp-field {
  /* width: 40px; */
}
</style>