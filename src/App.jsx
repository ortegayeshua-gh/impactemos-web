import React, { useState } from 'react';
import logoPrincipal from './assets/logo-impactemos.png';
import logoEje1 from './assets/logo-eje1.png';
import logoEje2 from './assets/logo-eje2.png';
import logoEje3 from './assets/logo-eje3.png';
import logoEje4 from './assets/logo-eje4.png';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [activeTab, setActiveTab] = useState('todos');

  const handleOpenModal = (title) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white scroll-smooth">
      {/* 1. Barra de navegación fija con efecto Glassmorphism */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-50 shadow-xs transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src={logoPrincipal} 
              alt="Impactemos México A.C." 
              className="h-11 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
          <nav className="hidden md:flex space-x-8 font-medium text-sm text-slate-600">
            <a href="#inicio" className="hover:text-blue-600 transition-colors duration-200">Inicio</a>
            <a href="#quienes-somos" className="hover:text-blue-600 transition-colors duration-200">Quiénes Somos</a>
            <a href="#ejes" className="hover:text-blue-600 transition-colors duration-200">Cuatro Ejes</a>
            <a href="#contacto" className="hover:text-blue-600 transition-colors duration-200">Contacto</a>
          </nav>
          <button 
            onClick={() => handleOpenModal('Únete como Voluntario o Aliado')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 active:scale-95"
          >
            Únete / Dona
          </button>
        </div>
      </header>

      {/* 2. Sección Hero */}
      <section id="inicio" className="relative overflow-hidden bg-slate-900 text-white py-28 sm:py-36 px-6 text-center">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span>Constituida en Tijuana, B.C. • Julio de 2026</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight">
            Unidos por el cambio en <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-lime-300 bg-clip-text text-transparent">Baja California</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Asociación civil enfocada en el desarrollo comunitario, asistencia social, protección ambiental, bienestar animal y participación cívica.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#ejes" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Conoce nuestros 4 ejes
            </a>
            <a 
              href="#quienes-somos" 
              className="bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-2xl border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
            >
              Nuestra Misión y Visión
            </a>
          </div>
        </div>
      </section>

      {/* 3. Sección de 'Quiénes Somos' */}
      <section id="quienes-somos" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-sm tracking-widest uppercase bg-blue-50 px-3.5 py-1 rounded-full">Institucional</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-4 tracking-tight">¿Quiénes Somos?</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Constituida legalmente en julio de 2026 en Tijuana, Baja California, Impactemos México A.C. es una organización civil sin fines de lucro comprometida con mejorar la calidad de vida de las comunidades en situación de vulnerabilidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Misión */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-6 shadow-xs">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Nuestra Misión</h3>
              <p className="text-slate-600 leading-relaxed">
                Mejorar la vida de las personas que más lo necesitan mediante acciones reales de ayuda, educación, protección del medio ambiente y bienestar animal, uniendo a la comunidad para lograr un cambio positivo.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 text-xs font-semibold text-blue-600">
              Impactemos México A.C. • Plan Operativo
            </div>
          </div>

          {/* Visión */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-teal-400 flex items-center justify-center text-2xl mb-6 backdrop-blur-md shadow-xs">
                🔭
              </div>
              <h3 className="text-2xl font-bold mb-3">Nuestra Visión</h3>
              <p className="text-slate-300 leading-relaxed font-light">
                Ser una organización que inspire confianza y logre un impacto real en México, promoviendo la solidaridad, la unión y la participación de todos para construir una mejor sociedad.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-teal-300 font-medium">
              Baja California, México
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sección de 'Nuestros Cuatro Ejes Operativos' con Logotipos Oficiales */}
      <section id="ejes" className="py-28 bg-slate-100/70 px-6 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-sm tracking-widest uppercase bg-blue-50 px-3.5 py-1 rounded-full">Ejes Especializados</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-4 tracking-tight">Nuestros Cuatro Ejes Operativos</h2>
            <p className="text-slate-600 text-lg">
              Cada programa cuenta con su propia identidad gráfica y enfoque especializado de intervención.
            </p>

            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              <button 
                onClick={() => setActiveTab('todos')} 
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === 'todos' ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-200'}`}
              >
                Todos los Ejes
              </button>
              <button 
                onClick={() => setActiveTab('eje1')} 
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === 'eje1' ? 'bg-teal-400 text-slate-900 shadow-md' : 'bg-white text-slate-600 hover:bg-slate-200'}`}
              >
                1. Juntos Somos Más
              </button>
              <button 
                onClick={() => setActiveTab('eje2')} 
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === 'eje2' ? 'bg-lime-500 text-slate-900 shadow-md' : 'bg-white text-slate-600 hover:bg-slate-200'}`}
              >
                2. EcoImpacto México
              </button>
              <button 
                onClick={() => setActiveTab('eje3')} 
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === 'eje3' ? 'bg-orange-500 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-200'}`}
              >
                3. Zoolidario México
              </button>
              <button 
                onClick={() => setActiveTab('eje4')} 
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === 'eje4' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-200'}`}
              >
                4. Red de Líderes
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Eje 1 */}
            {(activeTab === 'todos' || activeTab === 'eje1') && (
              <div className="group bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border-t-8 border-teal-400 flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div>
                  <div className="h-28 w-full flex items-center justify-center mb-6 p-2 bg-slate-50 rounded-2xl group-hover:bg-teal-50/40 transition-colors duration-300">
                    <img src={logoEje1} alt="Juntos Somos Más" className="max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full mb-3 inline-block">
                    Eje 01
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Juntos Somos Más</h3>
                  <p className="text-xs font-semibold text-teal-600 mb-4">Asistencia Social y Apoyo Comunitario</p>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Centros de acopio, entrega de apoyos alimentarios, brigadas asistenciales y comunitarias para grupos vulnerables.
                  </p>
                </div>
                <button 
                  onClick={() => handleOpenModal('Juntos Somos Más (Asistencia Social)')}
                  className="w-full bg-teal-50 hover:bg-teal-100 text-teal-800 font-semibold py-3 rounded-xl text-sm transition-colors duration-200"
                >
                  Ver Actividades
                </button>
              </div>
            )}

            {/* Eje 2 */}
            {(activeTab === 'todos' || activeTab === 'eje2') && (
              <div className="group bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border-t-8 border-lime-500 flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div>
                  <div className="h-28 w-full flex items-center justify-center mb-6 p-2 bg-slate-50 rounded-2xl group-hover:bg-lime-50/40 transition-colors duration-300">
                    <img src={logoEje2} alt="EcoImpacto México" className="max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-lime-700 bg-lime-50 px-3.5 py-1 rounded-full mb-3 inline-block">
                    Eje 02
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">EcoImpacto México</h3>
                  <p className="text-xs font-semibold text-lime-600 mb-4">Medio Ambiente y Sustentabilidad</p>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Jornadas de reforestación urbana, talleres de educación ambiental, huertos urbanos y recuperación de espacios públicos.
                  </p>
                </div>
                <button 
                  onClick={() => handleOpenModal('EcoImpacto México (Medio Ambiente)')}
                  className="w-full bg-lime-50 hover:bg-lime-100 text-lime-800 font-semibold py-3 rounded-xl text-sm transition-colors duration-200"
                >
                  Ver Actividades
                </button>
              </div>
            )}

            {/* Eje 3 */}
            {(activeTab === 'todos' || activeTab === 'eje3') && (
              <div className="group bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border-t-8 border-orange-500 flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div>
                  <div className="h-28 w-full flex items-center justify-center mb-6 p-2 bg-slate-50 rounded-2xl group-hover:bg-orange-50/40 transition-colors duration-300">
                    <img src={logoEje3} alt="Zoolidario México" className="max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-orange-700 bg-orange-50 px-3.5 py-1 rounded-full mb-3 inline-block">
                    Eje 03
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Zoolidario México</h3>
                  <p className="text-xs font-semibold text-orange-600 mb-4">Cuidado y Bienestar Animal</p>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Campañas de concientización sobre tenencia responsable, fomento a la adopción, rescate animal y salud preventiva.
                  </p>
                </div>
                <button 
                  onClick={() => handleOpenModal('Zoolidario México (Bienestar Animal)')}
                  className="w-full bg-orange-50 hover:bg-orange-100 text-orange-800 font-semibold py-3 rounded-xl text-sm transition-colors duration-200"
                >
                  Ver Actividades
                </button>
              </div>
            )}

            {/* Eje 4 */}
            {(activeTab === 'todos' || activeTab === 'eje4') && (
              <div className="group bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border-t-8 border-blue-600 flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div>
                  <div className="h-28 w-full flex items-center justify-center mb-6 p-2 bg-slate-50 rounded-2xl group-hover:bg-blue-50/40 transition-colors duration-300">
                    <img src={logoEje4} alt="Red de Líderes" className="max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full mb-3 inline-block">
                    Eje 04
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Red de Líderes</h3>
                  <p className="text-xs font-semibold text-blue-600 mb-4">Liderazgo Juvenil y Participación Cívica</p>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Talleres de formación cívica, capacitación tecnológica y digital, foros ciudadanos y proyectos comunitarios juveniles.
                  </p>
                </div>
                <button 
                  onClick={() => handleOpenModal('Red de Líderes México (Participación Cívica)')}
                  className="w-full bg-blue-50 hover:bg-blue-100 text-blue-800 font-semibold py-3 rounded-xl text-sm transition-colors duration-200"
                >
                  Ver Actividades
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. Sección de Contacto (Con dirección ajustada sin calle ni número) */}
      <section id="contacto" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-bold text-sm tracking-widest uppercase bg-blue-50 px-3.5 py-1 rounded-full">Ubicación y Enlace</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-6 tracking-tight">Ponte en contacto</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              ¿Deseas sumarte como voluntario, proponer una alianza o conocer más sobre nuestros programas en Tijuana? Escríbenos directamente.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl flex-shrink-0 shadow-xs">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Ubicación Institucional</h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    Col. El Mirador, C.P. 22204, Tijuana, Baja California, México.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center text-xl flex-shrink-0 shadow-xs">
                  ✉️
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Correo Electrónico Oficial</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    <a href="mailto:impactemosmx@gmail.com" className="text-blue-600 underline font-medium hover:text-blue-700">impactemosmx@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center text-xl flex-shrink-0 shadow-xs">
                  🌐
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Redes Sociales</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Instagram | Facebook | TikTok: <strong>@impactemosmx</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Envíanos un mensaje</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleOpenModal('¡Mensaje enviado con éxito!'); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre completo</label>
                <input required type="text" placeholder="Tu nombre" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-slate-50/50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Correo electrónico</label>
                <input required type="email" placeholder="tu@correo.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-slate-50/50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje o interés</label>
                <textarea required rows={4} placeholder="¿Cómo te gustaría participar?" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-slate-50/50"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-500/20 transition duration-200">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div>
            <span className="text-xl font-black tracking-tight block">IMPACTEMOS MÉXICO A.C.</span>
            <p className="text-slate-400 text-sm mt-1">"Unidos por el cambio" • Tijuana, Baja California.</p>
          </div>
          <div className="text-slate-400 text-xs">
            &copy; 2027 Impactemos México A.C. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl relative text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
              ✨
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{modalTitle}</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Gracias por tu interés en Impactemos México A.C. Nos pondremos en contacto contigo muy pronto.
            </p>
            <button 
              onClick={() => setModalOpen(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-200"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}