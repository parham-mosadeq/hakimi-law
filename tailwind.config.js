/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main_nav_color: '#211c3a',
        main_txt_color: '#4f476f',
        dark_txt_color: '#39334f',
        main_logo_color: '#e6be7a',
        dark_logo_color: '#e6be7a7e',
        main_footer_color: ' #4f476f',
        main_contact_colo: '#656806',
      },
    },
  },
  plugins: [],
};
