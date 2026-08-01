<script setup lang="ts">
import { computed } from 'vue'
const route = useRoute()
const pageTitle = computed(() => {
  return (route.meta.title as string) || 'Dashboard'
})
const pageSubtitle = computed(() => {
  return (route.meta.subtitle as string) || 'Welcome back to Esports Central'
})
defineEmits<{
(e:'toggle-menu'):void
}>()
</script>

<template>

<header class="header">
    <div class="logo-mobile">
        <div class="logo-icon">
        E
      </div>
      <div>
        <h2>ESPORTS</h2>
        <span>CENTRAL</span>
      </div>
    </div>
    <div class="header-full">
    <div>

        <h1>{{ pageTitle }}</h1>

        <p>{{ pageSubtitle }}</p>

    </div>

    <div class="header-right">
                
    </div>
    <button
    class="burger"
    @click="$emit('toggle-menu')"
    >
    <Icon
        name="heroicons:bars-3-20-solid"
        size="28"
    />
    </button>
    </div>
</header>

</template>

<style scoped>
.header-full{
        display: flex;
    justify-content: space-between;    
    align-items: center;
}
.logo-mobile{
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    background: linear-gradient(89deg, #ffffff0f, #3ea3ff2b, #ffffff0f);
    width: 250px;
    margin: auto;
    margin-bottom: 30px;
}
 .logo-icon{
    width:56px;
    height:56px;
    border-radius:14px;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#2563EB;
    font-size:28px;
    font-weight:700;
}

.logo-mobile h2{
    margin:0;
    font-size:28px;
}

.logo-mobile span{
    color:#60A5FA;
    font-size:20px;
}
.header{
    display:flex;
    flex-direction: column;
    margin-bottom:32px;
}

.header h1{
    margin:0;
    font-size:34px;
    font-weight:700;
}

.header p{
    margin-top:6px;
    color:#8EA2C1;
}

.header-right{
    display:flex;
    align-items:center;
    gap:18px;
}

.search{
    width:340px;
    height:48px;
    display:flex;
    align-items:center;
    gap:12px;
    padding:0 18px;
    border-radius:14px;
    background:#111D30;
    border:1px solid rgba(255,255,255,.05);
}

.search input{
    width:100%;
    border:none;
    outline:none;
    background:transparent;
    color:white;
}

.icon-btn{
    width:48px;
    height:48px;
    display:flex;
    justify-content:center;
    align-items:center;
    border:none;
    border-radius:14px;
    background:#111D30;
    color:white;
    cursor:pointer;
}

.avatar{
    width:46px;
    height:46px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#2563EB;
    font-weight:700;
}

.burger{
display:flex;
align-items:center;
justify-content:center;
width:44px;
height:44px;
border:none;
background:#111D30;
border-radius:12px;
cursor:pointer;
color:white;
}

@media (min-width:981px){
    .burger{
    display:none;
    }
    .logo-mobile{
    display:flex;
    align-items:center;
    gap:16px;
    margin-bottom:40px;
}

    .logo-mobile{
        display: none;
    }
}
@media(max-width:680px){
    .header-full{
        flex-direction: column;
       
    }

    .header h1{
        text-align: center;
    }
}
</style>