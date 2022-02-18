import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
      // postcssOptions: {
      //   plugins: {
      //     tailwindcss: {},
      //     autoprefixer: {},
      //   },
      // },
    },
  },
  css: ["@/assets/css/main.css"],
});
