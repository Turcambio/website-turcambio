<template>
  <div class="flex flex-col w-full">
    <BannerHome />
    <ProductsSection />
    <FindStoreSection />
    <BlogSection />
  </div>
</template>

<script setup>
import BlogSection from '~/components/blog-section.vue';
import ProductsSection from '~/components/products-section.vue';
import BannerHome from '~/components/banner-home.vue';
import FindStoreSection from '~/components/find-store-section.vue';

// SEO
useSeoMeta({
  title: 'Turcambio | Câmbio Simples e Seguro',
  description: 'A melhor taxa de câmbio para suas operações. Rápido, transparente e com toda a segurança que você precisa.',
  ogTitle: 'Turcambio | Câmbio Simples e Seguro',
  ogDescription: 'A melhor taxa de câmbio para suas operações. Rápido, transparente e com toda a segurança que você precisa.',
  ogImage: '/images/logo-turcambio.png',
});
</script>