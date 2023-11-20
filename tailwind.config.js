/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/assets/**/*.{vue,js,css}',
    './src/components/**/*.{js,vue,ts}',
    './src/components/*.{js,vue,ts}',
    './src/components/**/**/*.{js,vue,ts}',
    './src/views/**/*.vue',
    './src/views/**/**/*.vue',
    './src/views/*.vue',
    './src/views/*.vue',
    './src/App.vue'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
