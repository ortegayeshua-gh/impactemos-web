import React, { useState, useEffect } from 'react';
import logoPrincipal from './assets/logo-impactemos.png';
import logoEje1 from './assets/logo-eje1.png';
import logoEje2 from './assets/logo-eje2.png';
import logoEje3 from './assets/logo-eje3.png';
import logoEje4 from './assets/logo-eje4.png';
import logoCorazon from './assets/corazon.png';
import fotoYeshua from './assets/yeshua.png';
import fotoKevin from './assets/kevin.png';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [activeTab, setActiveTab] = useState('todos');

  // Actualiza dinámicamente el favicon con la imagen de corazon.png
  useEffect(() => {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = logoCorazon;
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  const handleOpenModal = (title) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white scroll-smooth">
      {/* 1. Barra de navegación fija con logotipo enlazado al inicio */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-50 shadow-xs transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#inicio" className="flex items-center space-x-3 cursor-pointer">
            <img 
              src={logoPrincipal} 
              alt="Impactemos México A.C." 
              className="h-11 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </a>
          <nav className="hidden md:flex space-x-8 font-medium text-sm text-slate-600">
            <a href="#inicio" className="hover:text-blue-600 transition-colors duration-200">Inicio</a>
            <a href="#quienes-somos" className="hover:text-blue-600 transition-colors duration-200">Quiénes Somos</a>
            <a href="#ejes" className="hover:text-blue-600 transition-colors duration-200">Cuatro Ejes</a>
            <a href="#contacto" className="hover:text-blue-600 transition-colors duration-200">Contacto</a>
          </nav>
          <a 
            href="https://linktr.ee/impactemosmx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 active:scale-95 text-center"
          >
            Únete / Dona
          </a>
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
            <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-lime-300 bg-clip-text text-transparent">Unidos por el cambio</span>
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

      {/* 3. Sección de 'Quiénes Somos' + Socios Fundadores con Fotografías */}
      <section id="quienes-somos" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-sm tracking-widest uppercase bg-blue-50 px-3.5 py-1 rounded-full">Institucional</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-4 tracking-tight">¿Quiénes Somos?</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Constituida legalmente en julio de 2026 en Tijuana, Baja California, Impactemos México A.C. es una organización civil sin fines de lucro comprometida con mejorar la calidad de vida de las comunidades en situación de vulnerabilidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch mb-20">
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

        {/* Socios Fundadores con Fotografías Reales */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <span className="text-teal-600 font-bold text-sm tracking-widest uppercase bg-teal-50 px-3.5 py-1 rounded-full">Liderazgo</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3">Consejo Directivo y Socios Fundadores</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Yeshua Guillermo Ortega Durán */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col sm:flex-row items-center gap-6 hover:shadow-xl transition-shadow">
              <img 
                src={fotoYeshua} 
                alt="Yeshua Guillermo Ortega Durán" 
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover shadow-md flex-shrink-0 border-2 border-blue-500/20" 
              />
              <div className="text-center sm:text-left">
                <h4 className="text-xl font-bold text-slate-900">Yeshua Guillermo Ortega Durán</h4>
                <p className="text-sm font-semibold text-blue-600 mb-2">Presidente del Consejo Directivo</p>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  Liderazgo social enfocado en la estrategia digital, vinculación comunitaria y gestión de proyectos para el desarrollo de Baja California.
                </p>
                <a 
                  href="https://linktr.ee/ortegayeshua" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors"
                >
                  Ver Perfil / Redes
                </a>
              </div>
            </div>

            {/* Kevin Alexander Flores Parra */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col sm:flex-row items-center gap-6 hover:shadow-xl transition-shadow">
              <img 
                src={fotoKevin} 
                alt="Kevin Alexander Flores Parra" 
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover shadow-md flex-shrink-0 border-2 border-teal-500/20" 
              />
              <div className="text-center sm:text-left">
                <h4 className="text-xl font-bold text-slate-900">Kevin Alexander Flores Parra</h4>
                <p className="text-sm font-semibold text-teal-600 mb-2">Secretario y Tesorero</p>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  Co-fundador comprometido con la asistencia social, la estructuración administrativa y operativa de iniciativas comunitarias.
                </p>
                <a 
                  href="https://www.instagram.com/kevinparra.mx/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-slate-900 hover:bg-teal-600 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors"
                >
                  Instagram Oficial
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sección de 'Nuestros Cuatro Ejes Operativos' con Redes Sociales Dinámicas */}
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

                  {/* Redes Sociales del Eje */}
                  <div className="mb-6 p-3 bg-teal-50/60 rounded-2xl space-y-2 text-xs">
                    <p className="font-bold text-teal-900 mb-1">Redes Oficiales:</p>
                    <a href="https://www.instagram.com/juntossomosmasmexico" target="_blank" rel="noopener noreferrer" className="block text-teal-700 hover:underline truncate">📸 Instagram</a>
                    <a href="https://www.tiktok.com/@juntossomosmasmexico" target="_blank" rel="noopener noreferrer" className="block text-teal-700 hover:underline truncate">🎵 TikTok</a>
                    <a href="https://www.facebook.com/JuntosSomosMasMexico" target="_blank" rel="noopener noreferrer" className="block text-teal-700 hover:underline truncate">📘 Facebook</a>
                  </div>
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

                  {/* Redes Sociales del Eje */}
                  <div className="mb-6 p-3 bg-lime-50/60 rounded-2xl space-y-2 text-xs">
                    <p className="font-bold text-lime-900 mb-1">Redes Oficiales:</p>
                    <a href="https://www.instagram.com/ecoimpacto.mx" target="_blank" rel="noopener noreferrer" className="block text-lime-700 hover:underline truncate">📸 Instagram</a>
                    <a href="https://www.tiktok.com/@ecoimpactomx" target="_blank" rel="noopener noreferrer" className="block text-lime-700 hover:underline truncate">🎵 TikTok</a>
                    <a href="https://www.facebook.com/ecoimpacto.mx" target="_blank" rel="noopener noreferrer" className="block text-lime-700 hover:underline truncate">📘 Facebook</a>
                  </div>
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

                  {/* Redes Sociales del Eje */}
                  <div className="mb-6 p-3 bg-orange-50/60 rounded-2xl space-y-2 text-xs">
                    <p className="font-bold text-orange-900 mb-1">Redes Oficiales:</p>
                    <a href="https://www.instagram.com/zoolidariomx" target="_blank" rel="noopener noreferrer" className="block text-orange-700 hover:underline truncate">📸 Instagram</a>
                    <a href="https://www.tiktok.com/@zoolidariomx" target="_blank" rel="noopener noreferrer" className="block text-orange-700 hover:underline truncate">🎵 TikTok</a>
                    <a href="https://www.facebook.com/zoolidariomx" target="_blank" rel="noopener noreferrer" className="block text-orange-700 hover:underline truncate">📘 Facebook</a>
                  </div>
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

                  {/* Redes Sociales del Eje */}
                  <div className="mb-6 p-3 bg-blue-50/60 rounded-2xl space-y-2 text-xs">
                    <p className="font-bold text-blue-900 mb-1">Redes Oficiales:</p>
                    <a href="https://www.instagram.com/redlideresmexico" target="_blank" rel="noopener noreferrer" className="block text-blue-700 hover:underline truncate">📸 Instagram</a>
                    <a href="https://www.tiktok.com/@redlideresmexico" target="_blank" rel="noopener noreferrer" className="block text-blue-700 hover:underline truncate">🎵 TikTok</a>
                    <a href="https://www.facebook.com/redlideresmexico" target="_blank" rel="noopener noreferrer" className="block text-blue-700 hover:underline truncate">📘 Facebook</a>
                  </div>
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

      {/* 5. Sección de Contacto (Sin formulario) */}
      <section id="contacto" className="py-28 px-6 max-w-4xl mx-auto text-center">
        <span className="text-blue-600 font-bold text-sm tracking-widest uppercase bg-blue-50 px-3.5 py-1 rounded-full">Ubicación y Enlace</span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-6 tracking-tight">Ponte en contacto</h2>
        <p className="text-slate-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          ¿Deseas sumarte como voluntario, proponer una alianza o conocer más sobre nuestros programas en Tijuana? Escríbenos directamente o conéctate en nuestras plataformas.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded-3xl shadow-md border border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl mb-4 shadow-xs">
              📍
            </div>
            <h4 className="font-bold text-slate-900 mb-1">Ubicación</h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              Col. El Mirador, C.P. 22204, Tijuana, Baja California, México.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md border border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center text-xl mb-4 shadow-xs">
              ✉️
            </div>
            <h4 className="font-bold text-slate-900 mb-1">Correo Oficial</h4>
            <p className="text-slate-600 text-xs mt-1">
              <a href="mailto:impactemosmx@gmail.com" className="text-blue-600 underline font-medium hover:text-blue-700">impactemosmx@gmail.com</a>
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md border border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center text-xl mb-4 shadow-xs">
              🌐
            </div>
            <h4 className="font-bold text-slate-900 mb-1">Redes Generales</h4>
            <p className="text-slate-600 text-xs mt-1">
              <strong>@impactemosmx</strong>
            </p>
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