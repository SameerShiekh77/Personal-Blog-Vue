/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  
  theme: {
    
    extend: {
      colors: {
        blueColor: "#1C5CFF",
        grayColor: "#7D7D7D"
      }
    },
  },
  plugins: [],
}

