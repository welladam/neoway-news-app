module.exports = {
  content: [
    './src/**/*.{html,js,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4400',
        secondary: '#F3F4F6',
        accent: '#6C63FF',
        text: '#333333',
        background: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: [{ min: '1024px' }, { min: '1080px' }, { min: '1150px' }],
        xl: '1280px',
        '2xl': '1600px',
      },
    },
  },
  plugins: [],
}
