<template>
    <footer class="bg-[var(--secondary-color)] text-white py-12 border-t border-[var(--primary-color)]">
        <div class="max-w-7xl mx-auto px-4">
            <nav class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" aria-label="Links do rodapé">

                <section class="flex justify-center">
                    <div class="flex flex-col items-center">
                        <img src="/images/turcambio-logo-white.webp" class="h-auto w-52" alt="Logo Turcambio"></img>
                        <div class="grid grid-cols-2 gap-x-12 mt-8 pb-4">
                            <img src="/images/receita-logo-gray.webp" class="h-auto w-36" alt="Logo da Receita Federal">
                            <img src="/images/coaf-logo-gray.webp" class="h-auto w-36" alt="Logo da COAF">
                            <img src="/images/banco-central-logo-gray.webp" class="h-auto w-36"
                                alt="Logo do Banco Central do Brasil">
                            <img src="/images/abracan-logo-gray.webp" class="h-auto w-36" alt="Logo da Abracan">
                        </div>
                        <img src="/images/abracan-logo.webp" class="h-auto w-24 mb-8" alt="Logo da Abracan">
                        <div class="flex justify-center gap-2.5">
                            <!-- Facebook -->
                            <a href="https://www.facebook.com/turcambio" target="_blank" rel="noopener noreferrer"
                                aria-label="Facebook"
                                class="w-10 h-10 border border-white/50 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] hover:border-[var(--primary-color)] transition-all duration-300">
                                <svg class="w-5 h-" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>

                            <!-- Instagram -->
                            <a href="https://www.instagram.com/turcambio" target="_blank" rel="noopener noreferrer"
                                aria-label="Instagram"
                                class="w-10 h-10 border border-white/50 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] hover:border-[var(--primary-color)] transition-all duration-300">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                                </svg>
                            </a>

                            <!-- LinkedIn -->
                            <a href="https://www.linkedin.com/company/turcambio" target="_blank"
                                rel="noopener noreferrer" aria-label="LinkedIn"
                                class="w-10 h-10 border border-white/50 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] hover:border-[var(--primary-color)] transition-all duration-300">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                <!-- Produtos -->
                <section>
                    <header class="mb-4">
                        <h2 class="text-2xl mb-2">Produtos</h2>
                        <div class="bg-[var(--primary-color)] w-14 h-1" aria-hidden="true"></div>
                    </header>
                    <ul class="space-y-1">
                        <li v-for="produto in produtos" :key="produto.name">
                            <NuxtLink
                                class="block px-4 py-1.5 text-sm rounded-sm transition-all duration-300 hover:bg-white/20 hover:text-[var(--primary-color)] hover:translate-x-1"
                                :to="produto.link">{{ produto.name }}</NuxtLink>
                        </li>
                    </ul>
                </section>

                <!-- Institucional -->
                <section>
                    <header class="mb-4">
                        <h2 class="text-2xl mb-2">Institucional</h2>
                        <div class="bg-[var(--primary-color)] w-14 h-1" aria-hidden="true"></div>
                    </header>
                    <ul class="space-y-1">
                        <li v-for="institucional in institucional" :key="institucional.name">
                            <NuxtLink
                                class="block px-4 py-1.5 text-sm rounded-sm transition-all duration-300 hover:bg-white/20 hover:text-[var(--primary-color)] hover:translate-x-1"
                                :to="institucional.link">{{ institucional.name }}</NuxtLink>
                        </li>

                    </ul>
                </section>

                <!-- Atendimento -->
                <section>
                    <header class="mb-4">
                        <h2 class="text-2xl mb-2">Atendimento</h2>
                        <div class="bg-[var(--primary-color)] w-14 h-1" aria-hidden="true"></div>
                    </header>
                    <address class="not-italic space-y-4">
                        <div class="flex flex-col text-sm">
                            <strong class="text-[var(--primary-color)]">Mesa de Operações</strong>
                            <a href="tel:+554832546200"
                                class="font-semibold hover:underline hover:text-[var(--primary-color)] transition-colors"
                                aria-label="Ligar para Mesa de Operações">
                                (48) 3254-6200
                            </a>
                        </div>

                        <div class="flex flex-col text-sm">
                            <strong class="text-[var(--primary-color)]">WhatsApp</strong>
                            <a href="https://wa.me/554832546200"
                                class="font-semibold hover:underline hover:text-[var(--primary-color)] transition-colors"
                                target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp">
                                (48) 3254-6200
                            </a>
                        </div>

                        <div class="flex flex-col text-sm">
                            <strong class="text-[var(--primary-color)]">Ouvidoria</strong>
                            <a href="tel:08007742006"
                                class="font-semibold hover:underline hover:text-[var(--primary-color)] transition-colors"
                                aria-label="Ligar para Ouvidoria">
                                0800-774-2006
                            </a>
                            <a href="mailto:ouvidoria@turcambio.com.br"
                                class="font-semibold hover:underline hover:text-[var(--primary-color)] transition-colors"
                                aria-label="Enviar email para Ouvidoria">
                                ouvidoria@turcambio.com.br
                            </a>
                        </div>

                        <div class="flex flex-col text-sm">
                            <strong class="text-[var(--primary-color)]">Canal de Denúncia</strong>
                            <a class="font-semibold inline-flex items-center gap-1 hover:underline hover:text-[var(--primary-color)] transition-colors"
                                href="https://siscompliance.com.br/turcambio/#/home" target="_blank"
                                rel="noopener noreferrer" aria-label="Acessar Canal de Denúncia (abre em nova aba)">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" aria-hidden="true">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                                <span>Clique Aqui</span>
                            </a>
                        </div>
                    </address>
                </section>
            </nav>
        </div>
    </footer>
    <!-- Copyright -->
    <div class="bg-[var(--secondary-color)] border-t border-white/20 px-12 md:px-0 py-4 text-center">
        <p class="text-sm text-white/80">
            &copy; {{ new Date().getFullYear() }} Turcambio | BACEN: 29991/0001 | Av. Dr. João Rimsa, sala 705, 601
            - Centro - Imbituba - | CNPJ: 15.482.499/0001-98
        </p>
    </div>
