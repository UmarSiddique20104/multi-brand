import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: ["var(--font-titillium)"],
        "titillium-semi": ["var(--font-titillium-semi)"],
        "titillium-bold": ["var(--font-titillium-bold)"],
        lato: ["var(--font-lato)"],
      },

      colors: {
        customRed: "#C3202A",

        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-grey": {
          100: "#A4A4A4",
          200: "#FEFEFEB2",
          300: "#595959",
          400: "#4D4D4D4D",
          500: "#7F7F7F",
        },
        "custom-red": {
          100: "#E30613",
        },
      },
      backgroundImage: {
        "cards-image": "url('/assets/cards-image.png')",
        "top-cards-image": "url('/assets/top-cards-image.png')",
        "bottom-cards": "url('/assets/bottom-cards.png')",
        flame: "url('/assets/design-element.png')",
        aboutbnr: "url('/assets/dubai_bridge2.png')",
      },
    },
  },
  plugins: [],
};
export default config;
