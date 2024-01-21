<template>
  <div class="px-6 pt-24 pb-20 md:py-36 bg-gray1 text-black1">
    <div class="max-w-4xl mx-auto space-y-8 md:space-y-10 bg-white px-6 py-8 md:px-10 md:py-14">
      <h1 class="text-xl font-bold">{{ t("description1") }}</h1>
      <div class="space-y-8 md:space-y-10">
        <div class="space-y-6">
          <section class="flex flex-col gap-y-2">
            <h2 class="text-lg font-bold">接続方法（v2.20 以降）</h2>
            <p>※v2.20 より前のバージョンをお使いの方は、アップデートを行なってください。</p>
            <p>下記の動画の手順に従って接続を行なってください。</p>
            <iframe
              :src="YOURUBE_URL_1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="w-full md:w-[608px] sm:h-[342px] mx-auto"
            ></iframe>
          </section>
          <section class="flex flex-col gap-y-2">
            <h2 class="text-lg font-bold">手動設定（v2.21 以降）</h2>
            <p class="text-bold">※v2.21 より前のバージョンをお使いの方は、Fast Notion のアップデートを行なってください。</p>
            <p>
              2024/01/21時点で、一部の端末にて、Notion
              との接続時にアプリが動かなくなる不具合がございます。アプリが動かなくなってしまう場合には、下記の手順で手動設定をお試しください。
            </p>

            <p class="font-bold">STEP. 1 インテグレーションの取得と Notion へのコネクト</p>
            <p>
              <a
                href="https://notion-lab.jp/2024-01-21-notion-integration-connect/"
                target="_blank"
                class="underline text-blue-500"
                >Notion インテグレーショントークンの取得方法・コネクト設定方法</a
              >の記事を参考に、インテグレーションの設定を行なってください。
            </p>
            <p class="font-bold">STEP. 2 Fast Notion 設定</p>

            <p>下記の動画を参考に、Fast Notion 側での設定を行なってください。</p>
            <iframe
              :src="YOUTUBE_URL_2"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="w-full md:w-[608px] sm:h-[342px] mx-auto"
            ></iframe>
          </section>
        </div>
        <div class="w-full h-px bg-gray1"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const YOURUBE_URL_1 = "https://www.youtube.com/embed/_5cmXTrxL54";

/** マニュアル設定用 */
const YOUTUBE_URL_2 = "https://www.youtube.com/embed/ABb5WBmQ1h8";

const { t } = useI18n();
useHead(() => ({
  title: "設定方法 | Fast Notion",
}));
</script>

<i18n src="./index.json"></i18n>
