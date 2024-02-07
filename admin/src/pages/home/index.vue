<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const handleGo = () => router.go(-1);
</script>

<template>
  <div class="home" @click="handleGo">home</div>
</template>

<style lang="scss" scoped></style>
