<template>
    <section class="relative w-full">
        <!-- Imagem de fundo -->
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style="background-image: url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop')">
            <!-- Overlay com degradê -->
            <div class="absolute inset-0" style="background: linear-gradient(to right, var(--secondary-color), rgba(6, 21, 28, 0.8));">
            </div>
        </div>

        <!-- Conteúdo -->
        <div class="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <header class="text-center mb-12 md:mb-14">
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary-color)] mb-5 leading-tight">
                    Encontre a&nbsp;loja mais próxima de&nbsp;você!
                </h2>
                <div
                    class="h-0.5 w-24 bg-[var(--primary-color)] mx-auto mb-6">
                </div>
                <span class="block text-sm md:text-base text-gray-300 mt-2 max-w-2xl mx-auto leading-relaxed">
                    Encontre a&nbsp;unidade mais próxima e&nbsp;aproveite as&nbsp;melhores taxas.
                </span>
            </header>
            <div class="flex justify-center">
                <Button variant="default" size="sm" class="w-full sm:w-auto min-w-[200px] text-base md:text-lg px-8 py-3">
                    Procurar Lojas
                </Button>
            </div>
        </div>
    </section>
</template>

<script setup>
import Button from '~/components/common/button.vue';

</script>   