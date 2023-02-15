<template>
  <div class="relative bg-[url('~/assets/img/top/mv-bg.jpg')]">
    <img src="~@/assets/img/top/mv-sp.jpg" alt="" class="md:hidden" />
    <img src="~@/assets/img/top/mv-pc.jpg" alt="" class="hidden md:block md:mx-auto md:max-w-5xl" />
    <div class="absolute top-32 left-9 flex flex-col md:flex-row md:top-3/4 md:left-2/3">
      <div class="flex justify-center items-center rounded-full border border-white w-24 h-24 bg-white/10 mb-4 md:mr-4">
        <template v-if="locale === 'en'">
          <img src="~@/assets/img/top/mv-evaluation-en.svg" alt="" />
        </template>
        <template v-else>
          <img src="~@/assets/img/top/mv-evaluation.svg" alt="" />
        </template>
      </div>
      <div class="flex justify-center items-center rounded-full border border-white w-24 h-24 bg-white/10">
        <template v-if="locale === 'en'">
          <img src="~@/assets/img/top/mv-download-en.svg" alt="" />
        </template>
        <template v-else>
          <img src="~@/assets/img/top/mv-download.svg" alt="" />
        </template>
      </div>
    </div>
    <div class="absolute -bottom-px w-full md:bottom-1/4 md:right-1/2 md:w-fit">
      <div class="mx-9 md:mx-0 lg:mx-24">
        <template v-if="locale === 'en'">
          <img src="~@/assets/img/top/title-en.svg" alt="" />
        </template>
        <template v-else>
          <img src="~@/assets/img/top/title.svg" alt="" />
        </template>
        <h1 class="text-white text-sm mt-5 mb-3 md:text-base">
          {{ t("description1") }}
          <br />
          {{ t("description2") }}
        </h1>
        <p class="text-gray2 text-xs mb-16 md:text-sm md:mb-8">
          {{ t("description3") }}
        </p>
      </div>
      <div class="bg-white w-full h-28 flex justify-center items-center md:bg-transparent md:justify-start lg:mx-24 md:h-auto">
        <a href="https://apps.apple.com/jp/app/fast-notion/id1505194382">
          <template v-if="locale === 'en'">
            <img src="~@/assets/img/parts/download-ios-en.svg" alt="" />
          </template>
          <template v-else>
            <img src="~@/assets/img/parts/download-ios.svg" alt="" />
          </template>
        </a>
        <a href="https://play.google.com/store/apps/details?id=jp.fastNotion&hl=ja&gl=US">
          <template v-if="locale === 'en'">
            <img src="~@/assets/img/parts/download-android-en.png" class="h-[60px]" alt="" />
          </template>
          <template v-else>
            <img src="~@/assets/img/parts/download-android.svg" alt="" />
          </template>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
</script>

<i18n src="./mainVisualSectionMessage.json"></i18n>
