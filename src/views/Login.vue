<template>
  <div class="login">
    <div class="login-box">
      <div class="site-logo">
        <a href>ProShip</a>
      </div>
      <div class="login-box__body">
        <p class="login-box-body__msg">Sign in to start your session</p>
      </div>
      <form action method="post">
        <TextBox type="text" id="email-textbox" placeholder="Email" />
        <TextBox type="text" id="password-textbox" placeholder="Password" />
        <div class="login-box__cta-wrapper">
          <Button id="submit-login-form-button" variant="info" size="md">Info</Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Button from "@/components/core/Button";
import TextBox from "@/components/core/TextBox";

export default {
  name: "Home",
  components: {
    TextBox,
    Button
  }
};
</script>


<style scoped>
.login-box {
  width: 360px;
  margin: 7% auto;
}

.site-logo {
  font-size: 35px;
  text-align: center;
  margin-bottom: 25px;
  font-weight: 300;
}

.login-box-body {
  background: #d2d6de;
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
</style>