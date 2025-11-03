<template>
    <div class="bg-[var(--secondary-color)] text-white rounded-lg shadow-2xl p-6 w-full">
        <!-- Título -->
        <h2 class="text-[var(--primary-color)] text-center mb-6 text-base leading-tight">
            Quer comprar ou vender moedas?
        </h2>

        <!-- Toggle Comprar/Vender -->
        <div class="flex gap-2 mb-6">
            <button @click="formData.tipo = 'comprar'" :class="[
                'flex-1 py-2 px-4 rounded transition-all font-medium text-sm cursor-pointer',
                formData.tipo === 'comprar'
                    ? 'bg-[var(--primary-color)] text-white'
                    : 'bg-transparent text-gray-300 border border-gray-600'
            ]">
                Desejo Comprar
            </button>
            <button @click="formData.tipo = 'vender'" :class="[
                'flex-1 py-2 px-4 rounded transition-all font-medium text-sm cursor-pointer',
                formData.tipo === 'vender'
                    ? 'bg-[var(--primary-color)] text-white'
                    : 'bg-transparent text-gray-300 border border-gray-600'
            ]">
                Desejo Vender
            </button>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-4">
            <!-- Seleção de moeda -->
            <div>
                <label class="block text-sm mb-2">Escolha sua moeda</label>
                <Select v-model="formData.moeda" variant="primary" size="sm">
                    <option v-for="moeda in moedas" :value="moeda.value" :key="moeda.value">{{ moeda.label }}</option>
                </Select>
            </div>

            <!-- Campos de valores -->
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm mb-2">
                        {{ formData.tipo === 'comprar' ? 'Quantia desejada' : 'Quantia para vender' }}
                    </label>
                    <InputQuantia v-model="formData.quantia" variant="primary" size="sm" placeholder="0,00" />
                </div>
                <div>
                    <label class="block text-sm mb-2">Total em reais</label>
                    <InputQuantia v-model="totalReais" readonly variant="primary" size="sm" />
                </div>
            </div>

            <!-- Informações de cotação -->
            <div class="text-center text-sm space-y-1 py-2">
                <p class="font-medium">{{ (selectedMoeda.value).toUpperCase() }} 1,00 = R$ {{
                    formatMoney(cotacaoRealAtual) }}
                </p>
                <p class="text-xs text-gray-300">Valor IOF: 3.50% = R$ {{ formatMoney(iofValor) }}</p>
            </div>

            <!-- Botão de submit -->
            <Button type="submit" variant="default" size="sm" class="w-full">
                Quero Comprar
            </Button>
        </form>
    </div>
</template>

<script setup>
import Button from '~/components/common/button.vue';
import InputQuantia from '~/components/common/InputQuantia.vue';
import Select from '~/components/common/select.vue';

// Função local para formatar moeda
const formatMoney = (value) => {
    if (!value && value !== 0) return '0,00';
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    return numValue.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
};

const formData = ref({
    tipo: 'comprar',
    moeda: 'usd',
    quantia: 100
});

const cotacaoRealAtual = ref(5.641498);
const iofPercentual = 3.50;

const moedas = ref([
    { value: 'usd', label: 'DOLAR AMERICANO', cotacao: 1, quantidade_minima: 100 },
    { value: 'eur', label: 'EURO', cotacao: 2.00, quantidade_minima: 100 },
    { value: 'jpy', label: 'JPY - IENE JAPONÊS', cotacao: 0.036, quantidade_minima: 100 },
    { value: 'pen', label: 'SOLES PERUANOS', cotacao: 0.14, quantidade_minima: 100 },
    { value: 'uyu', label: 'PESO URUGUAIO', cotacao: 0.14, quantidade_minima: 100 },
    { value: 'cop', label: 'PESO COLOMBIANO', cotacao: 0.0014, quantidade_minima: 100 },
    { value: 'aud', label: 'DÓLAR AUSTRALIANO', cotacao: 3.60, quantidade_minima: 100 },
    { value: 'cad', label: 'DÓLAR CANADENSE', cotacao: 5.641498, quantidade_minima: 100 },
    { value: 'chf', label: 'CHF - FRANCO SUIÇO', cotacao: 5.641498, quantidade_minima: 100 },
    { value: 'clp', label: 'PESO CHILENO', cotacao: 5.641498, quantidade_minima: 100 },
    { value: 'ars', label: 'PESO ARGENTINO', cotacao: 5.641498, quantidade_minima: 100 },
]);

const selectedMoeda = computed(() => {
    return moedas.value.find(moeda => moeda.value === formData.value.moeda);
});

const totalReais = computed(() => {
    if (!formData.value.quantia) return 0;
    const valor = formData.value.quantia * selectedMoeda.value.cotacao;
    return valor;
});

const iofValor = computed(() => {
    if (!totalReais.value) return 0;
    return (totalReais.value * iofPercentual) / 100;
});


const handleSubmit = () => {
    console.log('Formulário enviado:', formData.value);
    // Redirecionar ou enviar dados
    alert(`Solicitação de ${formData.value.tipo} ${formData.value.moeda.toUpperCase()}: ${formData.value.quantia}`);
};  
</script>