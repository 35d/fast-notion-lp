<template>
  <div>
    <MainVisualSection />
    <FunctionSection />
    <PriceSection />
    <DownloadSection />
  </div>
</template>

<script setup lang="ts">
import MainVisualSection from "@/components/container/top/MainVisualSection.vue";
import FunctionSection from "@/components/container/top/FunctionSection.vue";
import DownloadSection from "~~/components/container/top/DownloadSection.vue";
import PriceSection from "~~/components/container/top/PriceSection.vue";
useMeta(() => ({
  title: "Fast Notion",
}));
const route = useRoute();
const path = route.fullPath;
</script>
