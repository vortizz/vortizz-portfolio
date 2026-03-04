// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/content'],
  colorMode: {
    preference: 'system',
    fallback: 'dark',
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: "Victor Ortiz - Full-Stack Engineer",
      meta: [
        { name: "description", content: "Portfolio of Victor Ortiz - Full-stack engineer building data-driven platforms and real-time systems." },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },
})
