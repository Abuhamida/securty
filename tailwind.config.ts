import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        Baby: "#BFD7ED",
        Grotto: "#60A3D9",
        Royal: "#0074B7",
        Navy: "#003B73",
      },

      colors: {
        Baby: "#BFD7ED",
        Grotto: "#60A3D9",
        Royal: "#0074B7",
        Navy: "#003B73",
      },
    },
  },
  plugins: [],
};
export default config;
