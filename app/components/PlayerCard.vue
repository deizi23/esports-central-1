<script setup lang="ts">
import Players from '~/pages/players.vue';
import type { Player } from '~/types/player';
const props = defineProps<{
    player: Player
}>()

const {teams} = useTeams()
const team = computed (() => {
    return teams.value.find(team => team.id === props.player.teamId)
})
</script>

<template>
    <div class="player-card">
        <h2>{{ player.nickname }}</h2>
        <p>{{ player.fullName }}</p>
        <p>
            Team:
            {{ team?.name }}
        </p>
    </div>
</template>

<style scoped>
.player-card{
    border: solid 1px #ddd;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 12px;
}
</style>