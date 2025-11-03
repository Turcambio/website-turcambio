<template>
    <div class="bg-[var(--secondary-color)] text-white py-2">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex items-center justify-center gap-2" style="font-size: var(--text-sm)">
                <span>Já é nosso cliente?</span>
                <NuxtLink to="/login" class="font-semibold hover:underline">
                    Entrar
                </NuxtLink>
                <span>|</span>
                <NuxtLink to="/cadastro" class="font-semibold hover:underline">
                    Cadastre-se
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
