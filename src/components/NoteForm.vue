<script setup lang="ts">
    import { ref } from 'vue'
    import type { Note } from '../types/note'

    const title = ref('')
    const content = ref('')
    const tags = ref('')

    const emit = defineEmits<{
        add: [note: Omit<Note, 'id'>]
    }>()

    function submitForm() {
        const newNote = {
            title: title.value,
            content: content.value,
            tags: tags.value
                .split(',')
                .map(tag => tag.trim())
        }

        emit('add', newNote)

        title.value = ''
        content.value = ''  
        tags.value = ''
    }
</script>
<template>
    <div>
        <h2>Add a new note</h2>
        <form @submit.prevent="submitForm">
            <input 
                v-model="title"
                placeholder="title"
            >

            <textarea 
                v-model="content"
                placeholder="content"
            ></textarea>

            <input 
                v-model="tags"
                placeholder="tags, separated with comma"
            >

            <button type="submit">Add Note</button>
        </form>
    </div>
</template>