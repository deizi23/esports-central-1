<script setup lang="ts">
import { ref } from 'vue'
const { players } = usePlayers()
const { teams } = useTeams()
const search = ref('')
const filteredPlayers = computed(() => {
  return players.value.filter(player =>
    player.nickname.toLowerCase().includes(search.value.toLowerCase())
  )
})
function getTeam(id: number) {
  return teams.value.find(team => team.id === id)
}

definePageMeta({
  title: 'Players',
  subtitle: 'Professional players database'
})
</script>

<template>
<div class="players-page">
    <div class="toolbar">
        <input
            v-model="search"
            class="search"
            type="text"
            placeholder="Search players..."
        >
    </div>
    <div class="players-grid">
        <div
            v-for="(player,index) in filteredPlayers"
            :key="player.id"
            class="player-card"
        >
            <div class="overlay"></div>
            <div
                class="rank"
                :class="'rank-'+(index+1)"
            >
                {{ index + 1 }}
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
</div>
</template>

<style scoped>

.players-page{
    display:flex;
    flex-direction:column;
    gap:24px;
}

.toolbar{
    display:flex;
    justify-content:flex-start;
}

.search{
    width:320px;
    height:46px;
    background:#101B2B;
    border:1px solid rgba(255,255,255,.06);
    border-radius:12px;
    padding:0 18px;
    color:white;
    outline:none;
}

.search:focus{
    border-color:#2563EB;
}

.players-grid{
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(220px,1fr));
    gap:22px;
}

.player-card{
    position:relative;
    overflow:hidden;
    height:320px;
    border-radius:18px;
    background-image:url('/players/cover.png');
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-color:#2f42d6;
    background-blend-mode:multiply;
    border:1px solid rgba(255,255,255,.12);
    cursor:pointer;
    transition:.35s;
}
.player-card:nth-child(1){
    background-color:#C79A16;
}

.player-card:nth-child(2){
    background-color:#8D96A6;
}

.player-card:nth-child(3){
    background-color:#A15C30;
}

.player-card:hover{
    transform:translateY(-8px);
    border-color:#2563EB;
    box-shadow:0 18px 35px rgba(37,99,235,.20);
}

.overlay{
    position:absolute;
    inset:0;
    background:linear-gradient(
        to top,
        rgba(6,10,20,.98),
        rgba(6,10,20,.20)
    );
}

.rank{
    position:absolute;
    left:14px;
    top:14px;
    width:34px;
    height:34px;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:700;
    z-index:5;
    background:#2563EB;
}

.rank-1{background:#C79A16;}
.rank-2{background:#8D96A6;}
.rank-3{background:#A15C30;}

.player-photo{
    position:absolute;
    left:50%;
    top:18px;
    transform:translateX(-50%);
    height:175px;
    object-fit:contain;
    z-index:3;
    transition:.35s;
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
    font-size:14px
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

@media(max-width:900px){
    .toolbar{
       justify-content:stretch;
    }
    .search{
        width:100%;
    }
}
</style>