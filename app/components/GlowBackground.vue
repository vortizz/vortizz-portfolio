<template>
  <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10">
    <div class="absolute -top-32 left-1/2 h-130 w-130 -translate-x-1/2 rounded-full blur-3xl opacity-30 dark:opacity-25
                bg-linear-to-tr from-cyan-300 via-violet-300 to-sky-300"></div>

    <div class="absolute -bottom-40 -right-30 h-130 w-130 rounded-full blur-3xl opacity-25 dark:opacity-20
                bg-linear-to-tr from-indigo-300 via-fuchsia-300 to-cyan-200"></div>

    <div class="absolute inset-0 opacity-[0.06] dark:opacity-[0.08]"
         style="background-image: linear-gradient(to right, rgba(15,23,42,.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.18) 1px, transparent 1px); background-size: 64px 64px;">
    </div>

    <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
         style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22 opacity=%220.4%22/%3E%3C/svg%3E');">
    </div>
  </div>
</template>
