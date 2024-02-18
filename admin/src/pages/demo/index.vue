<script setup lang="ts">
import { useDemoStore } from "@/store/demo.ts";

const deomStore = useDemoStore();
</script>

<template>
  <div>
    <span>{{ deomStore.yearAfter(10) }}</span>
  </div>
</template>

<style lang="scss" scoped></style>
