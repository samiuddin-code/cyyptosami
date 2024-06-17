/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { nunito: "Nunito" },
    },
    colors: {
      gray: { 100: "#ffffff", 200: "#323222", 300: "#212111" },
      white: "#fff",
      cyan: "#14ffec",
      red: "#d6436e",
      green: "#25da72",
    },
    fontSize: {
      sm: "14px", 
      md: "18px", 
      lg: "24px",
      xl: "32px", 
      base: "16px"
    }
  },
  plugins: [],
}
