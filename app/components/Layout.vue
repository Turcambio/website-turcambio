<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="text-3xl font-bold text-gray-900 hover:text-blue-600 transition">
            TurCambio
          </NuxtLink>
          
          <nav class="flex items-center space-x-4">
            <NuxtLink 
              to="/" 
              class="text-gray-700 hover:text-blue-600 transition"
              exact-active-class="text-blue-600 font-semibold"
            >
              Início
            </NuxtLink>
            <NuxtLink 
              to="/about" 
              class="text-gray-700 hover:text-blue-600 transition"
              exact-active-class="text-blue-600 font-semibold"
            >
              Sobre
            </NuxtLink>
            
            <template v-if="authStore.isAuthenticated">
              <NuxtLink 
                to="/cambio" 
                class="text-gray-700 hover:text-blue-600 transition"
                exact-active-class="text-blue-600 font-semibold"
              >
                Câmbio
              </NuxtLink>
              <span class="text-gray-500">|</span>
              <span class="text-gray-700">{{ authStore.user?.name }}</span>
              <button 
                @click="logout" 
                class="text-red-600 hover:text-red-800 font-semibold transition"
              >
                Sair
              </button>
            </template>
            <template v-else>
              <NuxtLink 
                to="/login" 
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
              >
                Login
              </NuxtLink>
            </template>
          </nav>
        </div>
      </div>
    </header>
    
    <main class="max-w-7xl mx-auto py-6 px-4">
      <slot />
    </main>
    
    <footer class="bg-white shadow mt-8">
      <div class="max-w-7xl mx-auto py-4 px-4 text-center text-gray-600">
        <p>&copy; {{ new Date().getFullYear() }} TurCambio. Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Estado de autenticação local (temporário)
const authStore = ref({
  isAuthenticated: false,
  user: null
});

const logout = () => {
  authStore.value.isAuthenticated = false;
  authStore.value.user = null;
  router.push('/');
};
</script>

