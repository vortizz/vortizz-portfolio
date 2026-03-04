import {
  siDatabricks,
  siDocker,
  siExpress,
  siFirebase,
  siGit,
  siMapbox,
  siMongodb,
  siNestjs,
  siNeo4j,
  siNodedotjs,
  siNuxt,
  siPostgresql,
  siPython,
  siRabbitmq,
  siReact,
  siTailwindcss,
  siTypescript,
  siVuedotjs,
  siApachespark,
} from "simple-icons"

export type SkillIcon =
  | { type: "simple"; path: string }
  | { type: "lucide"; name: string }

const simple = (path: string): SkillIcon => ({ type: "simple", path })
const lucide = (name: string): SkillIcon => ({ type: "lucide", name })

export const skillIcons = {
  vue: simple(siVuedotjs.path),
  nuxt: simple(siNuxt.path),
  react: simple(siReact.path),
  typescript: simple(siTypescript.path),
  tailwind: simple(siTailwindcss.path),
  mapbox: simple(siMapbox.path),

  node: simple(siNodedotjs.path),
  nest: simple(siNestjs.path),
  express: simple(siExpress.path),
  restApi: lucide("i-lucide-arrow-left-right"),
  websocket: lucide("i-lucide-radio"),

  python: simple(siPython.path),
  pyspark: simple(siApachespark.path),
  sql: lucide("i-lucide-database"),
  databricks: simple(siDatabricks.path),

  mongodb: simple(siMongodb.path),
  postgres: simple(siPostgresql.path),
  neo4j: simple(siNeo4j.path),

  aws: lucide("i-lucide-cloud"),
  firebase: simple(siFirebase.path),
  s3: lucide("i-lucide-hard-drive"),
  rabbitmq: simple(siRabbitmq.path),

  git: simple(siGit.path),
  docker: simple(siDocker.path),
  cicd: lucide("i-lucide-workflow"),
} as const
