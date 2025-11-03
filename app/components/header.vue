<template>
    <header class="border-b border-gray-200 bg-white relative">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex items-center justify-between h-20 py-2">
                <div>
                    <img src="/images/turcambio-logo.png" alt="Logotipo da Turcambio" class="h-10 cursor-pointer" @click="redirectToHome">
                </div>
                <div class="flex items-center gap-x-8">
                    <!-- Menu hamburguer mobile -->
                    <button class="lg:hidden p-2 rounded transition-colors cursor-pointer" @click="toggleMenu">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <nav class="hidden lg:block">
                        <ul class="flex items-center space-x-6 font-semibold text-sm">
                            <li>
                                <NuxtLink to="/empresa" class="nav-link">A Empresa</NuxtLink>
                            </li>
                            <li class="relative products-dropdown-wrapper">
                                <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                                    <NuxtLink to="/" class="nav-link">Produtos</NuxtLink>

                                    <!-- Área invisível para conectar o link ao dropdown (elimina gap) -->
                                    <div v-if="showProductsDropdown" class="dropdown-bridge"></div>

                                    <!-- Popup de Produtos -->
                                    <transition name="dropdown">
                                        <div v-if="showProductsDropdown"
                                            class="dropdown-container">
                                            <div class="bg-white rounded-md shadow-2xl min-w-[600px] border border-gray-200">
                                                <div class="flex gap-8 p-8">
                                                    <!-- Lista de Produtos à esquerda -->
                                                    <div class="flex-1 flex flex-col gap-2">
                                                        <a 
                                                            v-for="(product, index) in products" 
                                                            :key="index"
                                                            :href="product.link"
                                                            @mouseenter="setHoveredProduct(index)"
                                                            class="px-4 py-3 text-[var(--text-secondary-color)] hover:bg-gray-50 hover:text-[var(--primary-color)] rounded text-sm font-medium transition-all duration-300 hover:translate-x-1">
                                                            {{ product.name }}
                                                        </a>
                                                    </div>

                                                    <!-- Card destacado à direita (dinâmico baseado no hover) -->
                                                    <div
                                                        class="flex-1 featured-product rounded-lg p-8 flex items-end min-h-[300px] transition-all duration-300"
                                                        :style="{ backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('${featuredProduct.image}')` }">
                                                        <div class="text-white">
                                                            <h3 class="text-2xl font-bold mb-2">{{ featuredProduct.title }}</h3>
                                                            <p class="text-sm mb-6 opacity-95">{{ featuredProduct.description }}</p>
                                                            <Button variant="default" size="md" @click="console.log('redirect to /cambio')">Comprar agora</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                            </li>
                            <li>
                                <NuxtLink to="/lojas" class="nav-link">Lojas</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/parceiros" class="nav-link">Parceiros</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/contato" class="nav-link">Contato</NuxtLink>
                            </li>
                        </ul>
                    </nav>
                    <a href="tel:+5511999999999"
                        class="hidden lg:block text-[var(--primary-color)] font-semibold text-sm">
                        (48) 3254-6200
                    </a>
                    <Button variant="default" size="sm" class="hidden md:block"
                        @click="console.log('redirect to /cambio')">
                        Comprar Online
                    </Button>
                </div>
            </div>
        </div>

        <!-- Menu Mobile Dropdown -->
        <transition name="mobile-menu">
            <div v-if="isMenuOpen" class="lg:hidden absolute top-full left-0 right-0 border border-gray-200 bg-white shadow-lg rounded-md z-40">
                <nav class="max-w-7xl mx-auto px-4 py-4">
                    <ul class="flex flex-col space-y-2 text-sm">
                        <li>
                            <NuxtLink to="/empresa" class="block px-4 py-3 text-[var(--text-base)] font-semibold rounded-lg transition-all duration-300 hover:bg-gray-50 hover:text-[var(--primary-color)] hover:translate-x-1" @click="toggleMenu">
                                A Empresa
                            </NuxtLink>
                        </li>
                        
                        <!-- Produtos com submenu -->
                        <li>
                            <button 
                                @click="toggleProductsDropdown" 
                                class="px-4 py-3 text-[var(--text-base)] font-semibold rounded-lg transition-all duration-300 hover:bg-gray-50 hover:text-[var(--primary-color)] w-full flex items-center justify-between">
                                <span>Produtos</span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    class="h-5 w-5 transition-transform duration-300"
                                    :class="{ 'rotate-180': showMenuDropdown }"
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            <!-- Submenu de Produtos -->
                            <transition name="submenu">
                                <ul v-if="showMenuDropdown" class="ml-4 mt-2 space-y-2">
                                    <li v-for="(product, index) in products" :key="index">
                                        <a 
                                            :href="product.link"
                                            class="block px-4 py-2 text-sm text-[var(--text-secondary-color)] rounded transition-all duration-300 hover:bg-gray-50 hover:text-[var(--primary-color)] hover:translate-x-1"
                                            @click="toggleMenu">
                                            {{ product.name }}
                                        </a>
                                    </li>
                                </ul>
                            </transition>
                        </li>
                        
                        <li>
                            <NuxtLink to="/lojas" class="block px-4 py-3 text-[var(--text-base)] font-semibold rounded-lg transition-all duration-300 hover:bg-gray-50 hover:text-[var(--primary-color)] hover:translate-x-1" @click="toggleMenu">
                                Lojas
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/parceiros" class="block px-4 py-3 text-[var(--text-base)] font-semibold rounded-lg transition-all duration-300 hover:bg-gray-50 hover:text-[var(--primary-color)] hover:translate-x-1" @click="toggleMenu">
                                Parceiros
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/blog" class="block px-4 py-3 text-[var(--text-base)] font-semibold rounded-lg transition-all duration-300 hover:bg-gray-50 hover:text-[var(--primary-color)] hover:translate-x-1" @click="toggleMenu">
                                Blog
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/contato" class="block px-4 py-3 text-[var(--text-base)] font-semibold rounded-lg transition-all duration-300 hover:bg-gray-50 hover:text-[var(--primary-color)] hover:translate-x-1" @click="toggleMenu">
                                Contato
                            </NuxtLink>
                        </li>
                        
                        <!-- Telefone e botão no mobile -->
                        <li class="pt-2 border-t border-gray-200">
                            <a href="tel:+5548325462000" class="block px-4 py-3 text-[var(--primary-color)] font-bold rounded-lg transition-all duration-300">
                                (48) 3254-6200
                            </a>
                        </li>
                        <li>
                            <Button variant="default" size="md" class="w-full" @click="console.log('redirect to /cambio')">
                                Comprar Online
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import Button from '../components/common/button.vue';

