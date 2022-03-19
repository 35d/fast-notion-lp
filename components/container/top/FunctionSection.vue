<template>
  <div>
    <div
      class="flex flex-col mt-24 mb-14 md:flex-row md:w-4/5 md:mx-auto md:max-w-4xl md:items-center md:justify-center"
    >
      <div class="mx-9 mb-14 md:w-1/2">
        <h2
          class="font-bold text-2xl text-center text-black1 mb-4 md:text-left"
        >
          Fast Notionでできること
        </h2>
        <p
          class="text-xs font-bold tracking-wider text-center mb-8 text-transparent bg-clip-text bg-grad-text md:text-left"
        >
          FUNCTION
        </p>
        <p class="text-sm leading-6 text-black1 md:text-base md:leading-8">
          Notion とのページ連携の設定によって、通常のテキスト、ToDo
          ブロック、データベースへの投稿などさまざまな形式でメモを取ることができます。複数ページを登録することができるので、プライベート用のメモと仕事用のメモを分けることが出来ます。
        </p>
      </div>
      <div class="bg-gray1 flex justify-end md:bg-white md:w-1/2">
        <img src="~@/assets/img/top/function.png" alt="" class="w-11/12" />
      </div>
    </div>
    <h3 class="text-center mt-24 mb-10 font-medium text-xl">
      自由にメモ形式を指定できる
    </h3>
    <div class="mb-8 md:flex md:flex-wrap md:w-4/5 md:mx-auto md:max-w-4xl">
      <template v-for="cando in candos" :key="index">
        <div class="flex flex-col px-6 pb-8 md:w-1/2">
          <div class="flex flex-col items-center shadow-3xl rounded">
            <p class="text-base font-bold text-black1 mb-1 mt-10">
              {{ cando.title }}
            </p>
            <p class="text-sm font-medium text-black1 mb-4">
              {{ cando.content }}
            </p>
            <img :src="cando.imgPath" alt="" />
          </div>
        </div>
      </template>
    </div>
    <div class="bg-gray1 py-16 px-6 flex flex-col items-center">
      <h3 class="text-black1 text-xl font-medium mb-4">
        多くの方に評価されています
      </h3>
      <p class="text-gray2 text-xs font-medium mb-10">
        ※2022年2月時点、650件の評価。
      </p>
      <div class="flex gap-4 mb-10 w-full md:w-4/5 md:max-w-4xl">
        <div
          class="bg-white py-10 px-6 w-1/2 shadow-3xl rounded flex flex-col justify-center"
        >
          <p
            class="font-[Futura] text-[64px] font-medium text-transparent bg-clip-text bg-grad-text text-center relative after:absolute after:top-4 after:content-['※'] after:text-xs after:text-black1 after:font-sans after:sm:right-1/4 after:md:right-1/4 after:lg:right-1/3"
          >
            4.6
          </p>
          <p class="text-black1 text-sm font-bold text-center">App Store評価</p>
        </div>
        <div
          class="bg-white py-10 px-4 w-1/2 shadow-3xl rounded flex flex-col justify-center"
        >
          <p
            class="font-[Futura] text-4xl font-medium text-transparent bg-clip-text bg-grad-text text-center mb-4"
          >
            30,000
          </p>
          <p class="text-black1 text-sm font-bold text-center">
            累計ダウンロード数
          </p>
        </div>
      </div>
      <div class="w-full h-16 flex justify-center items-center">
        <a href="https://apps.apple.com/jp/app/fast-notion/id1505194382"
          ><img src="~@/assets/img/parts/download-ios.svg" alt=""
        /></a>
        <a
          href="https://play.google.com/store/apps/details?id=jp.fastNotion&hl=ja&gl=US"
          ><img src="~@/assets/img/parts/download-android.svg" alt=""
        /></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const candos = [
  {
    title: "データベース接続",
    content: "データベースに直接テキストメモを送信",
    imgPath: "static/img/top/function-database.png",
  },
  {
    title: "複数ページの指定",
    content: "Notion上の好きなページを指定して、メモを投稿",
    imgPath: "static/img/top/function-multi.png",
  },
  {
    title: "To Do モード対応",
    content: "思いついたタスクを即時に追加",
    imgPath: "static/img/top/function-todo.png",
  },
  {
    title: "ダークモード対応",
    content: "視覚的に読みやすい画面に変更可能",
    imgPath: "static/img/top/function-dark.png",
  },
];
</script>
