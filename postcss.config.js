// postcss.config.js (fixed for Tailwind CSS v4+)
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [tailwindcss, autoprefixer],
};
