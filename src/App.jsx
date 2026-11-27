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

// Enlace oficial de WhatsApp con mensaje predeterminado
const whatsappUrl = "https://api.whatsapp.com/send?phone=+526644910531&text=Hola%20Kevin,%20quiero%20sumarme%20a%20la%20siguiente%20actividad.%20%F0%9F%92%99%20%C2%BFComo%20puedo%20ayudar%3F%20%E2%9C%A8";

// URL de tu Google Apps Script conectada a la hoja Impactemos México | A.C. (pestaña Board)
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyrUJRtqUii7Hr1301pvBC_AjeMvoZILGd6khAAMOtUxIhMYp5pn_Tm5F-PTt77gXs3Eg/exec";

// Fecha objetivo: 12 de diciembre de 2026 a las 10:00 AM (Hora de Tijuana PST -08:00)
const TARGET_DATE = new Date('2026-12-12T10:00:00-08:00').getTime();

// Historias emotivas asociadas a cada fotografía
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

const opcionesActividad = [
  "Llevemos Esperanza al Relleno Sanitario de Tijuana (12 de Diciembre 2026)",
  "Voluntariado general / Próximas actividades",
  "Eje 01: Juntos Somos Más (Asistencia Social)",
  "Eje 02: EcoImpacto México (Medio Ambiente)",
  "Eje 03: Zoolidario México (Bienestar Animal)",
  "Eje 04: Red de Líderes México (Participación Cívica)",
  "Otra"
];

const estadosRepublica = [
  "Aguascalientes",
  "Baja California",
  "Baja California Sur",
  "Campeche",
  "Chiapas",
  "Chihuahua",
  "Ciudad de México",
  "Coahuila",
  "Colima",
  "Durango",
  "Estado de México",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco",
  "Michoacán",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Tlaxcala",
  "Veracruz",
  "Yucatán",
  "Zacatecas",
  "Extranjero"
];

const opcionesComoTeEnteraste = [
  "Instagram",
  "Facebook",
  "TikTok",
  "YouTube",
  "WhatsApp",
  "Invitación de un amigo, familiar o conocido",
  "Página web de Impactemos México",
  "Escuela, universidad o trabajo",
  "Evento o módulo presencial",
  "Otro"
];

const opcionesGenero = [
  "Mujer",
  "Hombre",
  "No binario",
  "Prefiero no decirlo",
  "Otros"
];

const opcionesContacto = [
  "Que me envíen información por correo",
  "Que me envíen info por WhatsApp",
  "Solo quiero seguirlos en redes sociales",
  "Otros"
];

