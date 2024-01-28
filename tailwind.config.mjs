const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        trans: {
          white: "#fff",
          black: "#111",
          pink: "#f5a9b8",
          blue: "#5bcefa",
        },
      },
      // fontFamily: {
      //   sans: ["'Space Grotesk Variable'", ...defaultTheme.fontFamily.sans],
      //   mono: ["'iA Writer Mono'", ...defaultTheme.fontFamily.mono],
      // },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
