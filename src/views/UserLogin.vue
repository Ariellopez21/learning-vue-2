<script setup lang="ts">
import { login } from '@/api/users';
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const username = ref('')
const password = ref('')

const auth = useAuthStore();
const router = useRouter();

async function handleLogin() {
    try {
        const token = await login(username.value, password.value);
        console.log('Token:', token);
        auth.setToken(token.accessToken);
        router.push({ name: 'home' });
    } catch (error) {
        console.error('Error durante el inicio de sesión:', error);
    }
}

</script>

<template>
    <div class="bg-emerald-600 min-h-screen flex  items-center justify-center">
        <Card >
            <template #title><div class="text-center">Iniciar Sesión</div></template>
            <template #content>
                <div class="flex flex-col gap-3">
                    <FloatLabel variant="in">
                        <InputText id="username" v-model="username" fluid />
                        <label for="username">Usuario</label>
                    </FloatLabel>
                    <FloatLabel variant="in">
                        <InputText type="password" id="password" v-model="password" fluid />
                        <label for="username">Password</label>
                    </FloatLabel>
                    <Button @click="handleLogin">Ingresar</Button>
                </div>
            </template>
        </Card>
    </div>
</template>