/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black: {
          1: "#15171C",
          2: "#222429",
          3: "#101114",
          4: "#252525",
          5: "#2E3036",
          6: "#24272C",
        },
        primary:{
          1: "#1E607B",
          2: "#FDE1DC",
          3: "#FFF2C9",
          4: "#DEEFC5",
          6: "#EAEFFB"
        }
      }
    },
  },
  plugins: [],
}

