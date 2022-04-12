<template>
  <div class="px-6 pt-24 pb-20 md:py-36 bg-gray1 text-black1">
    <div class="max-w-4xl space-y-8 md:space-y-10 mx-auto bg-white px-6 py-8 md:px-10 md:py-12 rounded-md">
      <h1 class="text-xl font-bold">よくある質問</h1>
      <div class="space-y-6 md:space-y-8">
        <template v-if="faqs.length === 0">
          <p>読込中</p>
        </template>
        <client-only placeholder="読込中">
          <div v-for="faq in faqs" :key="faq.answer">
            <details class="hover:cursor-pointer">
              <summary class="font-semibold">{{ faq.question }}</summary>
              <div>
                <p class="px-6 py-2 text-sm leading-6 whitespace-pre-line">{{ faq.answer }}</p>
              </div>
            </details>
          </div>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useSWRV from "swrv";

interface Faq {
  question: string;
  answer: string;
}

useMeta(() => ({
  title: "よくある質問",
}));

const { data } = useSWRV("https://us-central1-fast-notion.cloudfunctions.net/v2/helps");

const faqs = computed<Faq[]>(() => {
  if (!data.value || !data.value.results) return [];

  const a: Faq[] = data.value.results
    .map((_) => _.properties)
    .map((_) => ({
      question: _.title.title[0].plain_text,
      answer: _.description.rich_text[0].plain_text,
    }));
  return a.reverse();
});
</script>
