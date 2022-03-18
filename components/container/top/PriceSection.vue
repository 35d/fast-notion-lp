<template>
  <div>
    <div class="flex flex-col my-16 mx-6 md:flex-row">
      <h2 class="font-bold text-2xl text-center text-black1 mb-4 md:text-left">
        料金
      </h2>
      <p
        class="text-xs font-bold tracking-wider text-center mb-8 text-transparent bg-clip-text bg-grad-text md:text-left"
      >
        PLAN
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const candos = [
  {
    title: "データベース接続",
    content: "データベースに直接テキストメモを送信",
    imgPath: "/_nuxt/assets/img/top/function-database.png",
  },
  {
    title: "複数ページの指定",
    content: "Notion上の好きなページを指定して、メモを投稿",
    imgPath: "/_nuxt/assets/img/top/function-multi.png",
  },
  {
    title: "To Do モード対応",
    content: "思いついたタスクを即時に追加",
    imgPath: "/_nuxt/assets/img/top/function-todo.png",
  },
  {
    title: "ダークモード対応",
    content: "視覚的に読みやすい画面に変更可能",
    imgPath: "/_nuxt/assets/img/top/function-dark.png",
  },
];
</script>
