const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

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
        neo: {
          pink: "#ff69b4",
          purple: "#ffb2ef",
          blue: "#69d2e7",
          green: "#90ee90",
          yellow: "#f4d730",
          magenta: "#fcdfff",
        }
      },
      boxShadow: {
        solid: "5px 5px #000"
      },
      fontFamily: {
        sans: ["'Space Grotesk Variable'", ...defaultTheme.fontFamily.sans],
        mono: ["'iA Writer Mono'", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.box': {
          padding: `${theme("spacing.3")} ${theme("spacing.4")}`,
          border: "4px solid black",
          boxShadow: "5px 5px #000"
        },
        '.box-lg': {
          padding: `${theme("spacing.3")} ${theme("spacing.4")}`,
          border: "4px solid black",
          boxShadow: "8px 8px #000"
        }
      })
    })
  ],
};
