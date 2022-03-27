<template>
  <footer>
    <div
      class="flex flex-col md:flex-row md:gap-3 md:justify-center p-6 md:mt-12"
    >
      <template v-for="content in contents" :key="index">
        <div class="p-4">
          <nuxt-link :to="content.path" class="text-black1 font-bold text-sm">{{
            content.title
          }}</nuxt-link>
        </div>
      </template>
      <div class="p-4">
        <a
          href="https://blog.35d.jp/tags/Fast%20Notion"
          class="text-black1 font-bold text-sm"
          >開発ブログ</a
        >
      </div>
    </div>
    <div class="hidden md:flex md:justify-center md:mb-16">
      <nuxt-link to="/">
        <img src="~@/assets/img/parts/fast-notion-black.svg" alt=""
      /></nuxt-link>
    </div>
    <div class="w-full md:bg-beige1 py-6">
      <div class="flex justify-center md:justify-start md:mx-auto md:max-w-3xl">
        <nuxt-link to="/privacy" class="text-gray2 text-xs mr-4 md:mr-6"
          >プライバシーポリシー</nuxt-link
        >
        <a href="" class="text-gray2 text-xs">利用規約</a>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
const contents = [
  {
    title: "使い方",
    path: "/",
  },
  {
    title: "リリースノート",
    path: "/releases",
  },
  {
    title: "ユーザーコミュニティ",
    path: "/user-community",
  },
  {
    title: "よくある質問",
    path: "/faq",
  },
  {
    title: "お問い合わせ",
    path: "contact",
  },
];
</script>
