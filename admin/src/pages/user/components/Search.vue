<script setup lang="ts">
import { reactive } from "vue";

const emits = defineEmits(["search"]);

let serachParams = reactive({
  name: "",
  status: "",
});
const statusOp = [
  {
    label: "启用",
    value: 1,
  },
  {
    label: "禁用",
    value: 0,
  },
];
const searchHandle = () => {
  emits("search");
};
</script>

<template>
  <YInput v-model="serachParams.name" @keyup.enter="searchHandle"></YInput>
  <YSelect
    v-model="serachParams.status"
    :options="statusOp"
    @keyup.enter="searchHandle"
  ></YSelect>
</template>

<style lang="scss" scoped></style>
