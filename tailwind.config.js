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
        'split-white-cyan': "linear-gradient(145deg, rgba(6,182,212,1) 70% , rgba(255,255,255,1) 0%);"
      }
    }
  }
}
