module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          700: '#1d4ed8',
          800: '#043873',
          900: '#00C8FF',

        },
        'dark': {
          900: '#F0F0F0',
        },
        green: {
          500: '#50C878',
          600: '#84cc16  ',
          700: '#047857',
        },
        dark: {
          800: '#a9a9a9',
          900: '#111827',
        },
      }
    },
  },
  plugins: [],
}