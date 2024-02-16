<script setup lang="ts">
import { useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
import AppLink from "@/components/AppLink.vue";

const router = useRouter();

onBeforeRouteUpdate(() => {
  console.log("更新路由");
});

onBeforeRouteLeave(() => {
  console.log("离开路由");
});

const changeRoute = () => {
  router.push("/demo/2");
};
</script>

<template>
  <div class="p-demo u__border">
    <div class="demo" @click="changeRoute">改变路由</div>
    <AppLink to="http://www.baidu.com" _target="_blank"> 去百度 </AppLink>
    <AppLink to="/home"> 去首页 </AppLink>
    <form class="demo">
      <input type="text" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.p-demo {
  height: 1920px;
  .demo {
    height: 500px;
  }
}
</style>
