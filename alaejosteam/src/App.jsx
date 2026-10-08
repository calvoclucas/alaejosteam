import { useState } from "react";
import {
  MessageCircle,
  ChevronRight,
  ChevronDown,
  X,
  MapPin,
  Mail,
  FileText,
  Award,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";

const WHATSAPP_NUMBER = "5493415857565";
const EMAIL_ADDRESS = "alaejosteam@gmail.com";
const CV_URL = "/cv-entrenador.pdf";

const MODALIDADES = [
  {
    id: "boxeo-funcional",
    name: "BOXEO & ACONDICIONAMIENTO",
    subtitle: "Técnica, pegada y resistencia cardiovascular",
    desc: "Aprende los fundamentos del boxeo de pie, trabajo al saco, manoplas y acondicionamiento cardiovascular de alta exigencia.",
    badge: "Destacado",
    msg: "¡Hola Brian! Me interesa recibir info sobre los entrenamientos de Boxeo y Preparación Física.",
  },
  {
    id: "personalizado",
    name: "ENTRENAMIENTO 1 A 1",
    subtitle: "Sesiones individuales de precisión",
    desc: "Planificación técnica exclusiva adaptada a tus metas deportivas, composición corporal y ritmo de vida.",
    badge: "Cupos limitados",
    msg: "¡Hola Brian! Quisiera consultar disponibilidad horaria para entrenamientos 1 a 1.",
  },
  {
    id: "grupal",
    name: "TEAM TRAINING (GRUPOS)",
    subtitle: "Motivación y constancia colectiva",
    desc: "Entrenamientos en parejas o grupos pequeños. Alta intensidad, corrección continua y espíritu de equipo.",
    msg: "¡Hola Brian! Quiero consultar los horarios y tarifas de los entrenamientos en grupo.",
  },
  {
    id: "online",
    name: "ASESORÍA & SEGUIMIENTO",
    subtitle: "Planificación a distancia",
    desc: "Rutinas personalizadas mes a mes, feedback de técnica en video y ajustes continuos en tus hábitos.",
    msg: "¡Hola Brian! Me gustaría iniciar con la planificación y asesoría a distancia.",
  },
];

const FAQS = [
  {
    q: "¿Necesito saber boxear o tener experiencia previa?",
    a: "No hace falta experiencia previa. Enseñamos desde la postura base, guardia, desplazamientos y golpes fundamentales paso a paso de forma segura.",
  },
  {
    q: "¿Qué elementos necesito para empezar?",
    a: "Para la primera clase solo necesitas ropa deportiva cómoda, zapatillas y una botella de agua. Luego te asesoramos en la compra de tus vendas y guantes.",
  },
  {
    q: "¿Dónde se dictan las clases y entrenamientos?",
    a: "Coordinamos sesiones en gimnasio equipado, al aire libre en puntos estratégicos o a domicilio según disponibilidad de la zona.",
  },
  {
    q: "¿Cómo es la modalidad de pago y reserva de turnos?",
    a: "Fijamos tus días y horarios fijos semanales para mantener regularidad. La cuota se abona del 1 al 10 de cada mes mediante transferencia bancaria o efectivo.",
  },
];

function createWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function WhatsAppIcon({ className = "w-5 h-5 fill-current" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function BoxingGloveIcon({ className = "w-5 h-5 stroke-current" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 11V5a3 3 0 0 0-6 0v6" />
      <path d="M7 11a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H9a2 2 0 0 0-2 2z" />
      <path d="M7 15v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4" />
      <path d="M10 18h4" />
    </svg>
  );
}

export default function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [copied, setCopied] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const closeModal = () => setActiveModal(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-dvh w-full flex justify-center bg-black text-stone-100 font-sans antialiased">
      {/* Video de Fondo con iluminación limpia */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/80" />
      </div>

      {/* Contenedor Mobile Principal */}
      <main className="relative z-10 w-full max-w-105 min-h-dvh flex flex-col justify-between px-5 py-10 sm:py-12">
        {/* Cabecera / Identidad */}
        <header className="flex flex-col items-center text-center">
          {/* Logo en círculo blanco para destacar el isotipo */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-white/20 backdrop-blur-md shadow-2xl mb-3 transition-transform hover:scale-105 duration-300">
            <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center shadow-inner">
              {!logoError ? (
                <img
                  src="/logo.png"
                  alt="Alaejos Team"
                  className="w-full h-full object-contain p-1.5"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <BoxingGloveIcon className="w-12 h-12 text-black" />
              )}
            </div>
          </div>

          <h1 className="font-boxing text-5xl sm:text-6xl font-bold tracking-wider text-white uppercase leading-none drop-shadow-lg">
            ALAEJOS TEAM
          </h1>

          <p className="text-xs sm:text-sm text-stone-300 font-semibold tracking-[0.3em] uppercase mt-1">
            DISFRUTA EL PROCESO
          </p>

          <p className="text-xs sm:text-sm text-stone-300/90 mt-3 max-w-80 leading-relaxed font-light">
            Entrenador:{" "}
            <strong className="text-white font-medium">Brian Alaejos</strong>.
            Boxeo, preparación física y potencia. Desarrollá técnica, fuerza y
            disciplina real en cada asalto.
          </p>

          <div className="flex items-center gap-1.5 text-xs text-stone-400 font-medium mt-2.5">
            <MapPin className="w-3.5 h-3.5 text-white" />
            <span className="tracking-wide">Rosario · Funes</span>
          </div>
        </header>

        {/* 3 Botones Principales */}
        <section className="w-full flex flex-col gap-3.5 my-8">
          {/* Botón 1: Trayectoria */}
          <button
            type="button"
            onClick={() => setActiveModal("cv")}
            className="w-full p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-150 flex items-center justify-between text-left cursor-pointer group active:scale-[0.99]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 text-stone-200 flex items-center justify-center group-hover:text-white group-hover:scale-105 transition-all">
                <FileText className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <h2 className="font-boxing text-2xl tracking-wider text-white uppercase leading-tight">
                  SOBRE MÍ & MI CV
                </h2>
                <p className="text-xs text-stone-400">
                  Conocé a Brian Alaejos y su metodología
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-stone-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </button>

          {/* Botón 2: Modalidades */}
          <button
            type="button"
            onClick={() => setActiveModal("modalidades")}
            className="w-full p-4 rounded-2xl bg-white/15 hover:bg-white/20 border border-white/30 hover:border-white/60 backdrop-blur-md transition-all duration-150 flex items-center justify-between text-left cursor-pointer group active:scale-[0.99]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center group-hover:scale-105 transition-all">
                <BoxingGloveIcon className="w-5 h-5 stroke-black" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-boxing text-2xl tracking-wider text-white uppercase leading-tight">
                    MODALIDADES
                  </h2>
                  <span className="text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-full bg-white text-black uppercase">
                    CUPOS
                  </span>
                </div>
                <p className="text-xs text-stone-300">
                  Boxeo, 1 a 1, grupos reducidos y online
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-stone-300 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </button>

          {/* Botón 3: Contacto */}
          <button
            type="button"
            onClick={() => setActiveModal("contacto")}
            className="w-full p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-150 flex items-center justify-between text-left cursor-pointer group active:scale-[0.99]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 text-stone-200 flex items-center justify-center group-hover:text-white group-hover:scale-105 transition-all">
                <MessageCircle className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <h2 className="font-boxing text-2xl tracking-wider text-white uppercase leading-tight">
                  CONTACTO & FAQ
                </h2>
                <p className="text-xs text-stone-400">
                  WhatsApp directo, zonas y dudas frecuentes
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-stone-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </button>
        </section>

        {/* Footer */}
        <footer className="text-center pt-2">
          <p className="text-[11px] tracking-[0.25em] text-stone-400 uppercase font-medium">
            ALAEJOS TEAM · DISFRUTA EL PROCESO
          </p>
        </footer>
      </main>

      {/* Modales */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={closeModal}
        >
          <div
            className="bg-[#121212] border border-white/20 w-full max-w-sm sm:max-w-110 rounded-3xl p-5 sm:p-6 relative shadow-2xl max-h-[85dvh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-10 h-1 bg-white/30 rounded-full mx-auto mb-3 shrink-0" />

            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 text-stone-400 hover:text-white p-1.5 rounded-full bg-white/5 transition z-10 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* MODAL 1: SOBRE MÍ & CV */}
            {activeModal === "cv" && (
              <>
                <div className="shrink-0 pr-8 mb-3">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400">
                    Trayectoria
                  </p>
                  <h3 className="font-boxing text-3xl font-bold text-white uppercase tracking-wider mt-0.5 leading-none">
                    BRIAN ALAEJOS & FORMACIÓN
                  </h3>
                </div>

                <div className="flex-1 overflow-y-auto min-h-0 pr-1 space-y-3.5 text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                  <p>
                    ¡Hola! Soy{" "}
                    <strong className="text-white font-semibold">
                      Brian Alaejos
                    </strong>
                    . Al frente de{" "}
                    <strong className="text-white font-semibold">
                      Alaejos Team
                    </strong>{" "}
                    entiendo que el boxeo y el entrenamiento van más allá de lo
                    físico: construyen templanza, disciplina y superación diaria
                    bajo un principio claro:{" "}
                    <em className="text-white not-italic font-medium">
                      "Disfruta el proceso"
                    </em>
                    .
                  </p>

                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-white" />
                      Especialidades & Experiencia
                    </h4>
                    <ul className="space-y-1.5 text-stone-300 text-xs">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                        <span>Entrenador de Boxeo & Deportes de Contacto</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                        <span>Preparación Física, Potencia y Movilidad</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                        <span>
                          Acondicionamiento Cardiovascular y Pérdida de Grasa
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-stone-400 text-xs">
                    Adaptamos cada rutina a las posibilidades de cada alumno,
                    con metas claras, técnica pulida y corrección constante.
                  </p>
                </div>

                <div className="shrink-0 pt-3 mt-2 border-t border-white/10 flex gap-2">
                  <a
                    href={CV_URL}
                    download
                    className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 active:scale-[0.98] text-white font-semibold py-3 px-3 rounded-xl text-xs tracking-wide transition border border-white/10 cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-white" />
                    <span>Descargar CV</span>
                  </a>
                  <a
                    href={createWhatsAppLink(
                      "¡Hola Brian! Estuve viendo tu perfil y CV, me gustaría consultar para empezar a entrenar.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-white hover:bg-stone-200 text-black font-bold py-3 px-3 rounded-xl text-xs tracking-wide transition active:scale-[0.98] cursor-pointer shadow-lg"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-black" />
                    <span>Contactar</span>
                  </a>
                </div>
              </>
            )}

            {/* MODAL 2: MODALIDADES */}
            {activeModal === "modalidades" && (
              <>
                <div className="shrink-0 pr-8 mb-2">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400">
                    Planes
                  </p>
                  <h3 className="font-boxing text-3xl font-bold text-white uppercase tracking-wider mt-0.5 leading-none">
                    MODALIDADES DE ENTRENAMIENTO
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    Tocá en "Quiero info" para consultar disponibilidad directa:
                  </p>
                </div>

                <div className="flex-1 overflow-y-auto min-h-0 pr-1 space-y-2.5 my-2">
                  {MODALIDADES.map((m) => (
                    <div
                      key={m.id}
                      className="p-3.5 bg-white/5 rounded-2xl border border-white/10 flex flex-col gap-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-boxing text-xl font-bold text-white tracking-wide leading-tight">
                              {m.name}
                            </h4>
                            {m.badge && (
                              <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white text-black">
                                {m.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-stone-400 font-medium">
                            {m.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs text-stone-300 font-light leading-relaxed">
                        {m.desc}
                      </p>

                      <div className="pt-1 flex justify-end">
                        <a
                          href={createWhatsAppLink(m.msg)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white hover:bg-stone-200 text-black font-bold text-xs uppercase tracking-wider py-2 px-4 rounded-xl transition-all active:scale-95 cursor-pointer shadow-md font-sans"
                        >
                          <WhatsAppIcon className="w-3.5 h-3.5 fill-black" />
                          <span>Quiero info</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* MODAL 3: CONTACTO, ZONAS & FAQ */}
            {activeModal === "contacto" && (
              <>
                <div className="shrink-0 pr-8 mb-2">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400">
                    Atención
                  </p>
                  <h3 className="font-boxing text-3xl font-bold text-white uppercase tracking-wider mt-0.5 leading-none">
                    CONTACTO, ZONAS & FAQ
                  </h3>
                </div>

                <div className="flex-1 overflow-y-auto min-h-0 pr-1 space-y-3.5 my-1 text-xs sm:text-sm">
                  <div className="space-y-2">
                    <a
                      href={createWhatsAppLink(
                        "¡Hola Brian! Me comunico desde tu enlace para hacer una consulta.",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-white text-black font-bold transition hover:bg-stone-200 cursor-pointer shadow-md"
                    >
                      <div className="flex items-center gap-2.5">
                        <WhatsAppIcon className="w-5 h-5 fill-black" />
                        <span>Escribir por WhatsApp</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-black" />
                    </a>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-stone-200">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Mail className="w-4 h-4 text-white shrink-0" />
                        <span className="font-mono text-xs truncate">
                          {EMAIL_ADDRESS}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={copyEmail}
                        className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition text-stone-300 hover:text-white cursor-pointer shrink-0"
                        title="Copiar email"
                      >
                        {copied ? (
                          <Check className="w-3.5 h-3.5 text-white" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1.5">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-white" />
                      Zonas de Entrenamiento Presencial
                    </h4>
                    <p className="text-stone-300 text-xs leading-relaxed font-light">
                      • <strong>Rosario:</strong> Centro, Pichincha, Costanera y
                      parques coordinados.
                      <br />• <strong>Funes:</strong> Domicilios particulares y
                      barrios cerrados.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-xs font-bold text-stone-300 uppercase tracking-wider">
                      Preguntas Frecuentes
                    </h4>
                    {FAQS.map((faq, idx) => (
                      <div
                        key={idx}
                        className="border border-white/10 bg-white/3 rounded-xl overflow-hidden transition"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenFaq(openFaq === idx ? null : idx)
                          }
                          className="w-full p-2.5 text-left font-medium text-xs text-white flex justify-between items-center gap-2 cursor-pointer hover:bg-white/5"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 text-stone-400 transition-transform ${
                              openFaq === idx ? "rotate-180 text-white" : ""
                            }`}
                          />
                        </button>
                        {openFaq === idx && (
                          <div className="px-2.5 pb-2.5 pt-0 text-[11px] text-stone-300 leading-relaxed border-t border-white/5 font-light">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
