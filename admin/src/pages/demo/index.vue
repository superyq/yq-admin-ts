<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const addRouters = () => {
  router.addRoute({
    path: "/aa",
    component: () => import("@/pages/home/index.vue"),
  });
  router.replace(router.currentRoute.value.fullPath);
};
console.log(1, router.hasRoute("Home"));
console.log(2, router.getRoutes());
</script>

<template>
  <div @click="addRouters">添加路由</div>
</template>

<style lang="scss" scoped>
.p-demo {
  height: 1920px;
  .demo {
    height: 500px;
  }
}
</style>
