<script setup lang="ts">
import { computed, watch, ref } from "vue";
import { useTagStore } from "@/store/tag.ts";
import { usePermissionStore } from "@/store/permission.ts";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const tagStore = useTagStore();
const permissionStore = usePermissionStore();

let tags = computed(() => {
  return tagStore.tags;
});

watch(
  () => route.path,
  (value) => {
    const obj = { title: route.meta.title, key: value };
    tagStore.addTag(obj);
  },
  {
    immediate: true,
  }
);

const handleClose = (key) => {
  tagStore.removeTag(key);

  if (permissionStore.activeMenuValue == key) {
    router.push(tagStore.activeTag);
  }
};
const handleCheck = (item) => {
  let { key } = item;
  router.push(key);
};

let scrollbar = ref(null);
let leftArrowDisabled = ref(false);
let rightArrowDisabled = ref(false);
const rightArrowClick = () => {
  const scrollX = scrollbar.value.scrollLeft || 0;
  console.log(111, scrollX);
  console.log(222, scrollbar.value.$el.offsetWidth);
  scrollbar.value.scrollTo(
    {
      left: scrollX + 200,
      debounce: false,
      behavior: "smooth",
    } as any,
    0
  );
  isDisabledArrow();
};
const isDisabledArrow = () => {
  setTimeout(() => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollbar.value
      .$el as HTMLElement;
    leftArrowDisabled.value = scrollLeft === 0;
    rightArrowDisabled.value = scrollLeft === scrollWidth - clientWidth;
    console.log(123, scrollLeft, scrollWidth, clientWidth);
  }, 100);
};
</script>

<template>
  <div class="layout-header__tag">
    <div class="layout-header__tag">
      <SvgIcon name="arrowL"></SvgIcon>
      <NScrollbar
        ref="scrollbar"
        :x-scrollable="true"
        :size="0"
        style="width: calc(100vw - 198px)"
      >
        <div class="u__flex-c" style="height: 30px">
          <NTag
            v-for="item in tags"
            :key="item.key"
            class="tag-item"
            :closable="item.key !== '/home'"
            :type="item.key == permissionStore.activeMenuValue ? 'success' : ''"
            size="small"
            @close="handleClose(item.key)"
            @click="handleCheck(item)"
            >{{ item.title }}</NTag
          >
        </div>
      </NScrollbar>
      <SvgIcon name="arrowR" @click="rightArrowClick"></SvgIcon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-header__tag {
  display: flex;
  align-items: center;
  height: 30px;
}
.tag-item {
  margin-right: 5px;
  cursor: pointer;
}
</style>
