<script setup lang="ts">
import type { SkillIcon } from "~/utils/skill-icons"

defineProps<{
  label: string
  icon?: SkillIcon
}>()
</script>

<template>
  <div
    class="group inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-slate-100/70 px-3 text-sm text-slate-700 transition-all
           dark:border-white/[0.15] dark:bg-white/[0.08] dark:text-white/90
           hover:border-slate-300 hover:bg-slate-100
           dark:hover:border-white/[0.20] dark:hover:bg-white/[0.12]"
  >
    <span class="inline-flex h-5 w-5 shrink-0 items-center justify-center text-slate-600 opacity-90 dark:text-white/90">
      <svg
        v-if="icon?.type === 'simple'"
        viewBox="0 0 24 24"
        class="h-5 w-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path :d="icon?.path" />
      </svg>

      <UIcon
        v-else
        :name="icon?.type === 'lucide' ? icon.name : 'i-lucide-code-2'"
        class="h-5 w-5"
        aria-hidden="true"
      />
    </span>

    <span class="leading-none">{{ label }}</span>
  </div>
</template>
