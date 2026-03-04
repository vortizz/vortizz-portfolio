<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue"
import ThemeToggle from "~/components/ThemeToggle.vue"

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Skills", to: "/#skills" },
  { label: "Projects", to: "/#projects" },
  { label: "Experience", to: "/#experience" },
  { label: "Contact", to: "/#contact" },
]

const route = useRoute()
const activeTarget = ref<string>("/")
const mobileOpen = ref(false)

const sectionIds = links
  .map((link) => link.to.match(/#(.+)$/)?.[1])
  .filter((id): id is string => Boolean(id))

const setActiveFromScroll = () => {
  if (route.path !== "/") {
    activeTarget.value = route.path
    return
  }

  const nearBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8
  if (nearBottom) {
    const lastId = sectionIds[sectionIds.length - 1]
    if (lastId) {
      activeTarget.value = `/#${lastId}`
      return
    }
  }

  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => Boolean(el))

  if (!sections.length) {
    activeTarget.value = "/"
    return
  }

  const markerY = window.scrollY + window.innerHeight * 0.35
  if (markerY < sections[0]!.offsetTop) {
    activeTarget.value = "/"
    return
  }

  for (let i = 0; i < sections.length; i++) {
    const current = sections[i]
    const next = sections[i + 1]
    const top = current!.offsetTop
    const nextTop = next ? next.offsetTop : Number.POSITIVE_INFINITY

    if (markerY >= top && markerY < nextTop) {
      activeTarget.value = `/#${current!.id}`
      return
    }
  }

  activeTarget.value = `/#${sections[sections.length - 1]!.id}`
}

const isActive = (to: string) => {
  if (to === "/#projects" && (route.path === "/projects" || route.path.startsWith("/projects/"))) {
    return true
  }
  if (route.path !== "/") return route.path === to
  return activeTarget.value === to
}

const navigateFromMobile = async (to: string) => {
  mobileOpen.value = false

  const match = to.match(/^\/#(.+)$/)
  if (match && match[1]) {
    const id = match[1]
    const scrollToSection = () => {
      const section = document.getElementById(id)
      if (!section) return
      const top = section.getBoundingClientRect().top + window.scrollY - 90
      window.scrollTo({ top, behavior: "smooth" })
    }

    if (route.path !== "/" || route.hash !== `#${id}`) {
      await navigateTo(to)
    }

    window.setTimeout(scrollToSection, 220)
    return
  }

  await navigateTo(to)
}

onMounted(() => {
  nextTick(() => {
    setActiveFromScroll()
  })
  window.addEventListener("scroll", setActiveFromScroll, { passive: true })
  window.addEventListener("resize", setActiveFromScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", setActiveFromScroll)
  window.removeEventListener("resize", setActiveFromScroll)
})

watch(
  () => route.fullPath,
  () => {
    mobileOpen.value = false
    nextTick(() => {
      setActiveFromScroll()
    })
  }
)
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/60">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
      <NuxtLink to="/" class="group flex items-center gap-2">
        <span class="text-sm font-semibold tracking-tight">Victor Ortiz</span>
        <span class="text-xs text-slate-500 dark:text-slate-400">Full-Stack</span>
      </NuxtLink>

      <nav class="hidden items-center gap-6 sm:flex">
        <NuxtLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="rounded-full px-3 py-1.5 text-sm transition-colors"
          :class="
            isActive(l.to)
              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
              : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
          "
        >
          {{ l.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <ThemeToggle />
        <UButton size="sm" color="primary" variant="solid" to="/#contact" class="hidden sm:inline-flex">Let's talk</UButton>
        <UButton
          size="sm"
          variant="ghost"
          class="sm:hidden"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          @click="mobileOpen = !mobileOpen"
        >
          <UIcon :name="mobileOpen ? 'i-heroicons-x-mark-20-solid' : 'i-heroicons-bars-3-20-solid'" class="h-5 w-5" />
        </UButton>
      </div>
    </div>

    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="max-h-0 -translate-y-1 opacity-0"
      enter-to-class="max-h-[420px] translate-y-0 opacity-100"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="max-h-[420px] translate-y-0 opacity-100"
      leave-to-class="max-h-0 -translate-y-1 opacity-0"
    >
      <div
        v-if="mobileOpen"
        id="mobile-menu"
        class="overflow-hidden border-t border-slate-200/70 px-4 py-3 sm:hidden dark:border-slate-800/70"
      >
        <nav class="flex flex-col gap-1">
          <NuxtLink
            v-for="l in links"
            :key="`mobile-${l.to}`"
            :to="l.to"
            class="rounded-lg px-3 py-2 text-sm transition-colors"
            :class="
              isActive(l.to)
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white'
            "
            @click.prevent="navigateFromMobile(l.to)"
          >
            {{ l.label }}
          </NuxtLink>

          <UButton size="sm" color="primary" variant="solid" to="/#contact" class="mt-2" @click.prevent="navigateFromMobile('/#contact')">
            Let's talk
          </UButton>
        </nav>
      </div>
    </Transition>
  </header>
</template>
