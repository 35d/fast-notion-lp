<template>
  <div>
    <div class="flex flex-col my-16 mx-6">
      <h2 class="font-bold text-2xl text-center text-black1 mb-4">
        {{ t("description1") }}
      </h2>
      <p class="text-xs font-bold tracking-wider text-center mb-8 text-transparent bg-clip-text bg-grad-text md:text-sm">PLAN</p>
      <table class="md:w-4/5 md:max-w-3xl md:mx-auto">
        <thead>
          <tr>
            <th></th>
            <th class="p-0">
              <div class="bg-blue1 mx-1 h-20 flex flex-col items-center justify-center rounded-t border border-blue1">
                <p class="text-white text-xs font-medium mb-1">
                  {{ t("description2") }}
                </p>
                <p class="text-beige1 text-base font-bold">
                  {{ t("description3") }}
                </p>
              </div>
            </th>
            <th class="p-0">
              <div class="bg-blue1 mx-1 h-20 flex flex-col items-center justify-center rounded-t border border-blue1">
                <p class="text-beige1 text-xs font-medium">
                  {{ t("description4") }}
                </p>
                <p class="text-beige1 text-xs font-medium">
                  {{ t("description5") }}
                  <span class="text-base font-bold">{{ t("description6") }}</span
                  >{{ t("description7") }}
                </p>
                <p class="text-light_gray text-xs font-medium">
                  {{ t("description8") }}
                </p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(plan, index) in plans" :key="index">
            <tr>
              <td class="p-4 w-[42%] md:w-[30%]">
                <p v-html="t(plan.title)" class="text-blue1 font-medium text-xs md:text-sm"></p>
              </td>
              <td height="48px" class="p-0 w-[28%] md:w-[35%]">
                <div
                  :class="[
                    'mx-1 h-full bg-beige1 border-x border-blue1 flex justify-center items-center',
                    {
                      'border-b rounded-b': index === plans.length - 1,
                    },
                  ]"
                >
                  <p class="text-blue1 font-medium text-sm text-center">
                    {{ t(plan.col1Text) }}
                  </p>
                  <img :src="plan.col1ImgPath" />
                </div>
              </td>
              <td height="48px" class="p-0 w-[28%] md:w-[35%]">
                <div
                  :class="[
                    'mx-1 h-full bg-beige1 border-x border-blue1 flex justify-center items-center',
                    {
                      'border-b rounded-b': index === plans.length - 1,
                    },
                  ]"
                >
                  <p class="text-blue1 font-medium text-sm text-center">
                    {{ t(plan.col2Text) }}
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
const { t } = useI18n();
const plans = [
  {
    title: "japaneseTitle",
    col1Text: "_",
    col1ImgPath: "/img/plan-ok.svg",
    col2Text: "_",
    col2ImgPath: "/img/plan-ok.svg",
  },
  {
    title: "darkmodeTitle",
    col1Text: "_",
    col1ImgPath: "/img/plan-ok.svg",
    col2Text: "_",
    col2ImgPath: "/img/plan-ok.svg",
  },
  {
    title: "advertisementsTitle",
    col1Text: "advertisementsCol1",
    col1ImgPath: "",
    col2Text: "advertisementsCol2",
    col2ImgPath: "",
  },
  {
    title: "memoTitle",
    col1Text: "_",
    col1ImgPath: "/img/plan-ok.svg",
    col2Text: "_",
    col2ImgPath: "/img/plan-ok.svg",
  },
  {
    title: "todoTitle",
    col1Text: "_",
    col1ImgPath: "/img/plan-ok.svg",
    col2Text: "_",
    col2ImgPath: "/img/plan-ok.svg",
  },
  {
    title: "historyTitle",
    col1Text: "_",
    col1ImgPath: "/img/plan-ng.svg",
    col2Text: "_",
    col2ImgPath: "/img/plan-ok.svg",
  },
  {
    title: "databaseTitle",
    col1Text: "_",
    col1ImgPath: "/img/plan-ng.svg",
    col2Text: "_",
    col2ImgPath: "/img/plan-ok.svg",
  },
  {
    title: "urlTitle",
    col1Text: "2",
    col1ImgPath: "",
    col2Text: "urlCol2",
    col2ImgPath: "",
  },
];
</script>

<i18n src="./priceSection.json"></i18n>