const $router = useRouter();
const isMenuOpen = ref(false);
const showProductsDropdown = ref(false);
const showMenuDropdown = ref(false);
const hoveredProductIndex = ref(1); // Índice do produto em hover (padrão: Transferência Internacional)
const closeTimeout = ref(null);

// Lista de produtos com suas informações
const products = [
    {
        name: 'Moedas em espécie',
        link: '/teste',
        image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=300&fit=crop',
        title: 'Moedas em Espécie',
        description: 'Compre moedas estrangeiras de forma rápida e segura.'
    },
    {
        name: 'Transferência Internacional',
        link: '/teste1',
        image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=400&h=300&fit=crop',
        title: 'Transferência Internacional',
        description: 'Envie ou faça pagamentos internacionais.'
    },
    {
        name: 'Transferência Moneygram',
        link: '/teste2',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
        title: 'Transferência Moneygram',
        description: 'Transfira dinheiro com rapidez e segurança.'
    },
    {
        name: 'Transferência Western Union',
        link: '/teste3',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop',
        title: 'Transferência Western Union',
        description: 'Envie dinheiro para todo o mundo.'
    },
    {
        name: 'Câmbio Comercial',
        link: '/teste4',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        title: 'Câmbio Comercial',
        description: 'Soluções cambiais para sua empresa.'
    },
    {
        name: 'Turcambio Multimoedas Visa Travel Money',
        link: '/teste5',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
        title: 'Cartão Multimoedas',
        description: 'Viaje com segurança usando nosso cartão pré-pago.'
    },
    {
        name: 'Seguro Viagem GTA',
        link: '#',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop',
        title: 'Seguro Viagem GTA',
        description: 'Proteção completa para sua viagem.'
    },
    {
        name: 'Chip Internacional',
        link: '#',
        image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400&h=300&fit=crop',
        title: 'Chip Internacional',
        description: 'Mantenha-se conectado em qualquer lugar do mundo.'
    }
];

