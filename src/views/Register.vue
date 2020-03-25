<template>
  <div class="register">
    <div class="auth-box ">
      <div class="site-logo">
        <a href>
          <span class="font-weight-bold">Pro</span>Ship
        </a>
      </div>
      <div class="auth-box__body card">
                <Stepper :steps="3" :currentStepIndex="2"/>
        <p class="auth-box-body__msg">Register to start your session</p>
        <form @submit="handleRegister">
          <TextBox type="text" id="name-textbox" placeholder="Name" v-model="name" />
          <NumberField id="phone-textbox" placeholder="Phone Number" v-model="number" />

          <TextBox type="text" id="email-textbox" placeholder="Email" v-model="email" />

          <div class="auth-box__cta-wrapper d-flex justify-content-end">
            <Button id="register-form-button" variant="info" size="md">Register</Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/core/Button";
import TextBox from "@/components/core/TextBox";
import CheckBoxGroup from "@/components/core/CheckBoxGroup";
import NumberField from "@/components/core/NumberField";
import DatePicker from "@/components/core/DatePicker";
import Stepper from "@/components/core/Stepper";

export default {
  name: "Home",
  components: {
    TextBox,
    Button,
    CheckBoxGroup,
    NumberField,
    DatePicker,
    Stepper
  },

  data() {
    return {
      email: null,
      password: null,
      name: null,
      number: null,
      dateOfBirth: null,
      confirm_password: null
    };
  },

  methods: {
    handleRegister(e) {
      e.preventDefault();
      this.$router.push({ name: "Seller-Dashboard" });
    }
  }
};
</script>


<style scoped>

</style>