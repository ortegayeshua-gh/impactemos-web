import React from 'react';
import logoPrincipal from './assets/logo-impactemos.png';
import logoEje1 from './assets/logo-eje1.png';
import logoEje2 from './assets/logo-eje2.png';
import logoEje3 from './assets/logo-eje3.png';
import logoEje4 from './assets/logo-eje4.png';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans scroll-smooth">
      
      {/* Navegación - Efecto Cristal y Sticky */}
      <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            {/* Logotipo Principal Controlado */}
            <img 
              src={logoPrincipal} 
              alt="Impactemos México A.C." 
              className="h-14 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
              style={{ maxHeight: '70px' }} 
            />
          </div>
          <nav className="hidden md:flex space-x-8 font-medium text-sm text-gray-600">
            <a href="#inicio" className="hover:text-impactemos-blue transition-colors duration-200">Inicio</a>
            <a href="#quienes-somos" className="hover:text-impactemos-blue transition-colors duration-200">Quiénes Somos</a>
            <a href="#ejes" className="hover:text-impactemos-blue transition-colors duration-200">Nuestros Ejes</a>
            <a href="#contacto" className="hover:text-impactemos-blue transition-colors duration-200">Contacto</a>
          </nav>
          <a href="#contacto" className="bg-impactemos-blue text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-300">
            Únete / Dona
          </a>
        </div>
      </header>

      {/* Hero Section - Degradado Dinámico */}
      <section id="inicio" className="relative bg-gradient-to-br from-impactemos-dark via-gray-900 to-eje4-dark text-white py-32 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block bg-white/10 text-blue-300 border border-white/20 text-xs px-4 py-1.5 rounded-full uppercase tracking-widest font-bold mb-8 backdrop-blur-sm shadow-sm animate-pulse">
            Unidos por el cambio
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            Transformando comunidades en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Baja California</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Asociación civil enfocada en el desarrollo comunitario, la asistencia social, la protección ambiental, el bienestar animal y la participación cívica.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a href="#ejes" className="bg-impactemos-blue hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-blue-900/50 hover:-translate-y-1 transition-all duration-300">
              Conoce nuestros 4 ejes
            </a>
            <a href="#contacto" className="bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl border border-white/10 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300">
              Ponte en contacto
            </a>
          </div>
        </div>
      </section>

      {/* Quiénes Somos - Tarjetas Flotantes */}
      <section id="quienes-somos" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="pr-4">
            <h2 className="text-4xl font-black text-impactemos-dark mb-6 tracking-tight">¿Quiénes Somos?</h2>
            <div className="w-20 h-1.5 bg-impactemos-blue mb-8 rounded-full"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Constituida legalmente en julio de 2026 en Tijuana, Baja California, Impactemos México A.C. nace para mejorar la vida de las personas que más lo necesitan mediante acciones reales de ayuda, educación, protección del medio ambiente y bienestar animal.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Trabajamos articulando esfuerzos a través de cuatro programas especializados con identidad propia para garantizar un impacto profundo y medible en la sociedad.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold text-impactemos-dark mb-3 flex items-center gap-3">
                <span className="bg-blue-100 text-impactemos-blue p-2 rounded-lg">🎯</span> Nuestra Misión
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Mejorar la vida de las personas mediante acciones reales de ayuda, educación, protección del medio ambiente y bienestar animal, uniendo a la comunidad para lograr un cambio positivo.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold text-impactemos-dark mb-3 flex items-center gap-3">
                <span className="bg-teal-100 text-teal-600 p-2 rounded-lg">👁️</span> Nuestra Visión
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ser una organización que inspire confianza y logre un impacto real en México, promoviendo la solidaridad, la unión y la participación de todos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Los 4 Ejes - Grid Animado */}
      <section id="ejes" className="py-24 bg-gray-50 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-impactemos-dark mb-4 tracking-tight">Nuestros Cuatro Ejes Operativos</h2>
            <div className="w-24 h-1.5 bg-impactemos-blue mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Cada programa cuenta con su propia identidad gráfica y un enfoque altamente especializado para transformar nuestro entorno.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Eje 1 */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-gray-200/50 border-t-4 border-eje1-primary hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col items-center text-center cursor-default">
              <div className="h-32 w-full flex items-center justify-center mb-6 p-2 bg-gray-50 rounded-2xl group-hover:bg-teal-50/50 transition-colors duration-300">
                <img src={logoEje1} alt="Juntos Somos Más" className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500" style={{ maxHeight: '100px' }} />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1.5 rounded-full mb-4">Eje 01</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Juntos Somos Más</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">Asistencia social y apoyo comunitario para grupos vulnerables mediante centros de acopio y brigadas.</p>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Programa Asistencial</span>
            </div>

            {/* Eje 2 */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-gray-200/50 border-t-4 border-eje2-light hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col items-center text-center cursor-default">
              <div className="h-32 w-full flex items-center justify-center mb-6 p-2 bg-gray-50 rounded-2xl group-hover:bg-lime-50/50 transition-colors duration-300">
                <img src={logoEje2} alt="EcoImpacto México" className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500" style={{ maxHeight: '100px' }} />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-lime-600 bg-lime-50 px-3 py-1.5 rounded-full mb-4">Eje 02</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">EcoImpacto México</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">Medio ambiente y sustentabilidad, reforestación urbana, huertos y recuperación de espacios.</p>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Programa Ecológico</span>
            </div>

            {/* Eje 3 */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-gray-200/50 border-t-4 border-eje3-primary hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col items-center text-center cursor-default">
              <div className="h-32 w-full flex items-center justify-center mb-6 p-2 bg-gray-50 rounded-2xl group-hover:bg-orange-50/50 transition-colors duration-300">
                <img src={logoEje3} alt="Zoolidario México" className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500" style={{ maxHeight: '100px' }} />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1.5 rounded-full mb-4">Eje 03</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Zoolidario México</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">Cuidado y bienestar animal, tenencia responsable, fomento a la adopción y salud preventiva.</p>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Programa Animal</span>
            </div>

            {/* Eje 4 */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-gray-200/50 border-t-