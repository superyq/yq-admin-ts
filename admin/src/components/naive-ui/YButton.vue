<script setup lang="ts">
import { uiSize } from "./config.ts";

defineProps({
  icon: {
    type: String,
    default: "",
  },
  iconRight: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <NButton :size="uiSize" :icon-placement="iconRight ? 'right' : 'left'">
    <slot></slot>
    <template #icon v-if="icon">
      <svg-icon :name="icon"></svg-icon>
    </template>
  </NButton>
</template>

<style lang="scss" scoped></style>
