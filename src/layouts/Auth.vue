<template>
  <div id="auth-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Auth"
};
</script>

<style>
#auth-body {
  background-color: #d2d6de;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}

.auth-box {
  width: 360px;
  margin: 5% auto;
  padding: 20px;
}

.site-logo {
  font-size: 35px;
  text-align: center;
  margin-bottom: 25px;
  font-weight: 300;
}

.auth-box__body {
  background: #fff;
  padding: 20px;
  border-top: 0;
  color: #666;
}

.auth-box-body__msg {
  margin: 0;
  text-align: center;
  padding: 0 20px 20px 20px;
}

#submit-login-form-button {
  width: 100%;
}

.auth-box__cta-wrapper {
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