<script setup lang="ts">
const { teams } = useTeams()

const topTeams = computed(() =>
  [...teams.value]
    .sort((a, b) => b.ranking - a.ranking)
    .slice(0, 5)
)
</script>

<template>
  <section class="teams-section">
    <div class="section-header">
        <h2>Top Teams</h2>
        <NuxtLink class="view-all" href="/teams">
      View all
      <Icon
        name="heroicons:chevron-right-20-solid"
      />
    </NuxtLink>
    </div>

    <div class="teams-grid">
        <div
            v-for="(team,index) in topTeams"
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

            <img
                class="logo"
                :src="team.logo"
            >

            <div class="info">
                <h3>
                    {{ team.name }}
                </h3>
                <span>
                    {{ team.region }}
                </span>

                <div class="rating">
                    <small>Rating</small>
                    <strong>
                        {{ team.ranking.toFixed(2) }}
                    </strong>
                </div>

                <div class="progress">
                    <div
                        class="fill"
                        :style="{
                            width:(team.ranking/1.5)*100+'%'
                        }"
                    />
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
.teams-section{
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

.teams-grid{
    display:grid;
    grid-template-columns:repeat(5,1fr);
    gap:18px;
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
    background:
    linear-gradient(to top, rgba(8,14,24,.98), rgba(8,14,24,.35));
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
    justify-content:center;
    align-items:center;
    font-weight:700;
    z-index:2;
}

.team-card:nth-child(1) .rank{
  background: #bc8d02;
}

.team-card:nth-child(2) .rank{
  background: #8d8d8d;
}

.team-card:nth-child(3) .rank{
  background: #8d5102;
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
    margin-top:24px;
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
    overflow:hidden;
    background:#1B2A44;
}

.fill{
    height:100%;
    border-radius:999px;
    background:#2563EB;
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
    .teams-grid{
        grid-template-columns:repeat(2,1fr);
    }
}
@media(max-width:680px){
    .teams-grid{
        grid-template-columns:repeat(1,1fr);
    }
}
</style>