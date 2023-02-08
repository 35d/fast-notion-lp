<template>
  <div class="px-6 pt-24 pb-20 md:py-36 bg-gray1 text-black1">
    <div
      class="max-w-4xl mx-auto space-y-8 md:space-y-10 bg-white px-6 py-8 md:px-10 md:py-14"
    >
      <h1 class="text-xl font-bold">{{ t("description1") }}</h1>
      <div class="space-y-8 md:space-y-10">
        <div class="space-y-6">
          <div>
            <p class="text-sm md:text-base mb-4">
              {{ t("description2") }}<br />{{ t("description3") }}
            </p>
            <nuxt-link
              class="block w-48 h-12 mb-8 mx-auto md:mx-0"
              to="/user-community"
            >
              <PrimaryButton>{{ t("description4") }}</PrimaryButton>
            </nuxt-link>
          </div>
          <div>
            <p class="mb-4 text-sm md:text-base">
              {{ t("descriptionMovie") }}
            </p>
            <iframe
              src="https://www.youtube.com/embed/SLADEKLwinU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="w-full md:w-[608px] sm:h-[342px] mx-auto"
            ></iframe>
          </div>
          <p class="text-sm md:text-base">
            {{ t("description5") }}
          </p>
        </div>
        <div class="w-full h-px bg-gray1"></div>
        <div class="space-y-4 md:space-y-6 text-sm md:text-base">
          <h2 class="text-lg font-semibold">{{ t("description6") }}</h2>
          <p class="">
            {{ t("description7") }}
          </p>
          <div class="space-y-2 md:space-y-4">
            <template v-for="manual in manual1">
              <details class="hover:cursor-pointer">
                <summary class="font-semibold">
                  {{ t(manual.title) }}
                </summary>
                <p class="pl-2 md:pl-4 py-2 md:py-4">
                  {{ t(manual.description) }}
                </p>
                <div
                  class="flex w-full gap-2 md:gap-8 pl-2 md:pl-4 mb-4 md:mb-10"
                  v-html="t(manual.contents)"
                ></div>
              </details>
            </template>
          </div>
        </div>
        <div class="space-y-4 md:space-y-6 text-sm md:text-base">
          <h2 class="text-lg font-semibold">{{ t("description8") }}</h2>
          <p class="">
            {{ t("description9") }}
          </p>
          <div class="space-y-2 md:space-y-4">
            <details class="hover:cursor-pointer">
              <summary class="font-semibold">
                {{ t("description10") }}
              </summary>
              <div
                class="pl-2 md:pl-4 mb-4 md:mb-10 space-y-1 md:space-y-2 pt-2 md:pt-4"
              >
                <p class="leading-6 md:leading-7">
                  {{ t("description11")
                  }}<a
                    href="https://www.notion.so/my-integrations"
                    class="underline"
                    >https://www.notion.so/my-integrations</a
                  >{{ t("description12") }} <Code>New Integrations</Code>
                  {{ t("description13") }}
                </p>
                <p class="">
                  {{ t("description14") }}
                </p>
                <div class="flex flex-col gap-2 max-w-xl mx-auto">
                  <img src="/img/manual/2-1-1.png" alt="" />
                  <p class="text-xs md:text-sm text-gray2">
                    {{ t("description15") }}
                  </p>
                </div>
                <p class="py-4">
                  {{ t("description16") }}
                </p>
                <div class="flex flex-col gap-2 max-w-xl mx-auto">
                  <img src="/img/manual/2-1-2.png" alt="" />
                  <p class="text-xs md:text-sm text-gray2">
                    {{ t("description17") }}
                  </p>
                </div>
              </div>
            </details>
            <details class="hover:cursor-pointer">
              <summary class="font-semibold">
                {{ t("description18") }}
              </summary>
              <div
                class="pl-2 md:pl-4 mb-4 md:mb-10 space-y-1 md:space-y-2 pt-2 md:pt-4"
              >
                <p>
                  {{ t("description19") }}
                </p>
                <p>
                  {{ t("description20") }}
                </p>
                <img
                  src="/img/manual/2-2-1.png"
                  alt=""
                  class="w-full max-w-xl mx-auto"
                />
              </div>
            </details>
            <details class="hover:cursor-pointer">
              <summary class="font-semibold">
                {{ t("description21") }}
              </summary>
              <div
                class="pl-2 md:pl-4 mb-4 md:mb-10 space-y-1 md:space-y-2 pt-2 md:pt-4"
              >
                <p class="font-semibold">
                  {{ t("description22") }}
                </p>
                <p>{{ t("description23") }}</p>
                <div class="flex flex-col gap-2 max-w-xl mx-auto pb-4">
                  <img src="/img/manual/2-3-1.png" alt="" />
                  <p class="text-xs md:text-sm text-gray2">
                    {{ t("description24") }}
                  </p>
                </div>
                <p class="leading-6 md:leading-7">
                  {{ t("description25") }}
                  <Code>{{ t("description26") }}</Code
                  >{{ t("description27") }}
                </p>
                <p class="leading-6 md:leading-7 pb-8">
                  {{ t("description28") }}
                  <Code
                    >https://www.notion.so/35d/Fast-Notion-81d260a5e5d8473ab32458c7a1971f1e</Code
                  >
                  {{ t("description29") }}
                  <Code>81d260a5e5d8473ab32458c7a1971f1e</Code>
                  {{ t("description30") }}
                </p>
                <p class="font-semibold">{{ t("description31") }}</p>
                <p>
                  {{ t("description32") }}
                </p>
                <div class="flex flex-col gap-2 max-w-xl mx-auto pb-4">
                  <img src="/img/manual/2-3-2.png" alt="" />
                  <p class="text-xs md:text-sm text-gray2">
                    {{ t("description33") }}
                  </p>
                </div>
                <p class="leading-6 md:leading-7">
                  {{ t("description34") }}
                  <Code>{{ t("description35") }}</Code>
                  {{ t("description36") }}
                </p>
                <p>
                  {{ t("description37") }}<Code>v=XXX</Code>
                  {{ t("description38") }}
                </p>
                <p class="leading-6 md:leading-7">
                  {{ t("description39") }}
                  <Code class="md:hidden"
                    >https://www.notion.so/35d/a2f9332ec0f9
                    4d5e9d06581ed864047c?v=a66e42ea25a2476089fc574c72a246cb</Code
                  >
                  <Code class="hidden md:inline"
                    >https://www.notion.so/35d/a2f9332ec0f94d5e9d06581ed864047c?v=a66e42ea25a2476089fc574c72a246cb</Code
                  >
                  {{ t("description40") }}
                  <Code>a2f9332ec0f94d5e9d06581ed864047c</Code
                  >{{ t("description41") }}
                </p>
              </div>
            </details>
            <details class="hover:cursor-pointer">
              <summary class="font-semibold">{{ t("description42") }}</summary>
              <div
                class="pl-2 md:pl-4 mb-4 md:mb-10 space-y-1 md:space-y-2 pt-2 md:pt-4"
              >
                <p>
                  {{ t("description43") }}
                </p>
                <div class="flex flex-col gap-2 max-w-xl mx-auto">
                  <img src="/img/manual/2-4.png" alt="" />
                  <p class="text-xs md:text-sm text-gray2">
                    {{ t("description44") }}
                  </p>
                </div>
                <p class="py-4">
                  {{ t("description45") }}
                </p>
                <iframe
                  src="https://www.youtube.com/embed/SLADEKLwinU"
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
          <h2 class="text-lg font-semibold">
            {{ t("description46") }}
          </h2>
          <p class="">
            {{ t("description47") }}
          </p>
          <div class="space-y-2 md:space-y-4">
            <template v-for="manual in manual3">
              <details class="hover:cursor-pointer">
                <summary class="font-semibold">
                  {{ t(manual.title) }}
                </summary>
                <div class="mb-4 md:mb-10 space-y-1 md:space-y-2 pt-2 md:pt-4">
                  <p
                    class="pl-2 md:pl-4 leading-6 md:leading-7"
                    v-html="t(manual.description)"
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
const { t } = useI18n();
useHead(() => ({
  title: "使い方",
}));
const manual1 = [
  {
    title: "manual1Title1",
    description: "manual1Description1",
    contents: "manual1Contents1",
  },
  {
    title: "manual1Title2",
    description: "manual1Description2",
    contents: "manual1Contents2",
  },
  {
    title: "manual1Title3",
    description: "manual1Description3",
    contents: "",
  },
];
const manual3 = [
  {
    title: "manual3Title1",
    description: "manual3Description1",
    imgPath: "",
  },
  {
    title: "manual3Title2",
    description: "manual3Description2",
    imgPath: "/img/manual/3-2.png",
  },
  {
    title: "manual3Title3",
    description: "manual3Description3",
    imgPath: "/img/manual/3-3.png",
  },
];
</script>

<i18n src="./index.json"></i18n>
