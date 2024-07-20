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
        julee: ["Julee", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        verdant: "#4d6cfa",
        "purple-primary": "#442B48",
        "purple-secondary": "#E4DFDA",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-image":
          "linear-gradient( to bottom, rgb(0, 0, 0, 0.5), rgb(2, 2, 2, 0.5) ),url('../assets/samantha-gades-fIHozNWfcvs-unsplash.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
