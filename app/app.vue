<template>
  <div class="min-h-dvh bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <GlowBackground />

    <Navbar />

    <main class="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <NuxtPage />
    </main>

    <footer class="relative mx-auto mt-24 w-full max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-3 border-t border-slate-200 pt-8 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div>© {{ new Date().getFullYear() }} Victor Ortiz</div>
        <div class="flex gap-4">
          <a class="hover:text-slate-900 dark:hover:text-slate-100" href="https://github.com/vortizz" target="_blank" rel="noreferrer">GitHub (vortizz)</a>
          <a class="hover:text-slate-900 dark:hover:text-slate-100" href="https://linkedin.com/in/victor-ortiz-5a8369156" target="_blank" rel="noreferrer">LinkedIn</a>
          <a class="hover:text-slate-900 dark:hover:text-slate-100" href="mailto:ortizvictor154@gmail.com">Email</a>
        </div>
      </div>
    </footer>

    <Analytics />
    <SpeedInsights />
  </div>
</template>

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
import GlowBackground from "~/components/GlowBackground.vue"
import Navbar from "~/components/Navbar.vue"
</script>
