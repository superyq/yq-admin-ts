<script setup lang="ts">
import { useDemoStore } from "@/store/demo.ts";

const demoStore = useDemoStore();
</script>

<template>
  <div>{{ demoStore.name }}</div>
</template>

<style lang="scss" scoped></style>
