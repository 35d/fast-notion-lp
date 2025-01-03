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
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: ["ja", "en"],
    defaultLocale: "ja",
    detectBrowserLanguage: true,
    vueI18n: {
      legacy: false,
      fallbackLocale: "ja",
      messages: {
        en: {
          lang: "日本語",
        },
        ja: {
          lang: "English",
        },
      },
    },
  },
});
