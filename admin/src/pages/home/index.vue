<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const handleGo = () => router.go(-1);
</script>

<template>
  <div class="p-home u__border">
    <div class="btn" @click="handleGo">home</div>
    <div class="demo">asdf</div>
  </div>
</template>

<style lang="scss" scoped>
.p-home {
  height: 1920px;
  .btn {
    height: 900px;
  }
}
</style>
