<template>
  <div class="px-6 pt-24 pb-20 md:py-36 bg-gray1 text-black1">
    <div
      class="max-w-4xl mx-auto space-y-8 md:space-y-10 bg-white px-6 py-8 md:px-10 md:py-12"
    >
      <h1 class="text-xl font-bold">リリースノート</h1>
      <div class="space-y-6 md:space-y-8">
        <p>Fast Notion のリリースノート情報は以下にまとめています。</p>
        <template v-for="release in releases" :key="index">
          <div class="space-y-4">
            <h2 class="text-base font-bold">{{ release.title }}</h2>
            <ul class="px-6 text-sm md:text-base">
              <template v-for="content in release.contents">
                <li type="disc">{{ content }}</li>
              </template>
            </ul>
            <div
              v-if="release.twitter"
              v-html="release.twitter"
              class="flex justify-center"
            ></div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const path = route.fullPath;
const releases = [
  {
    title: "（iOS / Android）v2.13.0 (2021/10/27)",
    contents: [
      "かんたん設定モードを追加しました",
      "設定方法については、🔰マニュアル・初期設定方法をご覧ください。",
    ],
    twitter: `<blockquote class="twitter-tweet">
          <p lang="ja" dir="ltr">
            🚀 Fast Notion かんたん設定モードを追加しました(iOS) いままでは PC
            でインテグレーショントークンを取得して貼り付ける必要がありましたが、スマートフォンのみで設定が完結するようになりました！
            <a href="https://t.co/hq6COYcpEs">pic.twitter.com/hq6COYcpEs</a>
          </p>
          &mdash; Fast Notion | Notion に素早くメモできる iOS / Android アプリ
          (@FastNotion)
          <a
            href="https://twitter.com/FastNotion/status/1452971715001155587?ref_src=twsrc%5Etfw"
            >October 26, 2021</a
          >
        </blockquote>`,
  },
  {
    title: "（iOS / Android）v2.12.2 (2021/10/17)",
    contents: ["細かなバグ修正・デザインの改善を行いました"],
  },
  {
    title: "（iOS / Android）v2.12.1 (2021/10/16)",
    contents: ["細かな日本語翻訳部分の修正を行いました"],
  },
  {
    title: "（iOS / Android）v2.12.0 (2021/10/15)",
    contents: ["Fast Notion が日本語対応しました"],
    twitter: `<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">🚀 Fast Notion v1.12 リリース！日本語対応！🇯🇵<br><br>Notion の日本語化と同じタイミングで Fast Notion も日本語対応しました。iOS / Android 両方で日本語モードが使えるようになっています。設定画面から変更可能なので、ぜひ日本語モードお試しください🙆‍♂️ <a href="https://t.co/L98QUObcNR">pic.twitter.com/L98QUObcNR</a></p>&mdash; Fast Notion | Notion に素早くメモできる iOS / Android アプリ (@FastNotion) <a href="https://twitter.com/FastNotion/status/1449573382081572868?ref_src=twsrc%5Etfw">October 17, 2021</a></blockquote>`,
  },
];

onMounted(() => {
  setTimeout(() => {
    let tweetScript = document.createElement("script");
    tweetScript.setAttribute("src", "https://platform.twitter.com/widgets.js");
    tweetScript.setAttribute("async", "true");
    document.head.appendChild(tweetScript);
  }, 100);
});
</script>
