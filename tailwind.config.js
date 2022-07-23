module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './src/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'black-red': "url('/assets/black-red.png')",
      }
    }
  }
}
