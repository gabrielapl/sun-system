/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.tsx',
    './app/**/*.tsx',
    './src/components/**/*.tsx',
    './src/pages/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: 'Roboto_700Bold',
        body: 'Roboto_400Regular',
      },

      colors: {
        brand_background: '#151515',
      },
    },
  },
  plugins: [],
}
