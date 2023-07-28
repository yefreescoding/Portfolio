/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '.4rem .4rem 0 #001e2d',
      },
    },
  },
  plugins: [],
};
