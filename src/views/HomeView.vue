<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore(); 
</script>

<template>
  {{  auth.token ? 'Token: ' + auth.token : 'No hay token' }}
  Hola!
  <Button label="Botón" severity="success" />
</template>
