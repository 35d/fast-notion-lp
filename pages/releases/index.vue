<template>
  <div class="px-6 pt-24 pb-20 md:py-36 bg-gray1 text-black1">
    <div class="max-w-4xl space-y-8 md:space-y-10 mx-auto bg-white px-6 py-8 md:px-10 md:py-12 rounded-md">
      <h1 class="text-xl font-bold">リリースノート</h1>
      <div class="space-y-6 md:space-y-8">
        <template v-if="releaseNotes.length === 0">
          <p>読込中</p>
        </template>
        <client-only placeholder="読込中">
          <div v-for="(r, i) in releaseNotes" :key="r.answer">
            <details class="hover:cursor-pointer" :open="i < 3">
              <summary class="font-semibold">{{ r.title }}（{{ r.dateStr }}）</summary>
              <div>
                <p class="px-6 py-2 text-sm leading-6 whitespace-pre-line">{{ r.body }}</p>
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

interface ReleaseNote {
  title: string;
  body: string;
  dateStr: string;
  tweetUrl: string;
}

useMeta(() => ({
  title: "リリースノート",
}));

const { data } = useSWRV("https://us-central1-fast-notion.cloudfunctions.net/v2/release-notes");

const releaseNotes = computed<ReleaseNote[]>(() => {
  if (!data.value || !data.value.results) return [];

  const a: ReleaseNote[] = data.value.results
    .map((_) => _.properties)
    .map((_) => {
      return {
        title: _.title.title[0].plain_text,
        body: _.description.rich_text[0].plain_text,
        dateStr: _.date.date.start.replaceAll("-", "/"),
        tweetUrl: "",
      };
    });
  return a.sort((a, b) => {
    if (a.dateStr < b.dateStr) return 1;
    if (a.dateStr === b.dateStr) return 0;
    if (a.dateStr > b.dateStr) return -1;
  });
});
</script>
