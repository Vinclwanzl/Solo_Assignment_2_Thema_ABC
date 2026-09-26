<script setup lang="ts">
    import type { Note } from '../types/note.ts'
    import BaseCard from './BaseCard.vue'

    defineProps<{ note: Note}>()
    const emit = defineEmits<{ delete: [id: number] }>()
    
</script>
<template>
  <BaseCard>
    <template #header>
      <h3>{{ note.title }}</h3>
    </template>

    <p>{{ note.content }}</p>

    <div v-for="tag in note.tags" :key="tag" class="tag">#{{ tag }}</div>
    
    <button @click="emit('delete', note.id)">Delete</button>
  </BaseCard>

  </template>