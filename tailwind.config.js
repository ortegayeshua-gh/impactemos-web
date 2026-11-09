/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eje1: { primary: '#2DD4BF', dark: '#1E293B' }, // Juntos Somos Más
        eje2: { light: '#84CC16', dark: '#065F46' },   // EcoImpacto México
        eje3: { primary: '#F97316', light: '#FB923C' }, // Zoolidario México
        eje4: { light: '#3B82F6', dark: '#1E3A8A' }    // Red de Líderes México
      }
    },
  },
  plugins: [],
}
