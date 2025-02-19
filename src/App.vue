<template>
  <div class="d-flex">
    <Sidebar />
    <div class="flex-grow-1 p-3" style="background-color: #f8f9fa; min-height: 100vh;">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
</script>

