<script setup lang="ts">
import { uiSize } from "./config.ts";

const props = defineProps({
  pages: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(["pageChange"]);

const pageChange = (page: number) => {
  props.pages.page = page;
  emits("pageChange", props.pages);
};
const pageSizeChange = (pageSize: number) => {
  props.pages.page = 1;
  props.pages.pageSize = pageSize;
  emits("pageChange", props.pages);
};
</script>

<template>
  <NPagination
    v-model:page="pages.page"
    v-model:page-size="pages.pageSize"
    :page-sizes="pages.pageSizes"
    show-size-picker
    :size="uiSize"
    @update:page="pageChange"
    @update:page-size="pageSizeChange"
  />
</template>
