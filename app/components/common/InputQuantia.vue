<template>
    <input 
        :value="displayValue"
        @input="handleInput"
        @keydown="handleKeydown"
        type="text"
        inputmode="numeric"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        :class="inputClasses"
        :style="inputStyles"
    />
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: 0
    },
    placeholder: {
        type: String,
        default: '0,00'
    },
    readonly: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    variant: {
        type: String,
        default: 'default',
        validator: (value) => ['default', 'primary', 'secondary'].includes(value)
    },
    size: {
        type: String,
        default: 'md',
        validator: (value) => ['sm', 'md', 'lg'].includes(value)
    }
});

const emit = defineEmits(['update:modelValue']);

// Valor interno em centavos para facilitar manipulação
const valueInCents = ref(0);

// Inicializa o valor
watch(() => props.modelValue, (newValue) => {
    if (newValue === null || newValue === undefined || newValue === '') {
        valueInCents.value = 0;
    } else {
        const numValue = typeof newValue === 'string' ? parseFloat(newValue) : newValue;
        valueInCents.value = Math.round(numValue * 100);
    }
}, { immediate: true });

// Formata o valor para exibição
const displayValue = computed(() => {
    const valueInReais = valueInCents.value / 100;
    return formatCurrency(valueInReais);
});

function formatCurrency(value) {
    const fixed = value.toFixed(2);
    const [integerPart, decimalPart] = fixed.split('.');
    
    // Adiciona separador de milhar
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
    return `${formattedInteger},${decimalPart}`;
}

function handleInput(event) {
    const input = event.target.value;
    
    // Remove tudo que não é número
    const numbersOnly = input.replace(/\D/g, '');
    
    if (numbersOnly === '') {
        valueInCents.value = 0;
        emit('update:modelValue', 0);
        return;
    }
    
    // Converte para número (já está em centavos)
    valueInCents.value = parseInt(numbersOnly, 10);
    
    // Emite o valor em reais
    const valueInReais = valueInCents.value / 100;
    emit('update:modelValue', valueInReais);
}

function handleKeydown(event) {
    // Permite: backspace, delete, tab, escape, enter
    if ([8, 9, 27, 13, 46].includes(event.keyCode) ||
        // Permite: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
        (event.keyCode === 65 && event.ctrlKey === true) ||
        (event.keyCode === 67 && event.ctrlKey === true) ||
        (event.keyCode === 86 && event.ctrlKey === true) ||
        (event.keyCode === 88 && event.ctrlKey === true) ||
        // Permite: home, end, left, right
        (event.keyCode >= 35 && event.keyCode <= 39)) {
        return;
    }
    
    // Bloqueia se não for número
    if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) &&
        (event.keyCode < 96 || event.keyCode > 105)) {
        event.preventDefault();
    }
}

const variantClasses = {
    default: 'bg-white text-[var(--secondary-color)] border border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)]',
    primary: 'bg-[var(--primary-color)] text-white border-none focus:ring-2 focus:ring-[var(--primary-color)]',
    secondary: 'bg-[var(--secondary-color)] text-white border-none focus:ring-2 focus:ring-[var(--secondary-color)]'
};

const sizeClasses = {
    sm: 'px-3 py-2',
    md: 'px-4 py-3',
    lg: 'px-6 py-4'
};

const fontSizes = {
    sm: 'var(--text-sm)',
    md: 'var(--text-base)',
    lg: 'var(--text-lg)'
};

const inputClasses = computed(() => {
    const placeholderClass = props.variant === 'default' 
        ? 'placeholder:text-gray-400' 
        : 'placeholder:text-white/70';
    
    return [
        'w-full rounded font-medium outline-none transition-all',
        variantClasses[props.variant],
        sizeClasses[props.size],
        props.readonly && 'cursor-not-allowed opacity-90',
        props.disabled && 'opacity-50 cursor-not-allowed',
        placeholderClass
    ];
});

const inputStyles = computed(() => {
    return {
        fontSize: fontSizes[props.size]
    };
});
</script>

