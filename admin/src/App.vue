<script setup lang="ts">
import { NThemeEditor } from "naive-ui";
</script>

<template>
  <NThemeEditor>
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
  </NThemeEditor>
</template>

<style scoped></style>
