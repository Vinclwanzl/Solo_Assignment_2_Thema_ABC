import { computed } from 'vue'
import { useLocalStorage } from './useLocalStorage.js'
 
export function useNotes() {
  const notes = useLocalStorage('quicknotes', [])

  function addNote(note) {
    notes.value.push({ ...note, id: getNextId() })
  }

  function deleteNote(id) {
    notes.value = notes.value.filter((note) => note.id !== id)  
  }
 
  function filteredNotes(term) {

    return computed(() => {
      const searchTerm = term.value.toLowerCase().trim()

      if (!searchTerm) { 
        return notes.value
      }

      return notes.value.filter((note) => {
        return (
          note.title.toLowerCase().includes(searchTerm) ||
          note.content.toLowerCase().includes(searchTerm) ||
          note.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
        )
      })  
    })
  }
  function getNextId() {
    let id = 0;
    while (notes.value.some((note) => note.id === id)) {
      id++
    }
    return id;
  }
 
  return { addNote, deleteNote, filteredNotes }
}
