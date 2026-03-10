<script setup lang="ts">
type RelatedProject = {
  title: string
  path: string
}

type TimelineItem = {
  range: string
  company: string
  companyUrl?: string
  title: string
  impact: string
  stack: string[]
  relatedProjects?: RelatedProject[]
}

const timeline: TimelineItem[] = [
  {
    range: "Nov 2024 - Present",
    company: "ClimaSens",
    companyUrl: "https://www.climasens.com/",
    title: "Frontend Engineer",
    impact:
      "Leading frontend delivery for an enterprise climate-risk platform, shipping map-heavy product features across hazard layers, analytics views, and long-horizon scenario exploration.",
    stack: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Mapbox GL JS", "Firebase", "Carbon Vue", "JavaScript/TypeScript"],
    relatedProjects: [
      {
        title: "Climate Risk Map Platform",
        path: "/projects/climate-risk-map",
      },
    ],
  },
  {
    range: "Apr 2024 - Mar 2025",
    company: "VERT Capital",
    companyUrl: "https://www.vert-capital.com/en",
    title: "Data Engineer",
    impact:
      "Built production data workflows and internal platform features that supported business-critical financial operations, with a focus on reliability, structured data handling, and operational reporting.",
    stack: ["Databricks", "Python", "PySpark", "React.js", "Remix", "Tailwind CSS", "TypeScript", "SQL", "AWS"],
  },
  {
    range: "Dec 2023 - Feb 2024",
    company: "MediaMonks",
    companyUrl: "https://www.monks.com/",
    title: "Full-Stack Engineer (Contract)",
    impact:
      "Delivered campaign-focused application work across frontend and backend, connecting polished user flows to APIs and async systems under tight production timelines.",
    stack: ["React.js", "Redux", "Material UI", "Tailwind CSS", "JavaScript/TypeScript"],
    relatedProjects: [
      {
        title: "BK Million Dollar Whopper Platform",
        path: "/projects/bk-million-dollar-whopper",
      },
    ],
  },
  {
    range: "Dec 2021 - Mar 2023",
    company: "MediaMonks",
    companyUrl: "https://www.monks.com/",
    title: "Full Stack Engineer",
    impact:
      "Built full-stack systems for live events and branded digital products, spanning real-time event tooling, internal platforms, APIs, CMS workflows, and participant-facing experiences.",
    stack: [
      "Node.js",
      "NestJS",
      "Vue.js",
      "MongoDB",
      "Quasar Framework",
      "TypeScript",
      "AWS S3",
      "SendGrid",
      "RabbitMQ",
      "WebSocket",
    ],
    relatedProjects: [
      {
        title: "Bet.Monks World Cup Predictions",
        path: "/projects/bet-monks-world-cup-predictions",
      },
      {
        title: "Cooltopia - Cool Cats NFT",
        path: "/projects/cool-cats-event",
      },
      {
        title: "TwitchCon - The Emotifier",
        path: "/projects/twitchcon-photo-system",
      },
      {
        title: "Valorant Live Interaction System",
        path: "/projects/valorant-live-robot",
      },
    ],
  },
  {
    range: "Jul 2020 - Dec 2021",
    company: "Qualicorp",
    companyUrl: "https://www.qualicorp.com.br/",
    title: "Full Stack Engineer",
    impact:
      "Developed core platform features for a nationwide insurance sales operation, handling multi-step workflows, business rules, permissions, and validation-heavy user journeys.",
    stack: ["Node.js", "Express.js", "Vue.js", "Neo4j", "BootstrapVue", "Vuetify", "AWS S3", "JavaScript/TypeScript"],
    relatedProjects: [
      {
        title: "QualiVendas Insurance Sales Platform",
        path: "/projects/qualivendas-platform",
      },
    ],
  },
  {
    range: "May 2018 - Jul 2020",
    company: "Hexa Solution",
    companyUrl: "http://www.hexasolution.com.br/",
    title: "Backend Engineer",
    impact:
      "Built backend services, APIs, and business logic for production systems, establishing the engineering base that later expanded into full-stack and product-facing work.",
    stack: ["Visual Basic (VB)", "C#", "ASP.NET", "SQL Server", "Vue.js", "JavaScript"],
  },
]
</script>

<template>
  <section id="experience" class="mt-20 scroll-mt-24">
    <div class="flex items-end justify-between gap-6">
      <div>
        <h2 class="text-2xl font-semibold tracking-tight">Experience Timeline</h2>
        <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Roles across frontend, backend, and data work, tied to the case studies that show the work in more detail.
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

          <h3 class="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-base font-semibold text-slate-900 dark:text-slate-100">
            <a
              v-if="item.companyUrl"
              :href="item.companyUrl"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-1 rounded-sm text-cyan-700 transition hover:text-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:text-cyan-300 dark:hover:text-cyan-200"
            >
              {{ item.company }}
              <span aria-hidden="true" class="text-[11px]">↗</span>
            </a>
            <span v-else>{{ item.company }}</span>
            <span class="text-slate-500 dark:text-slate-400">- {{ item.title }}</span>
          </h3>

          <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {{ item.impact }}
          </p>

          <div class="mt-4 flex flex-wrap gap-2">
            <UBadge
              v-for="tech in item.stack"
              :key="tech"
              variant="soft"
              color="neutral"
            >
              {{ tech }}
            </UBadge>
          </div>

          <div v-if="item.relatedProjects?.length" class="mt-4 border-t border-slate-200 pt-4 dark:border-slate-800">
            <p class="text-xs font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Related case studies
            </p>

            <div class="mt-3 flex flex-wrap gap-2">
              <NuxtLink
                v-for="project in item.relatedProjects"
                :key="project.path"
                :to="project.path"
                class="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-xs font-medium text-cyan-700 transition hover:border-cyan-300 hover:bg-cyan-100 dark:border-cyan-900/70 dark:bg-cyan-950/40 dark:text-cyan-200 dark:hover:bg-cyan-950/70"
              >
                {{ project.title }}
              </NuxtLink>
            </div>
          </div>
        </article>
      </li>
    </ol>
  </section>
</template>
