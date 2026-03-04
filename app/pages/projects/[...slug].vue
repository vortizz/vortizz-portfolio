<script setup>

const route = useRoute()

const slug = computed(() => {
  const p = route.params.slug
  return Array.isArray(p) ? p.join("/") : String(p || "")
})

const contentPath = computed(() => `/projects/${slug.value}`)

const { data: page } = await useAsyncData(contentPath.value, () =>
  queryCollection('projects').path(contentPath.value).first()
)

const tocLinks = computed(() => {
  const links = page.value?.body?.toc?.links ?? []
  const flatten = (arr, out = []) => {
    for (const x of arr) {
      out.push({ id: x.id, text: x.text, depth: x.depth })
      if (x.children?.length) flatten(x.children, out)
    }
    return out
  }
  return flatten(links).filter((l) => l.depth >= 2 && l.depth <= 3)
})
</script>

<template>
  <section class="py-16">
    <div v-if="!page" class="rounded-2xl border border-slate-200 bg-white/70 p-8 dark:border-slate-800 dark:bg-slate-950/60">
      <h1 class="text-2xl font-semibold">Project not found</h1>
      <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
        I couldn't find this case study. Check the file path under <code>/content/projects</code>.
      </p>
      <div class="mt-5">
        <UButton to="/projects" variant="outline">Back to projects</UButton>
      </div>
    </div>

    <div v-else class="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
      <article class="min-w-0">
        <h1 class="text-3xl font-semibold tracking-tight">{{ page.title }}</h1>
        <p class="mt-3 text-slate-600 dark:text-slate-300">{{ page.tagline }}</p>

        <div class="prose mt-10 max-w-none dark:prose-invert">
          <ContentRenderer :value="page" />
        </div>
      </article>

      <CaseToc :links="tocLinks" />
    </div>
  </section>
</template>
