<template>
  <div class="login">
    <div class="auth-box">
      <div class="site-logo">
        <a href>
          <span class="font-weight-bold">{{$t('pro')}}</span>{{$t('ship')}}
        </a>
      </div>
      <div class="auth-box__body card">
        <p class="auth-box-body__msg">{{$t('login.description')}}</p>
        <form @submit="handleLogin">
          <TextBox type="text" id="email-textbox" placeholder="Email" v-model="email" />
          <TextBox type="text" id="password-textbox" placeholder="Password" v-model="password" />

          <div class="auth-box__cta-wrapper d-flex justify-content-between">
            <Button id="submit-login-form-button" class="btn-block" variant="info" size="md">{{$t('login.sign_in')}}</Button>
          </div>
        </form>
        <div class="forgot-password-msg">
         {{$t('login.no_account')}}
          <router-link :to="{name: 'Register'}">{{$t('login.create')}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/core/Button";
import TextBox from "@/components/core/TextBox";
import CheckBoxGroup from "@/components/core/CheckBoxGroup";

export default {
  name: "Home",
  components: {
    TextBox,
    Button,
    CheckBoxGroup
  },

  data() {
    return {
      email: null,
      password: null,
      rememberMe: false
    };
  },

  methods: {
    handleLogin(e) {
      e.preventDefault();
      this.$router.push({ name: "Seller-Dashboard" });
    }
  }
};
</script>


<style scoped>
#submit-login-form-button{
  width: 100%;
}
</style>