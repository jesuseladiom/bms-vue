<template>
    <div class="container-fluid">
      <h2 class="mt-4">Clients</h2>
      <div class="card shadow-sm mt-3">
        <div class="card-body">
          <h5 class="card-title">Client List</h5>
          <table class="table table-striped mt-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Acme Corp</td>
                <td>contact@acme.com</td>
                <td>+1234567890</td>
                <td><span class="badge bg-success">Active</span></td>
              </tr>
              <tr>
                <td>Beta LLC</td>
                <td>info@beta.com</td>
                <td>+0987654321</td>
                <td><span class="badge bg-warning text-dark">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  