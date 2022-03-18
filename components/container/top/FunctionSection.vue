<template>
  <div>
    <div class="flex flex-col mt-24 mb-14 md:flex-row">
      <div class="mx-9 mb-14">
        <h2
          class="font-bold text-2xl text-center text-black1 mb-4 md:text-left"
        >
          Fast Notionでできること
        </h2>
        <p class="text-xs text-center mb-8 md:text-left">FUNCTION</p>
        <p class="text-sm leading-6 text-black1">
          Notion とのページ連携の設定によって、通常のテキスト、ToDo
          ブロック、データベースへの投稿などさまざまな形式でメモを取ることができます。複数ページを登録することができるので、プライベート用のメモと仕事用のメモを分けることが出来ます。
        </p>
      </div>
      <div class="bg-gray1 flex justify-end">
        <img src="~@/assets/img/top/function.png" alt="" class="w-11/12" />
      </div>
    </div>
    <h3 class="text-center mt-24 mb-10 font-medium text-xl">
      自由にメモ形式を指定できる
    </h3>
    <div class="mb-8">
      <div class="flex flex-col mx-6 mb-8">
        <div class="flex flex-col items-center shadow-3xl rounded">
          <p class="text-base font-bold text-black1 mb-1 mt-10">
            データベース接続
          </p>
          <p class="text-sm font-medium text-black1 mb-4">
            データベースに直接テキストメモを送信
          </p>
          <img src="~@/assets/img/top/function-database.svg" alt="" />
        </div>
      </div>
      <div class="flex flex-col mx-6 mb-8">
        <div class="flex flex-col items-center shadow-3xl rounded">
          <p class="text-base font-bold text-black1 mb-1 mt-10">
            複数ページの指定
          </p>
          <p class="text-sm font-medium text-black1 mb-4">
            Notion上の好きなページを指定して、メモを投稿
          </p>
          <img src="~@/assets/img/top/function-multi.svg" alt="" />
        </div>
      </div>
      <div class="flex flex-col mx-6 mb-8">
        <div class="flex flex-col items-center shadow-3xl rounded">
          <p class="text-base font-bold text-black1 mb-1 mt-10">
            To Do モード対応
          </p>
          <p class="text-sm font-medium text-black1 mb-4">
            思いついたタスクを即時に追加
          </p>
          <img src="~@/assets/img/top/function-todo.svg" alt="" />
        </div>
      </div>
      <div class="flex flex-col mx-6 mb-8">
        <div class="flex flex-col items-center shadow-3xl rounded">
          <p class="text-base font-bold text-black1 mb-1 mt-10">
            ダークモード対応
          </p>
          <p class="text-sm font-medium text-black1 mb-4">
            視覚的に読みやすい画面に変更可能
          </p>
          <img src="~@/assets/img/top/function-dark.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="bg-gray1 py-16 px-6 flex flex-col items-center">
      <h3 class="text-black1 text-xl font-medium mb-4">
        多くの方に評価されています
      </h3>
      <p class="text-gray2 text-xs font-medium mb-10">
        ※2022年2月時点、650件の評価。
      </p>
      <div class="flex gap-4 mb-10">
        <div
          class="bg-white h-44 flex flex-col items-center justify-center w-1/2 shadow-3xl rounded"
        >
          <img
            src="~@/assets/img/top/evaluation.png"
            alt=""
            class="px-6 mb-4"
          />
          <p class="text-black1 text-sm font-bold">App Store評価</p>
        </div>
        <div
          class="bg-white h-44 flex flex-col items-center justify-center w-1/2 shadow-3xl rounded"
        >
          <img src="~@/assets/img/top/download.png" alt="" class="px-4 mb-4" />
          <p class="text-black1 text-sm font-bold">累計ダウンロード数</p>
        </div>
      </div>
      <div class="w-full h-16 flex justify-center items-center">
        <a href="https://apps.apple.com/jp/app/fast-notion/id1505194382"
          ><img src="~@/assets/img/parts/download-ios.svg" alt=""
        /></a>
        <a
          href="https://play.google.com/store/apps/details?id=jp.fastNotion&hl=ja&gl=US"
          ><img src="~@/assets/img/parts/download-android.svg" alt=""
        /></a>
      </div>
    </div>
  </div>
</template>
