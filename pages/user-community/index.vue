<template>
  <div class="px-6 pt-24 pb-20 md:py-36 bg-gray1 text-black1">
    <div class="max-w-4xl mx-auto space-y-8 md:space-y-10 bg-white px-6 py-8 md:px-10 md:py-12">
      <h1 class="text-xl font-bold">ユーザーコミュニティ</h1>
      <section>
        <h2 class="text-base mb-4 font-semibold">Discord コミュニティで質問</h2>
        <p class="mb-4 text-sm md:text-base">
          「<a href="https://note.com/35d/membership" target="_blank" class="underline">Notion お悩み相談室</a>」というコミュニティを運営しています。Notion 初心者から上級者まで、幅広い層の Notion
          ユーザーさん50名以上にご参加いただいています。Fast Notion の質問はもちろん、Notion の質問も OK です。スタンダードプラン以上は初月無料となっております。詳細は下記リンクをご覧ください。
        </p>
        <a class="block w-48 h-12 mb-8 mx-auto md:mx-0" href="https://note.com/35d/membership" target="_blank">
          <PrimaryButton>詳細を見る</PrimaryButton>
        </a>
      </section>
      <section>
        <h2 class="text-base mb-4 font-semibold">Slack コミュニティで質問</h2>
        <p class="mb-4 text-sm md:text-base">Slack からも問い合わせすることができます。 下のボタンからご参加し、#質問 チャンネルにてご質問ください。※ こちらは返信に時間がかかる場合がございます。</p>
        <a class="block w-48 h-12 mb-8 mx-auto md:mx-0" href="https://join.slack.com/t/fast-notion/shared_invite/zt-wl4rkm1y-auA8ChpjIiWzAIIVqpnH4A">
          <PrimaryButton>参加する</PrimaryButton>
        </a>
      </section>
      <!-- <div class="space-y-4">
        <h2 class="text-lg font-semibold">よくある質問</h2>
        <template v-for="faq in faqs" :key="index">
          <details class="hover:cursor-pointer">
            <summary class="font-medium">{{ faq.question }}</summary>
            <p v-html="faq.answer" class="text-sm px-4 py-2"></p></details
        ></template>
      </div> -->
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
    question: "Slack / Discord のアカウントがありません / Slack / Discord 初心者ですが大丈夫ですか？",
    answer: "Slack / Discord は Google のアカウントさえあれば簡単に登録することができます。この機会にぜひどうぞ！Slack / Discord の使い方が分からなくてもサポートします。",
  },
];
</script>
