<template>
  <header class="z-10 flex justify-center">
    <div
      class="h-14 md:h-16 mt-2 md:mt-4 flex justify-between items-center w-[calc(100vw-48px)] md:w-4/5 md:max-w-7xl"
    >
      <nuxt-link to="/">
        <img
          src="~@/assets/img/parts/fast-notion-white.svg"
          alt=""
          v-if="shouldHeaderBgTransparentMode" /><img
          src="~@/assets/img/parts/fast-notion-black.svg"
          alt=""
          class="w-[110px]"
          v-else
      /></nuxt-link>
      <div class="hidden md:flex md:gap-8">
        <template v-for="content in headerList" :key="index">
          <nuxt-link
            :to="content.path"
            :class="[
              'text-sm font-bold ',
              { 'text-white': shouldHeaderBgTransparentMode },
              { 'text-black1': !shouldHeaderBgTransparentMode },
            ]"
            >{{ content.title }}</nuxt-link
          >
        </template>
      </div>
      <div class="md:hidden" @click="onClickMenu">
        <button class="h-8 w-9 block relative">
          <div
            :class="[
              ' h-0.5 w-9 absolute top-1',
              { 'bg-white': shouldHeaderBgTransparentMode },
              { 'bg-black1': !shouldHeaderBgTransparentMode },
            ]"
          ></div>
          <div
            :class="[
              ' h-0.5 w-9 absolute top-3',
              { 'bg-white': shouldHeaderBgTransparentMode },
              { 'bg-black1': !shouldHeaderBgTransparentMode },
            ]"
          ></div>
          <p
            :class="[
              'text-xs absolute top-4 text-center',
              { 'text-white': shouldHeaderBgTransparentMode },
              { 'text-black1': !shouldHeaderBgTransparentMode },
            ]"
          >
            MENU
          </p>
        </button>
      </div>
    </div>
    <!-- ナビゲーション -->
    <div
      :class="[
        'h-14 md:h-16 mt-2 md:mt-4 flex justify-between items-center w-[calc(100vw-48px)] md:w-4/5 md:max-w-7xl transition-all duration-500 rounded-header-70 fixed bg-white shadow-3xl',
        { 'top-0': shouldShowHeader },
        { '-top-20': !shouldShowHeader },
      ]"
    >
      <nuxt-link to="/">
        <img
          src="~@/assets/img/parts/fast-notion-black.svg"
          alt=""
          class="block w-36 h-auto pl-8"
      /></nuxt-link>
      <div class="hidden md:flex md:gap-8 pr-8">
        <template v-for="content in headerList" :key="index">
          <nuxt-link :to="content.path" class="text-sm font-bold text-black1">{{
            content.title
          }}</nuxt-link>
        </template>
      </div>
      <div class="md:hidden pr-8" @click="onClickMenu">
        <button class="h-8 w-9 block relative">
          <div class="bg-black1 h-0.5 w-9 absolute top-1"></div>
          <div class="bg-black1 h-0.5 w-9 absolute top-3"></div>
          <p class="text-xs absolute top-4 text-center text-black1">MENU</p>
        </button>
      </div>
    </div>
    <!-- サイドバー -->
    <div
      :class="[
        'w-full h-full bg-white fixed top-0 z-10 transition-all duration-500',
        { 'left-0': isPanelOpen },
        { 'left-full': !isPanelOpen },
      ]"
    >
      <div class="pt-8 px-6 mb-16 flex justify-between">
        <img
          src="~@/assets/img/parts/fast-notion-black.svg"
          alt=""
          class="w-36"
        />
        <div class="md:hidden" @click="onClickMenu">
          <button class="h-8 w-9 block relative">
            <div
              class="bg-black1 h-0.5 w-8 z-20 absolute top-4 rotate-45"
            ></div>
            <div
              class="bg-black1 h-0.5 w-8 z-20 absolute -rotate-45 top-4"
            ></div>
          </button>
        </div>
      </div>
      <template v-for="content in headerList" :key="index">
        <div class="p-4 mx-6 mb-3">
          <p
            @click="jumpToPath(content.path)"
            class="text-sm text-black1 font-bold"
          >
            {{ content.title }}
          </p>
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
const router = useRouter();
const route = useRoute();
const shouldHeaderBgTransparentMode = computed<boolean>(() => {
  if (route.fullPath === "/" || route.fullPath === "") {
    return true;
  } else return false;
});
const isPanelOpen = ref<boolean>(false);
const shouldShowHeader = ref<boolean>(false);
const onClickMenu = () => {
  isPanelOpen.value = !isPanelOpen.value;
};
const registerHeaderAnimationEvent = () => {
  if (!process.client) return;
  window.addEventListener("scroll", () => {
    if ((document.documentElement.scrollTop || 0) > 500) {
      shouldShowHeader.value = true;
    }
    if (document.documentElement.scrollTop < 80) {
      shouldShowHeader.value = false;
    }
  });
};
onMounted(() => {
  registerHeaderAnimationEvent();
});
const headerList = [
  { title: "使い方", path: "/manual" },
  { title: "リリースノート", path: "/releases" },
  { title: "よくある質問", path: "/faq" },
  { title: "お問い合わせ", path: "/contact" },
];
const jumpToPath = (path: string) => {
  isPanelOpen.value = !isPanelOpen.value;
  router.push(path);
};
</script>
