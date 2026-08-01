<script setup lang="ts">
const { tournaments } = useTournaments()
function getStatus(tournament: any) {
  return tournament.status
}

definePageMeta({
  title: 'Tournaments',
  subtitle: 'Professional esports tournaments'
})
</script>

<template>

<div class="tournaments-page">

    <div class="tournaments-grid">

        <div
            v-for="tournament in tournaments"
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

                    <h3>

                        {{ tournament.name }}

                    </h3>

                    <img
                        class="logo"
                        :src="tournament.logo"
                    >

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

</div>

</template>
    <style scoped>
    .tournaments-page{
    display:flex;
    flex-direction:column;
    gap:24px;
    }

    .tournaments-grid{
        display:grid;
        grid-template-columns:1fr 1fr 1fr;
        gap:22px;
    }

.tournament-card{
    position:relative;
    height:220px;
    overflow:hidden;
    border-radius:18px;
    border:1px solid rgba(255,255,255,.06);
    transition:.3s;
    cursor:pointer;
}

.tournament-card:hover{
    transform:translateY(-6px);
    border-color:#2563EB;
    box-shadow:0 15px 35px rgba(37,99,235,.18);
}

    .cover{
        position:absolute;
        inset:0;
        width:100%;
        height:100%;
        object-fit:cover;
        transition:.35s;
        }

    .tournament-card:hover .cover{
        transform:scale(1.06);
    }

    .overlay{
        position:absolute;
        inset:0;
        background:linear-gradient(
        to top,
        rgba(8,12,20,.95),
        rgba(8,12,20,.45)
        );
    }

    .content{
        position:absolute;
        inset:12px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        z-index:5;
    }

    .header{
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        gap:14px;
    }

    .logo{
     width:72px;
     object-fit:contain;
        flex-shrink:0;
    }

    .content h3{
        margin:0;
        font-size:24px;
        font-weight:700;
        line-height:1.25;
    }

    .content p{
        margin:0;
        color:#CBD5E1;
        font-size:14px;
    }

    .status{
        display:inline-flex;
        width:max-content;
        padding:6px 14px;
        border-radius:999px;
        font-size:12px;
        font-weight:700;
    }

    .status.live{
        background:#16A34A;
        color:white;
    }

    .status.upcoming{
        background:#2563EB;
        color:white;
    }

    .status.finished{
        background:#eb4925;
        color:white;
    }

@media(max-width:900px){
    .tournaments-grid{
        grid-template-columns:repeat(auto-fill,minmax(230px,1fr));
    }
}

@media(max-width:600px){

    .tournaments-grid{

        grid-template-columns:1fr;
    }

}
</style>