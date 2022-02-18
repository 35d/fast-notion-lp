<template>
  <div>
    <nuxt-link to="/">トップ</nuxt-link>
    <p>AAA</p>
    {{ path }}
    {{ route }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const path = route.fullPath;
</script>
