<template>
  <div class="px-6 pt-24 pb-20 md:py-36 bg-gray1 text-black1">
    <div class="max-w-4xl space-y-8 md:space-y-10 mx-auto bg-white px-6 py-8 md:px-10 md:py-12 rounded-md">
      <h1 class="text-xl font-bold">リリースノート</h1>
      <div class="space-y-6 md:space-y-8">
        <div v-for="(r, i) in RELEASE_NOTE_LIST" :key="r.title">
          <details class="hover:cursor-pointer" :open="i < 3">
            <summary class="font-semibold">{{ locale === "en" ? r.titleEn : r.title }}（{{ r.dateStr }}）</summary>
            <div>
              <p class="px-6 py-2 text-sm leading-6 whitespace-pre-line">{{ locale === "en" ? r.bodyEn : r.body }}</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ReleaseNote {
  title: string;
  titleEn: string;
  body: string;
  bodyEn: string;
  dateStr: string;
}

const { locale } = useI18n();

useHead(() => ({
  title: locale.value === "en" ? "Release Notes" : "リリースノート",
}));

const RELEASE_NOTE_LIST: ReleaseNote[] = [
  {
    title: "v2.24.0",
    titleEn: "v2.24.0",
    body: "・内部的なシステムをアップグレードし、より快適にアプリを活用いただけるようになりました",
    bodyEn: "Upgraded the internal system to make the app more comfortable to use.",
    dateStr: "2024/08/27",
  },
  {
    title: "v2.23.0",
    titleEn: "v2.23.0",
    body: "・内部的なシステムをアップグレードし、より快適にアプリを活用いただけるようになりました",
    bodyEn: "Upgraded the internal system to make the app more comfortable to use.",
    dateStr: "2024/03/11",
  },
  {
    title: "v2.22.0",
    titleEn: "v2.22.0",
    body: "・一部の画面デザインを変更しました\n・内部的なシステムをアップグレードし、より快適にアプリを活用いただけるようになりました",
    bodyEn: "Changed the design of some screens.\nUpgraded the internal system to make the app more comfortable to use.",
    dateStr: "2024/02/07",
  },
  {
    title: "v2.21.3",
    titleEn: "v2.21.3",
    body: "・内部的なシステムをアップグレードし、より快適にアプリを活用いただけるようになりました",
    bodyEn: "Upgraded the internal system to make the app more comfortable to use.",
    dateStr: "2024/02/06",
  },
  {
    title: "v2.21.0",
    titleEn: "v2.21.0",
    body: "・Notion ページの検索時に特定の条件下でアプリが操作できなくなってしまう不具合を修正しました\n・マニュアル設定モードを追加しました",
    bodyEn: "・Fixed a bug where the app would become unresponsive when searching for Notion pages under certain conditions\n・Added manual setup mode.",
    dateStr: "2024/01/19",
  },
  {
    title: "v2.20.0",
    titleEn: "v2.20.0",
    body: "・Notion との接続方法を見直しました。従来よりも素早く簡単に設定できるようになりました。",
    bodyEn: "・Revised the connection method with Notion. It is now faster and easier to set up than before.",
    dateStr: "2024/01/19",
  },
  {
    title: "v2.19.0",
    titleEn: "v2.19.0",
    body: "・軽微な不具合を修正しました\n・内部的なシステムをアップグレードし、より快適にアプリを活用いただけるようになりました",
    bodyEn: "・Fixed minor bugs\n・Upgraded the internal system to make the app more comfortable to use.",
    dateStr: "2023/11/13",
  },
  {
    title: "v2.18.0",
    titleEn: "v2.18.0",
    body: "デフォルトの言語設定を英語に変更しました。言語設定は設定画面からいつでも変更が可能です",
    bodyEn: "Changed the default language setting to English. The language setting can be changed at any time from the settings screen.",
    dateStr: "2023/01/28",
  },
  {
    title: "v2.17.0",
    titleEn: "v2.17.0",
    body: "軽微な不具合を修正しました",
    bodyEn: "Fixed minor bugs.",
    dateStr: "2023/01/28",
  },
  {
    title: "バージョン変更なし",
    titleEn: "No version change",
    body: "・DB モードでプロパティ名に関わらずメモが取れるようになりました",
    bodyEn: "Notes can now be taken in DB mode regardless of the property name.",
    dateStr: "2023/01/17",
  },
  {
    title: "バージョン変更なし",
    titleEn: "No version change",
    body: "・DB モードでページ本文にもメモが取れるようになりました",
    bodyEn: "Notes can now also be taken in the main body of pages in DB mode.",
    dateStr: "2022/11/20",
  },
  {
    title: "v2.16.3",
    titleEn: "v2.16.3",
    body: "軽微な不具合を修正しました",
    bodyEn: "Fixed minor bugs.",
    dateStr: "2022/07/19",
  },
  {
    title: "v2.16.2",
    titleEn: "v2.16.2",
    body: "軽微な不具合を修正しました",
    bodyEn: "Fixed minor bugs.",
    dateStr: "2022/07/13",
  },
  {
    title: "v2.16.1",
    titleEn: "v2.16.1",
    body: "軽微な不具合を修正しました",
    bodyEn: "Fixed minor bugs.",
    dateStr: "2022/07/12",
  },
  {
    title: "v2.16.0",
    titleEn: "v2.16.0",
    body: "・内部で使用しているライブラリ（React Native）のバージョンアップを行いました\n・Android 版が Pro Plan に対応しました",
    bodyEn: "・Upgraded the internal library (React Native)\n・Pro Plan is now available for the Android version.",
    dateStr: "2022/07/10",
  },
  {
    title: "v2.13.0",
    titleEn: "v2.13.0",
    body: "・かんたん設定モードを追加しました。スマートフォンのみで設定が完結するようになりました",
    bodyEn: "・Added Easy Setup Mode, allowing configuration to be completed on smartphones only.",
    dateStr: "2021/10/27",
  },
  {
    title: "v2.12.2",
    titleEn: "v2.12.2",
    body: "・細かなバグ修正・デザインの改善を行いました",
    bodyEn: "・Fixed minor bugs and improved design.",
    dateStr: "2021/10/17",
  },
  {
    title: "v2.12.1",
    titleEn: "v2.12.1",
    body: "・細かな日本語翻訳部分の修正を行いました",
    bodyEn: "・Made minor corrections to Japanese translations.",
    dateStr: "2021/10/16",
  },
  {
    title: "v2.12.0",
    titleEn: "v2.12.0",
    body: "・Fast Notion が日本語対応しました",
    bodyEn: "Fast Notion now supports Japanese.",
    dateStr: "2021/10/16",
  },
  {
    title: "v2.11.1",
    titleEn: "v2.11.1",
    body: "• Kotowaza Mode の切り替え機能を追加しました\n• 起動時のチラツキを解消しました\n• ナビゲーションバーを標準のものを使うように変更し、UX をカイゼンしました",
    bodyEn: "• Added a toggle feature for Kotowaza Mode\n• Eliminated flickering at startup\n• Improved UX by using standard navigation bars.",
    dateStr: "2021/10/03",
  },
  {
    title: "v2.11.0",
    titleEn: "v2.11.0",
    body: "・ダークモードを追加しました",
    bodyEn: "Added dark mode.",
    dateStr: "2021/09/15",
  },
  {
    title: "v2.10.0",
    titleEn: "v2.10.0",
    body: "・キーボードの確定ボタンからメモの送信が行えるモード（Keyboard Send Mode）を追加しました",
    bodyEn: "Added Keyboard Send Mode, allowing notes to be sent using the confirmation button on the keyboard.",
    dateStr: "2021/09/10",
  },
  {
    title: "v2.9.2",
    titleEn: "v2.9.2",
    body: "• ページごとに、TODO モード、TEXT モード、DB モード の切り替えができるようになりました\n• Notion API モードに接続テスト機能が追加されました\n• 細かな不具合をカイゼンしました",
    bodyEn: "• Enabled switching between TODO Mode, TEXT Mode, and DB Mode per page\n• Added a connection test feature to Notion API Mode\n• Improved minor bugs.",
    dateStr: "2021/08/11",
  },
  {
    title: "v2.9.1",
    titleEn: "v2.9.1",
    body: "• 内部的なライブラリのアップデートを行いました\n• 履歴保存機能がうまく動作しない不具合を修正しました",
    bodyEn: "• Updated internal libraries\n• Fixed an issue where the history save function did not work correctly.",
    dateStr: "2021/08/04",
  },
  {
    title: "v2.9.0",
    titleEn: "v2.9.0",
    body: "・Notion API Mode の追加を行いました",
    bodyEn: "Added Notion API Mode.",
    dateStr: "2021/07/20",
  },
  {
    title: "v2.8.2",
    titleEn: "v2.8.2",
    body: "・細かな不具合を修正しました",
    bodyEn: "Fixed minor issues.",
    dateStr: "2021/05/17",
  },
  {
    title: "v2.8.1",
    titleEn: "v2.8.1",
    body: "・Pro Plan の年間プランをリリースしました。月額プランで支払いを続けるよりも、15% お得です。",
    bodyEn: "Released the annual plan for Pro Plan, which is 15% cheaper than paying monthly.",
    dateStr: "2021/05/05",
  },
  {
    title: "v2.8.0",
    titleEn: "v2.8.0",
    body: "・IDFA 対応を行いました",
    bodyEn: "Implemented IDFA support.",
    dateStr: "2021/04/29",
  },
  {
    title: "v2.7.0",
    titleEn: "v2.7.0",
    body: "・今まで以上にスムーズにメモが取れる遅延実行モードが追加されました",
    bodyEn: "Added Delayed Execution Mode, allowing smoother note-taking.",
    dateStr: "2021/04/13",
  },
  {
    title: "v2.6.2",
    titleEn: "v2.6.2",
    body: "・iPad のランドスケープモードに対応しました",
    bodyEn: "Added support for iPad landscape mode.",
    dateStr: "2021/03/08",
  },
  {
    title: "v2.6.1",
    titleEn: "v2.6.1",
    body: "・軽微な不具合を修正しました",
    bodyEn: "Fixed minor bugs.",
    dateStr: "2021/02/27",
  },
  {
    title: "v2.6.0",
    titleEn: "v2.6.0",
    body: "・データベース対応モードを追加しました",
    bodyEn: "Added Database Mode.",
    dateStr: "2021/02/20",
  },
  {
    title: "v2.5.0",
    titleEn: "v2.5.0",
    body: "• 細かなバグを修正しました\n• UI / UX のカイゼンを行いました",
    bodyEn: "• Fixed minor bugs\n• Improved UI/UX.",
    dateStr: "2021/02/10",
  },
  {
    title: "v2.4.0",
    titleEn: "v2.4.0",
    body: "・履歴保存機能を追加しました",
    bodyEn: "Added a history save feature.",
    dateStr: "2020/12/16",
  },
  {
    title: "v2.3.2",
    titleEn: "v2.3.2",
    body: "・URL Scheme に対応しました\n・jp.35d.fast-notion:// でアプリが起動できるようになりました",
    bodyEn: "Added support for URL Schemes. The app can now launch using jp.35d.fast-notion://.",
    dateStr: "2020/09/24",
  },
  {
    title: "v2.3.0",
    titleEn: "v2.3.0",
    body: "・タスクキル時にメモが残るようになりました",
    bodyEn: "Notes now persist after task kill.",
    dateStr: "2020/09/13",
  },
  {
    title: "v2.2.0",
    titleEn: "v2.2.0",
    body: "・iPad サイズで見ても、違和感なく表示されるように修正しました",
    bodyEn: "Fixed layout issues for iPad displays.",
    dateStr: "2020/09/09",
  },
  {
    title: "v2.1.1",
    titleEn: "v2.1.1",
    body: "・細かなデザインの修正を行いました",
    bodyEn: "Made minor design adjustments.",
    dateStr: "2020/09/08",
  },
  {
    title: "v2.1.0",
    titleEn: "v2.1.0",
    body: "・送信ボタンの位置を変更できるようにしました\n• URL の設定数上限をなくしました（Pro Plan 限定）",
    bodyEn: "• Made the send button position adjustable\n• Removed the URL setting limit (Pro Plan only).",
    dateStr: "2020/08/12",
  },
  {
    title: "v2.0.0",
    titleEn: "v2.0.0",
    body: "・アイコンが一新され、より洗練されたデザインになりました\n・Pro Plan が追加されました",
    bodyEn: "• Redesigned the app icon for a more refined look\n• Added Pro Plan.",
    dateStr: "2020/08/08",
  },
  {
    title: "v1.3.5",
    titleEn: "v1.3.5",
    body: "・Todo モードの切り替えができないバグを修正しました\n・一部の端末でクラッシュしてしまう不具合を修正しました",
    bodyEn: "• Fixed a bug where Todo Mode could not be toggled\n• Fixed a crash issue on some devices.",
    dateStr: "2020/07/09",
  },
  {
    title: "v1.3.3",
    titleEn: "v1.3.3",
    body: "・ステータスバーが見えにくくなる不具合の修正を行いました",
    bodyEn: "Fixed an issue where the status bar became hard to see.",
    dateStr: "2020/07/02",
  },
  {
    title: "v1.3.2",
    titleEn: "v1.3.2",
    body: "・ アプリ起動時にキーボードが自動で表示されるようになりました\n・登録ページごとに削除できるようになりました",
    bodyEn: "• The keyboard now appears automatically at app startup\n• Pages can now be deleted individually.",
    dateStr: "2020/06/30",
  },
  {
    title: "v1.3.1",
    titleEn: "v1.3.1",
    body: "・アプリの安定性をより向上させました",
    bodyEn: "Enhanced app stability.",
    dateStr: "2020/06/28",
  },
  {
    title: "v1.3.0",
    titleEn: "v1.3.0",
    body: "・投稿先が複数設定できるようになりました",
    bodyEn: "Added support for setting multiple destinations.",
    dateStr: "2020/05/28",
  },
  {
    title: "v1.2.2",
    titleEn: "v1.2.2",
    body: "・Android 版のリリースを行いました",
    bodyEn: "Released the Android version.",
    dateStr: "2020/05/28",
  },
  {
    title: "v1.2.1",
    titleEn: "v1.2.1",
    body: "・問い合わせページへの導線を追加しました",
    bodyEn: "Added a link to the inquiry page.",
    dateStr: "2020/05/04",
  },
  {
    title: "v1.2.0",
    titleEn: "v1.2.0",
    body: "・ToDo ブロックでも送信できるようになりました",
    bodyEn: "Added support for sending from To Do blocks.",
    dateStr: "2020/05/01",
  },
  {
    title: "v1.1.1",
    titleEn: "v1.1.1",
    body: "・キーボードが閉じてしまう不具合を修正しました",
    bodyEn: "Fixed an issue where the keyboard would close unexpectedly.",
    dateStr: "2020/04/28",
  },
  {
    title: "v1.1.0",
    titleEn: "v1.1.0",
    body: "・投稿先をデフォルトページとして保存できるようになりました",
    bodyEn: "Added the ability to save destinations as default pages.",
    dateStr: "2020/04/25",
  },
  {
    title: "v1.0.0",
    titleEn: "v1.0.0",
    body: "・Fast Notion をリリースしました",
    bodyEn: "Released Fast Notion.",
    dateStr: "2020/04/20",
  },
];
</script>
