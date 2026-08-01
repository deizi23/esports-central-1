<script setup lang="ts">
const { teams } = useTeams()
const { players } = usePlayers()
const { matches } = useMatches()
const { tournaments } = useTournaments()
</script>

<template>
  <div class="stats-grid">

    <DashboardStatCard
      title="Teams"
      :value="teams.length"
      icon="heroicons:user-group"
    />

    <DashboardStatCard
      title="Players"
      :value="players.length"
      icon="heroicons:user"
    />

    <DashboardStatCard
      title="Matches"
      :value="matches.length"
      icon="heroicons:bolt"
    />

    <DashboardStatCard
      title="Tournaments"
      :value="tournaments.length"
      icon="heroicons:trophy"
    />

  </div>
</template>

<style scoped>
.stats-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:22px;
    margin-bottom: 20px;
    
}

@media(max-width:1100px){
    .stats-grid{
        grid-template-columns:repeat(2,1fr);
    }
}

@media(max-width:650px){
    .stats-grid{
        grid-template-columns:1fr;
    }
}
</style>