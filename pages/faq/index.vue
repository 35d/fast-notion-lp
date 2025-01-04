<template>
  <div class="px-6 pt-24 pb-20 md:py-36 bg-gray1 text-black1">
    <div class="max-w-4xl space-y-8 md:space-y-10 mx-auto bg-white px-6 py-8 md:px-10 md:py-12 rounded-md">
      <h1 class="text-xl font-bold">
        {{ locale === "en" ? "FAQ" : "よくある質問" }}
      </h1>
      <div class="space-y-6 md:space-y-8">
        <!-- 英語 -->
        <div v-for="(faq, i) in FAQ_LIST" :key="i">
          <details class="hover:cursor-pointer">
            <summary class="font-semibold">{{ locale === "en" ? faq.questionEn : faq.questionJp }}</summary>
            <div>
              <p class="px-6 py-2 text-sm leading-6 whitespace-pre-line">{{ locale === "en" ? faq.answerEn : faq.answerJp }}</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Faq {
  questionJp: string;
  questionEn: string;
  answerJp: string;
  answerEn: string;
}

const { locale } = useI18n();

useHead(() => ({
  title: locale.value === "en" ? "FAQ" : "よくある質問",
}));

const FAQ_LIST: Faq[] = [
  {
    questionJp: "複数端末でプロプランを使うことは可能ですか？",
    questionEn: "Can I use the Pro Plan on multiple devices?",
    answerJp:
      "可能です。1ライセンスで複数端末プロプランで使用可能です。2台目以降で使用する場合には、プロプラン登録画面にある「以前の購入を復元する」ボタンをタップしてください。ただし、iOS と Android で利用するにはそれぞれの端末でプロプランに加入いただく必要があります。",
    answerEn:
      "Yes, you can use the Pro Plan on multiple devices with one license. To use it on a second device or beyond, tap the 'Restore Previous Purchase' button on the Pro Plan registration screen. However, please note that you need to subscribe to the Pro Plan separately for iOS and Android devices.",
  },
  {
    questionJp: "プロプランからの退会方法を教えて下さい",
    questionEn: "How can I cancel my Pro Plan subscription?",
    answerJp:
      "iOS の場合と Android の場合でそれぞれ異なります。どちらも Fast Notion アプリ側からではなく、端末の設定からおこないます。\n（iOS の場合）\n1. 「設定」アプリを起動\n2. 「アカウント設定」内の「サブスクリプション」を表示\n3. 「管理」から解約\n（Android の場合）\n1. Google Play アプリ を開きます。\n2. 右上のプロフィール アイコンをタップします。\n3. [お支払いと定期購入] [定期購入] をタップします。\n4. 解約する定期購入またはプリペイド プランを選択します。\n5. [定期購入を解約] をタップします。",
    answerEn:
      "The cancellation process differs for iOS and Android devices. Please note that cancellations cannot be made from the Fast Notion app itself but must be done from your device settings.\n(iOS)\n1. Open the 'Settings' app.\n2. Go to 'Account Settings' and select 'Subscriptions.'\n3. Cancel the subscription from 'Manage.'\n(Android)\n1. Open the Google Play app.\n2. Tap your profile icon in the top-right corner.\n3. Go to [Payments & Subscriptions] > [Subscriptions].\n4. Select the subscription or prepaid plan you want to cancel.\n5. Tap [Cancel Subscription].",
  },
  {
    questionJp: "複数ページ設定することはできますか？",
    questionEn: "Can I set multiple pages?",
    answerJp: "無料プランの場合は1ページまでとなります。プロプランの場合は無制限に設定可能です。",
    answerEn: "With the free plan, you can set up to one page. With the Pro Plan, you can set an unlimited number of pages.",
  },
  {
    questionJp: "データベースにメモを投稿することはできますか？",
    questionEn: "Can I post notes to a database?",
    answerJp: "プロプランのみ投稿可能です。詳しい設定方法は使い方ページをご覧ください",
    answerEn: "Posting to a database is available only in the Pro Plan. Please check the 'How to Use' page for detailed instructions.",
  },
  {
    questionJp: "プライベート（非公開）ページやプライベートデータベースにも投稿可能ですか？",
    questionEn: "Can I post to private (unshared) pages or private databases?",
    answerJp: "投稿可能です。",
    answerEn: "Yes, posting is possible.",
  },
  {
    questionJp: "Fast Notion は無料アプリですか？",
    questionEn: "Is Fast Notion a free app?",
    answerJp: "一部の機能を除き、無料で使用可能です。プロプラン（有料プラン）にアップグレードいただくことで、より強力に Fast Notion をお使いいただくことが可能です。",
    answerEn: "Most features are available for free. Upgrading to the Pro Plan (paid plan) allows you to use Fast Notion more powerfully.",
  },
];
</script>
