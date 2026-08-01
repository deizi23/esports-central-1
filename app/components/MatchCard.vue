<script setup lang="ts">
import  { computed } from 'vue'
import type { Match } from '~/types/match'
const props = defineProps<{
    match: Match
}>()

const {teams} = useTeams()
const {tournaments} = useTournaments()
const teamA = computed(() =>
 teams.value.find(team => team.id === props.match.teamAId)
)
const teamB = computed(() =>
 teams.value.find(team => team.id === props.match.teamBId)
)
const tournament = computed(() =>
    tournaments.value.find(
        tournament => tournament.id === props.match.tournamentId
    )
)

</script>

<template>
    <div class="match-card">
        <h2>{{  teamA?.name }} vs {{ teamB?.name }}</h2>
        <p>Tournament:
            {{ tournament?.name }}
        </p>
        <p>
            Date:
            {{ match.date }}
        </p>
    </div>
</template>

<style scoped>
.match-card{
    border:solid 1px #ddd;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 12px;
}</style>