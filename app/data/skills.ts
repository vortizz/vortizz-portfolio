import { skillIcons, type SkillIcon } from "~/utils/skill-icons"

export type SkillItem = {
  key: string
  label: string
  icon: SkillIcon
}

export type SkillCategory = {
  title: string
  items: SkillItem[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      { key: "vue", label: "Vue.js", icon: skillIcons.vue },
      { key: "nuxt", label: "Nuxt", icon: skillIcons.nuxt },
      { key: "tailwind", label: "Tailwind CSS", icon: skillIcons.tailwind },
      { key: "mapbox", label: "Mapbox GL JS", icon: skillIcons.mapbox },
      { key: "react", label: "React", icon: skillIcons.react },
      { key: "typescript", label: "TypeScript", icon: skillIcons.typescript },
    ],
  },
  {
    title: "Backend",
    items: [
      { key: "node", label: "Node.js", icon: skillIcons.node },
      { key: "nest", label: "NestJS", icon: skillIcons.nest },
      { key: "express", label: "Express.js", icon: skillIcons.express },
      { key: "rabbitmq", label: "RabbitMQ", icon: skillIcons.rabbitmq },
      { key: "websockets", label: "WebSockets", icon: skillIcons.websocket },
    ],
  },
  {
    title: "Data & Cloud",
    items: [
      { key: "sql", label: "SQL", icon: skillIcons.sql },
      { key: "mongodb", label: "MongoDB", icon: skillIcons.mongodb },
      { key: "neo4j", label: "Neo4j", icon: skillIcons.neo4j },
      { key: "firebase", label: "Firebase", icon: skillIcons.firebase },
      { key: "databricks", label: "Databricks", icon: skillIcons.databricks },
      { key: "pyspark", label: "PySpark", icon: skillIcons.pyspark },
    ],
  }
]
