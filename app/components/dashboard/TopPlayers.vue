<script setup lang="ts">
const { players } = usePlayers()
const {teams} = useTeams()
const topPlayers = computed(() =>
  [...players.value]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5)
)

function getTeam(id: number) {
  return teams.value.find(team => team.id === id)
}

</script>

<template>
<section class="players-section">
    <div class="section-header">
        <h2>Top Players</h2>
       <NuxtLink class="view-all" href="/players">
      View all
      <Icon
        name="heroicons:chevron-right-20-solid"
      />
    </NuxtLink>
    </div>

    <div class="players-grid">
        <div
            v-for="(player,index) in topPlayers"
            :key="player.id"
            class="player-card"
        >
            
            <div class="overlay"></div>

            <div
                class="rank"
                :class="'rank-'+(index+1)"
            >
                {{ index+1 }}
            </div>

            <img
                class="player-photo"
                :src="player.avatar"
            >

            <div class="player-info">
                <h3>{{ player.nickname }}</h3>
                <span>
                    {{ getTeam(player.teamId)?.name }}
                </span>
                <strong>
                    {{ player.rating.toFixed(2) }}
                </strong>
                <img
                    class="team-logo"
                    :src="getTeam(player.teamId)?.logo"
                >
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
.players-section{
    background:#ffffff03;
    border:1px solid rgba(255,255,255,.05);
    border-radius:18px;
    padding:24px;
}


.section-header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:24px;
}

.section-header h2{
    margin:0;
    font-size:24px;
}
.section-header button{
    border:none;
    background:none;
    color:#4EA4FF;
    cursor:pointer;
}

.players-grid{
    display:grid;
    grid-template-columns:repeat(5,1fr);
    gap:18px;
}

.player-card{
    position:relative;
    overflow:hidden;
    height:320px;
    border-radius:18px;
    background-image: url('/players/cover.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border:1px solid rgb(255 255 255 / 19%);
    background-color:#2f42d6;
  background-blend-mode: multiply;
    transition:.35s;
    cursor:pointer;
}

.player-card:nth-child(1){
background-color: rgb(199 154 22);
}

.player-card:nth-child(2){
background-color: rgb(143, 143, 143);
}

.player-card:nth-child(3){
background-color: rgb(199, 116, 22);
}

.player-card:hover{
    transform:translateY(-8px);
    border-color:#2563EB;
    box-shadow:0 18px 35px rgba(37,99,235,.18);
}

.bg{
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
    object-fit:cover;
    opacity:.25;
    transition:.35s;
}

.player-card:hover .bg{
    transform:scale(1.08);
    opacity:.35;
}

.overlay{
    position:absolute;
    inset:0;
    background:linear-gradient( to top, rgba(6,10,20,.98), rgba(6,10,20,.2) );
}


.rank{
    position:absolute;
    left:14px;
    top:14px;
    width:34px;
    height:34px;
    border-radius:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:700;
    z-index:5;
}

.rank-1{
    background:#C79A16;
}

.rank-2{
    background:#8D96A6;
}

.rank-3{
    background:#A15C30;
}

.rank-4,
.rank-5{
    background:#2563EB;
}


.player-photo{
    position:absolute;
    left:50%;
    top:18px;
    transform:translateX(-50%);
    height:175px;
    object-fit:contain;
    transition:.35s;
    z-index:3;
}

.player-card:hover .player-photo{
    transform:translateX(-50%) scale(1.06);
}
.player-info{
    position:absolute;
    left:18px;
    right:18px;
    bottom:18px;
    z-index:3;
}

.player-info h3{
    margin:0;
    font-size:24px;
    font-weight:700;
}

.player-info span{
    display:block;
    margin-top:4px;
    color:#94A6C5;
    font-size:14px;
}

.player-info strong{
    display:block;
    margin-top:18px;
    color:#3EA3FF;
    font-size:28px;
}

.team-logo{
    position:absolute;
    right:0;
    bottom:0;
    width:42px;
    height:42px;
    object-fit:contain;
}

.view-all{

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
@media(max-width:1100px){
    .players-grid{
        grid-template-columns:repeat(2,1fr);
    }
}

@media(max-width:680px){
    .players-grid{
        grid-template-columns:repeat(1,1fr);
    }
}
</style>