<template>
  <div class="register">
    <div class="auth-box">
      <div class="site-logo">
        <a href>
          <span class="font-weight-bold">{{$t('pro')}}</span>
          {{$t('ship')}}
        </a>
      </div>
      <div class="auth-box__body card">
        <!-- Step 1 -->
        <div class="initial-register" v-if="initialRegister">
          <Stepper :steps="3" :currentStepIndex="1" variant="primary" />

          <p class="auth-box-body__msg">{{$t('register.description')}}</p>

          <ValidationObserver v-slot="{ invalid }">
            <form @submit.prevent="onRegister">
              <TextBox
                type="text"
                id="name-textbox"
                placeholder="Name"
                v-model="name"
                rules="required"
              />

              <PhoneNumber
                id="phone-textbox"
                placeholder="Phone Number"
                rules="required"
                v-model="phone"
              />

              <TextBox
                type="email"
                id="email-textbox"
                placeholder="Email"
                v-model="email"
                rules="required"
              />

              <div class="auth-box__cta-wrapper d-flex justify-content-center">
                <Button
                  type="submit"
                  id="register-form-button"
                  variant="info"
                  size="md"
                  :disabled="invalid"
                >{{$t('register.label')}}</Button>
              </div>
            </form>
          </ValidationObserver>
        </div>

        <!-- Step 2 -->
        <div class="otp-verification" v-if="otpVerification">
          <Stepper :steps="3" :currentStepIndex="2" variant="primary" />
          <p class="auth-box-body__msg">
            {{$t('register.message')}}
            <span class="font-weight-bold">{{phone}}</span>
          </p>
          <form @submit="handleRegister">
            <OTPField />
            <p class="auth-box-body__msg">{{$t('register.otp_message')}}</p>
            <p class="auth-box-body__msg">
              <a href="#" class="otp-resend">{{$t('register.resend')}}</a>
            </p>
            <div class="auth-box__cta-wrapper d-flex justify-content-center">
              <Button
                id="register-form-button"
                variant="info"
                size="md"
                @click="onVerification"
              >{{$t('register.verify')}}</Button>
            </div>
          </form>
        </div>

        <!-- Step 3 -->
        <div class="final-login-prompt" v-if="finalLogin">
          <Stepper :steps="3" :currentStepIndex="3" variant="primary" />
          <div class="sucess-icon mt-4">
            <i class="fal fa-check-circle"></i>
          </div>
          <p
            class="auth-box-body__msg sucessfully-registered-messege"
          >{{$t('register.success_message')}}</p>
          <p class="auth-box-body__msg">
            {{$t('register.you_can')}}
            <router-link :to="{name: 'Login'}">{{$t('register.login_now')}}</router-link>
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
import PhoneNumber from "@/components/derived/PhoneNumber";

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
    PhoneNumber
  },

  data() {
    return {
      email: null,
      name: null,
      phone: null,
      finalLogin: false,
      otpVerification: false,
      initialRegister: true
    };
  },

  methods: {
    handleRegister() {},

    onRegister: function() {
      console.log(this.number);
      this.$store.dispatch("user/storeRegistrationData", {
        data: {
          email: this.email,
          name: this.name,
          phone: this.phone
        },
        callback: (status, data) => {
          if (status) {
            this.initialRegister = false;
            this.otpVerification = true;
          }
        }
      });
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