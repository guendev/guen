import type { Config } from 'tailwindcss'
// import defaultTheme from 'tailwindcss/defaultTheme'
export default <Partial<Config>>{
  theme: {
    extend: {
      screens: {
        'lg': '980px',
        'semi': '640px',
        'small': '480px',
        'mini': '360px'
      },
      maxWidth: {
        bootstrap: '980px'
      },
      boxShadow: {
        default:
            '0 24px 20px -18px rgb(69 104 129 / 0%), 0 9px 45px 0 rgb(114 119 160 / 12%)'
      },
      colors: {
        primary: {
          DEFAULT: '#3b66f5',
          50: '#f5f7ff',
          100: '#ebf0fe',
          200: '#ced9fd',
          300: '#b1c2fb',
          400: '#7694f8',
          500: '#3b66f5',
          600: '#355cdd',
          700: '#2c4db8',
          800: '#233d93',
          900: '#1d3278'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp')
  ]
}
