<template>
  <div class="px-6 py-20 md:py-36 bg-gray1 text-black1">
    <div class="max-w-xl mx-auto space-y-4">
      <h1 class="text-xl mb-6">ユーザーコミュニティ（Slack）</h1>
      <p class="mb-8">
        2021/10/04 Fast Notion のユーザーコミュニティを作りました。<a
          href="https://join.slack.com/t/fast-notion/shared_invite/zt-wl4rkm1y-auA8ChpjIiWzAIIVqpnH4A"
          class="underline"
          >こちら</a
        >から参加できるので、お気軽にご参加ください。<br />（参加出来ない場合は
        Twitter アカウント
        <a href="https://twitter.com/FastNotion" class="underline"
          >@FastNotion</a
        >
        までご連絡ください。）
      </p>
      <h2>よくある質問</h2>
      <template v-for="faq in faqs" :key="index">
        <details class="hover:cursor-pointer">
          <summary class="hover:text-primary">{{ faq.question }}</summary>
          <p v-html="faq.answer"></p></details
      ></template>
    </div>
  </div>
</template>

<script setup lang="ts">
const faqs = [
  {
    question: "初心者ですが参加して良いですか？",
    answer:
      "もちろんです。ご参加をお待ちしています！良いコミュニティを作る上では新人・初心者さんこそ宝です！遠慮せずご参加いただき、みんなでコミュニティを盛り上げていければと思います。",
  },
  {
    question:
      "Slack のアカウントがありません / Slack 初心者ですが大丈夫ですか？",
    answer:
      "Slack は Google のアカウントさえあれば簡単に登録することができます。この機会にぜひどうぞ！Slack の使い方が分からなくてもサポートします。",
  },
  {
    question: "どんな話をしているの？",
    answer:
      'Fast Notion の使い方に関する Q&A や最新情報の発表はもちろん、ユーザーさん同士でのやりとり用のチャンネルや、Notion に関する雑談、開発者（<a href="https://twitter.com/___35d" class="underline">@___35d</a>）の分報チャンネルもあります。現在何を開発しようとしているのかや、今後のリリース予定などもお伝えします。',
  },
];
</script>
