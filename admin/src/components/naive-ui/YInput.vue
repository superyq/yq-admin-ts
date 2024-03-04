<script setup lang="ts">
import { computed } from "vue";
import { uiSize, uiInputWidth } from "./config.ts";

const props = defineProps({
  modelValue: {
    type: null,
    required: true,
  },
  icon: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: uiInputWidth,
  },
});
let emits = defineEmits(["update:modelValue"]);
const updateValue = (value: any) => {
  emits("update:modelValue", value);
};

const style = computed(() => {
  return {
    width: props.width == "auto" ? "100%" : `${props.width}`,
  };
});
</script>

<template>
  <NInput
    :value="modelValue"
    @input="updateValue"
    :size="uiSize"
    :style="style"
    clearable
  >
    <template #prefix>
      <svg-icon v-if="icon" :name="icon"></svg-icon>
    </template>
  </NInput>
</template>
