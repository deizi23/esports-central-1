<script setup lang="ts">
const { matches } = useMatches()
const { teams } = useTeams()
function getTeamName(teamId: number) {
  return teams.value.find(team => team.id === teamId)?.name ?? 'Unknown Team'
}
function getTeamLogo(teamId: number) {
  return teams.value.find(team => team.id === teamId)?.logo ?? ''
}
function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

definePageMeta({
  title: 'Matches',
  subtitle: 'Upcoming and completed matches'
})
</script>

<template>
<div class="matches-page">
    <div
        v-for="match in matches"
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
            <template v-if="match.status === 'Upcoming'">
                <div class="vs">
                    VS
                </div>
                <div class="date">
                    {{ formatDate(match.date) }}
                </div>
            </template>

            <template v-else>
                <div class="score">
                    {{ match.scoreA }} : {{ match.scoreB }}
                </div>
                <div class="finished">
                    Finished
                </div>
            </template>
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
</div>

</template>
<style scoped>
.matches-page{
    display:flex;
    flex-direction:column;
    gap:18px;
}

.match-row{
    display:grid;
    grid-template-columns:1fr 150px 1fr;
    align-items:center;
    gap:18px;
    padding:22px 26px;
    background:#101B2B;
    border:1px solid rgba(255,255,255,.05);
    border-radius:18px;
    transition:.25s;
}

.match-row:hover{
    border-color:#2563EB;
    transform:translateY(-3px);
    box-shadow:0 15px 35px rgba(37,99,235,.15);
}

.team{
    display:flex;
    align-items:center;
    gap:14px;
    font-weight:600;
    font-size:18px;
}

.team.left{
    justify-content:flex-start;
}

.team.right{
    justify-content:flex-end;
}

.team img{
    width:52px;
    height:52px;
    object-fit:contain;
    flex-shrink:0;
}

.center{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
}

.vs{
    color:#3B82F6;
    font-size:34px;
    font-weight:700;
}

.date{
    padding:6px 18px;
    border-radius:999px;
    background:#173B76;
    color:#7EC1FF;
    font-size:13px;
    font-weight:600;
}

.score{
    font-size:38px;
    font-weight:700;
    color:white;
}

.finished{
    padding:6px 16px;
    border-radius:999px;
    background:#1D7A38;
    color:white;
    font-size:12px;
    font-weight:700;
    text-transform:uppercase;
    letter-spacing:.5px;
}

@media(max-width:900px){
    .match-row{
        grid-template-columns:1fr;
        text-align:center;
    }

    .team.left,
    .team.right{
        justify-content:center;
    }
}
</style>