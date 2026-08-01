<script setup lang="ts">
import type {Team} from '~/types/team'
import { inject } from 'vue'
import { TeamDisplaySettingsKey } from '~/injectionKeys'
const settings = inject(TeamDisplaySettingsKey)
const props = defineProps<{
 team: Team
}>()
const { teams } = useTeams()
const { matches } = useMatches()
const lastMatch = computed(() => {
  const today = new Date()
    const teamMatches = matches.value.filter(match =>
    (match.teamAId === props.team.id ||
     match.teamBId === props.team.id) &&
    new Date(match.date) <= today
    )
    const sortedMatches = [...teamMatches].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  return sortedMatches[0]
})
const opponent = computed(() => {
  if (!lastMatch.value) return undefined

  const opponentId =
    lastMatch.value.teamAId === props.team.id
      ? lastMatch.value.teamBId
      : lastMatch.value.teamAId

  return teams.value.find(team => team.id === opponentId)
})
</script>

<template>
    <div class="team-header">
    <img
        :src="team.logo"
        :alt="team.name"
        class="team-logo"
    />

    <div>
        <h3>{{ team.name }}</h3>
        <p>{{ team.region }}</p>
    </div>

    <FavoriteButton :team-id="team.id" />
    </div>
</template>


    <style scoped>
      .team-header {
    display: flex;
    align-items: center;
    gap: 16px;
}

.team-logo {
    width: 52px;
    height: 52px;
    object-fit: contain;
    flex-shrink: 0;
}
    </style>
