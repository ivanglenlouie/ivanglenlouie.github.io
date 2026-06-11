<template>
  <div class="relative">
    <div class="flex justify-between text-sm mb-1">
      <span class="text-black/80">{{ label }}</span>
      <span class="text-black/50">{{ percent }}%</span>
    </div>
    <div class="h-2 bg-black/10 rounded-full overflow-hidden">
      <div
        class="h-full bg-brand rounded-full transition-all duration-700"
        :style="{ width: `${percent}%` }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  percent: number
}>()
</script>
