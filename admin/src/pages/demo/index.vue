<script setup lang="ts">
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
  <div class="demo" @click="handleLogin()">demo</div>
</template>

<style lang="scss" scoped></style>
