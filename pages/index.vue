<template>
  <div>
    <nuxt-link to="contact">問い合わせ</nuxt-link>
    {{ path }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const path = route.fullPath;
</script>
