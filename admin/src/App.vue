<script setup lang="ts">
import { NMessageProvider, NDialogProvider } from "naive-ui";
import NaiveUiApi from "@/components/NaiveUiApi.vue";
</script>

<template>
  <NMessageProvider>
    <NDialogProvider>
      <NaiveUiApi></NaiveUiApi>
    </NDialogProvider>
  </NMessageProvider>

  <RouterView v-slot="{ Component, route }">
    <Transition mode="out-in" :name="route.meta.transition || 'fade'">
      <KeepAlive>
        <div>
          <component :is="Component" :key="route.path"></component>
        </div>
      </KeepAlive>
    </Transition>
  </RouterView>
</template>

<style scoped></style>
