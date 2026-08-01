<script setup lang="ts">
defineProps<{
  title: string
  value: number
  icon: string
}>()
</script>

<template>
  <div class="stat-card">
    <div class="stat-icon">
      <Icon :name="icon" size="28" />
    </div>

    <div class="stat-content">
      <h3>{{ value }}</h3>
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<style scoped>
.stat-card{
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 24px;
    background: linear-gradient(340deg, #070707, #081a39);
    border-radius: 18px;
    border: 1px solid #ffffff1f;
    transition: .25s;
}

.stat-card:hover{
    transform:translateY(-4px);
    border-color:#1d6cff;
    box-shadow:0 0 30px rgba(29,108,255,.18);
}
.stat-icon{
    width:56px;
    height:56px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:16px;
    background:rgba(59,130,246,.12);
    color:#60A5FA;
}

.stat-content h3{
    margin:0;
    font-size:34px;
    font-weight:700;
    color:white;
    line-height:1;
}

.stat-content p{
    margin-top:8px;
    color:#8fa3bf;
    font-size:14px;
    margin-bottom: 3px;
}
</style>