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
        beige1: "#fbfbfb",
        primary: "#0e3652",
        light_gray: "#dbdde1",
      },
      boxShadow: {
        "3xl":
          "0px 20px 46px rgba(0, 0, 0, 0.12), 0px 4px 16px rgba(0, 0, 0, 0.04)",
      },
      borderRadius: {
        "header-70": "70px",
      },
      backgroundImage: {
        "grad-text":
          "linear-gradient(220.58deg, #0E3552 23.07%, #7C9BAD 105.09%)",
      },
      keyframes: {
        slideDown: {
          "0%": { top: "-56px" },
          "100%": { top: "0" },
        },
        slideIn: {
          "0%": { right: "-100px" },
          "100%": { right: "0" },
        },
      },
      animation: {
        slide_down: "slideDown 0.3s cubic-bezier(0.43, 0.05, 0.17, 1)",
        slide_bar: "slideIn 0.3s cubic-bezier(0.43, 0.05, 0.17, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
