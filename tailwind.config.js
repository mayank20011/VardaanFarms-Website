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
        'crbs' : {'max':'1360px', 'min':'1024px'},
        'vs' : {'max':'500px'},
        'tab' : {'min':'768px', 'max':'920px'},
        'bmd': {'max':'768px'}
      },
      backgroundImage: { 'my-background': "url('/src/img/homepagebg.png')", },
    },
  },
  plugins: [],
}

