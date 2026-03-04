<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  src: string
  caption?: string
  type?: "image" | "video"
}>()

const inferredType = computed<"image" | "video">(() => {
  if (props.type) return props.type

  const clean = props.src.split("?")[0].split("#")[0].toLowerCase()
  const ext = clean.split(".").pop() || ""

  const videoExts = new Set(["mp4", "webm", "ogg", "mov", "m4v"])
  return videoExts.has(ext) ? "video" : "image"
})
</script>

<template>
  <figure
    class="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-sm dark:border-slate-800 dark:bg-slate-950/60"
  >
    <video
      v-if="inferredType === 'video'"
      :src="src"
      class="w-full"
      controls
    />
    <img v-else :src="src" class="w-full" />

    <figcaption v-if="caption" class="px-4 py-3 text-xs text-slate-500 dark:text-slate-400">
      {{ caption }}
    </figcaption>
  </figure>
</template>
