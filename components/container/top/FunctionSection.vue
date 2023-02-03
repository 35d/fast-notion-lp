<template>
  <div>
    <div
      class="flex flex-col mt-24 mb-14 md:flex-row md:w-4/5 md:mx-auto md:max-w-4xl md:items-center md:justify-center"
    >
      <div class="mx-9 mb-14 md:w-1/2">
        <h2
          class="font-bold text-2xl text-center text-black1 mb-4 md:text-left"
        >
          {{ t("description1") }}
        </h2>
        <p
          class="text-xs font-bold tracking-wider text-center mb-8 text-transparent bg-clip-text bg-grad-text md:text-left md:text-sm"
        >
          FUNCTION
        </p>
        <p class="text-sm leading-6 text-black1 md:text-base md:leading-8">
          {{ t("description2") }}
        </p>
      </div>
      <div class="bg-gray1 flex justify-end md:bg-white md:w-1/2">
        <img src="~@/assets/img/top/function.png" alt="" class="w-11/12" />
      </div>
    </div>
    <h3 class="text-center mt-24 mb-10 font-medium text-xl">
      {{ t("description3") }}
    </h3>
    <div class="mb-8 md:flex md:flex-wrap md:w-4/5 md:mx-auto md:max-w-4xl">
      <template v-for="(cando, index) in candos" :key="index">
        <div class="flex flex-col px-6 pb-8 md:w-1/2 md:px-4">
          <div class="flex flex-col items-center shadow-3xl rounded">
            <p class="text-base font-bold text-black1 mb-1 mt-10">
              {{ t(cando.title) }}
            </p>
            <p class="text-sm font-medium text-black1 mb-4">
              {{ t(cando.content) }}
            </p>
            <img :src="cando.imgPath" alt="" />
          </div>
        </div>
      </template>
    </div>
    <div class="bg-gray1 py-16 px-6 flex flex-col items-center">
      <h3 class="text-black1 text-xl font-medium mb-4">
        {{ t("description4") }}
      </h3>
      <p class="text-gray2 text-xs font-medium mb-10">
        {{ t("description5") }}
      </p>
      <div class="flex gap-4 mb-10 w-full md:w-4/5 md:max-w-4xl">
        <div
          class="bg-white py-10 px-6 w-1/2 shadow-3xl rounded flex flex-col justify-center"
        >
          <p
            class="font-[Futura] text-[64px] font-medium text-transparent bg-clip-text bg-grad-text text-center relative after:absolute after:top-4 after:content-['※'] after:text-xs after:text-black1 after:font-sans after:-right-1 after:md:right-1/4 after:lg:right-1/3"
          >
            4.6
          </p>
          <p class="text-black1 text-sm font-bold text-center md:text-base">
            {{ t("description6") }}
          </p>
        </div>
        <div
          class="bg-white py-10 px-4 w-1/2 shadow-3xl rounded flex flex-col justify-center"
        >
          <p
            class="font-[Futura] text-4xl font-medium text-transparent bg-clip-text bg-grad-text text-center mb-4 md:text-6xl"
          >
            30,000
          </p>
          <p class="text-black1 text-sm font-bold text-center md:text-base">
            {{ t("description7") }}
          </p>
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

<script setup lang="ts">
const { t } = useI18n();
const candos = [
  {
    title: "database_title",
    content: "database_content",
    imgPath: "/img/function-database.png",
  },
  {
    title: "specification_title",
    content: "specification_content",
    imgPath: "/img/function-multi.png",
  },
  {
    title: "todo_title",
    content: "todo_content",
    imgPath: "/img/function-todo.png",
  },
  {
    title: "darkmode_title",
    content: "darkmode_content",
    imgPath: "/img/function-dark.png",
  },
];
</script>

<i18n src="./functionSection.json"></i18n>
