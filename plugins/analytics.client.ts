import { defineNuxtPlugin } from "#app";
import VueGTag from "vue-gtag";

const GTAG_ID = "G-GFG6LVVV68";

// NOTE: https://std9.jp/articles/01fpet6p50yk16ybm3wd8f16pr/
export default defineNuxtPlugin((nuxtApp) => {
  // ルーター取得
  const router = useRouter();

  // Vue登録
  nuxtApp.vueApp.use(
    VueGTag,
    {
      appName: "fast-notion",
      pageTrackerScreenviewEnabled: true, // ページトラッキングスクリーンビューを有効
      config: { id: GTAG_ID }, // GoogleAnalytics(GA4)の測定IDを指定する
    },
    router,
  );
});
