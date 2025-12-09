/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#98DAE6",
        },
        black: {
          100: "#0F1322",
          200: "#1C2826",
          300: "#151515",
        },
        white: {
          100: "#F5F5F5",
        },
        green: {
          100: "#93D697",
        },
        brown: {
          100: "#DABDA9",
        },
        purple: {
          100: "#B8BFFF",
        },
        gray: {
          100: "#8E8E8E",
        },
        red: {
          100: "#E2A3A9",
        },
      },
      fontFamily: {
        dm: ["DM Serif Display", "serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