const initialFormState = {
  actividad: "",
  actividadOtra: "",
  primerApellido: "",
  segundoApellido: "",
  nombres: "",
  fechaNacimiento: "",
  genero: "",
  generoOtro: "",
  estado: "",
  municipio: "",
  colonia: "",
  correo: "",
  whatsapp: "",
  comoTeEnteraste: "",
  comoTeEnterasteOtro: "",
  contacto: [],
  contactoOtro: "",
  comentarios: ""
};

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [activeTab, setActiveTab] = useState('todos');

  // Estado para la galería interactiva en pantalla completa (Lightbox)
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Estados para el modal de formulario de registro / voluntariado
  const [registroModalOpen, setRegistroModalOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Estado para la cuenta regresiva automatizada
  const [timeLeft, setTimeLeft] = useState(() => {
    const difference = TARGET_DATE - Date.now();
    if (difference <= 0) {
      return { dias: 0, horas: 0, minutos: 0, segundos: 0, finalizado: true };
    }
    return {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
      finalizado: false
    };
  });

  // Actualización automática cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      const difference = TARGET_DATE - Date.now();
      if (difference <= 0) {
        setTimeLeft({ dias: 0, horas: 0, minutos: 0, segundos: 0, finalizado: true });
        clearInterval(timer);
      } else {
        setTimeLeft({
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutos: Math.floor((difference / 1000 / 60) % 60),
          segundos: Math.floor((difference / 1000) % 60),
          finalizado: false
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

  // Abrir formulario de registro (con actividad prellenada opcional)
  const openRegistroModal = (actividadDefault = "") => {
    setFormData({
      ...initialFormState,
      actividad: actividadDefault
    });
    setFormError("");
    setSubmitSuccess(false);
    setRegistroModalOpen(true);
  };

  const closeRegistroModal = () => {
    setRegistroModalOpen(false);
    setFormError("");
    setSubmitSuccess(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactoToggle = (opcion) => {
    setFormData((prev) => {
      const existe = prev.contacto.includes(opcion);
      const nuevaLista = existe
        ? prev.contacto.filter((item) => item !== opcion)
        : [...prev.contacto, opcion];
      return { ...prev, contacto: nuevaLista };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    // Validación de campos obligatorios
    if (
      !formData.actividad.trim() ||
      !formData.primerApellido.trim() ||
      !formData.segundoApellido.trim() ||
      !formData.nombres.trim() ||
      !formData.fechaNacimiento ||
      !formData.estado.trim() ||
      !formData.municipio.trim() ||
      !formData.colonia.trim() ||
      !formData.correo.trim() ||
      !formData.whatsapp.trim() ||
      !formData.comoTeEnteraste.trim()
    ) {
      setFormError("Por favor completa todos los campos marcados con * antes de enviar.");
      return;
    }

    if (formData.actividad === "Otra" && !formData.actividadOtra.trim()) {
      setFormError("Por favor especifica a qué actividad te estás registrando.");
      return;
    }

    if (formData.genero === "Otros" && !formData.generoOtro.trim()) {
      setFormError("Por favor especifica tu respuesta en la opción 'Otros' de género.");
      return;
    }

    if (formData.comoTeEnteraste === "Otro" && !formData.comoTeEnterasteOtro.trim()) {
      setFormError("Por favor especifica cómo te enteraste de esta actividad.");
      return;
    }

    if (formData.contacto.length === 0) {
      setFormError("Por favor selecciona al menos una opción en '¿Cómo te gustaría mantenerte en contacto con nosotros?'.");
      return;
    }

    if (formData.contacto.includes("Otros") && !formData.contactoOtro.trim()) {
      setFormError("Por favor especifica tu respuesta en la opción 'Otros' de contacto.");
      return;
    }

    // Preparar valores finales para Google Sheets
    const actividadFinal =
      formData.actividad === "Otra"
        ? `Otra: ${formData.actividadOtra.trim()}`
        : formData.actividad.trim();

    const generoFinal =
      formData.genero === "Otros"
        ? `Otros: ${formData.generoOtro.trim()}`
        : formData.genero;

    const comoTeEnterasteFinal =
      formData.comoTeEnteraste === "Otro"
        ? `Otro: ${formData.comoTeEnterasteOtro.trim()}`
        : formData.comoTeEnteraste.trim();

    const contactoFinal = formData.contacto
      .map((item) =>
        item === "Otros" ? `Otros: ${formData.contactoOtro.trim()}` : item
      )
      .join(", ");

    const payload = {
      actividad: actividadFinal,
      primerApellido: formData.primerApellido.trim(),
      segundoApellido: formData.segundoApellido.trim(),
      nombres: formData.nombres.trim(),
      fechaNacimiento: formData.fechaNacimiento,
      genero: generoFinal,
      estado: formData.estado.trim(),
      municipio: formData.municipio.trim(),
      colonia: formData.colonia.trim(),
      correo: formData.correo.trim(),
      whatsapp: formData.whatsapp.trim(),
      comoTeEnteraste: comoTeEnterasteFinal,
      contacto: contactoFinal,
      comentarios: formData.comentarios.trim()
    };

    setIsSubmitting(true);

    try {
      if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL.startsWith("http")) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8"
          },
          body: JSON.stringify(payload)
        });
      }
      setSubmitSuccess(true);
    } catch (error) {
      setFormError("Ocurrió un problema de conexión al enviar tu registro. Intenta de nuevo por favor.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % galeriaHistorias.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + galeriaHistorias.length) % galeriaHistorias.length);
  };

  // Funcionalidad de teclado (Flechas izq/der y tecla ESC)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (registroModalOpen) {
          closeRegistroModal();
          return;
        }
        if (lightboxIndex !== null) {
          setLightboxIndex(null);
          return;
        }
      }
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, registroModalOpen]);

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
            <button
              type="button"
              onClick={() => openRegistroModal("")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md shadow-blue-500/25 transition-all duration-300 active:scale-95 text-center cursor-pointer"
            >
              Únete
            </button>
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

      {/* 3. SECCIÓN: Próxima Actividad con Cuenta Regresiva, Imágenes Grandes y Galería Interactiva */}
      <section id="proxima-actividad" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="inline-block bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
              Próxima Jornada: Sábado 12 de Diciembre de 2026 • 10:00 AM
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 leading-tight">
              Llevemos Esperanza al Relleno Sanitario de Tijuana
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed font-light max-w-3xl mx-auto">
              Hay familias, niñas, niños y perritos viviendo en situación vulnerable en el basurero municipal de Tijuana que necesitan de nuestro apoyo. Súmate con tu donativo en especie, aportación económica o participando como voluntario.
            </p>

            {/* CUENTA REGRESIVA AUTOMATIZADA */}
            <div className="bg-white/5 backdrop-blur-md border border-teal-400/25 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto mb-10 shadow-xl">
              {timeLeft.finalizado ? (
                <p className="text-xl sm:text-2xl font-black text-teal-300">
                  🌟 ¡Hoy es el gran día! Unidos estamos haciendo el cambio en el relleno sanitario.
                </p>
              ) : (
                <>
                  <p className="text-xs sm:text-sm font-bold text-teal-300 uppercase tracking-widest mb-4">
                    ⏳ Faltan:
                  </p>
                  <div className="grid grid-cols-4 gap-3 sm:gap-5 mb-5">
                    <div className="bg-slate-950/60 border border-white/10 rounded-2xl py-3 sm:py-4 px-2 flex flex-col items-center justify-center shadow-inner">
                      <span className="text-2xl sm:text-4xl font-black text-white tabular-nums">
                        {String(timeLeft.dias).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] sm:text-xs font-semibold text-teal-300 uppercase tracking-wider mt-1">
                        Días
                      </span>
                    </div>
                    <div className="bg-slate-950/60 border border-white/10 rounded-2xl py-3 sm:py-4 px-2 flex flex-col items-center justify-center shadow-inner">
                      <span className="text-2xl sm:text-4xl font-black text-white tabular-nums">
                        {String(timeLeft.horas).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] sm:text-xs font-semibold text-teal-300 uppercase tracking-wider mt-1">
                        Horas
                      </span>
                    </div>
                    <div className="bg-slate-950/60 border border-white/10 rounded-2xl py-3 sm:py-4 px-2 flex flex-col items-center justify-center shadow-inner">
                      <span className="text-2xl sm:text-4xl font-black text-white tabular-nums">
                        {String(timeLeft.minutos).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] sm:text-xs font-semibold text-teal-300 uppercase tracking-wider mt-1">
                        Minutos
                      </span>
                    </div>
                    <div className="bg-slate-950/60 border border-white/10 rounded-2xl py-3 sm:py-4 px-2 flex flex-col items-center justify-center shadow-inner">
                      <span className="text-2xl sm:text-4xl font-black text-teal-400 tabular-nums">
                        {String(timeLeft.segundos).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] sm:text-xs font-semibold text-teal-300 uppercase tracking-wider mt-1">
                        Segundos
                      </span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base font-medium text-slate-200">
                    ...para que <span className="text-teal-300 font-bold">unidos hagamos el cambio</span> en el relleno sanitario 💙
                  </p>
                </>
              )}
            </div>

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
              <button
                type="button"
                onClick={() => openRegistroModal("Llevemos Esperanza al Relleno Sanitario de Tijuana (12 de Diciembre 2026)")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg transition-all duration-300 text-sm flex items-center space-x-2 cursor-pointer"
              >
                <span>📝 Regístrate como Voluntario</span>
              </button>
              <a 
                href="https://paypal.me/impactemosmx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0070ba] hover:bg-[#005ea6] text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-[#0070ba]/30 transition-all duration-300 text-sm flex items-center space-x-2"
              >
                <span>💳 Dona a través de PayPal</span>
              </a>
              <a 
                href={whatsappUrl} 
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

          {/* Tarjeta de Redes Sociales con Iconos / Botones Oficiales */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-3xl mx-auto mb-4 shadow-xs">
                🌐
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Redes Oficiales</h4>
              <p className="text-slate-500 text-xs mb-4">Síguenos en nuestras plataformas:</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <a 
                href="https://www.instagram.com/impactemosmx" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200 text-lg font-bold"
              >
                IG
              </a>
              <a 
                href="https://www.facebook.com/impactemosmx" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200 text-lg font-bold"
              >
                FB
              </a>
              <a 
                href="https://www.tiktok.com/@impactemosmx" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200 text-sm font-black"
              >
                TT
              </a>
              <a 
                href="https://www.youtube.com/@impactemosmx" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-11 h-11 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200 text-sm font-black"
              >
                YT
              </a>
            </div>
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

      {/* MODAL FORMULARIO DE REGISTRO / VOLUNTARIADO */}
      {registroModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden my-auto">
            {/* Encabezado fijo del formulario con botón X */}
            <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white px-6 sm:px-8 py-5 flex items-start justify-between gap-4 border-b border-white/10">
              <div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                  💬 ¡Gracias por formar parte!
                </h3>
                <p className="text-xs sm:text-sm text-teal-300 mt-1 font-medium">
                  <span className="text-rose-400 font-bold">*</span> Indica que la pregunta es obligatoria
                </p>
              </div>
              <button
                type="button"
                onClick={closeRegistroModal}
                aria-label="Cerrar formulario"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-lg font-bold transition-colors shrink-0 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Cuerpo con scroll interno */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800">
              {submitSuccess ? (
                <div className="py-10 px-4 text-center space-y-5">
                  <div className="w-20 h-20 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center text-4xl mx-auto shadow-inner">
                    🎉
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900">
                    ¡Gracias por sumarte a esta causa!
                  </h4>
                  <p className="text-slate-600 text-base leading-relaxed max-w-lg mx-auto">
                    Tu apoyo suma muchísimo. Muy pronto te estaremos escribiendo para agradecerte y contarte más sobre lo que estamos construyendo desde la ciudadanía organizada.
                  </p>
                  <p className="text-base font-bold text-blue-700 bg-blue-50 border border-blue-100 rounded-2xl p-4 max-w-lg mx-auto">
                    💛 En Impactemos México creemos en lo que se puede lograr cuando hay voluntad de ayudar.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={closeRegistroModal}
                      className="bg-slate-900 hover:bg-blue-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg transition-colors cursor-pointer"
                    >
                      Volver al sitio
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {formError && (
                    <div className="bg-rose-50 border border-rose-200 text-rose-700 text-sm font-medium px-4 py-3 rounded-2xl">
                      ⚠️ {formError}
                    </div>
                  )}

                  {/* 1. ¿A qué actividad te estás registrando? (Lista desplegable) */}
                  <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                    <label className="block text-sm sm:text-base font-bold text-slate-900">
                      1. ¿A qué actividad te estás registrando? <span className="text-rose-600">*</span>
                    </label>
                    <p className="text-xs text-slate-500 mt-1 mb-3">
                      Esta información nos ayuda a organizar mejor cada actividad y a darte seguimiento personalizado.
                    </p>
                    <select
                      name="actividad"
                      required
                      value={formData.actividad}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                    >
                      <option value="">Selecciona una actividad...</option>
                      {opcionesActividad.map((opcion) => (
                        <option key={opcion} value={opcion}>
                          {opcion}
                        </option>
                      ))}
                    </select>
                    {formData.actividad === "Otra" && (
                      <input
                        type="text"
                        name="actividadOtra"
                        value={formData.actividadOtra}
                        onChange={handleInputChange}
                        placeholder="Escribe el nombre de la actividad..."
                        className="mt-2.5 w-full bg-white border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                      />
                    )}
                  </div>

                  {/* 2. Primer Apellido */}
                  <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                    <label className="block text-sm sm:text-base font-bold text-slate-900">
                      2. Primer Apellido <span className="text-rose-600">*</span>
                    </label>
                    <p className="text-xs text-slate-500 mt-1 mb-3">
                      (Para poder dirigirnos a ti de forma cercana y personalizada)
                    </p>
                    <input
                      type="text"
                      name="primerApellido"
                      required
                      value={formData.primerApellido}
                      onChange={handleInputChange}
                      placeholder="Tu primer apellido"
                      className="w-full bg-white border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* 3. Segundo Apellido */}
                  <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                    <label className="block text-sm sm:text-base font-bold text-slate-900">
                      3. Segundo Apellido <span className="text-rose-600">*</span>
                    </label>
                    <p className="text-xs text-slate-500 mt-1 mb-3">
                      (Para poder dirigirnos a ti de forma cercana y personalizada)
                    </p>
                    <input
                      type="text"
                      name="segundoApellido"
                      required
                      value={formData.segundoApellido}
                      onChange={handleInputChange}
                      placeholder="Tu segundo apellido"
                      className="w-full bg-white border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* 4. Nombre(s) */}
                  <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                    <label className="block text-sm sm:text-base font-bold text-slate-900">
                      4. Nombre(s) <span className="text-rose-600">*</span>
                    </label>
                    <p className="text-xs text-slate-500 mt-1 mb-3">
                      (Para poder dirigirnos a ti de forma cercana y personalizada)
                    </p>
                    <input
                      type="text"
                      name="nombres"
                      required
                      value={formData.nombres}
                      onChange={handleInputChange}
                      placeholder="Tu(s) nombre(s)"
                      className="w-full bg-white border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* 5. Fecha de nacimiento */}
                  <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                    <label className="block text-sm sm:text-base font-bold text-slate-900">
                      5. Fecha de nacimiento <span className="text-rose-600">*</span>
                    </label>
                    <p className="text-xs text-slate-500 mt-1 mb-3">
                      Esta información es únicamente para fines estadísticos y para conocer mejor el perfil de las personas que se suman a nuestras actividades.
                    </p>
                    <input
                      type="date"
                      name="fechaNacimiento"
                      required
                      value={formData.fechaNacimiento}
                      onChange={handleInputChange}
                      className="w-full sm:w-auto bg-white border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* 6. Género o sexo con el que te identificas (Opcional) */}
                  <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                    <label className="block text-sm sm:text-base font-bold text-slate-900">
                      6. Género o sexo con el que te identificas <span className="text-xs font-normal text-slate-500">(Opcional)</span>
                    </label>
                    <p className="text-xs text-slate-500 mt-1 mb-3">
                      Esta información nos permite generar reportes con perspectiva de inclusión y diversidad, exclusivamente para fines estadísticos y de impacto.
                    </p>
                    <div className="space-y-2.5">
                      {opcionesGenero.map((opcion) => (
                        <label key={opcion} className="flex items-center space-x-3 text-sm text-slate-700 cursor-pointer">
                          <input
                            type="radio"
                            name="genero"
                            value={opcion}
                            checked={formData.genero === opcion}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                          />
                          <span>{opcion}</span>
                        </label>
                      ))}
                      {formData.genero === "Otros" && (
                        <input
                          type="text"
                          name="generoOtro"
                          value={formData.generoOtro}
                          onChange={handleInputChange}
                          placeholder="Especifica aquí..."
                          className="mt-2 w-full bg-white border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-2 text-sm outline-none transition-all"
                        />
                      )}
                    </div>
                  </div>

                  {/* 7. Estado de la República (Lista desplegable alfabética + Extranjero) */}
                  <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                    <label className="block text-sm sm:text-base font-bold text-slate-900">
                      7. Estado de la República <span className="text-rose-600">*</span>
                    </label>
                    <p className="text-xs text-slate-500 mt-1 mb-3">
                      Nos ayuda a identificar desde qué zonas se están uniendo más personas a la causa. Solo lo usaremos con fines estadísticos y de impacto comunitario.
                    </p>
                    <select
                      name="estado"
                      required
                      value={formData.estado}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                    >
                      <option value="">Selecciona un estado...</option>
                      {estadosRepublica.map((estado) => (
                        <option key={estado} value={estado}>
                          {estado}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* 8. Municipio */}
                  <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                    <label className="block text-sm sm:text-base font-bold text-slate-900">
                      8. Municipio <span className="text-rose-600">*</span>
                    </label>
                    <p className="text-xs text-slate-500 mt-1 mb-3">
                      Nos ayuda a identificar desde qué zonas se están uniendo más personas a la causa. Solo lo usaremos con fines estadísticos y de impacto comunitario.
                    </p>
                    <input
                      type="text"
                      name="municipio"
                      required
                      value={formData.municipio}
                      onChange={handleInputChange}
                      placeholder="Ej. Tijuana"
                      className="w-full bg-white border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* 9. Colonia */}
                  <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                    <label className="block text-sm sm:text-base font-bold text-slate-900">
                      9. Colonia <span className="text-rose-600">*</span>
                    </label>
                    <p className="text-xs text-slate-500 mt-1 mb-3">
                      Nos ayuda a identificar desde qué zonas se están uniendo más personas a la causa. Solo lo usaremos con fines estadísticos y de impacto comunitario.
                    </p>
                    <input
                      type="text"
                      name="colonia"
                      required
                      value={formData.colonia}
                      onChange={handleInputChange}
                      placeholder="Nombre de tu colonia"
                      className="w-full bg-white border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* 10. Correo electrónico */}
                  <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                    <label className="block text-sm sm:text-base font-bold text-slate-900 mb-3">
                      10. Correo electrónico <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="correo"
                      required
                      value={formData.correo}
                      onChange={handleInputChange}
                      placeholder="tucorreo@ejemplo.com"
                      className="w-full bg-white border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* 11. Número de WhatsApp */}
                  <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                    <label className="block text-sm sm:text-base font-bold text-slate-900 mb-3">
                      11. Número de WhatsApp <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="Ej. 6641234567"
                      className="w-full bg-white border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* 12. ¿Cómo te enteraste de esta actividad? (Lista desplegable) */}
                  <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                    <label className="block text-sm sm:text-base font-bold text-slate-900 mb-3">
                      12. ¿Cómo te enteraste de esta actividad? <span className="text-rose-600">*</span>
                    </label>
                    <select
                      name="comoTeEnteraste"
                      required
                      value={formData.comoTeEnteraste}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                    >
                      <option value="">Selecciona una opción...</option>
                      {opcionesComoTeEnteraste.map((opcion) => (
                        <option key={opcion} value={opcion}>
                          {opcion}
                        </option>
                      ))}
                    </select>
                    {formData.comoTeEnteraste === "Otro" && (
                      <input
                        type="text"
                        name="comoTeEnterasteOtro"
                        value={formData.comoTeEnterasteOtro}
                        onChange={handleInputChange}
                        placeholder="Especifica cómo te enteraste..."
                        className="mt-2.5 w-full bg-white border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                      />
                    )}
                  </div>

                  {/* 13. ¿Cómo te gustaría mantenerte en contacto con nosotros? */}
                  <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                    <label className="block text-sm sm:text-base font-bold text-slate-900">
                      13. ¿Cómo te gustaría mantenerte en contacto con nosotros? <span className="text-rose-600">*</span>
                    </label>
                    <p className="text-xs text-slate-500 mt-1 mb-3">
                      (Puedes marcar más de una opción)
                    </p>
                    <div className="space-y-2.5">
                      {opcionesContacto.map((opcion) => (
                        <label key={opcion} className="flex items-center space-x-3 text-sm text-slate-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.contacto.includes(opcion)}
                            onChange={() => handleContactoToggle(opcion)}
                            className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                          />
                          <span>{opcion}</span>
                        </label>
                      ))}
                      {formData.contacto.includes("Otros") && (
                        <input
                          type="text"
                          name="contactoOtro"
                          value={formData.contactoOtro}
                          onChange={handleInputChange}
                          placeholder="Especifica otro medio de contacto..."
                          className="mt-2 w-full bg-white border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-2 text-sm outline-none transition-all"
                        />
                      )}
                    </div>
                  </div>

                  {/* 14. Comentarios, ideas o algo que quieras compartir con nosotros (Opcional) */}
                  <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                    <label className="block text-sm sm:text-base font-bold text-slate-900 mb-3">
                      14. Comentarios, ideas o algo que quieras compartir con nosotros: <span className="text-xs font-normal text-slate-500">(Opcional)</span>
                    </label>
                    <textarea
                      name="comentarios"
                      rows={3}
                      value={formData.comentarios}
                      onChange={handleInputChange}
                      placeholder="Escribe aquí tus comentarios o ideas..."
                      className="w-full bg-white border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Botón final para enviar registro */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={closeRegistroModal}
                      className="w-full sm:w-auto px-6 py-3 rounded-2xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-semibold transition-colors cursor-pointer"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-blue-600/25 transition-all text-sm cursor-pointer"
                    >
                      {isSubmitting ? "Enviando registro..." : "✅ Enviar mi registro"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL LIGHTBOX DE GALERÍA */}
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

          {/* Contenedor Grande y Ajustado */}
          <div className="bg-slate-900 border border-white/10 rounded-3xl max-w-6xl w-full max-h-[92vh] overflow-hidden grid md:grid-cols-2 shadow-2xl text-white">
            <div className="h-80 md:h-[650px] bg-black flex items-center justify-center p-4">
              <img 
                src={galeriaHistorias[lightboxIndex].img} 
                alt="Galería Relleno Sanitario" 
                className="w-full h-full object-cover rounded-2xl shadow-inner"
              />
            </div>
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <span className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-3">Historia de Vida • Relleno Sanitario</span>
              <h3 className="text-3xl sm:text-4xl font-black mb-6">{galeriaHistorias[lightboxIndex].titulo}</h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light mb-8">
                "{galeriaHistorias[lightboxIndex].historia}"
              </p>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Imagen {lightboxIndex + 1} de {galeriaHistorias.length}</span>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold text-sm px-5 py-3 rounded-xl transition-colors shadow-lg"
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