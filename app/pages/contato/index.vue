<template>
    <BannerSection title="ENTRE EM CONTATO" :breadcrumb="breadcrumb" />
    <section class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex flex-col gap-8">
                <div>
                    <div class="mb-2">
                        <h3 class="text-xl md:text-2xl font-bold text-[var(--primary-color)]">Telefone</h3>
                        <a href="tel:+5548325462000"
                            class="text-xl font-bold hover:underline text-[var(--secondary-color)] hover:text-[var(--primary-color)] duration-300 transition-colors cursor-pointer">
                            (48) 3254-6200
                        </a>
                    </div>
                    <p>Nosso horário de atendimento é de segunda à sexta, das 9h ás 18h, mas também pode variar de
                        acordo
                        com cada loja. Consulte os horários das lojas.</p>
                </div>
                <div>
                    <div class="mb-2">
                        <h3 class="text-xl md:text-2xl font-bold text-[var(--primary-color)]">Atendimento Online</h3>
                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                aria-hidden="true">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            <span @click="redirectToWhatsapp"
                                class="text-xl font-bold hover:underline text-[var(--secondary-color)] hover:text-[var(--primary-color)] duration-300 transition-colors cursor-pointer">Clique
                                Aqui</span>
                        </div>
                    </div>
                    <p>Estamos online das 9:00 ás 18:00. Em horário diferente, sua mensagem será recebida e retornamos o
                        contato o mais breve possível.</p>
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <h3 class="text-xl md:text-2xl font-bold text-[var(--primary-color)]">Envie uma mensagem</h3>
                <!-- Nome e Email lado a lado -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input variant="default" v-model="form.nome" placeholder="Nome" />
                    <Input variant="default" v-model="form.email" placeholder="Email" />
                </div>

                <!-- Telefone e Cidade lado a lado -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input variant="default" v-model="form.telefone" placeholder="Telefone" />
                    <Select variant="default" v-model="form.cidade">
                        <option value="" disabled selected>Cidade</option>
                        <option value="imbituba">Imbituba</option>
                        <option value="ararangua">Araranguá</option>
                        <option value="criciuma">Criciúma</option>
                        <option value="blumenau">Blumenau</option>
                        <option value="florianopolis">Florianópolis</option>
                    </Select>
                </div>

                <!-- Assunto (largura completa) -->
                <Input variant="default" v-model="form.assunto" placeholder="Assunto" />

                <!-- Mensagem (largura completa) -->
                <Textarea variant="default" v-model="form.mensagem" placeholder="Mensagem" :rows="6" />

                <!-- Botão -->
                <Button variant="default" size="md" class="w-full">Enviar</Button>
            </div>
        </div>
    </section>



    <!-- PERGUNTAS FREQUENTES -->
    <section class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <!-- Título -->
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
            Perguntas frequentes
            <div class="w-24 h-1 bg-[#7ec242] mx-auto mt-3"></div>
        </h2>

        <!-- Grid: Sidebar + FAQ -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <!-- Sidebar de Categorias -->
            <div class="lg:col-span-1">
                <div class="flex flex-col gap-2">
                    <button 
                        v-for="category in categories" 
                        :key="category.id"
                        @click="activeCategory = category.id"
                        :class="[
                            'px-4 py-3 text-left font-semibold transition-all duration-300 cursor-pointer rounded-md',
                            activeCategory === category.id 
                                ? 'bg-[var(--primary-color)] text-white' 
                                : 'bg-[var(--primary-color)] text-white opacity-70 hover:opacity-100'
                        ]"
                    >
                        {{ category.name }}
                    </button>
                </div>
            </div>

            <!-- FAQ Accordion -->
            <div class="lg:col-span-3">
                <div class="flex flex-col gap-4">
                    <div 
                        v-for="faq in filteredFaqs" 
                        :key="faq.id"
                        class="border border-gray-200 rounded-md"
                    >
                        <button
                            @click="toggleFaq(faq.id)"
                            :class="[
                                'w-full px-6 py-4 flex justify-between items-center text-left transition-colors duration-300 rounded-t-md',
                                activeFaq === faq.id ? 'bg-[var(--primary-color)] text-white' : 'bg-white hover:bg-gray-50'
                            ]"
                        >
                            <span class="font-medium">{{ faq.question }}</span>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                class="h-5 w-5 transition-transform duration-300 flex-shrink-0 ml-4"
                                :class="{ 'rotate-180': activeFaq === faq.id }"
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <transition
                            name="faq-slide"
                            @enter="onEnter"
                            @after-enter="onAfterEnter"
                            @leave="onLeave"
                        >
                            <div 
                                v-show="activeFaq === faq.id"
                                class="bg-[#1a1a1a] text-white px-6 py-4 overflow-hidden rounded-b-md"
                            >
                                <p class="m-0" v-html="faq.answer"></p>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
