/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/Images/background.jpg')",
      },
      keyframes: {
        appear: {
          "0%": {
            transform: "translateX(-100px)",
          },
          "100%": {
            transform: " translateX(0px)",
          },
        },
      },
      animation: {
        appear: "appear 0.5s linear",
      },
      rotate:{
        z:'transform: rotate3d(1,1,0,20deg);'
      }
    },
  },
  plugins: [],
};
