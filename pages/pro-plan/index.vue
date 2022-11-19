<template>
  <div></div>
</template>

<script setup lang="ts">
const router = useRouter();

onMounted(() => {
  // Fast Notion アプリ内のリンクが /pro-plan となっており、
  // このページに来ると 404 になってしまうため
  router.push("/faq");
});
</script>
