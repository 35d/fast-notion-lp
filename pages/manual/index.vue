<template>
  <div class="px-6 pt-24 pb-20 md:py-36 bg-gray1 text-black1">
    <div
      class="max-w-4xl mx-auto space-y-8 md:space-y-10 bg-white px-6 py-8 md:px-10 md:py-14"
    >
      <h1 class="text-xl font-bold">使い方</h1>
      <div class="space-y-8 md:space-y-10">
        <div class="space-y-6">
          <div>
            <p class="text-sm md:text-base mb-4">
              設定方法で不明点がある場合はユーザーコミュニティからご質問ください。<br />ユーザーコミュニティの参加方法は下のボタンから確認できます。
            </p>
            <nuxt-link
              class="block w-48 h-12 mb-8 mx-auto md:mx-0"
              to="/user-community"
            >
              <PrimaryButton>参加方法を見る</PrimaryButton>
            </nuxt-link>
          </div>
          <div>
            <p class="mb-4 text-sm md:text-base">
              動画でも解説しているので、もしよければこちらも合わせてご覧ください。
            </p>
            <iframe
              src="https://www.youtube.com/embed/Mz9YHBLlFKc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="w-full md:w-[608px] sm:h-[342px] mx-auto"
            ></iframe>
          </div>
          <p class="text-sm md:text-base">
            Fast Notion と Notion
            の設定方法には、「かんたん設定モード」「手動設定モード」「レガシーモード」の3種類の方法があります。それぞれ設定方法を解説しています。特に理由がない場合には「かんたん設定モード」での設定を推奨します。
          </p>
        </div>
        <div class="w-full h-px bg-gray1"></div>
        <div class="space-y-4 md:space-y-6 text-sm md:text-base">
          <h2 class="text-lg font-semibold">かんたん設定モード（推奨）</h2>
          <p class="">
            手順に従って操作することで、Fast Notion と Notion
            の接続が完了するモードです。
          </p>
          <div class="space-y-2 md:space-y-4">
            <template v-for="manual in manual1">
              <details class="hover:cursor-pointer">
                <summary class="font-semibold">
                  {{ manual.title }}
                </summary>
                <p class="pl-2 md:pl-4 py-2 md:py-4">
                  {{ manual.description }}
                </p>
                <div
                  class="flex w-full gap-2 md:gap-8 pl-2 md:pl-4 mb-4 md:mb-10"
                  v-html="manual.contents"
                ></div>
              </details>
            </template>
          </div>
        </div>
        <div class="space-y-4 md:space-y-6 text-sm md:text-base">
          <h2 class="text-lg font-semibold">手動設定モード</h2>
          <p class="">
            ご自身で ID
            やトークンを設定したい方はこちらの設定方法がオススメです。
          </p>
          <div class="space-y-2 md:space-y-4">
            <details class="hover:cursor-pointer">
              <summary class="font-semibold">
                1. Notion Integration Token の取得
              </summary>
              <div
                class="pl-2 md:pl-4 mb-4 md:mb-10 space-y-1 md:space-y-2 pt-2 md:pt-4"
              >
                <p class="leading-6 md:leading-7">
                  まず、
                  <a
                    href="https://www.notion.so/my-integrations"
                    class="underline"
                    >https://www.notion.so/my-integrations</a
                  >
                  にアクセスし、左側の
                  <Code>New Integrations</Code> というボタンから、新しい
                  Integration を作成します。
                </p>
                <p class="">
                  ※ Integration Token は、ご自身の Notion アカウントと、Fast
                  Notion
                  を紐付けるために必要な値です。外部に漏れてしまうと、情報が見られたりしてしまう可能性があるので、他の方には教えたりしないよう、ご注意ください。
                </p>
                <div class="flex flex-col gap-2 max-w-xl mx-auto">
                  <img src="/img/manual/2-1-1.png" alt="" />
                  <p class="text-xs md:text-sm text-gray2">
                    Notion Integration 作成画面（既にいくつか Integration
                    が作成されている状態）
                  </p>
                </div>
                <p class="py-4">
                  Integration を作成が完了したら、Secrets
                  というところから、Token が取得できるので、こちらの値が Notion
                  Integration Token になります。
                </p>
                <div class="flex flex-col gap-2 max-w-xl mx-auto">
                  <img src="/img/manual/2-1-2.png" alt="" />
                  <p class="text-xs md:text-sm text-gray2">
                    Integration Token の取得方法
                  </p>
                </div>
              </div>
            </details>
            <details class="hover:cursor-pointer">
              <summary class="font-semibold">
                2. 投稿したいページの作成・Integration 権限の付与
              </summary>
              <div
                class="pl-2 md:pl-4 mb-4 md:mb-10 space-y-1 md:space-y-2 pt-2 md:pt-4"
              >
                <p>
                  投稿先となる Notion のページを作成後、上記のステップで作成した
                  Integration
                  の権限を与えてください（スクリーンショットでは、Fast Notion
                  という Integration を追加しています）
                </p>
                <p>
                  Notion のページの右上の Share
                  ボタンから権限を追加することができます。
                </p>
                <img
                  src="/img/manual/2-2.png"
                  alt=""
                  class="w-full max-w-xl mx-auto"
                />
              </div>
            </details>
            <details class="hover:cursor-pointer">
              <summary class="font-semibold">
                3. 投稿したいページの ID を取得
              </summary>
              <div
                class="pl-2 md:pl-4 mb-4 md:mb-10 space-y-1 md:space-y-2 pt-2 md:pt-4"
              >
                <p class="font-semibold">TEXT / TODO モードの場合</p>
                <p>投稿したいページのリンクをコピーしてください。</p>
                <div class="flex flex-col gap-2 max-w-xl mx-auto pb-4">
                  <img src="/img/manual/2-3-1.png" alt="" />
                  <p class="text-xs md:text-sm text-gray2">
                    リンクの取得方法のスクリーンショット
                  </p>
                </div>
                <p class="leading-6 md:leading-7">
                  URL は
                  <Code
                    >https://www.notion.so/[アカウント名]/[PAGE名]-[PAGE_ID(32桁の文字列)]</Code
                  >
                  という形式になっています。ここの末尾の 32 桁の文字列が PAGE ID
                  になっているので、その部分のみを取得してください。
                </p>
                <p class="leading-6 md:leading-7 pb-8">
                  （例）コピーしたURLが
                  <Code
                    >https://www.notion.so/35d/Fast-Notion-81d260a5e5d8473ab32458c7a1971f1e</Code
                  >
                  となっていた場合は PAGE ID は
                  <Code>81d260a5e5d8473ab32458c7a1971f1e</Code>
                  となります。
                </p>
                <p class="font-semibold">DB モードの場合（Pro Plan 限定）</p>
                <p>
                  DB モードを設定した場合には、Fast Notion
                  からのメモがデータベースに保存されます（Pro Plan
                  限定の機能になります）DB モードの場合も同様の方法で ID
                  を取得します。まずは、データベース（テーブル）のリンクをコピーしてください。
                </p>
                <div class="flex flex-col gap-2 max-w-xl mx-auto pb-4">
                  <img src="/img/manual/2-3-2.png" alt="" />
                  <p class="text-xs md:text-sm text-gray2">
                    データベースのリンクをコピーする（フルページデータベースの場合には、TEXT
                    モードの場合と同様、右上のボタンからリンクをコピーしてください）
                  </p>
                </div>
                <p class="leading-6 md:leading-7">
                  URL は
                  <Code
                    >https://www.notion.so/[アカウント名]/[PAGE_ID(32桁の文字列)]?v=[VIEW_ID]</Code
                  >
                  という形式になっています。この URL から PAGE_ID の 32
                  桁の文字列を取り出して下さい。
                </p>
                <p>
                  ここを間違える方が非常に多いのでご注意下さい。<Code
                    >v=XXX</Code
                  >
                  の方を貼り付けてしまう方が非常に多いです。
                </p>
                <p class="leading-6 md:leading-7">
                  （例）コピーした URLが
                  <Code class="md:hidden"
                    >https://www.notion.so/35d/a2f9332ec0f9
                    4d5e9d06581ed864047c?v=a66e42ea25a2476089fc574c72a246cb</Code
                  >
                  <Code class="hidden md:inline"
                    >https://www.notion.so/35d/a2f9332ec0f94d5e9d06581ed864047c?v=a66e42ea25a2476089fc574c72a246cb</Code
                  >
                  となっていた場合は、PAGE ID は
                  <Code>a2f9332ec0f94d5e9d06581ed864047c</Code> です。
                </p>
                <p>
                  DB
                  モードの場合、デフォルトの「Name」というプロパティにメモが投稿される仕様となっています。ここの名前を変えてしまうと、正常に動作しない可能性が高いです。「Name」のままお使いください。また、Notion
                  を日本語設定でお使いの方はプロパティ名がデフォルトだと「名前」となっています。ここを「Name」に変更するようにしてください。
                </p>
              </div>
            </details>
            <details class="hover:cursor-pointer">
              <summary class="font-semibold">4. Fast Notion へ設定</summary>
              <div
                class="pl-2 md:pl-4 mb-4 md:mb-10 space-y-1 md:space-y-2 pt-2 md:pt-4"
              >
                <p>
                  Notion API Mode を ON にして、1~3 のステップで取得した情報を
                  Fast Notion へ入力してください。OFF
                  にした場合のレガシーモード（後述）は、現在非推奨となっているのでご注意ください。
                </p>
                <div class="flex flex-col gap-2 max-w-xl mx-auto">
                  <img src="/img/manual/2-4.png" alt="" />
                  <p class="text-xs md:text-sm text-gray2">
                    Fast Notion の設定画面
                  </p>
                </div>
                <p class="py-4">
                  設定方法は、動画でも紹介しているので、こちらも合わせてご覧頂くと設定方法のイメージがつきやすいかもしれません）
                </p>
                <iframe
                  src="https://www.youtube.com/embed/MzrVVWkVvTU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="w-full md:w-[608px] sm:h-[342px] mx-auto"
                ></iframe>
              </div>
            </details>
          </div>
        </div>
        <div class="space-y-4 md:space-y-6 text-sm md:text-base">
          <h2 class="text-lg font-semibold">レガシーモード（非推奨）</h2>
          <p class="">
            Token v2 を使った方法（Legacy モード） は非推奨となりました。Notion
            API モードをお使いください。
          </p>
          <div class="space-y-2 md:space-y-4">
            <template v-for="manual in manual3">
              <details class="hover:cursor-pointer">
                <summary class="font-semibold">
                  {{ manual.title }}
                </summary>
                <div class="mb-4 md:mb-10 space-y-1 md:space-y-2 pt-2 md:pt-4">
                  <p
                    class="pl-2 md:pl-4 leading-6 md:leading-7"
                    v-html="manual.description"
                  ></p>
                  <div class="max-w-xl mx-auto">
                    <img :src="manual.imgPath" alt="" v-if="manual.imgPath" />
                  </div>
                </div>
              </details>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Code from "../../components/atoms/Code.vue";
