<script setup lang="ts">
import {
  createTheme,
  inputDark,
  datePickerDark,
  buttonDark,
  dialogDark,
} from "naive-ui";
import { zhCN, dateZhCN } from "naive-ui";

const darkTheme = createTheme([
  inputDark,
  datePickerDark,
  buttonDark,
  dialogDark,
]);
</script>

<template>
  <NConfigProvider :theme="darkTheme" :locale="zhCN" :date-locale="dateZhCN">
    <slot></slot>
  </NConfigProvider>
</template>

<style lang="scss" scope></style>
