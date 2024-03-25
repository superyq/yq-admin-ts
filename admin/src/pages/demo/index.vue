<script setup lang="ts"></script>

<template>
  <div class="container">
    <div v-for="i in 10" :class='`item${i}`'>{{ i }}</div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 10px 20px;
  grid-auto-rows: 200px;
  width: 500px;
  height: 500px;
  border: 1px solid;
  div {
    width: 100px;
    height: 20px;
    border: 1px solid;
  }
}
</style>
