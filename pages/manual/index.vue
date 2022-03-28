<template>
  <div class="px-6 py-20 md:py-36 bg-gray1 text-black1">
    <div class="max-w-4xl mx-auto mb-8 px-4 md:mb-12">
      <h1 class="text-xl font-bold">使い方</h1>
    </div>
    <div class="max-w-4xl mx-auto mb-8 px-4 space-y-6 md:mb-12">
      <p class="text-sm md:text-base">
        設定方法で不明点がある場合はユーザーコミュニティからご質問ください。<br />ユーザーコミュニティの参加方法は<nuxt-link
          to="user-community"
          class="underline"
          >こちら</nuxt-link
        >。
      </p>
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
    <!-- <div
      class="max-w-4xl mx-auto border border-gray2 rounded-sm p-4 md:p-8 mb-8"
    >
      <p class="mb-4">目次</p>
      <div class="text-sm leading-6">
        <p>かんたん設定モード（推奨）</p>
        <ol class="pl-6 mb-1">
          <li type="1">かんたん設定モード画面を開き、Notion にログインする</li>
          <li type="1">
            接続したいページを選択して、Fast Notion に値を入力する
          </li>
          <li type="1">接続テスト</li>
        </ol>
        <p>手動設定モード</p>
        <ol class="pl-6 mb-1">
          <li type="1">Notion Integration Token の取得</li>
          <li type="1">投稿したいページの作成・Integration 権限の付与</li>
          <li type="1">投稿したいページの ID を取得</li>
          <li type="1">Fast Notion へ設定</li>
        </ol>
        <p>レガシーモード（非推奨）</p>
      </div>
    </div> -->
    <div class="max-w-4xl mx-auto space-y-8 bg-white px-6 py-8 md:px-10">
      <div>
        <h2 class="text-lg mb-4 font-semibold">かんたん設定モード（推奨）</h2>
        <p class="text-sm md:text-base mb-4">
          手順に従って操作することで、Fast Notion と Notion
          の接続が完了するモードです。
        </p>
        <details class="hover:cursor-pointer">
          <summary class="text-base font-semibold mb-4">
            1. かんたん設定モード画面を開き、Notion にログインする
          </summary>
          <p class="text-sm md:text-base mb-4">
            Fast Notion の URL
            設定画面から「かんたん設定ボタン」をタップします。Safari
            が開かれるので、「Notion で認証をする」ボタンをタップし、Notion
            にログインしてください。
          </p>
        </details>
        <details>
          <summary class="text-base font-semibold mb-4">
            2. 接続したいページを選択して、Fast Notion に値を入力する
          </summary>
          <p class="text-sm md:text-base mb-4">
            Notion にログインが成功したら、ページの一覧が表示されます。Fast
            Notion と連携させたいページ（Fast Notion
            からのアクセスを許可するページ）を選択してください。「アクセスを許可する」ボタンをタップすると、もとの画面に戻り、ページ
            ID とインテグレーショントークンが表示されます。ここに表示された値を
            Fast Notion の画面にそれぞれペーストしてください。
          </p>
        </details>
        <details>
          <summary class="text-base font-semibold mb-4">3. 接続テスト</summary>
          <p class="text-sm md:text-base mb-4">
            Fast Notion の URL
            設定画面の接続テストボタンをタップしてください。成功のダイアログが表示されたら接続成功です。指定した
            Notion のページに Fast Notion
            からのテスト投稿のテキストが入力されているはずです。
          </p>
        </details>
      </div>
      <div>
        <h2 class="text-lg mb-4 font-semibold">手動設定モード</h2>
        <p class="text-sm md:text-base mb-4">
          ご自身で ID やトークンを設定したい方はこちらの設定方法がオススメです。
        </p>
        <details>
          <summary class="text-base font-semibold mb-4">
            1. Notion Integration Token の取得
          </summary>
          <p class="text-sm md:text-base mb-4">
            Integration Token は、ご自身の Notion アカウントと、Fast Notion
            を紐付けるために必要な値です。外部に漏れてしまうと、情報が見られたりしてしまう可能性があるので、他の方には教えたりしないよう、ご注意ください。
          </p>
        </details>
        <details>
          <summary class="text-base font-semibold mb-4">
            2. 投稿したいページの作成・Integration 権限の付与
          </summary>
        </details>
        <details>
          <summary class="text-base font-semibold mb-4">
            3. 投稿したいページの ID を取得
          </summary>
        </details>
        <details>
          <summary class="text-base font-semibold mb-4">
            4. Fast Notion へ設定
          </summary>
        </details>
      </div>
      <div>
        <h2 class="text-lg mb-4 font-semibold">レガシーモード（非推奨）</h2>
        <p>
          Token v2 を使った方法（Legacy モード） は非推奨となりました。Notion
          API モードをお使いください。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const path = route.fullPath;
</script>
