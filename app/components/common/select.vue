<template>
    <select 
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
        :disabled="disabled"
        :class="selectClasses"
        :style="selectStyles"
    >
        <slot></slot>
    </select>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: ''
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

defineEmits(['update:modelValue']);

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

const selectClasses = computed(() => {
    const placeholderClass = props.variant === 'default' 
        ? 'text-gray-400' 
        : 'text-white/70';
    
    return [
        'w-full rounded font-medium outline-none transition-all cursor-pointer',
        variantClasses[props.variant],
        sizeClasses[props.size],
        props.disabled && 'opacity-50 cursor-not-allowed',
        !props.modelValue && placeholderClass
    ];
});

const selectStyles = computed(() => {
    return {
        fontSize: fontSizes[props.size]
    };
});
</script>

<style scoped>
select option {
    background-color: #1a2830;
}
</style>

