<template>
  <div>
    <MainVisualSection />
    <FunctionSection />
    <nuxt-link to="contact">問い合わせ</nuxt-link>
    {{ path }}
  </div>
</template>

<script setup lang="ts">
import MainVisualSection from "@/components/container/top/MainVisualSection.vue";
import FunctionSection from "@/components/container/top/FunctionSection.vue";
const route = useRoute();
const path = route.fullPath;
</script>
