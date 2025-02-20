<template>
  
  <div class="d-flex">
    <Sidebar />
    <div class="flex-grow-1 d-flex flex-column">
      <Navbar />
      <div class="p-3" style="background-color: #f8f9fa; min-height: 100vh;">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
</script>

