<template>
  <header class="z-10 flex justify-center">
    <div
      class="h-14 md:h-16 mt-2 md:mt-4 flex justify-between items-center w-[calc(100vw-48px)] md:w-4/5 md:max-w-7xl"
    >
      <img src="~@/assets/img/parts/fast-notion-white.svg" alt="" />

      <div class="hidden md:flex md:gap-8">
        <template v-for="content in headerList" :key="index">
          <nuxt-link :to="content.path" class="text-sm font-bold text-white">{{
            content.title
          }}</nuxt-link>
        </template>
      </div>
      <div class="md:hidden" @click="onClickMenu">
        <div id="burger">
          <button class="h-8 w-9 block relative">
            <div
              :class="[
                'bg-white h-0.5 w-9 z-20 transition-all duration-500 absolute',
                { 'top-1': !isPanelOpen },
                { 'bg-black1 top-4 w-8 rotate-45': isPanelOpen },
              ]"
            ></div>
            <div
              :class="[
                'bg-white h-0.5 w-9 z-20 transition-all duration-500 absolute ',
                { 'top-3': !isPanelOpen },
                { 'bg-black1 w-8 -rotate-45 top-4': isPanelOpen },
              ]"
            ></div>
            <p
              class="text-xs absolute top-4 text-center transition-all duration-500 text-white"
            >
              MENU
            </p>
          </button>
        </div>
      </div>
    </div>
    <div
      class="h-14 md:h-16 mt-2 md:mt-4 flex justify-between items-center w-[calc(100vw-48px)] md:w-4/5 md:max-w-7xl transition-all duration-500 rounded-header-70 fixed bg-white animate-slide_down shadow-3xl"
      v-show="shouldShowHeader"
    >
      <img
        src="~@/assets/img/parts/fast-notion-black.svg"
        alt=""
        class="block w-36 h-auto pl-8"
      />
      <div class="hidden md:flex md:gap-8 pr-8">
        <template v-for="content in headerList" :key="index">
          <nuxt-link :to="content.path" class="text-sm font-bold text-black1">{{
            content.title
          }}</nuxt-link>
        </template>
      </div>
      <div class="md:hidden pr-8" @click="onClickMenu">
        <div id="burger">
          <button class="h-8 w-9 block relative">
            <div
              :class="[
                'bg-black1 h-0.5 w-9 z-20 transition-all duration-500 absolute',
                { 'top-1': !isPanelOpen },
                { 'top-4 w-8 rotate-45': isPanelOpen },
              ]"
            ></div>
            <div
              :class="[
                'bg-black1 h-0.5 w-9 z-20 transition-all duration-500 absolute ',
                { 'top-3': !isPanelOpen },
                { 'w-8 -rotate-45 top-4': isPanelOpen },
              ]"
            ></div>
            <p
              class="text-xs absolute top-4 text-center transition-all duration-500 text-black1"
            >
              MENU
            </p>
          </button>
        </div>
      </div>
    </div>
    <div
      @click="onClickMenu"
      v-if="isPanelOpen"
      class="w-full h-full bg-white fixed top-0 left-0 z-10 transition-transform duration-500 translate-x-0"
    >
      <div class="pt-8 pl-6 mb-16">
        <img
          src="~@/assets/img/parts/fast-notion-black.svg"
          alt=""
          class="w-36"
        />
      </div>
      <template v-for="content in headerList" :key="index">
        <div class="p-4 mx-6 mb-3">
          <nuxt-link :to="content.path" class="text-sm text-black1 font-bold">{{
            content.title
          }}</nuxt-link>
        </div>
      </template>
      <div class="w-full flex justify-center items-center px-10 mt-8">
        <a href="https://apps.apple.com/jp/app/fast-notion/id1505194382"
          ><img src="~@/assets/img/parts/download-ios.svg" alt=""
        /></a>
        <a
          href="https://play.google.com/store/apps/details?id=jp.fastNotion&hl=ja&gl=US"
          ><img src="~@/assets/img/parts/download-android.svg" alt=""
        /></a>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
const isPanelOpen = ref<boolean>(false);
const shouldShowHeader = ref<boolean>(false);
const onClickMenu = () => {
  isPanelOpen.value = !isPanelOpen.value;
  console.log(isPanelOpen.value);
};
const registerHeaderAnimationEvent = () => {
  if (!process.client) return;
  window.addEventListener("scroll", () => {
    if ((document.documentElement.scrollTop || 0) > 500) {
      shouldShowHeader.value = true;
    }
    if (document.documentElement.scrollTop === 0) {
      shouldShowHeader.value = false;
    }
  });
};
onMounted(() => {
  registerHeaderAnimationEvent();
});
const headerList = [
  { title: "使い方", path: "/" },
  { title: "リリースノート", path: "/" },
  { title: "よくある質問", path: "/" },
  { title: "お問い合わせ", path: "/" },
];
</script>
