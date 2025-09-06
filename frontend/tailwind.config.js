/** @type {import('tailwindcss').Config} */
export default {
  // step - 25 update the content array to include all necessary files
  content: [
    // this list includes all files where Tailwind CSS classes will be used
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // it means in the src directory, look for all JS, TS, JSX, and TSX files
  ], 
  theme: {
    extend: {},
  },
  plugins: [],
}

