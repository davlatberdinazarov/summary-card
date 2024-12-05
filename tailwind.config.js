/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 30px 60px 0px rgba(61, 108, 236, 0.15)',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(180deg, #75F 0%, #6943FF 0.01%, #2F2CE9 100%)',
        'gradient-2': 'linear-gradient(180deg, #4D21C9 0%, rgba(37, 33, 201, 0) 100%)',
      },
      colors: {
        secondary: '#CAC9FF'
      },
      fontFamily: {
        honken: ['"Honken Grotesk"', 'sans-serif'], // "Honken Grotesk" shriftini qo'shamiz
      },
    },
  },
  plugins: [],
}