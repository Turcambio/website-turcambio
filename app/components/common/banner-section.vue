<template>
    <section class="relative w-full bg-[var(--secondary-color)]">
        <div class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div class="flex flex-col items-center">
                <h2
                    class="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary-color)]  mb-4 leading-tight">
                    {{ title }}
                </h2>
                <div class="h-0.5 w-24 bg-[var(--primary-color)] mx-auto mb-6">
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center text-sm gap-2.5 bg-white/15 absolute bottom-0 w-full h-12">
            <template v-for="(item, index) in breadcrumb" :key="item.name">
                <a :href="item.link"
                    :class="index === breadcrumb.length - 1 ? 'text-[var(--primary-color)]' : 'text-white'">
                    {{ item.name }}
                </a>
                <span v-if="index < breadcrumb.length - 1" class="text-white">
                    /
                </span>
            </template>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    breadcrumb: {
        type: Array,
        required: true
    }
});

</script>