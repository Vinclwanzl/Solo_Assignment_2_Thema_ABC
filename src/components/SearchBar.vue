<script setup lang="ts">
  defineProps<{
      modelValue: string
  }>()

  const emit = defineEmits<{
      'update:modelValue': [value: string]
  }>()

  function handleInput(event: Event) {
      const input = event.target as HTMLInputElement
      emit('update:modelValue', input.value)
  }

</script>
 
<template>
  <input
    :value="modelValue"
    @input="handleInput"
    placeholder="Search ..."
  >
</template>
