import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",

  theme: {
    extend: {}
  },
  plugins: [nextui({
    themes:{
      light:{
        colors:{ 
          background: '#f5f5f5',
          primary:{
            50: '#e0ffeb',
            100: '#b8f6cf',
            200: '#8eefb1',
            300: '#63e792',
            400: '#39e074',
            500: '#1fc65a',
            600: '#149a45',
            700: '#096e30',
            800: '#00431b',
            900: '#001804',
            DEFAULT: '#39e074',
            foreground: '#121212',
          },
          secondary:{
            foreground: '#fff',
            DEFAULT: '#121212',
          }
          //end of colors
        }
        //end of color config
      },
      //end of light theme,
      dark:{
        colors:{
          background: '#242424',
          primary:{
            50: '#e0ffeb',
            100: '#b8f6cf',
            200: '#8eefb1',
            300: '#63e792',
            400: '#39e074',
            500: '#1fc65a',
            600: '#149a45',
            700: '#096e30',
            800: '#00431b',
            900: '#001804',
            DEFAULT: '#1DB954',
            foreground: '#fff',
          },
          secondary:{
            foreground: '#121212',
            DEFAULT: '#fff',
          }
          //end of colors dark
        }
        //end of color config dark
      }
    }
  })],
};
export default config;
