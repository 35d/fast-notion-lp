// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  postcss: {
    // SEE: https://tailwindcss.com/docs/guides/nuxtjs#3
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/css/main.css"],
});
