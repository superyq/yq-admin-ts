<script setup lang="ts"></script>

<template>
  <div class="container">
    <span v-for="i in 10" :class="`item${i}`">{{ i }}</span>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background: green;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: repeat(3, 100px);
  span {
    border: 1px solid;
  }
}
</style>
