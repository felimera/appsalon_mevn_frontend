<script setup>
import { RouterView } from 'vue-router';

const authRoutes = [
    { name: 'register', text: 'Crear cuenta' },
    { name: 'login', text: 'Iniciar Sesión' }
];

</script>

<template>
    <div class="mx-auto lg:w-4/5 mt-20">
        <RouterView />

        <nav class="mt-10 flex flex-col item-center space-y-5 lg:flex-row lg:justify-between lg:space-y-0">
            <RouterLink v-for="authRouter in authRoutes" class="uppercase font-bold text-white"
                :to="{ name: authRouter.name }">
                {{ authRouter.text }}
            </RouterLink>
        </nav>
    </div>
</template>

