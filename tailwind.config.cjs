/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        weird: '1115px',
      },
      colors: {
        accent: '#64ffda',
      },
      keyframes: {
        load: {
          '0%': { width: '0%' },
          '80%': { width: '100%' },
        },
        arrow: {
          '0%': {
            height: '120px',
          },
          '20%': {
            height: '96px',
          },
          '50%': {
            height: '96px',
          },
          '80%': {
            height: '96px',
          },
          '100%': {
            height: '120px',
          },
        },
      },
      animation: {
        arrow: 'arrow 2s linear infinite',
      },
      fontFamily: {
        sono: ['Sono'],
        tilt: ['Tilt Warp'],
        noto: ['Noto Sans JP'],
      },
    },
  },
  plugins: [],
};
