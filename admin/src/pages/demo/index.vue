<script setup lang="ts">
import { throttle } from "@/utils/index.ts";

const change = throttle(() => {
  console.log(1);
});
</script>

<template>
  <div class="demo" @click="change()">demo</div>
</template>

<style lang="scss" scoped></style>
