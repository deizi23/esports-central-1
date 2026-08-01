<script setup lang="ts">
const props = defineProps<{
  teamId:number
}>()
const { toggleFavorite, isFavorite } = useFavorites()
</script>

<template>
  <button @click="toggleFavorite(teamId)">
    {{ isFavorite(teamId) ? '⭐' : '☆' }}
  </button>
</template>

<style scoped>
button {
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 22px;
}
</style>