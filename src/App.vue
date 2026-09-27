<script setup lang="ts">
  import { ref } from 'vue';

  import { useNotes } from './composables/useNotes.js';

  import SearchBar from './components/SearchBar.vue';
  import NoteForm from './components/NoteForm.vue';
  import NoteCard from './components/NoteCard.vue';

  const {  addNote, deleteNote, filteredNotes } = useNotes();
  const searchTerm = ref('');
  const displayedNotes = filteredNotes(searchTerm);
</script>

<template>
  <main>
    <NoteForm @add="addNote" />

    <SearchBar v-model="searchTerm" />

    <NoteCard 
      v-for="note in displayedNotes" 
      :key="note.id" 
      :note="note" 
      @delete="deleteNote"
    />
  </main>
</template>
