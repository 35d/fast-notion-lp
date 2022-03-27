<template>
  <div class="px-6 py-20 md:py-36 bg-gray1">
    <div class="max-w-xl mx-auto">
      <h1 class="text-xl mb-4">お問い合わせ</h1>
      <h2 class="text-base mb-4">Slack コミュニティで質問（推奨）</h2>
      <p class="mb-8">
        Fast Notion の Slack
        コミュニティで質問が最も素早くレスポンスをすることができます。<br />
        <a
          href="https://join.slack.com/t/fast-notion/shared_invite/zt-wl4rkm1y-auA8ChpjIiWzAIIVqpnH4A"
          class="underline"
          >こちら</a
        >からご参加し、#質問 チャンネルにてご質問ください。
      </p>
      <h2 class="text-base mb-4">問い合わせフォーム</h2>
      <p>
        フォームからも問い合わせすることができます。こちらは返信に時間がかかる場合があります。
      </p>
      <p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScCilnOrO92nvJJ8cJEh6lRQy0gjHBdG3z3HVEc1PSdcp8Hww/viewform"
          class="underline"
          >日本語</a
        >
        /
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc1nlfXiIZ4yu09ZZCFCkHlPQ7Y-u0_hqTFo_zE4hnWv-PW7w/viewform"
          class="underline"
          >English</a
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const path = route.fullPath;
</script>
