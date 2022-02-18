module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // SEE https://github.com/nuxt/framework/issues/2886#issuecomment-1020237093
    // "./nuxt.config.{js,ts}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
