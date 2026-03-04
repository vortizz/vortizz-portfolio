<template>
  <section id="about" class="mt-24">
    <div class="grid gap-10 lg:grid-cols-12 lg:items-center">
      <div class="lg:col-span-7">
        <h2 class="text-3xl font-semibold tracking-tight">
          About Me
        </h2>

        <p class="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
          I'm a Full-Stack Engineer focused on building production systems 
          that handle complex logic, real-time interactions, and data-heavy workflows. 
          My experience includes enterprise SaaS platforms, geospatial visualization 
          tools, and live interaction systems used in real-world environments.
        </p>

        <p class="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
          I specialize in designing scalable backend architectures and modular 
          frontend systems that remain reliable as products grow in complexity. 
          I enjoy working on systems where performance, data flow, and 
          long-term maintainability truly matter.
        </p>

        <div class="mt-8 grid gap-4 sm:grid-cols-2">
          <div
            class="rounded-2xl border border-slate-200 bg-white/60 p-5 backdrop-blur
                   dark:border-slate-800 dark:bg-slate-950/50"
          >
            <div class="text-sm font-semibold">What I focus on</div>
            <ul class="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>• Scalable frontend architecture</li>
              <li>• Reliable backend workflows</li>
              <li>• Performance & system design</li>
            </ul>
          </div>

          <div
            class="rounded-2xl border border-slate-200 bg-white/60 p-5 backdrop-blur
                   dark:border-slate-800 dark:bg-slate-950/50"
          >
            <div class="text-sm font-semibold">What I enjoy building</div>
            <ul class="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>• Geospatial & visualization systems</li>
              <li>• Real-time applications</li>
              <li>• Enterprise SaaS platforms</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="lg:col-span-5">
        <div
          class="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur
                 dark:border-slate-800 dark:bg-slate-950/60"
        >
          <div class="text-xs text-slate-500 dark:text-slate-400">
            Quick Overview
          </div>

          <div class="mt-5 space-y-4 text-sm">
            <div>
              <div class="font-semibold">Experience</div>
              <div class="text-slate-600 dark:text-slate-300">
                Delivering production-grade platforms across enterprise and live systems
              </div>
            </div>

            <div>
              <div class="font-semibold">Core Strength</div>
              <div class="text-slate-600 dark:text-slate-300">
                Building scalable backend workflows and data-driven applications
              </div>
            </div>

            <div>
              <div class="font-semibold">Primary Focus</div>
              <div class="text-slate-600 dark:text-slate-300">
                End-to-end system design: APIs, real-time communication and UI
              </div>
            </div>
          </div>

          <div class="mt-6">
            <UButton to="#projects" block>
              Explore my work
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
