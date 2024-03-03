<script setup lang="ts">
import { login } from "@/api/login.ts";

const params = {
  username: "admin",
  password: "admin123",
};
const handleLogin = () => {
  window.$dialog.warning({
    title: "系统提示",
    content: "登录状态已过期，您可以继续留在该页面，或者重新登录",
    positiveText: "重新登录",
    negativeText: "取消",
    onPositiveClick: () => {
      window.$msg.error("asd");
    },
    onNegativeClick: () => {},
  });
  login(params)
    .then((res) => {
      console.log(1, res);
    })
    .catch((err) => {
      console.log(2, err);
    });
};
</script>

<template>
  <div class="demo" @click="handleLogin()">demo</div>
</template>

<style lang="scss" scoped></style>
