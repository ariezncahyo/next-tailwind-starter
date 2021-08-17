module.exports = {
  mode: "JIT",
  darkMode: 'class',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {},
      typography: (theme) => ({
        dark: {
          css: {
            color: 'white',
          },
        },
      }),
    },
  },
  variants: {
    typography: {},
  },
  plugins: [require('@tailwindcss/typography')],
  tailwindcss: {},
  autoprefixer: {}
}
