<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 250px; height: 100vh;">
      <a href="#" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span class="fs-4">BMS</span>
      </a>
      <hr>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active">
            <i class="bi bi-speedometer2 me-2"></i> Dashboard
          </router-link>
        </li>
        <li>
          <router-link to="/clients" class="nav-link" active-class="active">
            <i class="bi bi-people me-2"></i> Clients
          </router-link>
        </li>
        <li>
          <router-link to="/finance" class="nav-link" active-class="active">
            <i class="bi bi-cash-stack me-2"></i> Finance
          </router-link>
        </li>
        <li>
          <router-link to="/rh" class="nav-link" active-class="active">
            <i class="bi bi-person-badge me-2"></i> RH
          </router-link>
        </li>
        <li>
          <router-link to="/inventory" class="nav-link" active-class="active">
            <i class="bi bi-box-seam me-2"></i> Inventory
          </router-link>
        </li>
        <li>
          <router-link to="/reports" class="nav-link" active-class="active">
            <i class="bi bi-graph-up me-2"></i> Reports
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .nav-link.active {
    background-color: #0d6efd;
    color: white;
  }
  </style>