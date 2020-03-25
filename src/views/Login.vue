<template>
  <div class="login">
    <div class="auth-box">
      <div class="site-logo">
        <a href>
          <span class="font-weight-bold">Pro</span>Ship
        </a>
      </div>
      <div class="auth-box__body card">
        <p class="auth-box-body__msg">Sign in to start your session</p>
        <form @submit="handleLogin">
          <TextBox type="text" id="email-textbox" placeholder="Email" v-model="email" />
          <TextBox type="text" id="password-textbox" placeholder="Password" v-model="password" />

          <div class="auth-box__cta-wrapper d-flex justify-content-between">
            <CheckBoxGroup
              id="remember-me"
              :options="[{value:'remember',name:'Remember Me'}]"
              v-model="rememberMe"
            />
            <br />
            <Button id="submit-login-form-button" variant="info" size="md">Sign In</Button>
          </div>
        </form>
        <div class="forgot-password-msg">
          Don't have an account ?
          <router-link :to="{name: 'Register'}">Create one</router-link>
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
</style>