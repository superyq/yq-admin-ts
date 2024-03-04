<script setup lang="ts">
import { uiSize, uiCardWidth, uiCardBordered } from "./config.ts";
import { computed } from "vue";

const props = defineProps({
  width: {
    type: String,
    default: uiCardWidth,
  },
});

const style = computed(() => {
  return {
    width: props.width == "auto" ? "100%" : `${props.width}`,
  };
});
</script>

<template>
  <NCard :size="uiSize" :style="style" :bordered="uiCardBordered" closable>
    <slot></slot>
    <template #action>
      <slot name="action"></slot>
      <YButton>取消</YButton>
      <YButton>确定</YButton>
    </template>
  </NCard>
</template>

<style lang="scss" scope></style>
