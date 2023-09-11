import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgprimary: "rgb(21, 21, 21)",
        bgsecondary: "rgb(32, 32, 34)",
        textprimary: "rgb(255, 255, 255)",
        textsecondary: "rgb(143, 143, 144)",
      },
    },
  },
  plugins: [],
};
export default config;
