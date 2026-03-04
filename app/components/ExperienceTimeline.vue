<script setup lang="ts">
const timeline = [
  {
    range: "Nov 2024 - Present",
    company: "ClimaSens",
    title: "Frontend Engineer",
    impact:
      "Building the frontend of an enterprise climate risk platform with Mapbox, large datasets, filters, and long-term analytics views.",
  },
  {
    range: "Apr 2024 - Mar 2025",
    company: "VERT Capital",
    title: "Data Engineer",
    impact:
      "Built production data workflows and platform features for financial operations in a business-critical environment.",
  },
  {
    range: "Dec 2023 - Feb 2024",
    company: "MediaMonks",
    title: "Full-Stack Engineer (Contract)",
    impact:
      "Delivered full-stack features for interactive campaigns and real-time systems with fast production timelines.",
  },
  {
    range: "Dec 2021 - Mar 2023",
    company: "MediaMonks",
    title: "Full Stack Engineer",
    impact:
      "Built full-stack applications for live events, interactive experiences, and high-traffic digital platforms.",
  },
  {
    range: "Jul 2020 - Dec 2021",
    company: "Qualicorp",
    title: "Full Stack Engineer",
    impact:
      "Developed core features for a nationwide insurance sales platform with complex workflows, permissions, and validation rules.",
  },
  {
    range: "May 2018 - Jul 2020",
    company: "Hexa Solution",
    title: "Backend Engineer",
    impact:
      "Built backend services, APIs, and business logic for production web systems used in real operations.",
  },
]
</script>

<template>
  <section id="experience" class="mt-20 scroll-mt-24">
    <div class="flex items-end justify-between gap-6">
      <div>
        <h2 class="text-2xl font-semibold tracking-tight">Experience Timeline</h2>
        <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Core technologies used across frontend, backend, and data platforms.
        </p>
      </div>
    </div>

    <ol class="relative mt-8 space-y-5 border-s border-slate-200 dark:border-slate-700">
      <li
        v-for="item in timeline"
        :key="`${item.company}-${item.range}`"
        class="relative pl-10"
      >
        <span
          class="absolute -left-1.75 top-6 h-3 w-3 rounded-full bg-cyan-500 ring-4 ring-white dark:ring-slate-950"
        />

        <article class="rounded-xl border border-slate-200 bg-white/70 p-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/60">
          <p class="inline-flex rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300">
            {{ item.range }}
          </p>

          <h3 class="mt-3 text-base font-semibold text-slate-900 dark:text-slate-100">
            {{ item.company }}
            <span class="text-slate-500 dark:text-slate-400">- {{ item.title }}</span>
          </h3>

          <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {{ item.impact }}
          </p>
        </article>
      </li>
    </ol>
  </section>
</template>
