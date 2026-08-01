<script setup lang="ts">
definePageMeta({
  title: 'Dashboard',
  subtitle: 'Welcome back to Esports Central'
})
</script>

<template>
  <img class="hero-image" src="/images/header-cover.png">
<DashboardStats />
<div class="dashboard-grid">
    <DashboardUpcomingMatches />
    <DashboardRecentResults />

</div>

<div class="dashboard-grid dashboard-grid-1">
      <DashboardTopTeams />
    <DashboardTopPlayers />
</div>

<div class="dashboard-grid dashboard-grid-1">
      <DashboardUpcomingTournaments />
    
</div>

</template>

<style scoped>
.dashboard-grid{
     display:grid;
    grid-template-columns:2fr 1fr;
    gap:24px;
}

.dashboard-grid-1{
    display:grid;
    grid-template-columns: 1fr;
    gap:24px;
    margin-top:24px;
}

.hero-image{
  width: 100%;
  margin: 20px 0;
  border-radius: 20px;
  max-height: 300px;
  object-fit: cover;
}
@media(max-width:1400px){
.dashboard-grid{
grid-template-columns:1fr;
}
}
</style>

<style scoped>
.dashboard {
  display: grid;
  gap: 24px;
}
</style>