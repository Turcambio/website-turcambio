<template>
    <!-- Seção de Blog Posts -->
    <section class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        <!-- Cabeçalho da Seção -->
        <header class="text-center mb-12 md:mb-16">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary-color)] mb-5 leading-tight">
                Blog Turcambio
            </h2>
            <div class="h-0.5 w-24 bg-[var(--primary-color)] mx-auto mb-6" 
                aria-hidden="true">
            </div>
            <span class="block text-sm md:text-base text-gray-500 mt-2 max-w-2xl mx-auto leading-relaxed">
                Informações relevantes para suas operações de&nbsp;câmbio.
            </span>
        </header>

        <!-- Container do Carrossel -->
        <div class="relative px-2 sm:px-12 md:px-14" role="region" aria-label="Carrossel de posts do blog">
            
            <!-- Botão: Slide Anterior -->
            <button 
                v-if="totalDots > 1"
                @click="previousSlide" 
                :disabled="currentIndex === 0"
                class="absolute left-0 sm:-left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[var(--primary-color)] text-[var(--primary-color)] hover:text-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[var(--primary-color)]"
                aria-label="Slide anterior">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <!-- Botão: Próximo Slide -->
            <button 
                v-if="totalDots > 1"
                @click="nextSlide" 
                :disabled="currentIndex >= maxIndex"
                class="absolute right-0 sm:-right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[var(--primary-color)] text-[var(--primary-color)] hover:text-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[var(--primary-color)]"
                aria-label="Próximo slide">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <!-- Container dos Cards com Overflow -->
            <div class="overflow-hidden py-2 md:py-3">
                <!-- Wrapper do Slider com Transform -->
                <div 
                    class="flex gap-4 sm:gap-5 md:gap-6 lg:gap-8 transition-transform duration-500 ease-out"
                    :style="{ transform: `translateX(-${currentIndex * slideWidth}%)` }">
                    
                    <!-- Card Individual de Blog Post -->
                    <article 
                        v-for="post in blogPosts" 
                        :key="post.id"
                        class="flex-shrink-0 w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4rem)/3)]"
                        @click="console.log('redirect to /blog')">
                        
                        <!-- Container do Card -->
                        <div class="h-full bg-white rounded-lg overflow-hidden cursor-pointer flex flex-col hover:-translate-y-1 transition-all duration-300">
                            
                            <!-- Container da Imagem -->
                            <figure class="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden flex-shrink-0">
                                <img 
                                    :src="post.image" 
                                    :alt="post.title"
                                    class="w-full h-full object-cover"
                                    loading="lazy">
                                
                                <!-- Badge de Categoria -->
                                <span class="absolute top-3 left-3 bg-[var(--primary-color)] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md" 
                                    role="status">
                                    {{ post.category }}
                                </span>
                            </figure>

                            <!-- Conteúdo do Card -->
                            <div class="p-5 md:p-6 lg:p-7 flex flex-col flex-grow">
                                
                                <!-- Data de Publicação -->
                                <time class="flex items-center text-gray-500 text-xs sm:text-sm mb-3 md:mb-4" 
                                    :datetime="post.date">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 flex-shrink-0" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {{ formatDate(post.date) }}
                                </time>

                                <!-- Título do Post -->
                                <h3 class="text-base sm:text-lg md:text-xl font-bold text-[var(--secondary-color)] mb-3 md:mb-4 line-clamp-2 leading-tight hover:text-[var(--primary-color)] transition-colors duration-300">
                                    {{ post.title }}
                                </h3>

                                <!-- Descrição/Resumo -->
                                <p class="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3 flex-grow mb-4 md:mb-5">
                                    {{ post.description }}
                                </p>

                                <!-- Rodapé com Link -->
                                <div class="pt-4 border-t border-gray-100 mt-auto">
                                    <span class="text-[var(--primary-color)] font-semibold text-sm sm:text-base hover:underline inline-flex items-center transition-all duration-200 group">
                                        Ler mais
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            <!-- Indicadores de Paginação (Dots) -->
            <nav v-if="totalDots > 1" class="flex justify-center gap-2 sm:gap-3 mt-8 md:mt-10" aria-label="Navegação do carrossel">
                <button 
                    v-for="(dot, index) in totalDots" 
                    :key="index" 
                    @click="goToSlide(index)"
                    :class="[
                        'h-2.5 sm:h-3 rounded-full transition-all duration-300',
                        currentIndex === index
                            ? 'bg-[var(--primary-color)] w-8 sm:w-10'
                            : 'bg-gray-300 hover:bg-gray-400 w-2.5 sm:w-3'
                    ]" 
                    :aria-label="`Ir para slide ${index + 1}`"
                    :aria-current="currentIndex === index">
                </button>
            </nav>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

