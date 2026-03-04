<script setup lang="ts">
defineProps<{ items: { label: string; value: string }[] }>()
</script>

<template>
  <div class="my-6 grid gap-3 sm:grid-cols-3">
    <div
      v-for="(m, i) in items"
      :key="i"
      class="rounded-2xl border border-slate-200 bg-white/70 p-4 backdrop-blur
             dark:border-slate-800 dark:bg-slate-950/60"
    >
      <div class="text-xs text-slate-500 dark:text-slate-400">{{ m.label }}</div>
      <div class="mt-1 text-xl font-semibold tracking-tight">{{ m.value }}</div>
    </div>
  </div>
</template>