import { ref, computed } from 'vue';
import BannerSection from '~/components/common/banner-section.vue';
import Input from '~/components/common/input.vue';
import Select from '~/components/common/select.vue';
import Textarea from '~/components/common/textarea.vue';
import Button from '~/components/common/button.vue';



const form = ref({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    assunto: '',
    mensagem: ''
});

const breadcrumb = [
    {
        name: 'Início',
        link: '/'
    },
    {
        name: 'Contato',
        link: '/contato'
    }
];

const redirectToWhatsapp = () => {
    const mensagem = 'Olá, estou no site da Turcambio e gostaria de mais informações.'
    const mensagemCodificada = encodeURIComponent(mensagem);
    window.open(`https://wa.me/5548325462000?text=${mensagemCodificada}`, '_blank');
};

// FAQ - Categorias
const categories = ref([
    { id: 'geral', name: 'Perguntas Gerais' },
    { id: 'moedas', name: 'Moedas em espécie' },
    { id: 'moneygram', name: 'Transferência Moneygram' },
    { id: 'internacional', name: 'Transferência Internacional' },
    { id: 'comercial', name: 'Câmbio Comercial' },
    { id: 'travelcard', name: 'Turcambio Multimoedas Travelcard' }
]);

const activeCategory = ref('geral');
const activeFaq = ref(null);

