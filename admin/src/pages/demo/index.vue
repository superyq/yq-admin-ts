<script setup lang="ts">
import { useDemoStore } from "@/store/demo.ts";

const { name, changeName } = useDemoStore();
console.log(name) // 'yq'

const handleChange = () => {
  changeName();
  console.log(name) // 'yq'
}
</script>

<template>
  <div>{{ name }}</div>
  <div @click="handleChange">change name</div>
</template>

<style lang="scss" scoped></style>
