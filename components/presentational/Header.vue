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
      <div class="hidden md:flex md:gap-8">
        <nuxt-link to="/" class="text-white text-sm font-bold"
          >使い方</nuxt-link
        >
        <nuxt-link to="/" class="text-white text-sm font-bold"
          >リリースノート</nuxt-link
        >
        <nuxt-link to="/" class="text-white text-sm font-bold"
          >よくある質問</nuxt-link
        >
        <nuxt-link to="/" class="text-white text-sm font-bold"
          >お問い合わせ</nuxt-link
        >
      </div>
      <div class="md:hidden"><p>menu</p></div>
    </div>
  </header>
</template>
<script setup lang="ts">
const shouldShowHeader = ref<boolean>(false);
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
</script>
