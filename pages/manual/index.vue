<template>
  <div class="px-6 pt-24 pb-20 md:py-36 bg-gray1 text-black1">
    <div class="max-w-4xl mx-auto space-y-8 md:space-y-10 bg-white px-6 py-8 md:px-10 md:py-14">
      <h1 class="text-xl font-bold">{{ t("description1") }}</h1>
      <div class="space-y-8 md:space-y-10">
        <div class="space-y-6">
          <div>
            <iframe
              :src="YOURUBE_URL"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="w-full md:w-[608px] sm:h-[342px] mx-auto"
            ></iframe>
          </div>
        </div>
        <div class="w-full h-px bg-gray1"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const YOURUBE_URL = "https://www.youtube.com/embed/_5cmXTrxL54";

const { t } = useI18n();
useHead(() => ({
  title: "使い方",
}));
</script>

<i18n src="./index.json"></i18n>
