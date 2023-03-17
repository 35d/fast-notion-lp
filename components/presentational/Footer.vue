<template>
  <footer>
    <div class="flex flex-col md:flex-row md:gap-3 md:justify-center p-6 md:mt-12">
      <template v-for="content in contents" :key="content.title">
        <div class="p-4">
          <nuxt-link :to="content.path" class="text-black1 font-bold text-sm">{{ t(content.title) }}</nuxt-link>
        </div>
      </template>
      <div class="p-4">
        <a href="https://blog.35d.jp/tags/Fast%20Notion" class="text-black1 font-bold text-sm">{{ t("blog") }}</a>
      </div>
    </div>
    <div class="hidden md:flex md:justify-center md:mb-16">
      <nuxt-link to="/"> <img src="~@/assets/img/parts/fast-notion-black.svg" alt="" /></nuxt-link>
    </div>
    <div class="w-full md:bg-beige1 py-6">
      <div class="flex justify-center md:justify-start md:mx-auto md:max-w-3xl">
        <nuxt-link to="/privacy" class="text-gray2 text-xs mr-4 md:mr-6">{{ t("privacy") }}</nuxt-link>
        <nuxt-link to="/terms" class="text-gray2 text-xs mr-4 md:mr-6">{{ t("terms") }}</nuxt-link>
        <a href="https://notion.35d.jp/company/" target="_blank" class="text-gray2 text-xs">{{ t("company") }}</a>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
const { t } = useI18n();
const contents = [
  {
    title: "manual",
    path: "/manual",
  },
  {
    title: "releases",
    path: "/releases",
  },
  {
    title: "userCommunity",
    path: "/user-community",
  },
  {
    title: "faq",
    path: "/faq",
  },
  {
    title: "contact",
    path: "contact",
  },
];
</script>

<i18n src="./footerMessage.json"></i18n>
