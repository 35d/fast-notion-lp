<template>
  <div>
    <div class="flex flex-col my-16 mx-6">
      <h2 class="font-bold text-2xl text-center text-black1 mb-4">料金</h2>
      <p
        class="text-xs font-bold tracking-wider text-center mb-8 text-transparent bg-clip-text bg-grad-text"
      >
        PLAN
      </p>
      <table class="md:w-4/5 md:max-w-3xl md:mx-auto">
        <thead>
          <tr>
            <th></th>
            <th class="p-0">
              <div
                class="bg-primary mx-1 h-20 flex flex-col items-center justify-center rounded-t border border-primary"
              >
                <p class="text-white text-xs font-medium mb-1">通常</p>
                <p class="text-beige1 text-base font-bold">無料</p>
              </div>
            </th>
            <th class="p-0">
              <div
                class="bg-primary mx-1 h-20 flex flex-col items-center justify-center rounded-t border border-primary"
              >
                <p class="text-beige1 text-xs font-medium">プロ</p>
                <p class="text-beige1 text-xs font-medium">
                  月額 <span class="text-base font-bold">200</span>円
                </p>
                <p class="text-light_gray text-xs font-medium">年間 2,000円</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="plan in plans" :key="index">
            <tr>
              <td width="42%" class="p-4">
                <p
                  v-html="plan.title"
                  class="text-primary font-medium text-xs md:text-sm"
                ></p>
              </td>
              <td width="28%" height="48px" class="p-0">
                <div
                  :class="[
                    'mx-1 h-full bg-beige1 border-x border-primary flex justify-center items-center',
                    { 'border-b rounded-b': plan.title === 'URL 登録数の上限' },
                  ]"
                >
                  <p class="text-primary font-medium text-sm text-center">
                    {{ plan.col1Text }}
                  </p>
                  <img :src="plan.col1ImgPath" />
                </div>
              </td>
              <td width="28%" height="48px" class="p-0">
                <div
                  :class="[
                    'mx-1 h-full bg-beige1 border-x border-primary flex justify-center items-center',
                    { 'border-b rounded-b': plan.title === 'URL 登録数の上限' },
                  ]"
                >
                  <p class="text-primary font-medium text-sm text-center">
                    {{ plan.col2Text }}
                  </p>
                  <img :src="plan.col2ImgPath" />
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const plans = [
  {
    title: "日本語対応",
    col1Text: "",
    col1ImgPath: "/static/img/top/plan-ok.svg",
    col2Text: "",
    col2ImgPath: "/static/img/top/plan-ok.svg",
  },
  {
    title: "ダークモード",
    col1Text: "",
    col1ImgPath: "/static/img/top/plan-ok.svg",
    col2Text: "",
    col2ImgPath: "/static/img/top/plan-ok.svg",
  },
  {
    title: "広告の表示",
    col1Text: "表示",
    col1ImgPath: "",
    col2Text: "非表示",
    col2ImgPath: "",
  },
  {
    title: "メモの投稿",
    col1Text: "",
    col1ImgPath: "/static/img/top/plan-ok.svg",
    col2Text: "",
    col2ImgPath: "/static/img/top/plan-ok.svg",
  },
  {
    title: "ToDo 投稿モード",
    col1Text: "",
    col1ImgPath: "/static/img/top/plan-ok.svg",
    col2Text: "",
    col2ImgPath: "/static/img/top/plan-ok.svg",
  },
  {
    title: "履歴の保存<br>上限100件",
    col1Text: "",
    col1ImgPath: "/static/img/top/plan-ng.svg",
    col2Text: "",
    col2ImgPath: "/static/img/top/plan-ok.svg",
  },
  {
    title: "データベース投稿モード",
    col1Text: "",
    col1ImgPath: "/static/img/top/plan-ng.svg",
    col2Text: "",
    col2ImgPath: "/static/img/top/plan-ok.svg",
  },
  {
    title: "URL 登録数の上限",
    col1Text: "2",
    col1ImgPath: "",
    col2Text: "無制限",
    col2ImgPath: "",
  },
];
</script>
