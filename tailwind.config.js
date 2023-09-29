/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
    
    sans:['Manrope', "sans-serif"]
  },
  fontMetrics: {
            sans: {
              capHeight: 1440,
              ascent: 2132,
              descent: -600,
              lineGap: 24,
              unitsPerEm: 2000,
            }
          },
          
    screens: {
      sm: "359px",
      inter: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {},
  
  },
  plugins: [require('tailwindcss-capsize')],
}
