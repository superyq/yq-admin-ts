<script setup>
import CopeRight from "@/components/CopyRight.vue";
import LoginForm from "./LoginForm.vue";
</script>

<template>
  <div class="login-bg u__flex-c">
    <LoginForm />
    <CopeRight />
  </div>
</template>

<style lang="scss">
.login__box .n-form-item {
  margin-top: -20px;
}
</style>

<style lang="scss" scoped>
.login-bg {
  width: 100vw;
  height: 100vh;
  background-image: url("@/assets/imgs/login_bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
}
</style>
