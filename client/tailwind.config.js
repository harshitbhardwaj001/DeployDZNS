/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        flip: "flip 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        flipTop: {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(-180deg)" },
        },
        flipBottom: {
          "0%": { transform: "rotateX(180deg)" },
          "100%": { transform: "rotateX(0deg)" },
        },
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        bebas: ["Bebas", "sans-serif"],
      },
      screens: {
        xs: "250px",
        xxl: "2500px",
      },
      colors: {
        "light-gray": "hsl(219, 4%, 32%)",
        "dark-gray": "hsl(219, 4%, 24%)",
        theme_grayishBlue: "hsl(237, 18%, 59%)",
        theme_softRed: "hsl(345, 95%, 68%)",
        theme_white: "hsl(0, 0%, 100%)",
        theme_darkDesaturatedBlue: "hsl(236, 21%, 26%)",
        theme_veryDarkBlue: "hsl(235, 16%, 14%)",
        theme_veryDarkMostlyBlackBlue: "hsl(234, 17%, 12%)",
      },
      backgroundColor: {
        "frame-bg": "rgba(25, 25, 25, .87);",
        "home-bg": "#1E1E1E",
      },
      backgroundImage: {
        "1-bg": "url(/image1.jpg)",
        "2-bg": "url(/graphics1.jpg)",
        "3-bg": "url(/start.jpg)",
        "4-bg": "url(/graphics2.png)",
        "5-bg": "url(/graphics4.jpg)",
        "6-bg": "url(/graphics5.jpg)",
        "7-bg": "url(/graphics3.jpg)",
        "8-bg": "url(/graphics3.jpg)",
        "dino-bg": "url(/trex.png)",
        "cactus-bg": "url(/cactus.png)",
        "game-bg": "url(/bgDino.jpg)",
        "landing-bg": "url(/landingbg.jpg)",
        "home-bg": "url(/landingvid.gif)",
        "services-bg": "url(/home.gif)",
        "background-bg": "url(/background.gif)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatib: true })],
};
