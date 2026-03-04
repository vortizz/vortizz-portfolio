<script setup>
const { data: featured, refresh } = await useAsyncData(
  "featured-projects",
  () => queryCollection("projects").all(),
  {
    default: () => [],
    transform: (projects) => projects.filter((project) => Boolean(project.featured)),
  }
)

onMounted(() => {
  if (!featured.value?.length) {
    refresh()
  }
})
</script>

<template>
  <Hero />

  <AboutPositioning />

  <SkillsSection />

  <section id="projects" class="mt-20 scroll-mt-24">
    <div class="flex items-end justify-between gap-6">
      <div>
        <h2 class="text-2xl font-semibold tracking-tight">Featured case studies</h2>
        <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
          A few projects that show the balance of product UX, backend systems, and data work.
        </p>
      </div>
      <UButton variant="ghost" to="/projects" class="text-no">View all</UButton>
    </div>

    <div class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="p in featured" :key="p.title" :project="p" />
    </div>
  </section>

  <ExperienceTimeline />

  <ContactSection />
</template>
