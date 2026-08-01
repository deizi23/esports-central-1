<script setup lang="ts">
const menuOpen = ref(false)

const route = useRoute()

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  }
)
</script>

<template>
  <div class="layout">
    <div
      v-if="menuOpen"
      class="overlay"
      @click="menuOpen = false"
    />
  <LayoutSidebar
    :open="menuOpen"
    @close="menuOpen = false"
  />

  <div class="main">
    <LayoutHeader
     @toggle-menu="menuOpen = !menuOpen"
    />

    <slot />
  </div>
  </div>
</template>

<style scoped>
.layout{
    display:grid;
    grid-template-columns:250px 1fr;

    min-height:100vh;

    background:#000c1c;
}

.main{
    display:flex;
    flex-direction:column;
        padding: 20px;
}

.content{
    flex:1;
    padding:28px 32px;
}
.overlay{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.6);
  backdrop-filter:blur(4px);
  z-index:999;
}

@media(max-width:980px){
  .layout{
  display:block;
  }


}
</style>