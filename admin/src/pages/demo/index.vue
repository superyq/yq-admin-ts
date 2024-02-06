<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { watchEffect } from "vue";

const route = useRoute();
const router = useRouter();

console.log(route);
const handleGo = () => {
  router.push({path: '/demo/2'})
}
console.log(1, route.params);

watchEffect(() => {
  console.log(1, route.params);
})
</script>

<template>
  <div class="demo" @click="handleGo">{{ route.params.name }}</div>
</template>

<style lang="scss" scoped></style>
