<template>
  <div class="container">
    <div class="header"></div>
    <div class="body">
      <router-view />
    </div>
    <div class="footer">
      <AppFooter></AppFooter>
    </div>
  </div>
</template>
<script setup>
import AppFooter from "./components/layout/AppFooter.vue"
</script>
