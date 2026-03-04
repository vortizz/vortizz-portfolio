<script setup lang="ts">
type MediaItem = {
  type: "image" | "video"
  src: string
  alt?: string
  poster?: string
  caption?: string
  thumb?: string
}

const props = defineProps<{
  items: MediaItem[] | string
  caption?: string
  aspectClass?: string
}>()

const aspectClass = computed(() => props.aspectClass ?? "aspect-video")

const mediaItems = computed<MediaItem[]>(() => {
  if (Array.isArray(props.items)) return props.items
  if (typeof props.items !== "string") return []
  try {
    const parsed = JSON.parse(props.items)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
})

const index = ref(0)
const direction = ref<"next" | "prev">("next")
const activeItem = computed(() => mediaItems.value[index.value])
const carouselRootRef = ref<HTMLElement | null>(null)
const thumbsRef = ref<HTMLElement | null>(null)
const suppressThumbClick = ref(false)
const isFullscreen = ref(false)
const fullscreenSupported = ref(false)
const pseudoFullscreen = ref(false)

const thumbDrag = reactive({
  active: false,
  moved: false,
  startX: 0,
  startScrollLeft: 0,
})

const swipe = reactive({
  active: false,
  startX: 0,
  startY: 0,
  deltaX: 0,
  deltaY: 0,
})

function clamp(i: number) {
  const n = mediaItems.value.length
  if (!n) return 0
  return Math.max(0, Math.min(n - 1, i))
}

function go(i: number) {
  const next = clamp(i)
  direction.value = next >= index.value ? "next" : "prev"
  index.value = next
}

function prev() {
  go(index.value - 1)
}
function next() {
  go(index.value + 1)
}

function onKeydown(e: KeyboardEvent) {
  if (!mediaItems.value.length) return
  if (e.key === "ArrowLeft") prev()
  if (e.key === "ArrowRight") next()
}

const videoRef = ref<HTMLVideoElement | null>(null)

watch(index, () => {
  if (videoRef.value) {
    videoRef.value.pause()
    videoRef.value.currentTime = 0
  }

  nextTick(() => {
    const container = thumbsRef.value
    const activeThumb = container?.querySelector<HTMLButtonElement>(
      `button[data-thumb-index="${index.value}"]`,
    )
    activeThumb?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    })
  })
})

onMounted(() => window.addEventListener("keydown", onKeydown))
onMounted(() => {
  const root = carouselRootRef.value as (HTMLElement & { webkitRequestFullscreen?: () => Promise<void> | void }) | null
  fullscreenSupported.value = !!root
  document.addEventListener("fullscreenchange", syncFullscreenState)
  document.addEventListener("webkitfullscreenchange", syncFullscreenState as EventListener)
})
onBeforeUnmount(() => window.removeEventListener("keydown", onKeydown))
onBeforeUnmount(() => {
  document.removeEventListener("fullscreenchange", syncFullscreenState)
  document.removeEventListener("webkitfullscreenchange", syncFullscreenState as EventListener)
  document.body.classList.remove("overflow-hidden")
})

function thumbSrc(m: MediaItem) {
  if (m.thumb) return m.thumb
  if (m.type === "video" && m.poster) return m.poster
  return m.src
}

function syncFullscreenState() {
  isFullscreen.value = pseudoFullscreen.value || document.fullscreenElement === carouselRootRef.value
}

async function toggleFullscreen() {
  const root = carouselRootRef.value as (HTMLElement & {
    requestFullscreen?: () => Promise<void>
    webkitRequestFullscreen?: () => Promise<void> | void
  }) | null
  if (!root) return

  if (pseudoFullscreen.value) {
    pseudoFullscreen.value = false
    document.body.classList.remove("overflow-hidden")
    syncFullscreenState()
    return
  }

  if (document.fullscreenElement === root) {
    await document.exitFullscreen()
    return
  }

  if (document.fullscreenElement) {
    await document.exitFullscreen()
  }

  if (root.requestFullscreen) {
    await root.requestFullscreen()
    return
  }

  if (root.webkitRequestFullscreen) {
    await root.webkitRequestFullscreen()
    return
  }

  pseudoFullscreen.value = true
  document.body.classList.add("overflow-hidden")
  syncFullscreenState()
}

