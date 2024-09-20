import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "#e9690d",
        lightYellow: "#f5bd1e",
        orangeBG: "#ea730e",
        regBorder: "#adadad",
        darkOrange: "#e9690e",
        selectBorder: "#b96528",
        active: "#9a5916",
        darkBlue: "#0c2037",
        regisBG: "4a4d35",
      },
    },
  },
  plugins: [],
};
export default config;
