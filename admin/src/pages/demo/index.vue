<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { watchEffect } from "vue";

const route = useRoute();
const router = useRouter();

const handleGo = () => {
  router.push({ path: "/demo/2" });
};
console.log(1, route.params);

watchEffect(() => {
  console.log(1, route.params);
});
</script>

<template>
  <div class="demo" @click="handleGo">demo</div>
  <RouterView></RouterView>
</template>

<style lang="scss" scoped></style>
