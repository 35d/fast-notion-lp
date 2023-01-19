<template>
  <div class="px-6 pt-24 pb-20 md:py-36 bg-gray1 text-black1">
    <div class="max-w-4xl mx-auto space-y-8 md:space-y-10 bg-white px-6 py-8 md:px-10 md:py-12">
      <h1 class="text-xl font-bold">ユーザーコミュニティ（Slack）</h1>
      <div>
        <p class="mb-4 text-sm md:text-base">
          2021/10/04 Fast Notion のユーザーコミュニティを作りました。下のボタンから参加できるので、お気軽にご参加ください。（参加出来ない場合は Twitter アカウント
          <a href="https://twitter.com/FastNotion" class="underline">@FastNotion</a>
          までご連絡ください。）
        </p>
        <a class="block w-48 h-12 mb-8 mx-auto md:mx-0" href="https://join.slack.com/t/fast-notion/shared_invite/zt-wl4rkm1y-auA8ChpjIiWzAIIVqpnH4A"><PrimaryButton>参加する</PrimaryButton> </a>
      </div>
      <div class="space-y-4">
        <h2 class="text-lg font-semibold">よくある質問</h2>
        <template v-for="faq in faqs" :key="index">
          <details class="hover:cursor-pointer">
            <summary class="font-medium">{{ faq.question }}</summary>
            <p v-html="faq.answer" class="text-sm px-4 py-2"></p></details
        ></template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PrimaryButton from "~~/components/atoms/PrimaryButton.vue";
useHead(() => ({
  title: "ユーザーコミュニティ",
}));
const faqs = [
  {
    question: "初心者ですが参加して良いですか？",
    answer: "もちろんです。ご参加をお待ちしています！良いコミュニティを作る上では新人・初心者さんこそ宝です！遠慮せずご参加いただき、みんなでコミュニティを盛り上げていければと思います。",
  },
  {
    question: "Slack のアカウントがありません / Slack 初心者ですが大丈夫ですか？",
    answer: "Slack は Google のアカウントさえあれば簡単に登録することができます。この機会にぜひどうぞ！Slack の使い方が分からなくてもサポートします。",
  },
  {
    question: "どんな話をしているの？",
    answer:
      'Fast Notion の使い方に関する Q&A や最新情報の発表はもちろん、ユーザーさん同士でのやりとり用のチャンネルや、Notion に関する雑談、開発者（<a href="https://twitter.com/___35d" class="underline">@___35d</a>）の分報チャンネルもあります。現在何を開発しようとしているのかや、今後のリリース予定などもお伝えします。',
  },
];
</script>
