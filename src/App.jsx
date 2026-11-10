import React from 'react';
// Importación de logotipos (Asegúrate de que los nombres y formatos coincidan con tus archivos)
import logoPrincipal from './assets/logo-impactemos.png';
import logoEje1 from './assets/logo-eje1.png';
import logoEje2 from './assets/logo-eje2.png';
import logoEje3 from './assets/logo-eje3.png';
import logoEje4 from './assets/logo-eje4.png';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header / Navegación */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* Logotipo Principal */}
            <img src={logoPrincipal} alt="Impactemos México A.C." className="h-10 w-auto" />
          </div>
          <nav className="hidden md:flex space-x-6 font-medium text-sm">
            <a href="#inicio" className="hover:text-impactemos-blue transition">Inicio</a>
            <a href="#quienes-somos" className="hover:text-impactemos-blue transition">Quiénes Somos</a>
            <a href="#ejes" className="hover:text-impactemos-blue transition">Nuestros Ejes</a>
            <a href="#contacto" className="hover:text-impactemos-blue transition">Contacto</a>
          </nav>
          <a href="#contacto" className="bg-impactemos-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
            Únete / Dona
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-impactemos-dark via-gray-800 to-eje4-dark text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="bg-impactemos-blue/20 text-blue-300 border border-impactemos-blue/30 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
            Unidos por el cambio
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 mb-6 tracking-tight">
            Transformando comunidades en <span className="text-eje4-light">Baja California</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Asociación civil enfocada en el desarrollo comunitario, la asistencia social, la protección ambiental, el bienestar animal y la participación cívica.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#ejes" className="bg-impactemos-blue hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition">
              Conoce nuestros 4 ejes
            </a>
            <a href="#contacto" className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-lg border border-white/20 transition">
              Ponte en contacto
            </a>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id="quienes-somos" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-impactemos-dark mb-4">¿Quiénes Somos?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Constituida legalmente en julio de 2026 en Tijuana, Baja California, Impactemos México A.C. nace para mejorar la vida de las personas que más lo necesitan mediante acciones reales de ayuda, educación, protección del medio ambiente y bienestar animal.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Trabajamos articulando esfuerzos a través de cuatro programas especializados con identidad propia para garantizar un impacto profundo y medible en la sociedad.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-xl font-bold text-impactemos-dark mb-3">Nuestra Misión</h3>
            <p className="text-gray-600 mb-6">
              Mejorar la vida de las personas mediante acciones reales de ayuda, educación, protección del medio ambiente y bienestar animal, uniendo a la comunidad para lograr un cambio positivo.
            </p>
            <h3 className="text-xl font-bold text-impactemos-dark mb-3">Nuestra Visión</h3>
            <p className="text-gray-600">
              Ser una organización que inspire confianza y logre un impacto real en México, promoviendo la solidaridad, la unión y la participación de todos.
            </p>
          </div>
        </div>
      </section>

      {/* Los 4 Ejes Estratégicos */}
      <section id="ejes" className="py-20 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-impactemos-dark">Nuestros Cuatro Ejes Operativos</h2>
            <p className="text-gray-600 mt-2">Cada uno con su propia identidad gráfica y enfoque especializado.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Eje 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-eje1-primary flex flex-col justify-between items-center text-center">
              <div>
                <img src={logoEje1} alt="Logo Juntos Somos Más" className="h-16 w-auto mx-auto mb-4 object-contain" />
                <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-1 rounded">Eje 01</span>
                <h3 className="text-xl font-bold mt-4 mb-2">Juntos Somos Más</h3>
                <p className="text-gray-600 text-sm mb-4">Asistencia social y apoyo comunitario para grupos vulnerables mediante centros de acopio y brigadas.</p>
              </div>
              <span className="text-xs font-semibold text-gray-400 mt-4">Programa Asistencial</span>
            </div>

            {/* Eje 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-eje2-light flex flex-col justify-between items-center text-center">
              <div>
                <img src={logoEje2} alt="Logo EcoImpacto México" className="h-16 w-auto mx-auto mb-4 object-contain" />
                <span className="text-xs font-bold uppercase tracking-wider text-lime-600 bg-lime-50 px-2 py-1 rounded">Eje 02</span>
                <h3 className="text-xl font-bold mt-4 mb-2">EcoImpacto México</h3>
                <p className="text-gray-600 text-sm mb-4">Medio ambiente y sustentabilidad, reforestación urbana, huertos y recuperación de espacios.</p>
              </div>
              <span className="text-xs font-semibold text-gray-400 mt-4">Programa Ecológico</span>
            </div>

            {/* Eje 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-eje3-primary flex flex-col justify-between items-center text-center">
              <div>
                <img src={logoEje3} alt="Logo Zoolidario México" className="h-16 w-auto mx-auto mb-4 object-contain" />
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-1 rounded">Eje 03</span>
                <h3 className="text-xl font-bold mt-4 mb-2">Zoolidario México</h3>
                <p className="text-gray-600 text-sm mb-4">Cuidado y bienestar animal, tenencia responsable, fomento a la adopción y salud preventiva.</p>
              </div>
              <span className="text-xs font-semibold text-gray-400 mt-4">Programa Animal</span>
            </div>

            {/* Eje 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-eje4-light flex flex-col justify-between items-center text-center">
              <div>
                <img src={logoEje4} alt="Logo Red de Líderes México" className="h-16 w-auto mx-auto mb-4 object-contain" />
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">Eje 04</span>
                <h3 className="text-xl font-bold mt-4 mb-2">Red de Líderes México</h3>
                <p className="text-gray-600 text-sm mb-4">Liderazgo juvenil, formación cívica, capacitación digital y foros de participación ciudadana.</p>
              </div>
              <span className="text-xs font-semibold text-gray-400 mt-4">Programa Cívico</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto / Footer */}
      <footer id="contacto" className="bg-impactemos-dark text-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <img src={logoPrincipal} alt="Impactemos México A.C." className="h-8 w-auto mb-4 grayscale brightness-200 opacity-80" />
            <p className="text-gray-400 text-sm mb-4">
              C. Victoriano Huerta 2, Col. El Mirador, C.P. 22204, Tijuana, Baja California, México.
            </p>
            <p className="text-gray-400 text-sm">
              Correo electrónico: <a href="mailto:impactemosmx@gmail.com" className="text-eje4-light underline">impactemosmx@gmail.com</a>
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-center">
            <p className="text-sm text-gray-400 mb-2">Síguenos en redes sociales:</p>
            <div className="flex space-x-4 text-sm font-medium">
              <span className="text-eje4-light">Instagram: @impactemosmx</span>
              <span className="text-eje4-light">Facebook: @impactemosmx</span>
            </div>
            <p className="text-xs text-gray-500 mt-6">&copy; 2027 Impactemos México A.C. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}