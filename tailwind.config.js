/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        
        Agency: ["var(--font-agency-fb)", "sans-serif"],
        poppins: ["var(--poppins)", "sans-serif"],
			},
      colors:{
        primary:"#F2CE38"
      }
    },
  },
  plugins: [],
}
