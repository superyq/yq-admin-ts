<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { watchEffect } from "vue";

const route = useRoute();
const router = useRouter();
const props = defineProps({
  id: Number,
});

const handleGo = () => {
  router.push({ name: "Home", query: { name: "yq" } });
};
console.log(1, props.id);

watchEffect(() => {
  console.log(1, route.params, route.query);
});
</script>

<template>
  <div class="demo" @click="handleGo">demo</div>
  <RouterView></RouterView>
</template>

<style lang="scss" scoped></style>