</template>

<script setup>
const produtos = ref([
    {
        name: 'Moedas em espécie',
        link: '/teste',
    },
    {
        name: 'Transferência Internacional',
        link: '/teste1',
    },
    {
        name: 'Transferência Moneygram',
        link: '/teste2',
    },
    {
        name: 'Transferência Western Union',
        link: '/teste3',
    },
    {
        name: 'Câmbio Comercial',
        link: '/teste4',
    },
    {
        name: 'Turcambio Multimoedas Visa Travel Money',
        link: '/teste5',
    },
]);

const institucional = ref([
    {
        name: 'A Empresa',
        link: '/teste',
    },
    {
        name: 'Blog',
        link: '/teste1',
    },
    {
        name: 'Onde Encontrar',
        link: '/teste2',
    },
    {
        name: 'Contato',
        link: '/teste3',
    },
    {
        name: 'Seja um parceiro',
        link: '/teste4',
    },
    {
        name: 'Termos de uso loja virtual',
        link: '/teste5',
    },
    {
        name: 'Termos de uso MoneyGram',
        link: '/teste6',
    },
    {
        name: 'Lei Geral de Proteção de Dados e Política de Privacidade',
        link: '/teste7',
    },
    {
        name: 'Política de Segurança da Informação e Cibernética',
        link: '/teste8',
    },
    {
        name: 'Política de Responsabilidade Socioambiental',
        link: '/teste9',
    },
]);
</script>

<style scoped>
.nav-link {
    position: relative;
    padding-bottom: 4px;
    transition: color 0.3s ease;
}
</style>