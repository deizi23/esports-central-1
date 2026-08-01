<script setup lang="ts">
const route = useRoute()

const menu = [
  {
    title: 'Dashboard',
    to: '/',
    icon: 'heroicons:home-solid'
  },
  {
    title: 'Teams',
    to: '/teams',
    icon: 'heroicons:user-group-solid'
  },
  {
    title: 'Players',
    to: '/players',
    icon: 'heroicons:user-solid'
  },
  {
    title: 'Matches',
    to: '/matches',
    icon: 'heroicons:bolt-solid'
  },
  {
    title: 'Tournaments',
    to: '/tournaments',
    icon: 'heroicons:trophy-20-solid'
  }
]

const { favorites } = useFavorites()
const { teams } = useTeams()

const favoriteTeams = computed(() =>
  teams.value.filter(team => favorites.value.includes(team.id))
)

const props = defineProps<{
  open: boolean
}>()
const emit = defineEmits(['close'])
</script>

<template>
  <aside class="sidebar"
  :class="{open: props.open}">
    <div class="logo">
      <div class="logo-icon">
        E
      </div>
      <div>
        <h2>ESPORTS</h2>
        <span>CENTRAL</span>
      </div>

    </div>

  

    <nav>
      <NuxtLink
        v-for="item in menu"
        :key="item.to"
        :to="item.to"
        class="nav-item"
        :class="{ active: route.path === item.to }"
      >

        <Icon
          :name="item.icon"
          size="22"
        />

        {{ item.title }}

      </NuxtLink>
    </nav>

    

    <section class="favorites">
      <h3>Favorite Teams</h3>
      <div
        v-if="favoriteTeams.length"
        class="favorite-list"
      >
        <div
          v-for="team in favoriteTeams"
          :key="team.id"
          class="favorite-team"
        >
          <img
            :src="team.logo"
            :alt="team.name"
          >
          <span>{{ team.name }}</span>
        </div>
      </div>

      <p
        v-else
        class="empty"
      >
        No favorite teams yet.
      </p>

    </section>

  </aside>
</template>

<style scoped>
.sidebar{
    display:flex;
    flex-direction:column;
    padding:28px;
    background:#000c1c;
    border-right:1px solid rgba(255,255,255,.05);
}

.logo{
    display:flex;
    align-items:center;
    gap:16px;
    margin-bottom:40px;
}

.logo-icon{
    width:46px;
    height:46px;
    border-radius:14px;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#2563EB;
    font-size:24px;
    font-weight:700;
}

.logo h2{
    margin:0;
    font-size:22px;
}

.logo span{
    color:#60A5FA;
    font-size:13px;
}

nav{
    display:flex;
    flex-direction:column;
    gap:10px;
}

.nav-item{
    display:flex;
    align-items:center;
    gap:14px;
    padding:14px 18px;
    border-radius:14px;
    color:#B8C5D9;
    text-decoration:none;
    transition:.25s;
}

.nav-item:hover{
    background:#111D30;
    color:white;
}

.active{
    background:#2563EB;
    color:white;
}

.favorites{
    
    padding-top:28px;
    border-top:1px solid rgba(255,255,255,.05);
}

.favorite-list{
    display:flex;
    flex-direction:column;
    gap:14px;
}
.favorite-team{
    display:flex;
    align-items:center;
    gap:12px;
}

.favorite-team img{
    width:34px;
    height:34px;
    object-fit:contain;
}

@media (max-width:980px){
  .logo{
    display:none;
  }
  .sidebar{
  position:fixed;
  top:0;
  left:-380px;
  width:280px;
  height:100vh;
  z-index:1000;
  transition:left .3s ease;
  padding-top: 60px;
  }

  .sidebar.open{
  left:0;
  }
}
</style>