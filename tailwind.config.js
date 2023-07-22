/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          100: "#FAF3EA",
          200: "#FCF8F3",
        },
        green: {
          900: "#255849",
        },
        stone: {
          700: "#333333",
        },
        gray: {
          100: "#F4F5F7",
          300: "#D9D9D9",
          400: "#D4D4D4",
          500: "#9F9F9F",
          600: "#898989",
          700: "#707070",
        },
        yellow: {
          600: "#B88E2F",
        },
        rose: {
          300: "#F9F1E7",
        },
      },
      width: {
        custom: "90rem",
      },
      height: {
        custom: "7.5rem",
      },
      borderRadius: {
        custom: "50%",
      },
    },
  },
  plugins: [],
};
