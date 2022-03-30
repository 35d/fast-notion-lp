import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  head: {
    link: [
      { rel: "icon", type: "image/x-icon", href: "/img/favicon.png" },
      { rel: "icon", sizes: "192x192", href: "/img/favicon.png" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/img/favicon.png",
      },
    ],
  },
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