// Estado do carousel
const currentIndex = ref(0);
const autoPlayInterval = ref(null);
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024);

// Dados dos posts do blog
const blogPosts = ref([
    {
        id: 1,
        title: 'Dólar atinge nova cotação: entenda o impacto no mercado',
        description: 'A moeda americana alcançou novos patamares nesta semana. Veja como isso afeta suas operações de câmbio e o que esperar para os próximos dias.',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
        category: 'Mercado Cambial',
        date: '2025-10-10',
        link: '#'
    },
    {
        id: 2,
        title: 'Como planejar sua viagem internacional com o câmbio atual',
        description: 'Dicas essenciais para economizar na hora de comprar moedas estrangeiras e aproveitar melhor seu orçamento de viagem.',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
        category: 'Viagens',
        date: '2025-10-08',
        link: '#'
    },
    {
        id: 3,
        title: 'Euro valoriza frente ao real: saiba quando comprar',
        description: 'A moeda europeia tem mostrado força nas últimas semanas. Análise completa sobre o melhor momento para realizar sua operação de câmbio.',
        image: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?w=600&h=400&fit=crop',
        category: 'Análise de Mercado',
        date: '2025-10-05',
        link: '#'
    },
    {
        id: 4,
        title: 'Cartão pré-pago internacional: vantagens e cuidados',
        description: 'Conheça todos os benefícios de usar cartão pré-pago em suas viagens e saiba como escolher a melhor opção para seu perfil.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        category: 'Produtos',
        date: '2025-10-03',
        link: '#'
    },
    {
        id: 5,
        title: 'Remessas internacionais: guia completo para enviar dinheiro',
        description: 'Tudo o que você precisa saber sobre transferências internacionais, documentação necessária e prazos de envio.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
        category: 'Serviços',
        date: '2025-10-01',
        link: '#'
    },
    {
        id: 6,
        title: 'Novo acordo cambial Brasil-EUA: o que muda para você',
        description: 'Entenda as mudanças recentes nas regulamentações e como elas podem impactar suas operações de câmbio.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
        category: 'Regulamentação',
        date: '2025-09-28',
        link: '#'
    }
]);

// Número de cards visíveis por tela
const cardsPerView = computed(() => {
    if (windowWidth.value < 768) return 1;
    if (windowWidth.value < 1024) return 2;
    return 3;
});

// Largura do slide em %
const slideWidth = computed(() => {
    return 100 / cardsPerView.value;
});

// Índice máximo
const maxIndex = computed(() => {
    return Math.max(0, blogPosts.value.length - cardsPerView.value);
});

// Total de dots
const totalDots = computed(() => {
    return maxIndex.value + 1;
});

// Navega para slide anterior
const previousSlide = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--;
        resetAutoPlay();
    }
};

// Navega para próximo slide
const nextSlide = () => {
    if (currentIndex.value < maxIndex.value) {
        currentIndex.value++;
    } else {
        currentIndex.value = 0;
    }
    resetAutoPlay();
};

// Vai para slide específico
const goToSlide = (index) => {
    currentIndex.value = index;
    resetAutoPlay();
};

// Formata data para pt-BR
const formatDate = (dateString) => {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
};

// Inicia auto-play
const startAutoPlay = () => {
    if (totalDots.value > 1) {
        autoPlayInterval.value = setInterval(() => {
            nextSlide();
        }, 8000);
    }
};

// Reseta auto-play
const resetAutoPlay = () => {
    if (autoPlayInterval.value) {
        clearInterval(autoPlayInterval.value);
        autoPlayInterval.value = null;
    }
    startAutoPlay();
};

// Handler de resize com debounce
let resizeTimeout = null;
const handleResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        windowWidth.value = window.innerWidth;
        if (currentIndex.value > maxIndex.value) {
            currentIndex.value = maxIndex.value;
        }
    }, 150);
};

onMounted(() => {
    startAutoPlay();
    if (typeof window !== 'undefined') {
        window.addEventListener('resize', handleResize);
    }
});

onUnmounted(() => {
    if (autoPlayInterval.value) {
        clearInterval(autoPlayInterval.value);
    }
    if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
    }
    if (resizeTimeout) {
        clearTimeout(resizeTimeout);
    }
});
</script>

