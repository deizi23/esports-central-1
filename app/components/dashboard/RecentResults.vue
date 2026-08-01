<script setup lang="ts">
import { computed } from 'vue'
const { matches } = useMatches()
const { teams } = useTeams()
const recentResults = computed(() =>
  [...matches.value]
    .filter(match => match.status === 'Finished')
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, 4)
)

function getTeam(teamId: number) {
  return teams.value.find(team => team.id === teamId)
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}
</script>

<template>
<section class="results-card">
    <div class="card-header">
        <h2>Recent Results</h2>
        
    </div>

    <div
        v-for="match in recentResults"
        :key="match.id"
        class="result-row"
    >
        <div class="team left">
            <img
               :src="getTeam(match.teamAId)?.logo"
            >
            <span>
                {{ getTeam(match.teamAId)?.name }}
            </span>
        </div>

        <div class="center">
            <div class="badge">
                RESULT
            </div>
            <div class="score">
                {{ match.scoreA }} : {{ match.scoreB }}
            </div>
            <small>
                {{ formatDate(match.date) }}
            </small>
        </div>

        <div class="team right">
            <span>
                {{ getTeam(match.teamBId)?.name }}
            </span>
            <img
                :src="getTeam(match.teamBId)?.logo"
            >
        </div>
    </div>
    

</section>

</template>

<style scoped>
.results-card{
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

.card-header button{
    background:none;
    border:none;
    color:#5DA7FF;
    cursor:pointer;
}

.result-row{
    display:grid;
    grid-template-columns:1fr 110px 1fr;
    align-items:center;
    gap:18px;
    background:#0D1726;
    border-radius:14px;
    border:1px solid rgba(255,255,255,.04);
    padding:18px 22px;
    margin-bottom:14px;
    transition:.25s;
}

.result-row:hover{
    transform:translateY(-2px);
    border-color:#2563EB;
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
}

.center{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:8px;
}

.badge{
    background:#1B5E20;
    color:#6DFF81;
    font-size:10px;
    font-weight:700;
    padding:4px 10px;
    border-radius:999px;
    letter-spacing:.5px;
}

.score{
    font-size:30px;
    font-weight:700;
    color:white;
}

.center small{
    color:#8EA2C1;
}

.view-all{
    width:100%;
    height:46px;
    margin-top:8px;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:8px;
    background:none;
    border:none;
    color:#3B82F6;
    cursor:pointer;
    font-weight:600;
    text-decoration: none;
}

.view-all:hover{
    color:white;
}

  @media screen and (max-width:680px){
    .result-row{
      display:flex;
      flex-direction:column;
    }
  }
</style>
