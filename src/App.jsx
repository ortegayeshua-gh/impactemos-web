import React, { useState, useEffect } from 'react';
import logoPrincipal from './assets/logo-impactemos.png';
import logoEje1 from './assets/logo-eje1.png';
import logoEje2 from './assets/logo-eje2.png';
import logoEje3 from './assets/logo-eje3.png';
import logoEje4 from './assets/logo-eje4.png';
import logoCorazon from './assets/corazon.png';
import fotoYeshua from './assets/yeshua.png';
import fotoKevin from './assets/kevin.png';

// Importación de las 5 imágenes
import imgRelleno1 from './assets/RellenoSanitario2026-1.avif';
import imgRelleno2 from './assets/RellenoSanitario2026-2.avif';
import imgRelleno3 from './assets/RellenoSanitario2026-3.avif';
import imgRelleno4 from './assets/RellenoSanitario2026-4.avif';
import imgRelleno5 from './assets/RellenoSanitario2026-5.avif';

// Historias emotivas asociadas a cada fotografía (la última enfocada en los perritos)
const galeriaHistorias = [
  {
    img: imgRelleno1,
    titulo: "El brillo de una sonrisa",
    historia: "A pesar de las dificultades cotidianas en el entorno del basurero municipal, la niñez guarda una ilusión inquebrantable. Cada pequeña visita y cada detalle logran encender sonrisas genuinas que nos recuerdan la importancia de estar presentes."
  },
  {
    img: imgRelleno2,
    titulo: "Fuerza y amor maternal",
    historia: "Madres valientes que todos los días sostienen a sus familias con el corazón por delante. Su esfuerzo diario es un testimonio de amor incondicional y de la lucha constante por un futuro mejor para sus hijos."
  },
  {
    img: imgRelleno3,
    titulo: "Comunidad unida por la esperanza",
    historia: "Cuando nos unimos como sociedad, rompemos barreras y llevamos calor humano a donde más se necesita. Esta jornada representa un puente de solidaridad y apoyo mutuo para toda la comunidad."
  },
  {
    img: imgRelleno4,
    titulo: "Pequeños pasos, grandes sueños",
    historia: "Niñas y niños con aspiraciones infinitas que merecen oportunidades, educación y momentos de sano esparcimiento. Apoyarlos hoy es sembrar la semilla de un mañana lleno de posibilidades."
  },
  {
    img: imgRelleno5,
    titulo: "Guardianes fieles en la adversidad",
    historia: "En medio del entorno difícil del relleno sanitario, los perritos de la zona sobreviven compartiendo la misma vulnerabilidad. A través de Zoolidario México, les llevamos alimento, cuidado y esperanza, reconociendo su lealtad incondicional y dándoles una voz de protección."
  }
];

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [activeTab, setActiveTab] = useState('todos');

  // Estado para la galería interactiva en pantalla completa (Lightbox)
  const [lightboxIndex, setLightboxIndex] = useState(null);

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

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % galeriaHistorias.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + galeriaHistorias.length) % galeriaHistorias.length);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white scroll-smooth">
      {/* 1. Barra de navegación fija */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-50 shadow-xs transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#inicio" className="flex items-center space-x-3 cursor-pointer">
            <img 
              src={logoPrincipal} 
              alt="Impactemos México A.C." 
              className="h-11 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </a>
          <nav className="hidden md:flex space-x-8 font-medium text-sm text-slate-600">
            <a href="#inicio" className="hover:text-blue-600 transition-colors duration-200">Inicio</a>
            <a href="#proxima-actividad" className="hover:text-blue-600 transition-colors duration-200">Próxima Actividad</a>
            <a href="#quienes-somos" className="hover:text-blue-600 transition-colors duration-200">Quiénes Somos</a>
            <a href="#ejes" className="hover:text-blue-600 transition-colors duration-200">Cuatro Ejes</a>
            <a href="#contacto" className="hover:text-blue-600 transition-colors duration-200">Contacto</a>
          </nav>
          <div className="flex items-center space-x-3">
            <a 
              href="https://forms.gle/4dv2DtafZyp1G6KVA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md shadow-blue-500/25 transition-all duration-300 active:scale-95 text-center"
            >
              Únete
            </a>
            <a 
              href="https://paypal.me/impactemosmx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md shadow-teal-500/25 transition-all duration-300 active:scale-95 text-center"
            >
              Dona
            </a>
          </div>
        </div>
      </header>

      {/* 2. Sección Hero */}
      <section id="inicio" className="relative overflow-hidden bg-slate-900 text-white py-24 sm:py-32 px-6 text-center">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight pt-2">
            <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-lime-300 bg-clip-text text-transparent">Unidos por el cambio</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Asociación civil enfocada en el desarrollo comunitario, asistencia social, protección ambiental, bienestar animal y participación cívica.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#proxima-actividad" 
              className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold px-8 py-4 rounded-2xl shadow-xl shadow-teal-500/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              🌟 Apoya Nuestra Próxima Actividad
            </a>
            <a 
              href="#ejes" 
              className="bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-2xl border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
            >
              Conoce nuestros 4 ejes
            </a>
          </div>
        </div>
      </section>

      {/* 3. NUEVA SECCIÓN: Próxima Actividad con Imágenes Grandes y Galería Interactiva */}
      <section id="proxima-actividad" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="inline-block bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
              Próxima Jornada: Sábado 12 de Diciembre de 2026
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 leading-tight">
              Llevemos Esperanza al Relleno Sanitario de Tijuana
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed font-light max-w-3xl mx-auto">
              Hay familias, niñas, niños y perritos viviendo en situación vulnerable en el basurero municipal de Tijuana que necesitan de nuestro apoyo. Súmate con tu donativo en especie, aportación económica o participando como voluntario.
            </p>

            {/* Galería de Imágenes Grandes (Clickeables) */}
            <div className="mb-10 text-left">
              <p className="text-xs font-semibold text-teal-300 uppercase tracking-widest text-center mb-4">Haz clic en cualquier imagen para conocer su historia y verla en grande</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {galeriaHistorias.map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setLightboxIndex(idx)}
                    className="group relative overflow-hidden rounded-2xl shadow-xl h-52 bg-slate-800 border-2 border-white/20 cursor-pointer transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-teal-400"
                  >
                    <img src={item.img} alt={item.titulo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                      <span className="text-xs font-bold text-white group-hover:text-teal-300 transition-colors">🔍 Ver historia</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Listado ordenado y limpio de lo que se está recaudando */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-left max-w-2xl mx-auto mb-10 border border-white/10">
              <h3 className="text-xl font-bold text-teal-300 mb-6 text-center">📦 ¿Qué puedes donar para esta colecta?</h3>
              <ul className="grid sm:grid-cols-2 gap-4 text-sm text-slate-200">
                <li className="flex items-start space-x-3">
                  <span className="text-xl">🥫</span>
                  <span><strong>Alimentos:</strong> No perecederos y agua embotellada.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-xl">🧥</span>
                  <span><strong>Ropa y abrigo:</strong> Ropa en buen estado, cobijas y calzado.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-xl">🧸</span>
                  <span><strong>Juguetes:</strong> Nuevos o en buen estado para la niñez.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-xl">🐶</span>
                  <span><strong>Bienestar animal:</strong> Alimento para perritos y artículos de higiene.</span>
                </li>
              </ul>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://forms.gle/4dv2DtafZyp1G6KVA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg transition-all duration-300 text-sm flex items-center space-x-2"
              >
                <span>📝 Regístrate como Voluntario</span>
              </a>
              <a 
                href="https://paypal.me/impactemosmx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold px-6 py-3.5 rounded-2xl shadow-lg transition-all duration-300 text-sm flex items-center space-x-2"
              >
                <span>💳 Dona en Dinero (PayPal)</span>
              </a>
              <a 
                href="https://wa.me/6644910531" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg transition-all duration-300 text-sm flex items-center space-x-2"
              >
                <span>💬 Mensaje a Kevin (Donación en Especie)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sección de 'Quiénes Somos' + Socios Fundadores */}
      <section id="quienes-somos" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-sm tracking-widest uppercase bg-blue-50 px-3.5 py-1 rounded-full">Institucional</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-4 tracking-tight">¿Quiénes Somos?</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Constituida legalmente en julio de 2026 en Tijuana, Baja California, Impactemos México A.C. es una organización civil sin fines de lucro comprometida con mejorar la calidad de vida de las comunidades en situación de vulnerabilidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch mb-24">
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

        {/* Socios Fundadores */}
        <div className="mt-16">
          <div className="text-center mb-20">
            <span className="text-teal-600 font-bold text-sm tracking-widest uppercase bg-teal-50 px-3.5 py-1 rounded-full">Liderazgo</span>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">Consejo Directivo y Socios Fundadores</h3>
            <p className="text-slate-500 text-sm mt-2">Impulsando la evolución social en Baja California.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 pt-10">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 pt-20 relative text-center flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-white shadow-2xl">
                <img 
                  src={fotoYeshua} 
                  alt="Yeshua Guillermo Ortega Durán" 
                  className="w-full h-full rounded-full object-cover object-top border-4 border-blue-600/30 shadow-inner"
                  loading="lazy"
                />
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900 mb-1">Yeshua Guillermo Ortega Durán</h4>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4">Presidente del Consejo Directivo</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Liderazgo social enfocado en la estrategia digital, vinculación comunitaria y gestión de proyectos para el desarrollo de Baja California.
                </p>
              </div>
              <div>
                <a 
                  href="https://linktr.ee/ortegayeshua" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold py-3.5 rounded-2xl shadow-md transition-all duration-300"
                >
                  Ver Perfil y Redes Oficiales
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 pt-20 relative text-center flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-white shadow-2xl">
                <img 
                  src={fotoKevin} 
                  alt="Kevin Alexander Flores Parra" 
                  className="w-full h-full rounded-full object-cover object-top border-4 border-teal-500/30 shadow-inner"
                  loading="lazy"
                />
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900 mb-1">Kevin Alexander Flores Parra</h4>
                <p className="text-sm font-bold text-teal-600 uppercase tracking-wider mb-4">Secretario y Tesorero</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Co-fundador comprometido con la asistencia social, la estructuración administrativa y operativa de iniciativas comunitarias.
                </p>
              </div>
              <div>
                <a 
                  href="https://www.instagram.com/kevinparra.mx/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-slate-900 hover:bg-teal-600 text-white text-sm font-semibold py-3.5 rounded-2xl shadow-md transition-all duration-300"
                >
                  Visitar Instagram Oficial
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sección de 'Nuestros Cuatro Ejes Operativos' */}
      <section id="ejes" className="py-20 bg-slate-100/70 px-6 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-sm tracking-widest uppercase bg-blue-50 px-3.5 py-1 rounded-full">Ejes Especializados</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-4 tracking-tight">Nuestros Cuatro Ejes Operativos</h2>
            <p className="text-slate-600 text-lg">
              Cada programa cuenta con su propia identidad gráfica y enfoque especializado de intervención.
            </p>

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

          {activeTab === 'todos' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border-t-8 border-teal-400 flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div>
                  <div className="h-28 w-full flex items-center justify-center mb-6 p-2 bg-slate-50 rounded-2xl group-hover:bg-teal-50/40 transition-colors duration-300">
                    <img src={logoEje1} alt="Juntos Somos Más" className="max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full mb-3 inline-block">Eje 01</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Juntos Somos Más</h3>
                  <p className="text-xs font-semibold text-teal-600 mb-4">Asistencia Social y Apoyo Comunitario</p>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Centros de acopio, entrega de apoyos alimentarios, brigadas asistenciales y comunitarias para grupos vulnerables.
                  </p>
                </div>
                <button onClick={() => handleOpenModal('Juntos Somos Más (Asistencia Social)')} className="w-full bg-teal-50 hover:bg-teal-100 text-teal-800 font-semibold py-3 rounded-xl text-sm transition-colors duration-200">
                  Ver Actividades
                </button>
              </div>

              <div className="group bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border-t-8 border-lime-500 flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div>
                  <div className="h-28 w-full flex items-center justify-center mb-6 p-2 bg-slate-50 rounded-2xl group-hover:bg-lime-50/40 transition-colors duration-300">
                    <img src={logoEje2} alt="EcoImpacto México" className="max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-lime-700 bg-lime-50 px-3.5 py-1 rounded-full mb-3 inline-block">Eje 02</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">EcoImpacto México</h3>
                  <p className="text-xs font-semibold text-lime-600 mb-4">Medio Ambiente y Sustentabilidad</p>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Jornadas de reforestación urbana, talleres de educación ambiental, huertos urbanos y recuperación de espacios públicos.
                  </p>
                </div>
                <button onClick={() => handleOpenModal('EcoImpacto México (Medio Ambiente)')} className="w-full bg-lime-50 hover:bg-lime-100 text-lime-800 font-semibold py-3 rounded-xl text-sm transition-colors duration-200">
                  Ver Actividades
                </button>
              </div>

              <div className="group bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border-t-8 border-orange-500 flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div>
                  <div className="h-28 w-full flex items-center justify-center mb-6 p-2 bg-slate-50 rounded-2xl group-hover:bg-orange-50/40 transition-colors duration-300">
                    <img src={logoEje3} alt="Zoolidario México" className="max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-orange-700 bg-orange-50 px-3.5 py-1 rounded-full mb-3 inline-block">Eje 03</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Zoolidario México</h3>
                  <p className="text-xs font-semibold text-orange-600 mb-4">Cuidado y Bienestar Animal</p>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Campañas de concientización sobre tenencia responsable, fomento a la adopción, rescate animal y salud preventiva.
                  </p>
                </div>
                <button onClick={() => handleOpenModal('Zoolidario México (Bienestar Animal)')} className="w-full bg-orange-50 hover:bg-orange-100 text-orange-800 font-semibold py-3 rounded-xl text-sm transition-colors duration-200">
                  Ver Actividades
                </button>
              </div>

              <div className="group bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border-t-8 border-blue-600 flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div>
                  <div className="h-28 w-full flex items-center justify-center mb-6 p-2 bg-slate-50 rounded-2xl group-hover:bg-blue-50/40 transition-colors duration-300">
                    <img src={logoEje4} alt="Red de Líderes" className="max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full mb-3 inline-block">Eje 04</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Red de Líderes</h3>
                  <p className="text-xs font-semibold text-blue-600 mb-4">Liderazgo Juvenil y Participación Cívica</p>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Talleres de formación cívica, capacitación tecnológica y digital, foros ciudadanos y proyectos comunitarios juveniles.
                  </p>
                </div>
                <button onClick={() => handleOpenModal('Red de Líderes México (Participación Cívica)')} className="w-full bg-blue-50 hover:bg-blue-100 text-blue-800 font-semibold py-3 rounded-xl text-sm transition-colors duration-200">
                  Ver Actividades
                </button>
              </div>
            </div>
          )}

          {activeTab === 'eje1' && (
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="bg-white rounded-3xl p-8 shadow-xl border-t-8 border-teal-400 flex flex-col justify-between">
                <div>
                  <div className="h-28 w-full flex items-center justify-center mb-6 p-2 bg-slate-50 rounded-2xl">
                    <img src={logoEje1} alt="Juntos Somos Más" className="max-h-20 w-auto object-contain" loading="lazy" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full mb-3 inline-block">Eje 01</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">Juntos Somos Más</h3>
                  <p className="text-xs font-semibold text-teal-600 mb-4">Asistencia Social y Apoyo Comunitario</p>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Centros de acopio, entrega de apoyos alimentarios, brigadas asistenciales y comunitarias para grupos vulnerables.
                  </p>
                </div>
                <button onClick={() => handleOpenModal('Juntos Somos Más (Asistencia Social)')} className="w-full bg-teal-50 hover:bg-teal-100 text-teal-800 font-semibold py-3 rounded-xl text-sm transition-colors duration-200">
                  Ver Actividades
                </button>
              </div>
              <div className="lg:col-span-2 grid sm:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-3xl shadow-xl border border-teal-100 flex flex-col justify-between text-center">
                  <div>
                    <h4 className="font-black text-slate-900 mb-2">Instagram</h4>
                    <p className="text-xs text-slate-600 italic mb-4">"Suma esperanza con nosotros y mejora vidas."</p>
                  </div>
                  <a href="https://www.instagram.com/juntossomosmasmexico" target="_blank" rel="noopener noreferrer" className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors">Visitar perfil</a>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-xl border border-teal-100 flex flex-col justify-between text-center">
                  <div>
                    <h4 className="font-black text-slate-900 mb-2">TikTok</h4>
                    <p className="text-xs text-slate-600 italic mb-4">"Vive nuestras brigadas de cerca y sé parte del cambio."</p>
                  </div>
                  <a href="https://www.tiktok.com/@juntossomosmasmexico" target="_blank" rel="noopener noreferrer" className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors">Visitar perfil</a>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-xl border border-teal-100 flex flex-col justify-between text-center">
                  <div>
                    <h4 className="font-black text-slate-900 mb-2">Facebook</h4>
                    <p className="text-xs text-slate-600 italic mb-4">"Únete a nuestra gran comunidad solidaria en Tijuana."</p>
                  </div>
                  <a href="https://www.facebook.com/JuntosSomosMasMexico" target="_blank" rel="noopener noreferrer" className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors">Visitar perfil</a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'eje2' && (
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="bg-white rounded-3xl p-8 shadow-xl border-t-8 border-lime-500 flex flex-col justify-between">
                <div>
                  <div className="h-28 w-full flex items-center justify-center mb-6 p-2 bg-slate-50 rounded-2xl">
                    <img src={logoEje2} alt="EcoImpacto México" className="max-h-20 w-auto object-contain" loading="lazy" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-lime-700 bg-lime-50 px-3.5 py-1 rounded-full mb-3 inline-block">Eje 02</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">EcoImpacto México</h3>
                  <p className="text-xs font-semibold text-lime-600 mb-4">Medio Ambiente y Sustentabilidad</p>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Jornadas de reforestación urbana, talleres de educación ambiental, huertos urbanos y recuperación de espacios públicos.
                  </p>
                </div>
                <button onClick={() => handleOpenModal('EcoImpacto México (Medio Ambiente)')} className="w-full bg-lime-50 hover:bg-lime-100 text-lime-800 font-semibold py-3 rounded-xl text-sm transition-colors duration-200">
                  Ver Actividades
                </button>
              </div>
              <div className="lg:col-span-2 grid sm:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-3xl shadow-xl border border-lime-100 flex flex-col justify-between text-center">
                  <div>
                    <h4 className="font-black text-slate-900 mb-2">Instagram</h4>
                    <p className="text-xs text-slate-600 italic mb-4">"Por un futuro más verde y sustentable."</p>
                  </div>
                  <a href="https://www.instagram.com/ecoimpacto.mx" target="_blank" rel="noopener noreferrer" className="bg-lime-600 hover:bg-lime-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors">Visitar perfil</a>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-xl border border-lime-100 flex flex-col justify-between text-center">
                  <div>
                    <h4 className="font-black text-slate-900 mb-2">TikTok</h4>
                    <p className="text-xs text-slate-600 italic mb-4">"Acciones reales por nuestro planeta."</p>
                  </div>
                  <a href="https://www.tiktok.com/@ecoimpactomx" target="_blank" rel="noopener noreferrer" className="bg-lime-600 hover:bg-lime-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors">Visitar perfil</a>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-xl border border-lime-100 flex flex-col justify-between text-center">
                  <div>
                    <h4 className="font-black text-slate-900 mb-2">Facebook</h4>
                    <p className="text-xs text-slate-600 italic mb-4">"Conecta con la ecología y cuida tu entorno."</p>
                  </div>
                  <a href="https://www.facebook.com/ecoimpacto.mx" target="_blank" rel="noopener noreferrer" className="bg-lime-600 hover:bg-lime-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors">Visitar perfil</a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'eje3' && (
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="bg-white rounded-3xl p-8 shadow-xl border-t-8 border-orange-500 flex flex-col justify-between">
                <div>
                  <div className="h-28 w-full flex items-center justify-center mb-6 p-2 bg-slate-50 rounded-2xl">
                    <img src={logoEje3} alt="Zoolidario México" className="max-h-20 w-auto object-contain" loading="lazy" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-orange-700 bg-orange-50 px-3.5 py-1 rounded-full mb-3 inline-block">Eje 03</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">Zoolidario México</h3>
                  <p className="text-xs font-semibold text-orange-600 mb-4">Cuidado y Bienestar Animal</p>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Campañas de concientización sobre tenencia responsable, fomento a la adopción, rescate animal y salud preventiva.
                  </p>
                </div>
                <button onClick={() => handleOpenModal('Zoolidario México (Bienestar Animal)')} className="w-full bg-orange-50 hover:bg-orange-100 text-orange-800 font-semibold py-3 rounded-xl text-sm transition-colors duration-200">
                  Ver Actividades
                </button>
              </div>
              <div className="lg:col-span-2 grid sm:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-3xl shadow-xl border border-orange-100 flex flex-col justify-between text-center">
                  <div>
                    <h4 className="font-black text-slate-900 mb-2">Instagram</h4>
                    <p className="text-xs text-slate-600 italic mb-4">"Dales una voz y un hogar lleno de amor."</p>
                  </div>
                  <a href="https://www.instagram.com/zoolidariomx" target="_blank" rel="noopener noreferrer" className="bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors">Visitar perfil</a>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-xl border border-orange-100 flex flex-col justify-between text-center">
                  <div>
                    <h4 className="font-black text-slate-900 mb-2">TikTok</h4>
                    <p className="text-xs text-slate-600 italic mb-4">"Historias de rescate que mejoran corazones."</p>
                  </div>
                  <a href="https://www.tiktok.com/@zoolidariomx" target="_blank" rel="noopener noreferrer" className="bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors">Visitar perfil</a>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-xl border border-orange-100 flex flex-col justify-between text-center">
                  <div>
                    <h4 className="font-black text-slate-900 mb-2">Facebook</h4>
                    <p className="text-xs text-slate-600 italic mb-4">"Amor y respeto animal en cada acción."</p>
                  </div>
                  <a href="https://www.facebook.com/zoolidariomx" target="_blank" rel="noopener noreferrer" className="bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors">Visitar perfil</a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'eje4' && (
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="bg-white rounded-3xl p-8 shadow-xl border-t-8 border-blue-600 flex flex-col justify-between">
                <div>
                  <div className="h-28 w-full flex items-center justify-center mb-6 p-2 bg-slate-50 rounded-2xl">
                    <img src={logoEje4} alt="Red de Líderes" className="max-h-20 w-auto object-contain" loading="lazy" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full mb-3 inline-block">Eje 04</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">Red de Líderes</h3>
                  <p className="text-xs font-semibold text-blue-600 mb-4">Liderazgo Juvenil y Participación Cívica</p>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Talleres de formación cívica, capacitación tecnológica y digital, foros ciudadanos y proyectos comunitarios juveniles.
                  </p>
                </div>
                <button onClick={() => handleOpenModal('Red de Líderes México (Participación Cívica)')} className="w-full bg-blue-50 hover:bg-blue-100 text-blue-800 font-semibold py-3 rounded-xl text-sm transition-colors duration-200">
                  Ver Actividades
                </button>
              </div>
              <div className="lg:col-span-2 grid sm:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-3xl shadow-xl border border-blue-100 flex flex-col justify-between text-center">
                  <div>
                    <h4 className="font-black text-slate-900 mb-2">Instagram</h4>
                    <p className="text-xs text-slate-600 italic mb-4">"Inspira el cambio social desde la juventud."</p>
                  </div>
                  <a href="https://www.instagram.com/redlideresmexico" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors">Visitar perfil</a>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-xl border border-blue-100 flex flex-col justify-between text-center">
                  <div>
                    <h4 className="font-black text-slate-900 mb-2">TikTok</h4>
                    <p className="text-xs text-slate-600 italic mb-4">"Liderazgo en acción y participación cívica."</p>
                  </div>
                  <a href="https://www.tiktok.com/@redlideresmexico" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors">Visitar perfil</a>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-xl border border-blue-100 flex flex-col justify-between text-center">
                  <div>
                    <h4 className="font-black text-slate-900 mb-2">Facebook</h4>
                    <p className="text-xs text-slate-600 italic mb-4">"Comunidad de líderes comprometidos con México."</p>
                  </div>
                  <a href="https://www.facebook.com/redlideresmexico" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors">Visitar perfil</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. Sección de Contacto */}
      <section id="contacto" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-sm tracking-widest uppercase bg-blue-50 px-3.5 py-1 rounded-full">Ubicación y Enlace</span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-3 mb-4 tracking-tight">Ponte en contacto</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            ¿Deseas sumarte como voluntario, proponer una alianza o conocer más sobre nuestros programas en Tijuana? Escríbenos directamente o conéctate en nuestras plataformas oficiales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-3xl mx-auto mb-6 shadow-xs">
              📍
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Ubicación</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Col. El Mirador, C.P. 22204, Tijuana, Baja California, México.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center text-3xl mx-auto mb-6 shadow-xs">
              ✉️
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Correo Oficial</h4>
            <p className="text-slate-600 text-sm mt-1">
              <a href="mailto:impactemosmx@gmail.com" className="text-blue-600 underline font-semibold hover:text-blue-700">impactemosmx@gmail.com</a>
            </p>
          </div>

          <a 
            href="https://linktr.ee/impactemosmx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center hover:-translate-y-1 transition-all duration-300 block group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center text-3xl mx-auto mb-6 shadow-xs group-hover:scale-110 transition-transform">
              🌐
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Redes Generales</h4>
            <p className="text-slate-600 text-sm mt-1">
              <span className="font-bold text-slate-800 underline">@impactemosmx</span>
            </p>
          </a>
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

      {/* MODAL LIGHTBOX DE GALERÍA CON HISTORIAS EMOTIVAS */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in">
          {/* Botón Cerrar (X) */}
          <button 
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full text-xl z-50 transition-colors"
          >
            ✕
          </button>

          {/* Botón Anterior */}
          <button 
            onClick={prevImage}
            className="absolute left-4 sm:left-8 text-white bg-white/10 hover:bg-white/20 p-4 rounded-full text-2xl z-50 transition-colors"
          >
            ❮
          </button>

          {/* Botón Siguiente */}
          <button 
            onClick={nextImage}
            className="absolute right-4 sm:right-8 text-white bg-white/10 hover:bg-white/20 p-4 rounded-full text-2xl z-50 transition-colors"
          >
            ❯
          </button>

          {/* Contenedor de la Galería con la Foto y la Historia Emotiva */}
          <div className="bg-slate-900 border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto grid md:grid-cols-2 shadow-2xl text-white">
            <div className="h-72 md:h-full bg-black flex items-center justify-center p-2">
              <img 
                src={galeriaHistorias[lightboxIndex].img} 
                alt="Galería Relleno Sanitario" 
                className="max-h-full max-w-full object-contain rounded-2xl"
              />
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <span className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-2">Historia de Vida • Relleno Sanitario</span>
              <h3 className="text-2xl sm:text-3xl font-black mb-4">{galeriaHistorias[lightboxIndex].titulo}</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                "{galeriaHistorias[lightboxIndex].historia}"
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Imagen {lightboxIndex + 1} de {galeriaHistorias.length}</span>
                <a 
                  href="https://wa.me/6644910531" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl transition-colors"
                >
                  💬 Apoyar esta causa
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal General */}
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