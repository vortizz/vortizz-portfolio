<script setup lang="ts">
defineProps<{ title?: string; type?: "info" | "success" | "warning", text: string }>()
</script>

<template>
  <div class="my-6 rounded-2xl border p-4 backdrop-blur border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-950/60">
    <div class="text-sm font-semibold">
      {{ title || (type === "warning" ? "Note" : type === "success" ? "Win" : "Info") }}
    </div>
    <div class="mt-2 text-sm text-slate-600 dark:text-slate-300">
      {{ text }}
    </div>
  </div>
</template>
