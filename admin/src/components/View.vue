<script setup lang="ts">
import { uiPagePages } from "@/components/naive-ui/config.ts";
import { reactive } from "vue";

const emits = defineEmits(["add", "search", "reset"]);
const addHandle = () => {
  emits("add");
};
const searchHandle = () => {
  emits("search");
};
const resetHandle = () => {
  emits("reset");
};

let pages = reactive(uiPagePages);
const pageChange = (pages) => {
  console.log(1, pages);
};
const pageSizeChange = (pages) => {
  console.log(2, pages);
};
</script>

<template>
  <div class="g-box">
    <div class="g-search-box">
      <slot name="search"></slot>
    </div>
    <div class="g-control-box">
      <div class="g-control__add">
        <YButton @click="addHandle" icon="add" type="info">新增</YButton>
      </div>
      <div class="g-control__search">
        <YButton @click="searchHandle" icon="search" type="info">筛选</YButton>
        <YButton @click="resetHandle" icon="reset">重置</YButton>
        <slot name="control"></slot>
      </div>
    </div>
    <div class="g-table">
      <slot name="table"></slot>
    </div>
    <div class="g-page">
      <YPage
        :pages="pages"
        @pageChange="pageChange"
        @pageSizeChange="pageSizeChange"
      ></YPage>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.g-search-box {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 10px 20px;
  margin-bottom: 10px;
}
.g-control-box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.g-control__add > button {
  margin-right: 20px;
}
.g-control__search > button {
  margin-left: 20px;
}
.g-page {
  margin-top: 20px;
}
.g-form__box {
  padding: 12px 20px 0;
  max-height: 80vh;
  overflow: scroll;
}
</style>
