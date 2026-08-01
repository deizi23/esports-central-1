<script setup lang="ts">
const { tournaments } = useTournaments()

const upcomingTournaments = computed(() =>
  [...tournaments.value]
    .sort((a, b) =>
      new Date(a.startDate).getTime() -
      new Date(b.startDate).getTime()
    )
    .slice(0, 4)
)

function getStatus(tournament: any) {
  const now = new Date()

  if (
    now >= new Date(tournament.startDate) &&
    now <= new Date(tournament.endDate)
  ) {
    return "LIVE"
  }

  return "UPCOMING"
}
</script>

<template>
<section class="tournaments-section">
    <div class="section-header">
        <h2>Upcoming Tournaments</h2>
        <NuxtLink class="view-all" href="/tournaments">
      View all
      <Icon
        name="heroicons:chevron-right-20-solid"
      />
    </NuxtLink>
    </div>

    <div class="tournaments-grid">

        <div
            v-for="tournament in upcomingTournaments"
            :key="tournament.id"
            class="tournament-card"
        >
            <img
                class="cover"
                :src="tournament.cover"
            >
            <div class="overlay"></div>
            
            <div class="content">
                <div class="header">
                <h3>{{ tournament.name }}</h3>
                <img
                class="logo"
                :src="tournament.logo">    
            </div>
                <p>

                    {{ tournament.startDate }}

                    —

                    {{ tournament.endDate }}
                </p>
                <span
                    class="status"
                    :class="getStatus(tournament).toLowerCase()"
                >
                    {{ getStatus(tournament) }}
                </span>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
.tournaments-section{
    background:#ffffff03;
    border:1px solid rgba(255,255,255,.06);
    border-radius:18px;
    padding:20px;
}

.section-header{
    display: flex;
    justify-content: space-between;
}

.tournaments-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:18px;
}

.tournament-card{
    position: relative;
    height: 190px;
    overflow: hidden;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, .06);
    cursor: pointer;
    transition: .3s;
    text-align: center;
}

.tournament-card:hover{
    transform:translateY(-6px);
    border-color:#2563EB;
    box-shadow:0 15px 35px rgba(37,99,235,.2);
}

.cover{
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
    object-fit:cover;
}

.overlay{
    position:absolute;
    inset:0;
    background:linear-gradient(
        to top, rgba(8,12,20,.95),rgba(8,12,20,.45) );
}

.header{
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;
    margin-top: 10px;
    justify-content: space-between;
    align-items:center;
}

.logo{

    left:18px;
    top:18px;
    width:85px;
    object-fit:contain;
    z-index:5;
}

.content{
    position: absolute;
    left: 3%;
    right: 3%;
    z-index: 5;
    width: 94%;
    height: 96%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: space-between;
}

.content h3{
    margin:0;
    color:#fff;
    font-size:22px;
    font-weight:700;
    text-align: left;
    max-width: calc(100% - 90px);
}

.content p{
    margin:8px 0 16px;
    color:#eaeaea;
    font-size:13px;
}

.status{
    display:inline-flex;
    align-items:center;
    padding:6px 12px;
    border-radius:999px;
    font-size:12px;
    font-weight:700;
    letter-spacing:.4px;
}

.status.live{
    background:#1C8D43;
    color:#fff;
}

.status.upcoming{
    background:#1D4ED8;
    color:#fff;
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
    .tournaments-grid{
        grid-template-columns:repeat(2,1fr);
    }
}
@media(max-width:680px){
    .tournaments-grid{
        grid-template-columns:repeat(1,1fr);
    }
}
</style>