// Produto em destaque (baseado no hover)
const featuredProduct = computed(() => products[hoveredProductIndex.value]);

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
    // Fecha o submenu de produtos quando fechar o menu principal
    if (!isMenuOpen.value) {
        showMenuDropdown.value = false;
    }
}

function toggleProductsDropdown() {
    showMenuDropdown.value = !showMenuDropdown.value;
}

function handleMouseEnter() {
    // Cancela qualquer fechamento pendente
    if (closeTimeout.value) {
        clearTimeout(closeTimeout.value);
        closeTimeout.value = null;
    }
    // Abre o dropdown imediatamente sem delay
    showProductsDropdown.value = true;
}

function handleMouseLeave() {
    // Cancela qualquer timeout existente
    if (closeTimeout.value) {
        clearTimeout(closeTimeout.value);
    }
    
    // Adiciona um delay generoso antes de fechar
    closeTimeout.value = setTimeout(() => {
        showProductsDropdown.value = false;
        hoveredProductIndex.value = 1; // Reset para o padrão
        closeTimeout.value = null;
    }, 300);
}

function setHoveredProduct(index) {
    hoveredProductIndex.value = index;
}

function redirectToHome() {
    $router.push('/');
}

// Cleanup ao desmontar o componente
onUnmounted(() => {
    if (closeTimeout.value) {
        clearTimeout(closeTimeout.value);
        closeTimeout.value = null;
    }
});
</script>

<style scoped>
/* Link de navegação com underline animado (não pode ser feito com Tailwind) */
.nav-link {
    position: relative;
    padding-bottom: 4px;
    transition: color 0.3s ease;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

.nav-link:hover {
    color: var(--primary-color);
}

/* Card destacado com imagem de fundo (aplicado dinamicamente via :style) */
.featured-product {
    background-size: cover;
    background-position: center;
}

/* Área do dropdown de produtos */
.products-dropdown-wrapper {
    position: relative;
}

/* Ponte invisível entre o link e o dropdown */
.dropdown-bridge {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 1rem;
    z-index: 40;
}

/* Container do dropdown */
.dropdown-container {
    position: absolute;
    top: 100%;
    left: 50%;
    padding-top: 1rem;
    z-index: 50;
    transform: translateX(-50%);
}

/* Animações do dropdown usando transitions do Vue */
.dropdown-enter-active {
    transition: opacity 0.2s ease, margin-top 0.2s ease;
}

.dropdown-leave-active {
    transition: opacity 0.15s ease, margin-top 0.15s ease;
}

.dropdown-enter-from {
    opacity: 0;
    margin-top: -10px;
}

.dropdown-enter-to {
    opacity: 1;
    margin-top: 0;
}

.dropdown-leave-from {
    opacity: 1;
    margin-top: 0;
}

.dropdown-leave-to {
    opacity: 0;
    margin-top: -10px;
}

/* Animações do menu mobile */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
    transition: all 0.3s ease;
}

.mobile-menu-enter-from {
    opacity: 0;
    transform: translateY(-20px);
}

.mobile-menu-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.mobile-menu-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.mobile-menu-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

/* Animação do submenu de produtos no mobile */
.submenu-enter-active,
.submenu-leave-active {
    transition: all 0.3s ease;
    overflow: hidden;
}

.submenu-enter-from {
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px);
}

.submenu-enter-to {
    opacity: 1;
    max-height: 500px;
    transform: translateY(0);
}

.submenu-leave-from {
    opacity: 1;
    max-height: 500px;
}

.submenu-leave-to {
    opacity: 0;
    max-height: 0;
}
</style>