<template>
  <div class="flex justify-center items-center" :class="containerClass">
    <div class="relative">
      <div 
        class="animate-spin rounded-full border-4 border-t-transparent"
        :class="sizeClass"
        :style="{ borderColor: color, borderTopColor: 'transparent' }"
      ></div>
      <p v-if="text" class="mt-4 text-center text-gray-600">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value),
  },
  color: {
    type: String,
    default: '#3B82F6', // blue-500
  },
  text: {
    type: String,
    default: '',
  },
  fullScreen: {
    type: Boolean,
    default: false,
  },
});

const sizeClass = computed(() => {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24',
  };
  return sizes[props.size];
});

const containerClass = computed(() => {
  return props.fullScreen ? 'min-h-screen' : 'py-8';
});
</script>

