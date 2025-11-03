<template>
    <section
        class="relative w-full flex items-center min-h-[600px] md:min-h-[700px] border-b border-[var(--primary-color)]">
        <!-- Imagem de fundo -->
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style="background-image: url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop')">
            <!-- Overlay escuro opcional TODO: Incluir imagem de fundo depois dentro do projeto e tirar da WEB-->
            <div class="absolute inset-0" style="background: linear-gradient(to right, var(--secondary-color), rgba(6, 21, 28, 0.8));">
            </div>
        </div>

        <!-- Conteúdo -->
        <div class="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div class="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
                <!-- Coluna de textos -->
                <div class="text-white space-y-6 md:space-y-8 text-center md:text-left">
                    <p class="text-xs sm:text-sm text-gray-300 mb-3 uppercase tracking-wider font-semibold">
                        Melhor Taxa do&nbsp;Mercado
                    </p>

                    <!-- Título Principal -->
                    <div>
                        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
                            Câmbio Simples<br class="hidden sm:block" /><span class="sm:hidden"> </span>e&nbsp;Seguro
                        </h1>
                        <div class="mx-auto md:mx-0 h-0.5 w-20 bg-[var(--primary-color)] rounded-full"></div>
                    </div>

                    <!-- Descrição -->
                    <p class="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-md mx-auto md:mx-0">
                        A&nbsp;melhor taxa de&nbsp;câmbio para suas operações. Rápido, transparente e&nbsp;com toda a&nbsp;segurança que você precisa.
                    </p>

                    <!-- Parceiros -->
                    <div class="pt-4">
                        <p class="text-xs sm:text-sm text-gray-300 mb-4 md:mb-5 uppercase tracking-wider font-semibold">
                            Parceiros Oficiais
                        </p>
                        <div class="flex items-center gap-6 md:gap-8 flex-wrap justify-center md:justify-start">
                            <a href="https://www.moneygram.com/br/pt/" target="_blank" rel="noopener noreferrer">
                                <img src="/images/moneygram-logo.webp"
                                    class="h-12 sm:h-14 md:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                                    alt="Moneygram Logo">
                            </a>
                            <a href="https://www.westernunion.com/br/pt/home.html" target="_blank"
                                rel="noopener noreferrer">
                                <img src="/images/western-union-logo.webp"
                                    class="h-12 sm:h-14 md:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                                    alt="Western Union Logo">
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Coluna do formulário -->
                <FormBuySell />
            </div>
        </div>
    </section>
</template>

<script setup>
import FormBuySell from '~/components/form-buy-sell.vue';

</script>