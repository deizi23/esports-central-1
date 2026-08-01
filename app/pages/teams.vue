<script setup lang="ts">
import { ref } from 'vue'
const { teams } = useTeams()
const search = ref('')
const filteredTeams = computed(() => {
  return teams.value.filter(team =>
    team.name.toLowerCase().includes(search.value.toLowerCase())
  )
})
const { favorites, toggleFavorite, isFavorite } = useFavorites()
definePageMeta({
  title: 'Teams',
  subtitle: 'Manage all esports teams'
})
</script>

<template>
<div class="teams-page">
    <div class="toolbar">
        <input
            v-model="search"
            class="search"
            type="text"
            placeholder="Search teams..."
        >
    </div>
    <div class="teams-grid">
        <div
            v-for="(team,index) in filteredTeams"
            :key="team.id"
            class="team-card"
        >
            <img
                class="bg"
                :src="team.cover"
            >
            <div class="overlay"></div>
            <div class="rank">
                {{ index + 1 }}
            </div>
            <button
                  class="favorite-btn"
                     @click.stop="toggleFavorite(team.id)"
                    >
                     <Icon
                       :name="
                         isFavorite(team.id)
                       ? 'heroicons:star-20-solid'
                   : 'heroicons:star'
                       "
                     />
                </button>
            <img
                class="logo"
                :src="team.logo"
            >

            <div class="info">

                <h3>{{ team.name }}</h3>

                <span> {{ team.region }}
                </span>
                <div class="rating">
                    <small>Ranking</small>
                    <strong>
                        #{{ team.ranking }}
                    </strong>
                </div>
                
                <div class="progress">
                    <div
                        class="fill"
                        :style="{
                            width:(100-(team.ranking-1)*7)+'%'
                        }"
                    />

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.teams-page{
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

.teams-grid{
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(220px,1fr));
    gap:22px;
}

.team-card{
    position:relative;
    overflow:hidden;
    height:320px;
    border-radius:18px;
    cursor:pointer;
    transition:.35s;
    background:#0F1728;
    border:1px solid rgba(255,255,255,.05);
}

.team-card:hover{
    transform:translateY(-8px);
    box-shadow:0 18px 35px rgba(37,99,235,.20);
border-color:#2563EB;
}

.bg{
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
    object-fit:cover;
    opacity:.35;
    transition:.4s;
}

.team-card:hover .bg{
    transform:scale(1.08);
    opacity:.45;
}

.overlay{
    position:absolute;
    inset:0;
    background:linear-gradient(
        to top,
        rgba(8,14,24,.98),
        rgba(8,14,24,.35)
    );
}

.rank{
    position:absolute;
    left:14px;
    top:14px;
    width:34px;
    height:34px;
    border-radius:10px;
    background:#2563EB;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:700;
    z-index:2;
}

.favorite-btn{
    position:absolute;
    top:14px;
    right:14px;
    width:38px;
    height:38px;
    border:none;
    border-radius:10px;
    background:rgba(15,23,40,.85);
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    color:#94A3B8;
    z-index:5;
    transition:.25s;
}

.favorite-btn:hover{
    color:#FACC15;
    background:#16253D;
}

.favorite-btn .iconify{
    font-size:22px;
}

.team-card:nth-child(1) .rank{
    background:#bc8d02;
}

.team-card:nth-child(2) .rank{
    background:#8d8d8d;
}

.team-card:nth-child(3) .rank{
    background:#8d5102;
}

.logo{
    position:relative;
    left:50%;
    top:32px;
    transform:translateX(-50%);
    width:110px;
    height:110px;
    object-fit:contain;
    z-index:2;
    transition:.35s;
}

.team-card:hover .logo{
    transform:translateX(-50%) scale(1.08);
}

.info{
    position:absolute;
    left:20px;
    right:20px;
    bottom:20px;
    z-index:2;
}
.info h3{
    margin:0;
    font-size:24px;
    font-weight:700;
}

.info span{
    display:block;
    margin-top:6px;
    color:#8FA4C5;
    text-transform:uppercase;
    font-size:13px;
    letter-spacing:.8px;
}

.rating{
   margin-top:22px;
}
.rating small{
    color:#7286A6;
    display:block;
}

.rating strong{
    display:block;
    margin-top:4px;
   font-size:28px;
    color:#3EA3FF;
}
.progress{
    margin-top:10px;
    height:6px;
    border-radius:999px;
    background:#1B2A44;
    overflow:hidden;
}

.fill{
    height:100%;
    border-radius:999px;
    background:#2563EB;
}
@media(max-width:900px){
    .search{
        width:100%;
    }
    .toolbar{
       justify-content:stretch;
    }
}
</style>