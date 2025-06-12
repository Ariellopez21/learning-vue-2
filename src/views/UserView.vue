<script setup lang="ts">
import type { User } from '../interfaces'
import { getUsers } from '@/api/users'
import { ref, type Ref } from 'vue'

const users: Ref<User[]> = ref([])

async function loadUsers() {
  users.value = await getUsers()
}
</script>

<template>
  <Button @click="loadUsers">Botón</Button>
  <DataTable v-if="users.length > 0" :value="users">
    <Column field="id" header="ID" />
    <Column field="username" header="Nombre" />
  </DataTable>
</template>

<style scoped>
/* Add your styles here */
</style>
