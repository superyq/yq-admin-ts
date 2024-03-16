<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const go = () => {
  router.push("/home");
};
</script>

<template>
  <div class="p-home">
    <YButton @click="go">goHome</YButton>
  </div>
</template>

<style lang="scss" scoped></style>
