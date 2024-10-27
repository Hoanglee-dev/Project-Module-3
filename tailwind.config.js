/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        customGray: '#242526',
        customBgCT: "#18191A" // Đặt tên cho màu tùy ý
      },
      height: {
        '91-67': '91.666667%', // Tạo một khóa với tên '91-67'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}