<script setup lang="ts">
import { computed } from 'vue'
import { motion } from 'motion-v'

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

const MotionTag = computed(() => {
  const motionRecord = motion as unknown as Record<string, unknown>
  return (motionRecord[props.tag] ?? motion.div) as unknown
})
</script>

<template>
  <component
    :is="MotionTag"
    :initial="{ opacity: 0, y: 100 }"
    :whileInView="{ opacity: 1, y: 0, scale: 1 }"
    :inViewOptions="{ once: true, amount: 0.2 }"
    :transition="{ delay: props.delay / 1000, duration: props.duration / 1000 }"
  >
    <slot />
  </component>
</template>
