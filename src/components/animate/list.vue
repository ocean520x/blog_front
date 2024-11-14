<script setup lang="ts">
import { RendererElement } from 'vue';
import gsap from 'gsap';

const props = withDefaults(defineProps<
  {
    duration?: number,
    delay?: number
  }>(), {
  duration: 5,
  delay: .2
});
const listBeforeEnter = (el: RendererElement) => {
  gsap.set(el, {
    opacity: 0
  });
};

const listEnter = (el: RendererElement) => {
  gsap.to(el, {
    opacity: 1,
    duration: props.duration,
    delay: el.dataset.index * props.delay
  });
};
</script>

<template>
  <TransitionGroup tag="ul" class="w-[720px] relative" name="list" appear @before-enter="listBeforeEnter"
                   @enter="listEnter">
    <slot />
  </TransitionGroup>
</template>

<style scoped>
.list-leave-active {
  transition: all 0.5s ease;
  @apply absolute w-full;
}

.list-leave-to {
  opacity: 0;
}

.list-move {
  transition: all 1s ease;
}
</style>