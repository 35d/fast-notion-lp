<template>
  <header class="h-14 md:h-16 mt-2 md:mt-4 z-10 flex justify-center">
    <div
      :class="[
        'h-14 md:h-16 flex justify-between items-center w-[calc(100vw-48px)] md:w-4/5 md:max-w-7xl transition-all duration-500 rounded-header-70',
        { 'fixed bg-white animate-slide shadow-3xl': shouldShowHeader },
      ]"
    >
      <img
        src="~@/assets/img/parts/fast-notion-white.svg"
        alt=""
        :class="[
          { 'block pl-0': !shouldShowHeader },
          { 'hidden pl-8': shouldShowHeader },
        ]"
      />
      <img
        src="~@/assets/img/parts/fast-notion-black.svg"
        alt=""
        :class="[
          { 'hidden pl-0': !shouldShowHeader },
          { 'block w-36 h-auto pl-8': shouldShowHeader },
        ]"
      />
      <div :class="['hidden md:flex md:gap-8', { 'pr-8': shouldShowHeader }]">
        <template v-for="content in headerList" :key="index">
          <nuxt-link
            :to="content.path"
            :class="[
              'text-sm font-bold',
              { 'text-white': !shouldShowHeader },
              { 'text-black1': shouldShowHeader },
            ]"
            >{{ content.title }}</nuxt-link
          >
        </template>
      </div>
      <div
        :class="['md:hidden', { 'pr-8': shouldShowHeader }]"
        @click="onClickMenu"
      >
        <div id="burger">
          <button class="h-8 w-9 block relative">
            <div
              :class="[
                'bg-white h-0.5 w-9 z-20 transition-all duration-500 absolute',
                { 'top-1': !isPanelOpen },
                { 'bg-black1 top-4 w-8 rotate-45': isPanelOpen },
                { 'bg-black1': shouldShowHeader },
              ]"
            ></div>
            <div
              :class="[
                'bg-white h-0.5 w-9 z-20 transition-all duration-500 absolute ',
                { 'top-3': !isPanelOpen },
                { 'bg-black1 w-8 -rotate-45 top-4': isPanelOpen },
                { 'bg-black1': shouldShowHeader },
              ]"
            ></div>
            <p
              :class="[
                'text-xs absolute top-4 text-center transition-all duration-500',
                { 'text-white': !shouldShowHeader },
                { 'text-black1': shouldShowHeader },
              ]"
            >
              MENU
            </p>
          </button>
        </div>
      </div>
    </div>
    <transition name="slide">
      <div
        @click="onClickMenu"
        v-if="isPanelOpen"
        class="w-full h-full bg-white fixed top-0 right-0 z-10 transition-all duration-500"
      >
        <div class="flex">
          <img
            src="~@/assets/img/parts/fast-notion-black.svg"
            alt=""
            class="w-36"
          />
        </div>
      </div>
    </transition>
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
