<script setup lang="ts">
import { RendererElement } from 'vue';
import gsap from 'gsap';

const props = withDefaults(
  defineProps<{
    tag?: string;
    duration?: number;
    delay?: number;
  }>(),
  {
    tag: 'ul',
    duration: 2,
    delay: 0.5,
  },
);
const listBeforeEnter = (el: RendererElement) => {
  gsap.set(el, {
    opacity: 0,
  });
};

const listEnter = (el: RendererElement) => {
  gsap.to(el, {
    opacity: 1,
    duration: props.duration,
    delay: el.dataset.index * props.delay,
  });
};
</script>

<template>
  <TransitionGroup :tag="tag" class="relative" name="list" appear @before-enter="listBeforeEnter" @enter="listEnter">
    <slot />
  </TransitionGroup>
</template>

<style scoped></style>
