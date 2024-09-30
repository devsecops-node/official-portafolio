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
        ppBold: ['var(--ppBold)'],
        ppEBold: ['var(--ppEBold)'],
        ppELight: ['var(--ppELight)'],
        ppLight: ['var(--ppLight)'],
        ppMedium: ['var(--ppMedium)'],
        ppRegular: ['var(--ppRegular)'],
        ppSemiBold: ['var(--ppSemiBold)'],
        ppThin: ['var(--ppThin)']
      },
      textColor: {
        primary: "#53cdd1",
        secundary: "#8e98a7",
        slate: "#8892b0",
        lightest_slate: "#ccd6f6"
      },
      backgroundColor: {
        secundary: "#102240",
        primary: "#52d2b8"
      }
    },
  },
  plugins: [],
};
export default config;
