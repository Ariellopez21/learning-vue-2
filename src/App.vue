<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import Header from '@/components/base/BaseHeader.vue'

const route = useRoute()

</script>

<template>
  <Toast/>
  <div v-if="route.name === 'login'"> 
    <RouterView />  
  </div>

  <div v-else class="container mx-auto my-2">
  <Header class="mb-3 !bg-green-800"/>
  <RouterView />
  </div>
</template>

<style scoped></style>
