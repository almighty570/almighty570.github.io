<template>
  <div class="otp-wrapper">
    <form autocomplete="off" class="w-100 d-flex justify-content-between">
      <NumberField
        id="phone-textbox-0"
        class="otp-field ml-1 mr-1"
        @keyup="movetoNext"
        :maxval="1"
        v-model.number="otp1"
      />
      <NumberField
        id="phone-textbox-1"
        class="otp-field ml-1 mr-1"
        @keyup="movetoNext"
        :maxval="1"
        v-model.number="otp2"
      />
      <NumberField
        id="phone-textbox-2"
        class="otp-field ml-1 mr-1"
        @keyup="movetoNext"
        :maxval="1"
        v-model.number="otp3"
      />
      <NumberField
        id="phone-textbox-3"
        class="otp-field ml-1 mr-1"
        @keyup="movetoNext"
        :maxval="1"
        v-model.number="otp4"
      />
      <NumberField
        id="phone-textbox-4"
        class="otp-field ml-1 mr-1"
        v-model.number="otp5"
        :maxval="1"
        @keyup="movetoNext"
      />
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
    movetoNext(event) {
      let value = parseInt(event.target.value);
      if (!isNaN(value)) {
        let nextFieldId =
          "phone-textbox-" +
          ((parseInt(event.target.id.split("-").pop()) + 1) % 5);
        document.getElementById(nextFieldId).focus();
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
</style>