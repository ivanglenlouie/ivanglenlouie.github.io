<template>
  <a
    :href="project.url"
    target="_blank"
    rel="noopener"
    class="card-glow block p-4 rounded-lg bg-black/5"
  >
    <h3 class="text-sm font-semibold">{{ project.title }}</h3>
    <p class="text-black/60 text-xs mt-1">{{ project.description }}</p>
  </a>
</template>

<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  project: Project
}>()
</script>
