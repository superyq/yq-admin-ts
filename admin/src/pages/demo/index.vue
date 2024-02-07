<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { watchEffect } from "vue";

const route = useRoute();
const router = useRouter();

const handleGo = () => {
  router.push({ name: "home", query: { name: 'yq' } }).then(res => {
    console.log(11, res)
  });
};

watchEffect(() => {
  console.log(1, route.params, route.query);
});
</script>

<template>
  <div class="demo" @click="handleGo">demo</div>
  <RouterView></RouterView>
</template>

<style lang="scss" scoped></style>
