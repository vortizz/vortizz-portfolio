<script setup>
const { data } = await useAsyncData('projects', () =>
  queryCollection('projects').all()
)
</script>

<template>
  <section class="py-16">
    <h1 class="text-3xl font-semibold">Projects</h1>

    <div class="grid gap-6 mt-10 md:grid-cols-2">
      <ProjectCard
        v-for="p in data"
        :key="p.path"
        :project="p"
      />
    </div>
  </section>
</template>
