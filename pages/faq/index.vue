<template>
  <div class="px-6 pt-24 pb-20 md:py-36 bg-gray1 text-black1">
    <div class="max-w-4xl space-y-8 md:space-y-10 mx-auto bg-white px-6 py-8 md:px-10 md:py-12 rounded-md">
      <h1 class="text-xl font-bold">
        {{ locale === "en" ? "FAQ" : "よくある質問" }}
      </h1>
      <div class="space-y-6 md:space-y-8">
        <template v-if="locale === 'en'">
          <!-- 英語 -->
          <div v-for="faq in EN_FAQ_LIST" :key="faq.answer">
            <details class="hover:cursor-pointer">
              <summary class="font-semibold">{{ faq.question }}</summary>
              <div>
                <p class="px-6 py-2 text-sm leading-6 whitespace-pre-line">{{ faq.answer }}</p>
              </div>
            </details>
          </div>
        </template>
        <template v-if="locale === 'ja'">
          <div v-for="faq in JP_FAQ_LIST" :key="faq.answer">
            <details class="hover:cursor-pointer">
              <summary class="font-semibold">{{ faq.question }}</summary>
              <div>
                <p class="px-6 py-2 text-sm leading-6 whitespace-pre-line">{{ faq.answer }}</p>
              </div>
            </details>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Faq {
  question: string;
  answer: string;
}

const { locale } = useI18n();

useHead(() => ({
  title: locale.value === "en" ? "FAQ" : "よくある質問",
}));

const JP_FAQ_LIST: Faq[] = [
  {
    question: "複数端末でプロプランを使うことは可能ですか？",
    answer:
      "可能です。1ライセンスで複数端末プロプランで使用可能です。2台目以降で使用する場合には、プロプラン登録画面にある「以前の購入を復元する」ボタンをタップしてください。ただし、iOS と Android で利用するにはそれぞれの端末でプロプランに加入いただく必要があります。",
  },
  {
    question: "プロプランからの退会方法を教えて下さい",
    answer:
      "iOS の場合と Android の場合でそれぞれ異なります。どちらも Fast Notion アプリ側からではなく、端末の設定からおこないます。\n（iOS の場合）\n1. 「設定」アプリを起動\n2. 「アカウント設定」内の「サブスクリプション」を表示\n3. 「管理」から解約\n（Android の場合）\n1. Google Play アプリ を開きます。\n2. 右上のプロフィール アイコンをタップします。\n3. [お支払いと定期購入] [定期購入] をタップします。\n4. 解約する定期購入またはプリペイド プランを選択します。\n5. [定期購入を解約] をタップします。",
  },
  {
    question: "複数ページ設定することはできますか？",
    answer: "無料プランの場合は1ページまでとなります。プロプランの場合は無制限に設定可能です。",
  },
  {
    question: "データベースにメモを投稿することはできますか？",
    answer: "プロプランのみ投稿可能です。詳しい設定方法は使い方ページをご覧ください",
  },
  {
    question: "プライベート（非公開）ページやプライベートデータベースにも投稿可能ですか？",
    answer: "投稿可能です。",
  },
  {
    question: "Fast Notion は無料アプリですか？",
    answer: "一部の機能を除き、無料で使用可能です。プロプラン（有料プラン）にアップグレードいただくことで、より強力に Fast Notion をお使いいただくことが可能です。",
  },
];

const EN_FAQ_LIST: Faq[] = [
  {
    question: "Can I use the Pro Plan on multiple devices?",
    answer:
      "Yes, you can use the Pro Plan on multiple devices with one license. To use it on a second device or beyond, tap the 'Restore Previous Purchase' button on the Pro Plan registration screen. However, please note that you need to subscribe to the Pro Plan separately for iOS and Android devices.",
  },
  {
    question: "How can I cancel my Pro Plan subscription?",
    answer:
      "The cancellation process differs for iOS and Android devices. Please note that cancellations cannot be made from the Fast Notion app itself but must be done from your device settings.\n(iOS)\n1. Open the 'Settings' app.\n2. Go to 'Account Settings' and select 'Subscriptions.'\n3. Cancel the subscription from 'Manage.'\n(Android)\n1. Open the Google Play app.\n2. Tap your profile icon in the top-right corner.\n3. Go to [Payments & Subscriptions] > [Subscriptions].\n4. Select the subscription or prepaid plan you want to cancel.\n5. Tap [Cancel Subscription].",
  },
  {
    question: "Can I set multiple pages?",
    answer: "With the free plan, you can set up to one page. With the Pro Plan, you can set an unlimited number of pages.",
  },
  {
    question: "Can I post notes to a database?",
    answer: "Posting to a database is available only in the Pro Plan. Please check the 'How to Use' page for detailed instructions.",
  },
  {
    question: "Can I post to private (unshared) pages or private databases?",
    answer: "Yes, posting is possible.",
  },
  {
    question: "Is Fast Notion a free app?",
    answer: "Most features are available for free. Upgrading to the Pro Plan (paid plan) allows you to use Fast Notion more powerfully.",
  },
];
</script>
