<template>
    <section class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <header class="text-center mb-12 md:mb-16">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary-color)] mb-5 leading-tight">
                Conheça nossos Produtos
            </h2>
            <div
                class="h-0.5 w-24 bg-[var(--primary-color)] mx-auto mb-6">
            </div>
            <span class="block text-sm md:text-base text-gray-500 mt-2 max-w-2xl mx-auto leading-relaxed">
                Rápido, seguro e&nbsp;com as&nbsp;melhores taxas do&nbsp;mercado.
            </span>
        </header>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
            <div v-for="produto in produtos" :key="produto.nome" @click="executeAction(produto)"
                class="border-2 border-[var(--primary-color)] rounded-lg p-5 md:p-6 text-center flex flex-col h-full cursor-pointer hover:-translate-y-1 transition-all duration-300">
                <div class="mb-4 md:mb-5">
                    <img :src="produto.icon" alt="Ícone do produto" class="w-16 h-16 sm:w-20 sm:h-20 mx-auto">
                </div>
                <h3 class="text-lg sm:text-xl font-bold text-[var(--primary-color)] mb-3 min-h-[3rem] flex items-center justify-center">
                    {{ produto.nome }}
                </h3>
                <p class="text-sm md:text-base text-gray-700 leading-relaxed">{{ produto.descricao }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
const router = useRouter();

const produtos = [
    {
        nome: 'Moedas em espécie',
        descricao: 'Operamos com as principais moedas do mundo, além de produtos e serviços para atender a demanda de quem viaja ao exterior.',
        icon: '/images/icons/moedas-especie-icon.webp',
        link: 'https://www.youtube.com',
        action: null
    },
    {
        nome: 'Transferência Internacional',
        descricao: 'A transferência pode ser feita para manutenção de estrangeiros no exterior ou para presentear um familiar.',
        icon: '/images/icons/transferencia-internacional-icon.webp',
        link: 'https://www.youtube.com',
        action: null
    },
    {
        nome: 'Transferência Moneygram',
        descricao: 'Envie dinheiro sem precisar de conta bancária para mais de 200 países em minutos!',
        icon: '/images/icons/transferencia-moneygram-icon.webp',
        link: 'https://www.youtube.com',
        action: null
    },
    {
        nome: 'Transferência Western Union',
        descricao: 'Envie Dinheiro para o Mundo Todo com Rapidez. Segurança com uma das líderes globais em transferências internacionais',
        icon: '/images/icons/transferencia-western-union-icon.webp',
        link: 'https://www.youtube.com',
        action: null
    },
    {
        nome: 'Câmbio Comercial',
        descricao: 'Pagamento de importações e recebimento de exportações com as melhores taxas de câmbio do mercado.',
        icon: '/images/icons/cambio-comercial-icon.webp',
        link: 'https://www.youtube.com',
        action: null
    },
    {
        nome: 'Turcambio Multimoedas Visa Travel Money',
        descricao: 'Com o Visa Travel Money da Turcambio, você tem mais praticidade e segurança em suas viagens!',
        icon: '/images/icons/turcambio-multimoedas-multy-travel-money-icon.webp',
        link: 'https://www.youtube.com',
        action: null
    },
    {
        nome: 'Seguro Viagem GTA',
        descricao: 'A GTA apresenta um conjunto de serviços de assistência para tornar sua viagem mais tranquila com mais proteção para você e os seus acompanhantes.',
        icon: '/images/icons/seguro-viagem-gta-icon.webp',
        link: 'https://www.youtube.com',
        action: null
    },
    {
        nome: 'Chip Internacional',
        descricao: 'Chip Internacional! Fácil, rápido e 100% online. Cheque o Chip conectado em qualquer lugar do mundo com o Chip Internacional Turcambio!',
        icon: '/images/icons/chip-internacional-icon.webp',
        link: null,
        action: 'whatsapp'
    },
];

async function executeAction(produto) {
    if (produto.action === 'whatsapp') {
        enviarWhatsApp(produto.nome);
    } else if (produto.link) {
        await navigateTo(produto.link, { external: true });
    }
}

async function enviarWhatsApp(nomeProduto) {
    const mensagem = `Olá, tenho interesse no produto "${nomeProduto}". Vi a informação no site e gostaria de saber mais`;
    const mensagemCodificada = encodeURIComponent(mensagem);
    await navigateTo(`https://wa.me/5548325462000?text=${mensagemCodificada}`, { external: true });
}
</script>