<script setup lang="ts">
import NaiveUiApi from "@/components/NaiveUiApi.vue";
import NaiveTheme from "@/components/NaiveTheme.vue";
</script>

<template>
  <NaiveTheme>
    <NMessageProvider>
      <NDialogProvider>
        <NaiveUiApi></NaiveUiApi>
      </NDialogProvider>
    </NMessageProvider>

    <RouterView v-slot="{ Component, route }">
      <Transition mode="out-in" :name="route.meta.transition || 'fade'">
        <KeepAlive>
          <component :is="Component" :key="route.path"></component>
        </KeepAlive>
      </Transition>
    </RouterView>
  </NaiveTheme>
</template>

<style scoped></style>
