<template>
  <div class="login">
    <div class="login-box">
      <div class="site-logo">
        <a href>
          <span class="font-weight-bold">Pro</span>Ship
        </a>
      </div>
      <div class="login-box__body card">
        <p class="login-box-body__msg">Sign in to start your session</p>
        <form action method="post">
          <TextBox type="text" id="email-textbox" placeholder="Email" v-model="email" />
          <TextBox type="text" id="password-textbox" placeholder="Password" v-model="password" />

          <div class="login-box__cta-wrapper">
            <!-- <CheckBoxGroup id="remember-me" :options="[{value:'remember',name:'Remember Me'}]" v-model="rememberMe"/> -->
            <Button id="submit-login-form-button" variant="info" size="md">Sign In</Button>
          </div>
        </form>
        <div class="forgot-password-msg">
          <a href>Forgot Password?</a>
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
    Button
    // CheckBoxGroup
  },

  data: function() {
    return {
      email: null,
      password: null,
      rememberMe: false
    };
  }
};
</script>


<style scoped>
.login-box {
  width: 360px;
  margin: 7% auto;
  padding: 20px;
}

.site-logo {
  font-size: 35px;
  text-align: center;
  margin-bottom: 25px;
  font-weight: 300;
}

.login-box__body {
  background: #fff;
  padding: 20px;
  border-top: 0;
  color: #666;
}

.login-box-body__msg {
  margin: 0;
  text-align: center;
  padding: 0 20px 20px 20px;
}

#submit-login-form-button {
  width: 100%;
}

.login-box__cta-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#remember-me {
  margin-bottom: 0;
}

.forgot-password-msg {
  text-align: center;
  margin-top: 10px;
}
</style>