import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { max: "1023px" },
      desktop: { min: "1024px" },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-mulish)"],
        serif: ["var(--font-playfair)"],
        serifs: ["var(--font-Lato)"],
        san: ["var(--font-Montserrat)"],
        secondary: ["var(--font-Poppins)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
