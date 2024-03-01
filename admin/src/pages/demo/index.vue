<script setup lang="ts">
import { NDialogProvider, NMessageProvider } from "naive-ui";
import { login } from "@/api/login.ts";

const params = {
  username: "admin",
  password: "admin123",
};
const handleLogin = () => {
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
  <n-dialog-provider>
    <n-message-provider>
      <div class="demo" @click="handleLogin()">demo</div>
    </n-message-provider>
  </n-dialog-provider>
</template>

<style lang="scss" scoped></style>
