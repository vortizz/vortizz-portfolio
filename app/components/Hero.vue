<template>
  <section class="relative pt-16 sm:pt-20">
    <div class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 shadow-sm backdrop-blur
                dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-300">
      <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
      Building scalable web platforms • Based in Sydney
    </div>

    <div class="mt-6 grid gap-10 lg:grid-cols-12 lg:items-center">
      <div class="lg:col-span-7">
        <h1 class="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Full-Stack Engineer
          <span class="bg-linear-to-r from-cyan-500 via-violet-500 to-sky-500 bg-clip-text text-transparent">
            focused on production systems
          </span>
        </h1>

        <p class="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
          I work across frontend and backend, mainly with Vue/Nuxt and Node/NestJS.
          My projects include enterprise workflows, real-time interaction systems,
          and data-heavy platforms used in production.
        </p>

        <div class="mt-7 flex flex-wrap gap-3">
          <UButton size="lg" to="/#projects">View case studies</UButton>
          <UButton size="lg" variant="outline" to="https://github.com/vortizz" target="_blank">GitHub</UButton>
          <UButton size="lg" variant="ghost" to="/#contact">Contact</UButton>
        </div>
      </div>

      <div class="lg:col-span-5">
        <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur
                    dark:border-slate-800 dark:bg-slate-950/60">
          <div class="text-xs text-slate-500 dark:text-slate-400">Signature strengths</div>
          <ul class="mt-4 space-y-3 text-sm">
            <li class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-cyan-500"></span>
              <span><span class="font-medium">Complex UIs + data:</span> maps, dashboards, filters, and heavy state.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-violet-500"></span>
              <span><span class="font-medium">Reliable backend flows:</span> workflows, validation rules, permissions, APIs.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-sky-500"></span>
              <span><span class="font-medium">Real-time + async:</span> WebSockets, queues, background jobs, live events.</span>
            </li>
          </ul>

          <div class="mt-6 grid grid-cols-3 gap-3">
            <div class="rounded-xl border border-slate-200 bg-white p-3 text-center dark:border-slate-800 dark:bg-slate-950">
              <div class="text-lg font-semibold">5+</div>
              <div class="text-xs text-slate-500 dark:text-slate-400">Years</div>
            </div>
            <div class="rounded-xl border border-slate-200 bg-white p-3 text-center dark:border-slate-800 dark:bg-slate-950">
              <div class="text-lg font-semibold">SaaS</div>
              <div class="text-xs text-slate-500 dark:text-slate-400">Products</div>
            </div>
            <div class="rounded-xl border border-slate-200 bg-white p-3 text-center dark:border-slate-800 dark:bg-slate-950">
              <div class="text-lg font-semibold">Real Time</div>
              <div class="text-xs text-slate-500 dark:text-slate-400">Systems</div>
            </div>
          </div>

          <div class="pointer-events-none absolute inset-0 bg-linear-to-tr from-cyan-500/10 via-transparent to-violet-500/10"></div>
        </div>
      </div>
    </div>
  </section>
</template>
