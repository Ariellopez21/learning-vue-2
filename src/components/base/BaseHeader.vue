<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter()
const items = [
    { label: 'Inicio', command: () => router.push({name: 'home'}) },
    { label: 'Usuarios', command: () => router.push({name: 'list-users'}) },
]
async function logout() {
    const auth = useAuthStore(); 
    auth.clearToken();
    await router.push({ name: 'login' });
}

</script>

<template>
    <Menubar :model="items">
    <template #end>
        <Button label="Cerrar sesión" @click="logout" />
    </template>
    </Menubar>
</template>