function onThumbPointerDown(e: PointerEvent) {
  if (!thumbsRef.value || (e.pointerType === "mouse" && e.button !== 0)) return

  thumbDrag.active = true
  thumbDrag.moved = false
  thumbDrag.startX = e.clientX
  thumbDrag.startScrollLeft = thumbsRef.value.scrollLeft
  thumbsRef.value.setPointerCapture(e.pointerId)
}

function onThumbPointerMove(e: PointerEvent) {
  if (!thumbsRef.value || !thumbDrag.active) return

  const deltaX = e.clientX - thumbDrag.startX
  if (Math.abs(deltaX) > 4) {
    thumbDrag.moved = true
  }

  thumbsRef.value.scrollLeft = thumbDrag.startScrollLeft - deltaX
}

function onThumbPointerEnd(e: PointerEvent) {
  if (!thumbsRef.value || !thumbDrag.active) return
  const didMove = thumbDrag.moved

  if (thumbsRef.value.hasPointerCapture(e.pointerId)) {
    thumbsRef.value.releasePointerCapture(e.pointerId)
  }

  suppressThumbClick.value = didMove
  thumbDrag.active = false

  if (!didMove) {
    const el = document
      .elementFromPoint(e.clientX, e.clientY)
      ?.closest<HTMLButtonElement>("button[data-thumb-index]")

    if (el && thumbsRef.value.contains(el)) {
      const thumbIndex = Number(el.dataset.thumbIndex)
      if (!Number.isNaN(thumbIndex)) {
        go(thumbIndex)
      }
    }
  }

  if (suppressThumbClick.value) {
    setTimeout(() => {
      suppressThumbClick.value = false
    }, 0)
  }
}

function onThumbClick(e: MouseEvent, i: number) {
  if (suppressThumbClick.value) {
    e.preventDefault()
    return
  }
  go(i)
}

function onSwipeStart(e: TouchEvent) {
  if (mediaItems.value.length < 2 || e.touches.length !== 1) return
  const t = e.touches[0]
  if (!t) return
  swipe.active = true
  swipe.startX = t.clientX
  swipe.startY = t.clientY
  swipe.deltaX = 0
  swipe.deltaY = 0
}

function onSwipeMove(e: TouchEvent) {
  if (!swipe.active || e.touches.length !== 1) return
  const t = e.touches[0]
  if (!t) return
  swipe.deltaX = t.clientX - swipe.startX
  swipe.deltaY = t.clientY - swipe.startY
}

function onSwipeEnd() {
  if (!swipe.active) return

  const absX = Math.abs(swipe.deltaX)
  const absY = Math.abs(swipe.deltaY)
  const passedDistance = absX > 48
  const mostlyHorizontal = absX > absY * 1.2

  if (passedDistance && mostlyHorizontal) {
    if (swipe.deltaX < 0) next()
    else prev()
  }

  swipe.active = false
  swipe.deltaX = 0
  swipe.deltaY = 0
}

function onSwipeCancel() {
  swipe.active = false
  swipe.deltaX = 0
  swipe.deltaY = 0
}
</script>

