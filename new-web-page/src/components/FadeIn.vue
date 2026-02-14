<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    delay?: number
    duration?: number
    tag?: string
  }>(),
  {
    delay: 200,
    duration: 1200,
    tag: 'div',
  },
)
</script>

<template>
  <Motion :is="props.tag" :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }" :delay="props.delay" :duration="props.duration">
    <slot />
  </Motion>
</template>
:
