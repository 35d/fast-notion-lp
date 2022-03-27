<template>
  <div class="px-6 py-20 md:py-36 bg-gray1 text-black1">
    <div class="max-w-xl mx-auto space-y-4">
      <h1 class="text-xl mb-4">よくある質問</h1>
      <template v-for="faq in faqs" :key="index">
        <details class="hover:cursor-pointer">
          <summary class="hover:text-primary">{{ faq.question }}</summary>
          <div>
            <ul class="px-6 py-2">
              <template v-for="answer in faq.answer">
                <li type="disc" v-html="answer"></li>
              </template>
            </ul>
          </div></details
      ></template>
    </div>
  </div>
</template>

<script setup lang="ts">
const faqs = [
  {
    question: "Fast Notion は無料アプリですか？",
    answer: [
      "無料で使用可能です（一部機能を除く）",
      "プロプラン（有料プラン）にアップグレードいただくことで、より強力に Fast Notion をお使いいただくことが可能です。プロプランについての詳しい説明はこちら。",
    ],
  },
  { question: "非公開ページにも投稿可能ですか？", answer: ["投稿可能です。"] },
  {
    question: "データベースにメモを投稿することはできますか？",
    answer: [
      "プロプランのみ投稿可能です。プロプランについての詳しい説明はこちら。",
      "データベースの連携方法はマニュアルページに記載しています。",
    ],
  },
];
</script>