<template>
  <figure v-if="mediaItems.length" class="my-10">
    <div
      ref="carouselRootRef"
      class="rounded-xl border border-slate-200 bg-white/60 backdrop-blur
             dark:border-slate-800 dark:bg-slate-950/60"
    >
      <div class="flex items-center justify-between gap-3 px-4 pt-4">
        <div class="min-w-0">
          <div class="text-xs font-medium text-slate-500 dark:text-slate-400">
            Gallery
          </div>
          <div class="mt-1 truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
            {{ index + 1 }} / {{ mediaItems.length }}
            <span v-if="activeItem?.caption" class="font-normal text-slate-500 dark:text-slate-400">
              — {{ activeItem.caption }}
            </span>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button
            v-if="fullscreenSupported"
            type="button"
            class="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 p-2 text-slate-700 shadow-sm backdrop-blur
                   hover:bg-white dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200 dark:hover:bg-slate-950"
            @click="toggleFullscreen"
            :aria-label="isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'"
          >
            <UIcon
              :name="isFullscreen ? 'i-heroicons-arrows-pointing-in-20-solid' : 'i-heroicons-arrows-pointing-out-20-solid'"
              class="h-5 w-5"
            />
          </button>

          <button
            type="button"
            class="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 p-2 text-slate-700 shadow-sm backdrop-blur
                   hover:bg-white dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200 dark:hover:bg-slate-950"
            @click="prev"
            :disabled="index === 0"
            aria-label="Previous"
          >
            <UIcon name="i-heroicons-chevron-left-20-solid" class="h-5 w-5" />
          </button>

          <button
            type="button"
            class="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 p-2 text-slate-700 shadow-sm backdrop-blur
                   hover:bg-white dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200 dark:hover:bg-slate-950"
            @click="next"
            :disabled="index === mediaItems.length - 1"
            aria-label="Next"
          >
            <UIcon name="i-heroicons-chevron-right-20-solid" class="h-5 w-5" />
          </button>
        </div>
      </div>

      <div class="px-4 pb-4 pt-4">
        <div
          class="relative overflow-hidden rounded-2xl border border-slate-200 bg-black/10 dark:border-slate-800 dark:bg-black/30"
          :class="isFullscreen ? 'h-[calc(100dvh-12rem)]' : aspectClass"
          @touchstart.passive="onSwipeStart"
          @touchmove.passive="onSwipeMove"
          @touchend="onSwipeEnd"
          @touchcancel="onSwipeCancel"
        >
          <div class="pointer-events-none absolute inset-0 bg-linear-to-tr from-cyan-500/10 via-transparent to-violet-500/10" />

          <Transition
            :name="direction === 'next' ? 'fade-next' : 'fade-prev'"
            mode="out-in"
          >
            <div :key="activeItem?.src" class="relative h-full w-full">
              <img
                v-if="activeItem?.type === 'image'"
                :src="activeItem.src"
                :alt="activeItem.alt || ''"
                class="h-full w-full object-cover"
                loading="lazy"
              />

              <video
                v-else
                ref="videoRef"
                class="h-full w-full object-cover"
                controls
                autoplay
                loop
              >
                <source :src="activeItem?.src" type="video/mp4" />
              </video>

              <div
                v-if="activeItem?.type === 'video'"
                class="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white backdrop-blur"
              >
                <UIcon name="i-heroicons-play-20-solid" class="h-4 w-4" />
                Video
              </div>
            </div>
          </Transition>
        </div>

        <div class="mt-4">
          <div class="flex items-center justify-between">
            <div class="text-xs text-slate-500 dark:text-slate-400">
              Jump to
            </div>
            <div class="text-xs text-slate-500 dark:text-slate-400">
              Tip: use ← →
            </div>
          </div>

          <div
            ref="thumbsRef"
            class="mt-2 flex select-none gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style="touch-action: pan-x; -webkit-overflow-scrolling: touch;"
            :class="thumbDrag.active ? 'cursor-grabbing' : 'cursor-grab'"
            @pointerdown="onThumbPointerDown"
            @pointermove="onThumbPointerMove"
            @pointerup="onThumbPointerEnd"
            @pointercancel="onThumbPointerEnd"
          >
            <button
              v-for="(m, i) in mediaItems"
              :key="m.src + i"
              type="button"
              class="group relative shrink-0 overflow-hidden rounded-xl transition cursor-pointer"
              :data-thumb-index="i"
              @click="onThumbClick($event, i)"
              :aria-label="`Go to slide ${i + 1}`"
              style="width: 96px;"
            >
              <div class="relative aspect-16/10">
                <img
                  :src="thumbSrc(m)"
                  :alt="m.alt || ''"
                  class="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                  draggable="false"
                  :style="i === index ? 'opacity: 0.4': ''"
                />
                <div
                  v-if="m.type === 'video'"
                  class="absolute inset-0 flex items-center justify-center"
                >
                  <div class="rounded-full bg-black/45 p-2 text-white backdrop-blur">
                    <UIcon name="i-heroicons-play-20-solid" class="h-4 w-4" />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="pseudoFullscreen"
      class="fixed inset-0 z-80 bg-slate-950/90 p-3 sm:p-6"
      @click.self="toggleFullscreen"
    >
      <div class="mx-auto flex h-full w-full max-w-6xl flex-col">
        <div class="mb-3 flex items-center justify-between gap-3">
          <div class="min-w-0 text-sm font-medium text-white/90">
            {{ index + 1 }} / {{ mediaItems.length }}
            <span v-if="activeItem?.caption" class="ml-1 text-white/60">
              — {{ activeItem.caption }}
            </span>
          </div>

          <div class="flex items-center gap-2">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/40 p-2 text-white backdrop-blur disabled:opacity-40"
              aria-label="Previous"
              :disabled="index === 0"
              @click="prev"
            >
              <UIcon name="i-heroicons-chevron-left-20-solid" class="h-5 w-5" />
            </button>

            <button
              type="button"
              class="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/40 p-2 text-white backdrop-blur disabled:opacity-40"
              aria-label="Next"
              :disabled="index === mediaItems.length - 1"
              @click="next"
            >
              <UIcon name="i-heroicons-chevron-right-20-solid" class="h-5 w-5" />
            </button>

          <button
            type="button"
            class="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/40 p-2 text-white backdrop-blur"
            aria-label="Exit fullscreen"
            @click="toggleFullscreen"
          >
            <UIcon name="i-heroicons-x-mark-20-solid" class="h-5 w-5" />
          </button>
          </div>
        </div>

        <div
          class="relative min-h-0 flex-1 overflow-hidden rounded-xl border border-white/10 bg-black"
          @touchstart.passive="onSwipeStart"
          @touchmove.passive="onSwipeMove"
          @touchend="onSwipeEnd"
          @touchcancel="onSwipeCancel"
        >
          <img
            v-if="activeItem?.type === 'image'"
            :src="activeItem.src"
            :alt="activeItem.alt || ''"
            class="h-full w-full object-contain"
          />

          <video
            v-else
            ref="videoRef"
            class="h-full w-full object-contain"
            controls
            autoplay
            loop
          >
            <source :src="activeItem?.src" type="video/mp4" />
          </video>
        </div>

        <div class="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <button
            v-for="(m, i) in mediaItems"
            :key="`full-${m.src}-${i}`"
            type="button"
            class="relative shrink-0 overflow-hidden rounded-lg border transition"
            :class="i === index ? 'border-white/70' : 'border-white/20 opacity-80'"
            style="width: 78px;"
            :aria-label="`Go to slide ${i + 1}`"
            @click="go(i)"
          >
            <div class="relative aspect-16/10">
              <img :src="thumbSrc(m)" :alt="m.alt || ''" class="h-full w-full object-cover" />
              <div
                v-if="m.type === 'video'"
                class="absolute inset-0 flex items-center justify-center"
              >
                <div class="rounded-full bg-black/45 p-1.5 text-white">
                  <UIcon name="i-heroicons-play-20-solid" class="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>

    <figcaption v-if="caption" class="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
      {{ caption }}
    </figcaption>
  </figure>

  <div v-else class="my-10 rounded-2xl border border-slate-200 bg-white/60 p-5 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-300">
    MediaCarousel: no items found.
  </div>
</template>

<style scoped>
.fade-next-enter-active,
.fade-next-leave-active,
.fade-prev-enter-active,
.fade-prev-leave-active {
  transition: opacity 220ms ease, transform 220ms ease;
}

.fade-next-enter-from {
  opacity: 0;
  transform: translateX(10px);
}
.fade-next-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

.fade-prev-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}
.fade-prev-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
