<script setup lang="ts">
import { computed } from 'vue'

const { matches } = useMatches()
const { teams } = useTeams()

const upcomingMatches = computed(() =>
  [...matches.value]
    .filter(match => match.status === 'Upcoming')
    .sort(
      (a, b) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    )
    .slice(0, 4)
)

function getTeamName(teamId: number) {
  return teams.value.find(team => team.id === teamId)?.name ?? 'Unknown Team'
}

function getTeamLogo(teamId: number) {
  return teams.value.find(team => team.id === teamId)?.logo ?? ''
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short'
  })
}
</script>

<template>
  <section class="upcoming-card">
    <div class="card-header">
      <h2>Upcoming Matches</h2>
      <div class="filters">
        <button class="active">All</button>
        <button>This week</button>
        <button>Next week</button>
      </div>
    </div>
    <div
      v-for="match in upcomingMatches"
      :key="match.id"
      class="match-row"
    >

      <div class="team left">
        <img
          :src="getTeamLogo(match.teamAId)"
          :alt="getTeamName(match.teamAId)"
        >
        <span>
          {{ getTeamName(match.teamAId) }}
        </span>
      </div>

      <div class="center">
        <div class="vs">

          VS

        </div>
        <div class="date">
          {{ formatDate(match.date) }}
        </div>
      </div>

      <div class="team right">
        <span>
          {{ getTeamName(match.teamBId) }}
        </span>
        <img
          :src="getTeamLogo(match.teamBId)"
          :alt="getTeamName(match.teamBId)"
        >
      </div>
    </div>

    <NuxtLink class="view-all" href="/matches">
      View all matches
      <Icon
        name="heroicons:chevron-right-20-solid"
      />
    </NuxtLink>
  </section>
</template>

<style scoped>
.upcoming-card{
    background:#ffffff03;
    border:1px solid rgba(255,255,255,.05);
    border-radius:18px;
    padding:24px;
}

.card-header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:22px;
}

.card-header h2{
    margin:0;
    font-size:24px;
    font-weight:700;
}

.filters{
    display:flex;
    gap:8px;
}

.filters button{
    height:34px;
    padding:0 16px;
    border:none;
    border-radius:10px;
    background:#17263D;
    color:#8EA2C1;
    cursor:pointer;
    transition:.2s;
}

.filters button:hover{
    background:#233757;
    color:white;
}

.filters .active{
    background:#2563EB;
    color:white;
}

.match-row{
    display:grid;
    grid-template-columns:1fr 130px 1fr;
    align-items:center;
    gap:18px;
    padding:18px 22px;
    margin-bottom:14px;
    background:#0D1726;
    border-radius:14px;
    border:1px solid rgba(255,255,255,.04);
    transition:.25s;
}
.match-row:hover{
    border-color:#2563EB;
    transform:translateY(-2px);
}

.team{
    display:flex;
    align-items:center;
    gap:14px;
    font-weight:600;
}

.team.left{
    justify-content:flex-start;
}

.team.right{
    justify-content:flex-end;
}

.team img{
    width:46px;
    height:46px;
    object-fit:contain;
    flex-shrink:0;
}

.center{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:8px;
}

.vs{
    color:#2D8CFF;
    font-size:28px;
    font-weight:700;
    letter-spacing:1px;
}

.date{
    padding:5px 14px;
    border-radius:999px;
    background:#173B76;
    color:#5DA7FF;
    font-size:12px;
    font-weight:600;
}

.view-all{
    width:100%;
    margin-top:10px;
    height:46px;
    border:none;
    background:none;
    color:#3B82F6;
    font-weight:600;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:6px;
    text-decoration: none;
}

.view-all:hover{
    color:white;
}
  @media screen and (max-width:680px){
    .card-header{
   flex-direction:column;
    }
    .match-row{
      display:flex;
      flex-direction:column;
    }
  }
</style>
