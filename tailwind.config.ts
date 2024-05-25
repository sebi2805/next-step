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
        "dark-teal": "#00796B",
        "medium-teal": "#009688",
        "light-teal": "#4DB6AC",
        "navy-blue": "#004D40",
      },
    },
  },
  plugins: [],
};
export default config;
