<script setup lang="ts">
defineProps<{ items: string[] }>()
</script>

<template>
  <div class="my-5 flex flex-wrap gap-2">
    <UBadge v-for="t in items" :key="t" variant="soft">{{ t }}</UBadge>
  </div>
</template>
