<template>
  <div class="relative">
    <img src="~@/assets/img/top/mv-bottom-sp.jpg" alt="" class="md:hidden" />
    <img src="~@/assets/img/top/mv-bottom-pc.jpg" alt="" class="hidden md:block w-full" />
    <div class="absolute bottom-20 w-full md:flex md:justify-center md:items-center md:bottom-1/3">
      <div class="mx-9">
        <template v-if="locale === 'en'">
          <img src="~@/assets/img/top/title-en.svg" alt="" />
        </template>
        <template v-else>
          <img src="~@/assets/img/top/title.svg" alt="" />
        </template>
      </div>
      <div class="w-full h-28 flex justify-center items-center md:w-1/2 md:justify-end">
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
const { locale } = useI18n();
</script>
