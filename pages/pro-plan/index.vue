<template>
  <div></div>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    const router = useRouter();

    // Fast Notion アプリ内のリンクが /pro-plan となっており、
    // このページに来ると 404 になってしまうため
    router.push("/faq");
  },
});
</script>
