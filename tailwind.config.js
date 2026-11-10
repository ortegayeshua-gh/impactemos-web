/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        impactemos: {
          dark: '#111827',
          blue: '#0066FF',
        },
        eje1: { // Juntos Somos Más (Turquesa / Oscuro)
          primary: '#2DD4BF',
          dark: '#1E293B',
        },
        eje2: { // EcoImpacto México (Verdes)
          light: '#84CC16',
          dark: '#065F46',
        },
        eje3: { // Zoolidario México (Naranja / Cálido)
          primary: '#F97316',
          light: '#FB923C',
        },
        eje4: { // Red de Líderes México (Azules institucionales)
          light: '#3B82F6',
          dark: '#1E3A8A',
        }
      }
    },
  },
  plugins: [],
}