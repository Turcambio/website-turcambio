<template>
    <button :type="type" :class="buttonClasses" :style="buttonStyles" :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    variant: {
        type: String,
        default: 'default',
        validator: (value) => ['default', 'outline'].includes(value),
    },
    size: {
        type: String,
        default: 'md',
        validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value),
    },
    type: {
        type: String,
        default: 'button',
        validator: (value) => ['button', 'submit', 'reset'].includes(value),
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

const variantClasses = {
    default: 'bg-[var(--primary-color)] text-white border-2 border-[var(--primary-color)] hover:bg-transparent hover:text-[var(--primary-color)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 active:scale-95',
    outline: 'bg-transparent text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white border-[var(--primary-color)] border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 active:scale-95',
};

const sizeClasses = {
    sm: 'px-3 py-1',
    md: 'px-4 py-2',
    lg: 'px-6 py-3',
    xl: 'px-8 py-4',
};

const fontSizes = {
    sm: 'var(--text-sm)',
    md: 'var(--text-base)',
    lg: 'var(--text-lg)',
    xl: 'var(--text-xl)',
};

const buttonClasses = computed(() => {
    return [
        'rounded font-medium transition-colors cursor-pointer outline-none select-none',
        sizeClasses[props.size],
        variantClasses[props.variant],
        props.disabled && 'opacity-50 cursor-not-allowed',
    ];
});

const buttonStyles = computed(() => {
    return {
        fontSize: fontSizes[props.size],
    };
});
</script>