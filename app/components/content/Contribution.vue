<script setup lang="ts">
defineProps<{ role?: string }>()
</script>

<template>
  <div class="my-8 rounded-2xl border border-slate-200 bg-white/70 p-5 backdrop-blur dark:border-slate-800 dark:bg-slate-950/60">
    <div class="flex items-center justify-between gap-4">
      <div class="text-sm font-semibold">My contribution</div>
      <div v-if="role" class="text-xs text-slate-500 dark:text-slate-400">
        {{ role }}
      </div>
    </div>

    <div class="mt-3 text-sm text-slate-700 dark:text-slate-200">
      <slot />
    </div>
  </div>
</template>
