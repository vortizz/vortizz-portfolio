<script setup lang="ts">
import type { SkillCategory } from "~/data/skills"

defineProps<{
  categories: SkillCategory[]
}>()
</script>

<template>
  <section id="skills" class="mt-20 scroll-mt-24">
    <div class="max-w-3xl">
      <h2 class="text-2xl font-semibold tracking-tight">Skills</h2>
      <p class="mt-2 text-sm text-slate-600 dark:text-white/70">
        Technologies I use in production systems, data platforms, and real-time applications.
      </p>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="category in categories"
        :key="category.title"
        class="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur
               dark:border-white/10 dark:bg-white/3"
      >
        <h3 class="mb-3 text-lg font-semibold text-slate-900 dark:text-white/95">
          {{ category.title }}
        </h3>
        <div class="h-px border-t border-slate-200 dark:border-white/10" />

        <div class="mt-4 flex flex-wrap gap-2">
          <SkillBadge
            v-for="item in category.items"
            :key="item.key"
            :label="item.label"
            :icon="item.icon"
          />
        </div>
      </article>
    </div>
  </section>
</template>
