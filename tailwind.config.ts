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
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: "#1F8474"
      },
      boxShadow: {
        custom: '0px 5px 12.4px 0px rgba(194, 194, 194, 0.47)', 
      },
    },
  },
  plugins: [],
};
export default config;
