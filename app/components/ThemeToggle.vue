<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === "dark")

function toggle() {
  colorMode.preference = isDark.value ? "light" : "dark"
}
</script>

<template>
  <UButton size="sm" variant="ghost" @click="toggle" aria-label="Toggle theme">
    <UIcon
      :name="isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'"
      class="h-5 w-5"
    />
  </UButton>
</template>
