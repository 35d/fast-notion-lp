<template>
  <div class="px-6 pt-24 pb-20 md:py-36 bg-gray1 text-black1">
    <div class="max-w-4xl mx-auto bg-white px-6 py-8 md:px-10 md:py-12">
      <h1 class="text-xl font-bold mb-8 md:mb-10">お問い合わせ</h1>
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
      <!-- <h2 class="text-base mb-4 font-semibold">問い合わせフォーム</h2>
      <p class="text-sm md:text-base">フォームからも問い合わせすることができます。こちらは返信に時間がかかる場合があります。</p>
      <p class="text-sm md:text-base">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScCilnOrO92nvJJ8cJEh6lRQy0gjHBdG3z3HVEc1PSdcp8Hww/viewform" class="underline">日本語</a>
        /
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc1nlfXiIZ4yu09ZZCFCkHlPQ7Y-u0_hqTFo_zE4hnWv-PW7w/viewform" class="underline">English</a>
      </p> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import PrimaryButton from "~~/components/atoms/PrimaryButton.vue";
useHead(() => ({
  title: "お問い合わせ",
}));
const route = useRoute();
const path = route.fullPath;
const joinSlack = () => {
  window.location.href = "https://join.slack.com/t/fast-notion/shared_invite/zt-wl4rkm1y-auA8ChpjIiWzAIIVqpnH4A";
};
</script>
