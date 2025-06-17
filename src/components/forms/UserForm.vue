<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['submit']);

const username = ref('');
const password = ref('');

async function handleSubmit() {
    emit('submit', { 
        username: username.value, 
        password: password.value 
    });

}

</script>

<template>
    <div class="flex flex-col gap-3">
        <FloatLabel variant="on">
        <InputText id="username" v-model="username" fluid />
        <label for="username">Nombre de usuario</label>
        </FloatLabel>
    </div>
    <div>
        <FloatLabel variant="on">
        <Password id="password" v-model="password" />
        <label for="password">Contraseña</label>
        </FloatLabel>
    </div>
    <div>
        <Button severity="primary" @click="handleSubmit">
            Guardar
        </Button>
    </div>

</template>