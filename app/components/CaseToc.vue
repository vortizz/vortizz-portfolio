<script setup lang="ts">
type TocLink = { id: string; text: string; depth: number }

const props = defineProps<{ links: TocLink[] }>()
const activeId = ref<string>("")

onMounted(() => {
  const ids = props.links.map(l => l.id)
  const headings = ids
    .map(id => document.getElementById(id))
    .filter((el): el is HTMLElement => Boolean(el))

  if (!headings.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop)

      if (visible !== undefined && visible.length > 0 && visible?.[0]) {
        activeId.value = (visible[0].target as HTMLElement).id
      } else {
        const y = window.scrollY + 140
        let last = headings?.length && headings?.[0] ? headings[0].id : ''
        for (const h of headings) {
          if (h.offsetTop <= y) last = h.id
        }
        activeId.value = last
      }
    },
    {
      root: null,
      rootMargin: "-120px 0px -70% 0px",
      threshold: [0, 1],
    }
  )

  headings.forEach(h => observer.observe(h))

  onBeforeUnmount(() => observer.disconnect())
})
</script>

<template>
  <aside class="sticky top-24 hidden lg:block lg:w-[320px]">
    <div class="rounded-2xl border border-slate-200 bg-white/70 p-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/60">
      <div class="text-xs font-medium text-slate-500 dark:text-slate-400">On this page</div>

      <nav class="mt-3 max-h-[calc(100dvh-9rem)] overflow-y-auto overscroll-contain pr-1">
        <div class="space-y-1">
          <a
            v-for="l in links"
            :key="l.id"
            :href="`#${l.id}`"
            class="block rounded-lg px-2 py-1 text-sm transition"
            :class="[
              l.depth === 3 ? 'pl-6' : 'pl-2',
              activeId === l.id
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900/40'
            ]"
          >
            {{ l.text }}
          </a>
        </div>
      </nav>
    </div>
  </aside>
</template>
