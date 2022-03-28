<template>
  <div class="px-6 pt-24 pb-20 md:py-36 bg-gray1 text-black1">
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
    <div
      class="max-w-4xl mx-auto space-y-8 bg-white px-6 py-8 md:px-10 md:py-12"
    >
      <div class="space-y-2 text-sm md:text-base">
        <h2 class="text-lg font-semibold">かんたん設定モード（推奨）</h2>
        <p class="">
          手順に従って操作することで、Fast Notion と Notion
          の接続が完了するモードです。
        </p>
        <details class="hover:cursor-pointer">
          <summary class="font-semibold">
            1. かんたん設定モード画面を開き、Notion にログインする
          </summary>
          <p class="pl-2 md:pl-4 py-2">
            Fast Notion の URL
            設定画面から「かんたん設定ボタン」をタップします。Safari
            が開かれるので、「Notion で認証をする」ボタンをタップし、Notion
            にログインしてください。
          </p>
          <div class="flex w-full gap-2 md:gap-8 pl-2 md:pl-4 mb-4">
            <div class="flex flex-col gap-2">
              <img src="~/assets/img/manual/1-1-1.png" alt="" />
              <p class="text-sm text-gray2">アクセスを許可するページを選択</p>
            </div>
            <div class="flex flex-col gap-2">
              <img src="~/assets/img/manual/1-1-2.png" alt="" />
              <p class="text-sm text-gray2">
                ページ ID とインテグレーショントークンが表示される
              </p>
            </div>
            <div class="flex flex-col gap-2">
              <img src="~/assets/img/manual/1-1-3.png" alt="" />
              <p class="text-sm text-gray2">
                Fast Notion 内にコピーして貼り付ける
              </p>
            </div>
          </div>
        </details>
        <details class="hover:cursor-pointer">
          <summary class="font-semibold">
            2. 接続したいページを選択して、Fast Notion に値を入力する
          </summary>
          <p class="pl-2 md:pl-4 py-2">
            Notion にログインが成功したら、ページの一覧が表示されます。Fast
            Notion と連携させたいページ（Fast Notion
            からのアクセスを許可するページ）を選択してください。「アクセスを許可する」ボタンをタップすると、もとの画面に戻り、ページ
            ID とインテグレーショントークンが表示されます。ここに表示された値を
            Fast Notion の画面にそれぞれペーストしてください。
          </p>
        </details>
        <details class="hover:cursor-pointer">
          <summary class="font-semibold">3. 接続テスト</summary>
          <p class="">
            Fast Notion の URL
            設定画面の接続テストボタンをタップしてください。成功のダイアログが表示されたら接続成功です。指定した
            Notion のページに Fast Notion
            からのテスト投稿のテキストが入力されているはずです。
          </p>
        </details>
      </div>
      <div class="space-y-2 text-sm md:text-base">
        <h2 class="text-lg font-semibold">手動設定モード</h2>
        <p class="">
          ご自身で ID やトークンを設定したい方はこちらの設定方法がオススメです。
        </p>
        <details class="">
          <summary class="font-semibold">
            1. Notion Integration Token の取得
          </summary>
          <p class="">
            Integration Token は、ご自身の Notion アカウントと、Fast Notion
            を紐付けるために必要な値です。外部に漏れてしまうと、情報が見られたりしてしまう可能性があるので、他の方には教えたりしないよう、ご注意ください。
          </p>
        </details>
        <details class="hover:cursor-pointer">
          <summary class="font-semibold">
            2. 投稿したいページの作成・Integration 権限の付与
          </summary>
        </details>
        <details class="hover:cursor-pointer">
          <summary class="font-semibold">
            3. 投稿したいページの ID を取得
          </summary>
        </details>
        <details class="hover:cursor-pointer">
          <summary class="font-semibold">4. Fast Notion へ設定</summary>
        </details>
      </div>
      <div class="space-y-2 text-sm md:text-base">
        <h2 class="text-lg font-semibold">レガシーモード（非推奨）</h2>
        <p class="">
          Token v2 を使った方法（Legacy モード） は非推奨となりました。Notion
          API モードをお使いください。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
