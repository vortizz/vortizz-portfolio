<script setup lang="ts">
defineProps<{ title: string; tradeoff?: string }>()
</script>

<template>
  <div class="my-6 rounded-2xl border border-slate-200 bg-white/70 p-5 backdrop-blur dark:border-slate-800 dark:bg-slate-950/60">
    <div class="text-sm font-semibold">{{ title }}</div>
    <div v-if="tradeoff" class="mt-1 text-xs text-slate-500 dark:text-slate-400">
      Tradeoff: {{ tradeoff }}
    </div>
    <div class="mt-3 text-sm text-slate-600 dark:text-slate-300">
      <slot />
    </div>
  </div>
</template>