import PrimaryButton from "~~/components/atoms/PrimaryButton.vue";
useMeta(() => ({
  title: "使い方",
}));
const manual1 = [
  {
    title: "1. かんたん設定モード画面を開き、Notion にログインする",
    description:
      "Fast Notion の URL設定画面から「かんたん設定ボタン」をタップします。Safariが開かれるので、「Notion で認証をする」ボタンをタップし、Notionにログインしてください。",
    contents: `<div class="flex flex-col gap-2">
                <img src="/img/manual/1-1-1.png" alt="" />
                <p class="text-xs md:text-sm text-gray2">URL 設定画面</p>
              </div>
              <div class="flex flex-col gap-2">
                <img src="/img/manual/1-1-2.png" alt="" />
                <p class="text-xs md:text-sm text-gray2">
                  かんたん設定画面（Safari）
                </p>
              </div>
              <div class="flex flex-col gap-2">
                <img src="/img/manual/1-1-3.png" alt="" />
                <p class="text-xs md:text-sm text-gray2">
                  Notion ログイン画面
                </p>
              </div>`,
  },
  {
    title: "2. 接続したいページを選択して、Fast Notion に値を入力する",
    description:
      "Notion にログインが成功したら、ページの一覧が表示されます。FastNotion と連携させたいページ（Fast Notionからのアクセスを許可するページ）を選択してください。「アクセスを許可する」ボタンをタップすると、もとの画面に戻り、ページIDとインテグレーショントークンが表示されます。ここに表示された値をFast Notion の画面にそれぞれペーストしてください。",
    contents: `<div class="flex flex-col gap-2">
                <img src="/img/manual/1-2-1.png" alt="" />
                <p class="text-xs md:text-sm text-gray2">アクセスを許可するページを選択</p>
              </div>
              <div class="flex flex-col gap-2">
                <img src="/img/manual/1-2-2.png" alt="" />
                <p class="text-xs md:text-sm text-gray2">
                  ページ ID とインテグレーショントークンが表示される
                </p>
              </div>
              <div class="flex flex-col gap-2">
                <img src="/img/manual/1-2-3.png" alt="" />
                <p class="text-xs md:text-sm text-gray2">
                  Fast Notion 内にコピーして貼り付ける
                </p>
              </div>`,
  },
  {
    title: "3. 接続テスト",
    description:
      "Fast Notion の URL設定画面の接続テストボタンをタップしてください。成功のダイアログが表示されたら接続成功です。指定したNotion のページに Fast Notionからのテスト投稿のテキストが入力されているはずです。",
    contents: "",
  },
];
const manual3 = [
  {
    title: "1. Web ブラウザで Notion を開き、Developer Tool を起動",
    description: `Mac の場合は、<span class="px-code-x py-code-y bg-beige2 text-pink rounded-sm">Option + Command + I </span><br>
Window の場合は、<span class="px-code-x py-code-y bg-beige2 text-pink rounded-sm">F12</span> または <span class="px-code-x py-code-y bg-beige2 text-pink rounded-sm">Ctrl + Shift + I </span><br>
で開くことができます。`,
    imgPath: "",
  },
  {
    title: "2. token_v2 のコピー",
    description: `<span class="px-code-x py-code-y bg-beige2 text-pink rounded-sm">Application タブ</span> > <span class="px-code-x py-code-y bg-beige2 text-pink rounded-sm">Storage</span> > <span class="px-code-x py-code-y bg-beige2 text-pink rounded-sm">Cookies</span> > <span class="px-code-x py-code-y bg-beige2 text-pink rounded-sm">token_v2</span> を探して、<span class="px-code-x py-code-y bg-beige2 text-pink rounded-sm">Value</span> をコピーしてください。`,
    imgPath: "/img/manual/3-2.png",
  },
  {
    title: "3. アプリ内に貼り付けてください",
    description: `Slack や、SNS 等を経由して、コピーしたあなたの URL を Fast Notion アプリ内に貼り付けてください。これで設定は完了です👍  Notion API Mode を OFF にした場合は、こちらのトークンが使われます。<br>※トークンは、個人を特定する大切な情報です。第三者に漏らさないようにご注意ください。`,
    imgPath: "/img/manual/3-3.png",
  },
];
</script>
