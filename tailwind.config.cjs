/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        load: {
          '0%': { width: '0%' },
          '80%': { width: '100%' },
        },
      },
      fontFamily: {
        sono: ['Sono'],
      },
    },
  },
  plugins: [],
};
