import React from 'react';
import logoPrincipal from './assets/logo-impactemos.png';
import logoEje1 from './assets/logo-eje1.png';
import logoEje2 from './assets/logo-eje2.png';
import logoEje3 from './assets/logo-eje3.png';
import logoEje4 from './assets/logo-eje4.png';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-500 selection:text-white scroll-smooth">
      
      {/* Barra Superior / Header Estilo Glassmorphism */}
      <header className="bg-white/80 backdrop-blur-md shadow-xs sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src={logoPrincipal} 
              alt="Impactemos México A.C." 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
          <nav className="hidden md:flex space-x-8 font-medium text-sm text-slate-600">
            <a href="#inicio" className="hover:text-blue-600 transition-colors duration-200">Inicio</a>
            <a href="#quienes-somos" className="hover:text-blue-600 transition-colors duration-200">Quiénes Somos</a>
            <a href="#ejes" className="hover:text-blue-600 transition-colors duration-200">Nuestros Ejes</a>
            <a href="#contacto" className="hover:text-blue-600 transition-colors duration-200">Contacto</a>
          </nav>
          <a href="#contacto" className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-blue-500/20 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 transition-all duration-300">
            Únete / Dona
          </a>
        </div>
      </header>

      {/* Hero Section / Portada Dinámica */}
      <section id="inicio" className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white py-36 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs px-4 py-1.5 rounded-full uppercase tracking-widest font-bold mb-6 backdrop-blur-md animate-pulse">
            Unidos por el cambio
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
            Transformando comunidades en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Baja California</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Asociación civil enfocada en el desarrollo comunitario, la asistencia social, la protección ambiental, el bienestar animal y la participación cívica.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#ejes" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl shadow-blue-900/40 hover:-translate-y-0.5 transition-all duration-300">
              Conoce nuestros 4 ejes
            </a>
            <a href="#contacto" className="bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-2xl border border-white/10 backdrop-blur-md hover:-translate-y-0.5 transition-all duration-300">
              Ponte en contacto
            </a>
          </div>
        </div>
      </section>

      {/* Quiénes Somos / Tarjetas de Misión y Visión */}
      <section id="quienes-somos" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">¿Quiénes Somos?</h2>
            <div className="w-16 h-1.5 bg-blue-600 mb-8 rounded-full"></div>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Constituida legalmente en julio de 2026 en Tijuana, Baja California, Impactemos México A.C. nace para mejorar la vida de las personas que más lo necesitan mediante acciones reales de ayuda, educación, protección del medio ambiente y bienestar animal.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Trabajamos articulando esfuerzos a través de cuatro programas especializados con identidad propia para garantizar un impacto profundo y medible en la sociedad.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <span className="bg-blue-50 text-blue-600 p-2.5 rounded-2xl text-xl">🎯</span> Nuestra Misión
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Mejorar la vida de las personas mediante acciones reales de ayuda, educación, protección del medio ambiente y bienestar animal, uniendo a la comunidad para lograr un cambio positivo.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <span className="bg-teal-50 text-teal-600 p-2.5 rounded-2xl text-xl">👁️</span> Nuestra Visión
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Ser una organización que inspire confianza y logre un impacto real en México, promoviendo la solidaridad, la unión y la participación de todos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Los 4 Ejes Operativos con Animación Hover */}
      <section id="ejes" className="py-28 bg-slate-100/70 px-6 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Nuestros Cuatro Ejes Operativos</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Cada programa cuenta con su propia identidad gráfica y un enfoque altamente especializado para transformar nuestro entorno.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Eje 1 */}
            <div className="group bg-white p-8 rounded-3xl shadow-md border-t-4 border-teal-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
              <div className="h-32 w-full flex items-center justify-center mb-6 p-3 bg-slate-50 rounded-2xl group-hover:bg-teal-50/40 transition-colors duration-300">
                <img src={logoEje1} alt="Juntos Somos Más" className="max-h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-teal-600 bg-teal-50 px-3.5 py-1.5 rounded-full mb-3">Eje 01</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Juntos Somos Más</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">Asistencia social y apoyo comunitario para grupos vulnerables mediante centros de acopio y brigadas.</p>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Programa Asistencial</span>
            </div>

            {/* Eje 2 */}
            <div className="group bg-white p-8 rounded-3xl shadow-md border-t-4 border-lime-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
              <div className="h-32 w-full flex items-center justify-center mb-6 p-3 bg-slate-50 rounded-2xl group-hover:bg-lime-50/40 transition-colors duration-300">
                <img src={logoEje2} alt="EcoImpacto México" className="max-h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-lime-600 bg-lime-50 px-3.5 py-1.5 rounded-full mb-3">Eje 02</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">EcoImpacto México</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">Medio ambiente y sustentabilidad, reforestación urbana, huertos y recuperación de espacios.</p>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Programa Ecológico</span>
            </div>

            {/* Eje 3 */}
            <div className="group bg-white p-8 rounded-3xl shadow-md border-t-4 border-orange-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
              <div className="h-32 w-full flex items-center justify-center mb-6 p-3 bg-slate-50 rounded-2xl group-hover:bg-orange-50/40 transition-colors duration-300">
                <img src={logoEje3} alt="Zoolidario México" className="max-h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full mb-3">Eje 03</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Zoolidario México</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">Cuidado y bienestar animal, tenencia responsable, fomento a la adopción y salud preventiva.</p>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Programa Animal</span>
            </div>

            {/* Eje 4 */}
            <div className="group bg-white p-8 rounded-3xl shadow-md border-t-4 border-blue-600 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
              <div className="h-32 w-full flex items-center justify-center mb-6 p-3 bg-slate-50 rounded-2xl group-hover:bg-blue-50/40 transition-colors duration-300">
                <img src={logoEje4} alt="Red de Líderes México" className="max-h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full mb-3">Eje 04</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Red de Líderes México</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">Liderazgo juvenil, formación cívica, capacitación digital y foros de participación ciudadana.</p>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Programa Cívico</span>
            </div>

          </div>
        </div>
      </section>

      {/* Footer / Contacto Elegante */}
      <footer id="contacto" className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={logoPrincipal} alt="Impactemos México A.C." className="h-11 w-auto mb-6 brightness-0 invert opacity-90 object-contain" />
            <p className="text-slate-400 text-sm mb-3 max-w-sm leading-relaxed">
              C. Victoriano Huerta 2, Col. El Mirador, C.P. 22204, Tijuana, Baja California, México.
            </p>
            <p className="text-slate-400 text-sm">
              Escríbenos: <a href="mailto:impactemosmx@gmail.com" className="text-blue-400 hover:underline font-medium">impactemosmx@gmail.com</a>
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-center">
            <h4 className="text-base font-bold mb-4 text-white">Conecta con nosotros</h4>
            <div className="flex flex-wrap gap-3 text-sm font-medium mb-6">
              <span className="bg-white/10 px-4 py-2 rounded-full text-blue-300 hover:bg-white/15 transition-colors cursor-pointer">Instagram: @impactemosmx</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-blue-300 hover:bg-white/15 transition-colors cursor-pointer">Facebook: @impactemosmx</span>
            </div>
            <p className="text-xs text-slate-500">&copy; 2027 Impactemos México A.C. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}