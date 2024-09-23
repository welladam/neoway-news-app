module.exports = {
  content: [
    './src/**/*.{html,js,vue}', // Ajuste conforme a estrutura do projeto
  ],
  theme: {
    extend: {
      colors: {
        // Cores principais do design
        primary: '#FF4400', // Para títulos e o logo
        secondary: '#F3F4F6', // Para fundos de elementos, como os cards
        accent: '#6C63FF', // Para tags e elementos de destaque
        text: '#333333', // Cor do texto principal
        background: '#FFFFFF', // Fundo da aplicação
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'], // Família de fontes similar à da imagem
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
