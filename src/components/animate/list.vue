<script setup lang="ts">
import type { RendererElement } from 'vue'
import gsap from 'gsap'

const props = withDefaults(
  defineProps<{
    tag?: string
    duration?: number
    delay?: number
  }>(),
  {
    tag: 'ul',
    duration: 1,
    delay: 0.3,
  },
)
function listBeforeEnter(el: RendererElement) {
  gsap.set(el, {
    opacity: 0,
  })
}

function listEnter(el: RendererElement) {
  gsap.to(el, {
    opacity: 1,
    duration: props.duration,
    delay: el.dataset.index * props.delay,
  })
}
</script>

<template>
  <TransitionGroup :tag="tag" class="relative" name="list" appear @before-enter="listBeforeEnter" @enter="listEnter">
    <slot />
  </TransitionGroup>
</template>

<style scoped></style>
