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
    extend: {
      colors: {
        black1: "#3F3F3F",
        gray1: "#F0F1F4",
        gray2: "#6A6E78",
        blue1: "#0E3552",
        blue2: "#7C9BAD",
      },
      boxShadow: {
        "3xl":
          "0px 20px 46px rgba(0, 0, 0, 0.12), 0px 4px 16px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
