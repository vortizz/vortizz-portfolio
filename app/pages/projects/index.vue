<script setup>
const { data: projects, refresh } = await useAsyncData(
  "projects",
  () => queryCollection("projects").all(),
  {
    default: () => [],
    transform: (projects) =>
      projects.sort(
        (projectA, projectB) => projectA.sortOrder - projectB.sortOrder,
      ),
  },
);

onMounted(() => {
  if (!projects.value?.length) {
    refresh();
  }
});
</script>

<template>
  <section class="py-16">
    <h1 class="text-3xl font-semibold">All Projects</h1>

    <div class="grid gap-6 mt-10 md:grid-cols-2">
      <ProjectCard v-for="p in projects" :key="p.path" :project="p" />
    </div>
  </section>
</template>
