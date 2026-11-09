import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header / Navegación */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-tight text-gray-900">IMPACTEMOS<span className="text-blue-600">MÉXICO</span></span>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 font-medium">A.C.</span>
          </div>
          <nav className="hidden md:flex space-x-6 font-medium text-sm">
            <a href="#inicio" className="hover:text-blue-600 transition">Inicio</a>
            <a href="#quienes-somos" className="hover:text-blue-600 transition">Quiénes Somos</a>
            <a href="#ejes" className="hover:text-blue-600 transition">Nuestros Ejes</a>
            <a href="#contacto" className="hover:text-blue-600 transition">Contacto</a>
          </nav>
          <a href="#contacto" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
            Únete / Dona
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950 text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
            Unidos por el cambio
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 mb-6 tracking-tight">
            Transformando comunidades en <span className="text-blue-400">Baja California</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Asociación civil enfocada en el desarrollo comunitario, la asistencia social, la protección ambiental, el bienestar animal y la participación cívica[cite: 3].
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#ejes" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Quiénes Somos?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Constituida legalmente en julio de 2026 en Tijuana, Baja California, Impactemos México A.C. nace para mejorar la vida de las personas que más lo necesitan mediante acciones reales de ayuda, educación, protección del medio ambiente y bienestar animal[cite: 3].
            </p>
            <p className="text-gray-600 leading-relaxed">
              Trabajamos articulando esfuerzos a través de cuatro programas especializados con identidad propia para garantizar un impacto profundo y medible en la sociedad[cite: 4].
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Nuestra Misión</h3>
            <p className="text-gray-600 mb-6">
              Mejorar la vida de las personas mediante acciones reales de ayuda, educación, protección del medio ambiente y bienestar animal, uniendo a la comunidad para lograr un cambio positivo[cite: 3].
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Nuestra Visión</h3>
            <p className="text-gray-600">
              Ser una organización que inspire confianza y logre un impacto real en México, promoviendo la solidaridad, la unión y la participación de todos[cite: 3].
            </p>
          </div>
        </div>
      </section>

      {/* Los 4 Ejes Estratégicos */}
      <section id="ejes" className="py-20 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Nuestros Cuatro Ejes Operativos</h2>
            <p className="text-gray-600 mt-2">Cada uno con su propia identidad gráfica y enfoque especializado.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Eje 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-teal-400 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-1 rounded">Eje 01</span>
                <h3 className="text-xl font-bold mt-4 mb-2">Juntos Somos Más</h3>
                <p className="text-gray-600 text-sm mb-4">Asistencia social y apoyo comunitario para grupos vulnerables mediante centros de acopio y brigadas[cite: 4].</p>
              </div>
              <span className="text-xs font-semibold text-gray-400">Programa Asistencial</span>
            </div>

            {/* Eje 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-lime-500 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-lime-600 bg-lime-50 px-2 py-1 rounded">Eje 02</span>
                <h3 className="text-xl font-bold mt-4 mb-2">EcoImpacto México</h3>
                <p className="text-gray-600 text-sm mb-4">Medio ambiente y sustentabilidad, reforestación urbana, huertos y recuperación de espacios[cite: 4, 5].</p>
              </div>
              <span className="text-xs font-semibold text-gray-400">Programa Ecológico</span>
            </div>

            {/* Eje 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-orange-500 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-1 rounded">Eje 03</span>
                <h3 className="text-xl font-bold mt-4 mb-2">Zoolidario México</h3>
                <p className="text-gray-600 text-sm mb-4">Cuidado y bienestar animal, tenencia responsable, fomento a la adopción y salud preventiva[cite: 5].</p>
              </div>
              <span className="text-xs font-semibold text-gray-400">Programa Animal</span>
            </div>

            {/* Eje 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">Eje 04</span>
                <h3 className="text-xl font-bold mt-4 mb-2">Red de Líderes México</h3>
                <p className="text-gray-600 text-sm mb-4">Liderazgo juvenil, formación cívica, capacitación digital y foros de participación ciudadana[cite: 5].</p>
              </div>
              <span className="text-xs font-semibold text-gray-400">Programa Cívico</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto / Footer */}
      <footer id="contacto" className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Impactemos México A.C.</h3>
            <p className="text-gray-400 text-sm mb-4">
              C. Victoriano Huerta 2, Col. El Mirador, C.P. 22204, Tijuana, Baja California, México[cite: 3].
            </p>
            <p className="text-gray-400 text-sm">
              Correo electrónico: <a href="mailto:impactemosmx@gmail.com" className="text-blue-400 underline">impactemosmx@gmail.com</a>[cite: 3]
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-center">
            <p className="text-sm text-gray-400 mb-2">Síguenos en redes sociales:</p>
            <div className="flex space-x-4 text-sm font-medium">
              <span className="text-blue-400">Instagram: @impactemosmx</span>[cite: 2]
              <span className="text-blue-400">Facebook: @impactemosmx</span>[cite: 2]
            </div>
            <p className="text-xs text-gray-500 mt-6">&copy; 2027 Impactemos México A.C. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}