<script setup lang="ts">
import type { User } from '../interfaces'
import { getUsers } from '@/api/users'
import { ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'

const users: Ref<User[]> = ref([])
const router = useRouter()

async function loadUsers() {
  users.value = await getUsers()
}
loadUsers()

async function createUser() {
  await router.push({ name: 'new-user' })
}

</script>

<template>
  <div>
    <Button severity="primary" outlined @click="createUser">
      <i class="pi pi-plus"></i>
      Nuevo usuario
    </Button>
  </div>
  <div>
  <DataTable v-if="users.length > 0" :value="users">
    <Column field="id" header="ID" />
    <Column field="username" header="Nombre" />
  </DataTable>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
