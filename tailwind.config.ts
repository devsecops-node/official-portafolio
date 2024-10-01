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
        primary: "#5ae7c8",
        secundary: "#8e98a7",
        slate: "#8892b0",
        lightest_slate: "#ccd6f6",
        light_slate: "#a8b2d1",
      },
      backgroundColor: {
        main: "#08162a",
        secundary: "#102240",
        primary: "#52d2b8",
        lightest_slate: "#ccd6f6",
        light_slate: "#a8b2d1",
        lightest_navy: "#233554"
      }
    },
  },
  plugins: [],
};
export default config;
