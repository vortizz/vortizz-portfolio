<script setup lang="ts">
type Project = {
  title: string
  tagline: string
  tags: string[]
  href?: string
  path?: string
}

defineProps<{ project: Project }>()
</script>

<template>
  <div
    class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur transition
           hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950/60"
  >
    <div class="flex items-start justify-between gap-4">
      <div>
        <h3 class="text-lg font-semibold tracking-tight">
          {{ project.title }}
        </h3>
        <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {{ project.tagline }}
        </p>
      </div>

      <div class="shrink-0">
        <UButton
          v-if="project.path"
          size="sm"
          variant="outline"
          :to="project.path"
        >
          Case study
        </UButton>
      </div>
    </div>

    <div class="mt-5 flex flex-wrap gap-2">
      <UBadge v-for="t in project.tags?.slice(0, 4) ?? []" :key="t" variant="soft">{{ t }}</UBadge>
    </div>

    <div class="pointer-events-none absolute -inset-24 opacity-0 transition duration-300 group-hover:opacity-100">
      <div class="h-full w-full rotate-12 bg-linear-to-r from-transparent via-cyan-400/10 to-transparent"></div>
    </div>
  </div>
</template>
