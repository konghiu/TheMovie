module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tb-mb': {'max': '1024px'},
        'mb': {'max': '450px'},
        'sm': {'min': '451px', 'max': '768px'},
        'md': {'min': '769px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1280px'},
        'xl': {'min': '1281px', 'max': '1535px'},
        '2xl': {'min': '1536px'},
      },
      font: {
        'mb': {'font-size': '0.5rem'},
        'border-b-1': {'border-bottom': '1px solid white'}
      }
    },
  },
  plugins: [],
}