/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'cs': {'max':'780px'},
      },
      backgroundImage: { 'my-background': "url('./src/img/homepagebg.png')", },
    },
  },
  plugins: [],
}

