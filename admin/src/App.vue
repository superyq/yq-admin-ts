<script setup lang="ts"></script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition mode="out-in" :name="route.meta.transition || 'fade'">
      <KeepAlive>
        <component :is="Component" :key="route.path"></component>
      </KeepAlive>
    </Transition>
  </RouterView>
</template>

<style scoped></style>
