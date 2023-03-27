/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/components/**/*.jsx",
    "./src/pages/**/*.jsx",
    "./src/**/*.jsx",
  ],
  theme: {
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      yellowButton: "#FFE578",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      "yellow-HomeButtton": "#F7C105",
      black: "#000000",
      white: "#FBFBFB",
      "white-black": "#F7F7F7",
    },
  },
  plugins: [],
  variants: {
    borderColor: ["responsive", "hover", "focus", "focus-within"],
  },
};