// FAQ - Perguntas e Respostas
const faqs = ref([
    // PERGUNTAS GERAIS
    {
        id: 1,
        category: 'geral',
        question: 'A Turcambio possui um canal de denúncia?',
        answer: 'Sim, caso você encontre alguma irregularidade, você pode fazer uma denúncia anônima <a href="https://siscompliance.com.br/turcambio/#/home" target="_blank" class="text-[var(--primary-color)] underline hover:opacity-80">clicando aqui</a>.'
    },
    {
        id: 2,
        category: 'geral',
        question: 'Quais as formas de pagamento aceitas?',
        answer: 'O pagamento deve ser feito via PIX, transferência bancária (TED) ou entre contas do mesmo banco. Conforme exigência do Banco Central, o valor creditado para a Turcambio deve sair da conta do titular do contrato de câmbio.'
    },
    {
        id: 3,
        category: 'geral',
        question: 'Quais os dados bancários para pagamento',
        answer: 'Você verá a chave PIX ou os dados bancários no momento de finalizar a sua compra. Caso tenha feito por telefone, chat ou WhatsApp, você receberá as informações do atendente.'
    },
    {
        id: 4,
        category: 'geral',
        question: 'Posso pagar via boleto?',
        answer: 'Não, o pagamento via boleto não é aceito.'
    },
    {
        id: 5,
        category: 'geral',
        question: 'Posso pagar via PayPal ou PagSeguro?',
        answer: 'Não, somente via TED.'
    },
    {
        id: 6,
        category: 'geral',
        question: 'Como ativar o cartão?',
        answer: 'O cartão é ativado pelo app da Turcambio: <a href="https://play.google.com/store" target="_blank" class="text-[var(--primary-color)] underline hover:opacity-80">MULTIMOEDAS PLAY STORE (ANDROID)</a> ou <a href="https://apps.apple.com/br/app/brasil-pr%C3%A9-pagos/id908400145" target="_blank" class="text-[var(--primary-color)] underline hover:opacity-80">App Store (IOS)</a>. Após ativação você acompanha seu saldo e extrato pela mesma plataforma.'
    },
    {
        id: 7,
        category: 'geral',
        question: 'Quais taxas para utilizar o cartão/saque?',
        answer: 'Os caixas eletrônicos podem determinar limites máximos e mínimos.'
    },
    {
        id: 8,
        category: 'geral',
        question: 'Onde posso sacar?',
        answer: 'É possível sacar em ATM credenciado Visa, <a href="https://www.visa.com/atmlocator/#(page:home)" target="_blank" class="text-[var(--primary-color)] underline hover:opacity-80">clicando aqui você localiza os caixas mais próximos</a>! O saque deve ser feito optando-se pela função "CRÉDITO" no exterior ou Brasil em caixas eletrônicos credenciados Visa (alguns caixas eletrônicos poderão requerer o uso na função "DÉBITO").'
    },
    {
        id: 9,
        category: 'geral',
        question: 'Caixa eletrônico solicitou senha de 6 dígitos, o que faço?',
        answer: 'Caso o caixa eletrônico solicite uma senha de 6 (seis) dígitos é preciso digitar a sua senha de 4 (quatro) dígitos e confirmar a Operação. Caso o caixa eletrônico não aceite a Operação, recomendamos que o procure outro caixa eletrônico para realizar com segurança o saque.'
    },
    {
        id: 10,
        category: 'geral',
        question: 'O cartão é débito ou crédito?',
        answer: 'O Cartão deve ser utilizado na função "CRÉDITO" de acordo com a função habilitada, alguns locais podem solicitar a opção "DÉBITO".'
    },
    {
        id: 11,
        category: 'geral',
        question: 'Qual a senha do cartão?',
        answer: 'O titular do cartão cria uma senha e 4 (quatro) dígitos no momento da ativação do cartão pelo aplicativo indicado.'
    },
    
    // MOEDAS EM ESPÉCIE
    {
        id: 12,
        category: 'moedas',
        question: 'Em quanto tempo receberei a moeda em espécie por delivery?',
        answer: 'Dólar até um dia útil, Euro em até 3 dias úteis e demais moedas até 5 dias úteis. Dessa forma recomenda-se a consulta em nossos canais de atendimento para saber o prazo de exato de entrega.'
    },
    {
        id: 13,
        category: 'moedas',
        question: 'O que é IOF?',
        answer: 'IOF é a sigla de Imposto sobre Operações de Crédito, Câmbio e Seguros. Para comprar moedas estrangeiras em espécie o imposto é de 1.10% referente ao total da compra.'
    },
    
    // TRANSFERÊNCIA MONEYGRAM
    {
        id: 14,
        category: 'moneygram',
        question: 'Quanto tempo leva para enviar dinheiro utilizando o sistema MoneyGram?',
        answer: 'Após o envio do dinheiro em uma de nossas lojas, o dinheiro fica disponível em 10 minutos* para ser retirado em um agente autorizado MoneyGram. Este prazo está sujeito aos horários de funcionamento do agente local, considerando feriados, leis, regulamentações locais e fuso horário.'
    },
    {
        id: 15,
        category: 'moneygram',
        question: 'Preciso ter conta bancária para enviar dinheiro via MoneyGram?',
        answer: 'Não é necessário ter conta bancária para enviar o dinheiro via MoneyGram.'
    },
    {
        id: 16,
        category: 'moneygram',
        question: 'Qual o limite para enviar dinheiro via MoneyGram?',
        answer: 'O limite máximo para enviar dinheiro utilizando a MoneyGram é de US$ 3.000,00.'
    },
    {
        id: 17,
        category: 'moneygram',
        question: 'Quem irá receber o dinheiro pode escolher em que moeda retirar?',
        answer: 'Não. A moeda deve ser escolhida no momento do envio e não do recebimento do dinheiro.'
    },
    
    // TRANSFERÊNCIA INTERNACIONAL
    {
        id: 18,
        category: 'internacional',
        question: 'Quanto tempo para enviar dinheiro ou pagamento internacional?',
        answer: 'O valor pode variar de país, mas geralmente pode demorar até 5 dias (confirmar essa informação) para enviar dinheiro ou efetuar algum pagamento fora do Brasil.'
    },
    {
        id: 19,
        category: 'internacional',
        question: 'Quais as taxas para enviar dinheiro ou pagamento internacional?',
        answer: 'A tarifa para enviar dinheiro ou pagamento internacional é de US$ 15,00 para remessas feitas em dólares e US$ 25,00 para outras moedas.'
    },
    {
        id: 20,
        category: 'internacional',
        question: 'O banco no exterior pode cobrar alguma taxa?',
        answer: 'Sim. Alguns bancos cobram tarifas extras para receber o dinheiro ou pagamento internacional. Para saber mais consulte o banco do recebedor.'
    },
    
    // CÂMBIO COMERCIAL
    {
        id: 21,
        category: 'comercial',
        question: 'Em quanto tempo receberei a moeda em espécie por delivery?',
        answer: 'Geralmente moedas como Euro e Dólar tem disponibilidade de 1 dia útil, dependendo do horário da compra. Para outras moedas estrangeiras em espécie pode variar conforme disponibilidade na região que você irá comprar. Dessa forma recomenda-se a consulta em nossos canais de atendimento para saber o prazo de exato de entrega.'
    },
    {
        id: 22,
        category: 'comercial',
        question: 'O que é IOF?',
        answer: 'IOF é a sigla de Imposto sobre Operações de Crédito, Câmbio e Seguros. Para comprar moedas estrangeiras em espécie o imposto é de 1.10% referente ao total da compra. Na Turcambio as taxas apresentadas em todos canais de atendimento já possuem o IOF incluso, para você saber o quanto pagará no final na compra da moeda estrangeira.'
    },
    
    // TURCAMBIO MULTIMOEDAS TRAVELCARD
    {
        id: 23,
        category: 'travelcard',
        question: 'Como posso consultar o saldo/extrato do meu cartão VTM Turcambio?',
        answer: 'Para consultar o saldo/extrato você pode acessar <a href="https://card.turcambio.com.br" target="_blank" class="text-[var(--primary-color)] underline hover:opacity-80">card.turcambio.com.br</a>, digitar o número do cartão e data de nascimento. Se preferir, pode baixar o App Turcambio para Android ou iPhone/iPad.'
    },
    {
        id: 24,
        category: 'travelcard',
        question: 'Como posso utilizar meu cartão VTM da Turcambio?',
        answer: 'Os cartões Multimoedas da Turcambio são aceitos em todos os estabelecimentos que tenham a bandeira Visa e nos caixas eletrônicos com a bandeira VISA/PLUS.<br><br>Para utilizar o cartão no exterior, deve usar na função CRÉDITO para compras e saques em caixas eletrônicos identificados com a bandeira PLUS.<br><br>Para utilizar o cartão no Brasil, deve usar a função DÉBITO para compras e função CRÉDITO para saques em caixas eletrônicos identificados com a bandeira PLUS.'
    },
    {
        id: 25,
        category: 'travelcard',
        question: 'Quais são os limites para utilização do cartão VTM da Turcambio?',
        answer: 'Saque em caixa eletrônico por transação: $ 500,00<br>Limite diário de Saque: $ 2.000,00<br>Limite de Compras: $ 30.000,00<br>Limite de 1ª carga: $ 30.000,00<br>Limite de Recarga: $ 30.000,00<br>Limite de Saldo: $ 50.000,00<br><br>* Importante: os valores informados são iguais para as moedas: USD, EUR, GBP, CAD, AUD ou NZD no saldo do cartão.<br><br>** Alguns operadores de caixas eletrônicos e estabelecimentos podem cobrar uma tarifa ou estabelecer seus próprios limites para saque ou compra. Confira as tarifas ou limites aplicáveis antes de fazer saques ou compras.'
    }
]);

// Computed para filtrar FAQs pela categoria ativa
const filteredFaqs = computed(() => {
    return faqs.value.filter(faq => faq.category === activeCategory.value);
});

// Função para alternar FAQ aberta/fechada
const toggleFaq = (faqId) => {
    activeFaq.value = activeFaq.value === faqId ? null : faqId;
};

// Funções para animação da transição
const onEnter = (element) => {
    element.style.height = '0';
    element.offsetHeight; // força o reflow
    element.style.transition = 'height 0.3s ease-out';
    element.style.height = element.scrollHeight + 'px';
};

const onAfterEnter = (element) => {
    element.style.height = 'auto';
};

const onLeave = (element) => {
    element.style.height = element.scrollHeight + 'px';
    element.offsetHeight; // força o reflow
    element.style.transition = 'height 0.3s ease-in';
    element.style.height = '0';
};
</script>

<style scoped>
/* Animação de fade para a transição */
.faq-slide-enter-active,
.faq-slide-leave-active {
    transition: opacity 0.3s ease;
}

.faq-slide-enter-from,
.faq-slide-leave-to {
    opacity: 0;
}

.faq-slide-enter-to,
.faq-slide-leave-from {
    opacity: 1;
}
</style>