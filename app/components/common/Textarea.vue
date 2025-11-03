<template>
    <textarea 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        :rows="rows"
        :class="textareaClasses"
        :style="textareaStyles"
    ></textarea>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    readonly: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    rows: {
        type: [String, Number],
        default: 6
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

const textareaClasses = computed(() => {
    const placeholderClass = props.variant === 'default' 
        ? 'placeholder:text-gray-400' 
        : 'placeholder:text-white/70';
    
    return [
        'w-full rounded font-medium outline-none transition-all resize-none',
        variantClasses[props.variant],
        sizeClasses[props.size],
        props.readonly && 'cursor-not-allowed opacity-90',
        props.disabled && 'opacity-50 cursor-not-allowed',
        placeholderClass
    ];
});

const textareaStyles = computed(() => {
    return {
        fontSize: fontSizes[props.size]
    };
});
</script>

