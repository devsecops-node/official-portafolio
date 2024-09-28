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
      },
      fontFamily: {
        ppB: ["var(--ppB)"],
        ppBold:['var(--ppBold)'],
        ppEBold:['var(--ppEBold)'],
        ppELight:['var(--ppELight)'],
        ppLight: ['var(--ppLight)'],
        ppMedium: ['var(--ppMedium)'],
        ppRegular:['var(--ppRegular)'],
        ppSemiBold:['var(--ppSemiBold)'],
        ppThin:['var(--ppThin)']
      },
      textColor:{
        primary:"var(--text-primary)"
      }
    },
  },
  plugins: [],
};
export default config;
