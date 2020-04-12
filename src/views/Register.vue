<template>
  <div class="register">
    <div class="auth-box">
      <div class="site-logo">
        <a href>
          <span class="font-weight-bold">Pro</span>Ship
        </a>
      </div>
      <div class="auth-box__body card">
        <!-- Step 1 -->
        <div class="initial-register" v-if="initialRegister">
          <Stepper :steps="3" :currentStepIndex="1" />
          <p class="auth-box-body__msg">Register to start your session</p>
          <form @submit.prevent="onRegister">
            <TextBox type="text" id="name-textbox" placeholder="Name" v-model="name" />
            <NumberField id="phone-textbox" placeholder="Phone Number" v-model="number" />
            <TextBox type="text" id="email-textbox" placeholder="Email" v-model="email" />
            <div class="auth-box__cta-wrapper d-flex justify-content-end">
              <Button id="register-form-button" variant="primary" size="md">Register</Button>
            </div>
          </form>
        </div>

        <!-- Step 2 -->
        <div class="otp-verification" v-if="otpVerification">
          <Stepper :steps="3" :currentStepIndex="2" />
          <p class="auth-box-body__msg">
            Please type the verification code sent to
            <span class="font-weight-bold">+66 22134567</span>
          </p>
          <form @submit="handleRegister">
            <OTPField />
            <p class="auth-box-body__msg">Didn't recieve the OTP?</p>
            <p class="auth-box-body__msg">
              <a href="#" class="otp-resend">Resend OTP</a>
            </p>
            <div class="auth-box__cta-wrapper d-flex justify-content-end">
              <Button
                id="register-form-button"
                variant="primary"
                size="md"
                @click="onVerification"
              >Verify</Button>
            </div>
          </form>
        </div>

        <!-- Step 3 -->
        <div class="final-login-prompt" v-if="finalLogin">
          <Stepper :steps="3" :currentStepIndex="3" />
          <div class="sucess-icon">
            <i class="fal fa-check-circle"></i>
          </div>
          <p class="auth-box-body__msg sucessfully-registered-messege">Successfully Registered</p>
          <p class="auth-box-body__msg">
            You can
            <router-link :to="{name: 'Login'}">login now.</router-link>
          </p>
        </div>
        
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
import OTPField from "@/components/derived/OTPField";

export default {
  name: "Home",
  components: {
    TextBox,
    Button,
    CheckBoxGroup,
    NumberField,
    DatePicker,
    Stepper,
    OTPField,

  },

  data() {
    return {
      email: null,
      password: null,
      name: null,
      number: null,
      dateOfBirth: null,
      confirm_password: null,
      finalLogin: false,
      otpVerification: false,
      initialRegister: true
    };
  },

  methods: {
    handleRegister() {},

    onRegister: function() {
      this.initialRegister = false;
      this.otpVerification = true;
    },
    onVerification: function() {
      this.otpVerification = false;
      this.finalLogin = true;
    }
  }
};
</script>


<style scoped>
.otp-resend-msg {
  text-transform: uppercase;
  font-weight: bold;
}

.otp-resend {
  text-decoration: underline;
}

.auth-link {
  text-decoration: underline;
}

.sucessfully-registered-messege {
  font-size: 18px;
  font-weight: bold;
}

.sucess-icon {
  text-align: center;
  font-size: 50px;
  color: #28a745;
}
</style>