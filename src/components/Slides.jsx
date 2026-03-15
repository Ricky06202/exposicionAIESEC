import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, MousePointer2, Layout, Server, Globe, Lock, ShieldCheck, Zap, AlertCircle, CheckCircle2, Info, ChevronRight, Database, Layers, Search, Bell, Settings, User, Utensils, Target, Rocket, Star } from 'lucide-react';

// --- Shared Components ---
const MockBrowser = ({ children, title }) => (
  <div className="w-full h-full bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden flex flex-col shadow-2xl">
    <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-3 gap-1.5">
      <div className="flex gap-1">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
      </div>
      <div className="flex-1 px-4">
        <div className="bg-black/20 rounded-md h-4 flex items-center px-2 text-[10px] text-white/30 font-mono">
          {title || 'https://tu-proyecto.com'}
        </div>
      </div>
    </div>
    <div className="flex-1 overflow-auto bg-[#0a0a0a]">
      {children}
    </div>
  </div>
);

// --- Slides ---

export const IntroSlide = () => (
  <div className="flex flex-col items-center justify-center text-center px-6 h-full">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 font-medium text-sm"
    >
      Masterclass de Desarrollo Web
    </motion.div>
    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
      De Cero a <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Despliegue Profesional</span>
    </h1>
    <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed">
      AIESEC Presentación: Aprende la anatomía, el diseño y las estrategias para lanzar aplicaciones web reales.
    </p>
    <div className="mt-12 flex flex-wrap justify-center gap-4">
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm">
        <Layout size={16} /> Estructura
      </div>
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm">
        <Eye size={16} /> UI/UX
      </div>
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm">
        <Globe size={16} /> Tipos
      </div>
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm">
        <Server size={16} /> Despliegue
      </div>
    </div>
  </div>
);

export const SectionsSlide = () => {
  const [activeTab, setActiveTab] = useState(0);

  const sections = [
    { id: 'header', title: 'Header & Nav', desc: 'Identidad y el mapa del sitio.' },
    { id: 'hero', title: 'Hero Section', desc: 'Tu propuesta de valor en 3 segundos.' },
    { id: 'features', title: 'Feature Grid', desc: '¿Qué problemas resuelves?' },
    { id: 'cta', title: 'Call to Action (CTA)', desc: 'Guía al usuario hacia el objetivo.' },
    { id: 'sidebar', title: 'Sidebar / Filter', desc: 'Navegación secundaria y control.' },
    { id: 'social', title: 'Social Proof', desc: 'Testimonios y logos (Confianza).' },
    { id: 'footer', title: 'Footer', desc: 'Cierre, legal y contacto.' }
  ];

  return (
    <div className="max-w-6xl w-full px-6 pt-32 pb-8 flex flex-col lg:flex-row gap-10 items-start overflow-y-auto max-h-[85vh]">
      <div className="flex-1 text-left lg:sticky lg:top-0">
        <h2 className="text-4xl font-bold text-white mb-6">Anatomía Premium de una Web</h2>
        <p className="text-white/60 mb-8 leading-relaxed">
          Una web profesional no es solo una página; es un conjunto de bloques diseñados para convertir y guiar al usuario.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
          {sections.map((item, i) => (
            <div 
              key={i} 
              onClick={() => setActiveTab(i)}
              onMouseEnter={() => setActiveTab(i)}
              className={`group p-3 rounded-xl border transition-all cursor-pointer ${
                activeTab === i ? 'bg-primary-500/10 border-primary-500/30' : 'bg-white/5 border-white/5 hover:border-white/10'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`font-bold text-xs transition-colors ${activeTab === i ? 'text-primary-400' : 'text-primary-500'}`}>0{i+1}</span>
                <h4 className={`font-semibold text-sm uppercase tracking-wider transition-colors ${activeTab === i ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>{item.title}</h4>
              </div>
              <p className="text-white/40 text-[11px] mt-1 ml-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex-1 w-full bg-black/40 rounded-3xl border border-white/10 p-4 flex flex-col gap-3 shadow-2xl relative overflow-hidden group">
        {/* Visual representation of a full modern site */}
        <div className={`h-10 rounded-lg flex items-center justify-between px-4 border transition-all ${activeTab === 0 ? 'bg-primary-500/20 border-primary-500/50 shadow-[0_0_20px_rgba(14,165,233,0.2)]' : 'bg-white/10 border-white/5'}`}>
          <div className="w-4 h-4 rounded-full bg-primary-500" />
          <div className="flex gap-2">
              <div className="w-8 h-1 bg-white/20 rounded" />
              <div className="w-8 h-1 bg-white/20 rounded" />
              <div className="w-8 h-1 bg-white/20 rounded" />
          </div>
        </div>
        
        <div className="flex gap-3 h-96">
          <div className={`w-16 h-full rounded-lg border p-2 flex flex-col gap-2 transition-all ${activeTab === 4 ? 'bg-primary-500/20 border-primary-500/50 shadow-[0_0_20px_rgba(14,165,233,0.2)]' : 'bg-white/5 border-white/5'}`}>
              <div className="w-full h-4 bg-white/10 rounded" />
              <div className="w-full h-8 bg-white/5 rounded" />
              <div className="w-full h-8 bg-white/5 rounded" />
          </div>
          <div className="flex-1 flex flex-col gap-3 h-full">
              <div className={`h-40 rounded-xl border flex items-center justify-center transition-all ${activeTab === 1 ? 'bg-primary-500/30 border-primary-500/50 shadow-[0_0_30px_rgba(14,165,233,0.3)]' : 'bg-gradient-to-br from-primary-500/20 to-blue-500/5 border-primary-500/20'}`}>
                  <div className="flex flex-col items-center gap-2">
                      <div className="w-24 h-2 bg-white/40 rounded" />
                      <div className="w-16 h-2 bg-white/20 rounded" />
                      <div className={`w-12 h-6 rounded-md mt-2 transition-all ${activeTab === 3 ? 'bg-white scale-110 shadow-lg' : 'bg-primary-500'}`} />
                  </div>
              </div>
              <div className="grid grid-cols-2 gap-2 flex-1">
                  <div className={`rounded-lg border p-3 transition-all ${activeTab === 2 ? 'bg-primary-500/20 border-primary-500/50 shadow-[0_0_20px_rgba(14,165,233,0.2)]' : 'bg-white/5 border-white/5'}`}>
                      <div className="w-8 h-8 rounded-full bg-primary-500/20 mb-2" />
                      <div className="w-full h-2 bg-white/20 rounded" />
                  </div>
                  <div className={`rounded-lg border p-3 transition-all ${activeTab === 2 ? 'bg-primary-500/20 border-primary-500/50 shadow-[0_0_20px_rgba(14,165,233,0.2)]' : 'bg-white/5 border-white/5'}`}>
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 mb-2" />
                      <div className="w-full h-2 bg-white/20 rounded" />
                  </div>
              </div>
              <div className={`h-12 rounded-lg border flex items-center px-4 overflow-hidden transition-all ${activeTab === 5 ? 'bg-primary-500/20 border-primary-500/50 shadow-[0_0_20px_rgba(14,165,233,0.2)]' : 'bg-white/5 border-white/5'}`}>
                  <div className="w-full flex gap-4 animate-scroll opacity-20">
                      <div className="w-10 h-2 bg-white rounded shrink-0" />
                      <div className="w-10 h-2 bg-white rounded shrink-0" />
                      <div className="w-10 h-2 bg-white rounded shrink-0" />
                      <div className="w-10 h-2 bg-white rounded shrink-0" />
                  </div>
              </div>
          </div>
        </div>
        <div className={`h-14 rounded-lg border transition-all ${activeTab === 6 ? 'bg-primary-500/20 border-primary-500/50 shadow-[0_0_20px_rgba(14,165,233,0.2)]' : 'bg-white/10 border-white/5'}`} />
      </div>
    </div>
  );
};

export const UXUISlide = () => {
  const [activeExample, setActiveExample] = useState('hierarchy'); // 'hierarchy', 'colors', 'contrast', 'comp'
  const [toggle, setToggle] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(0);

  const simulateUX = () => {
    setIsProcessing(true);
    setStep(1);
    setTimeout(() => {
      setStep(2);
      setTimeout(() => {
        setIsProcessing(false);
        setStep(3);
      }, 1500);
    }, 1000);
  };

  const resetUX = () => {
    setStep(0);
    setIsProcessing(false);
  };

  return (
    <div className="max-w-6xl w-full px-6 flex flex-col items-center overflow-y-auto max-h-[85vh] py-8">
      <h2 className="text-4xl font-bold text-white mb-6">UI vs UX: El Soul del Diseño</h2>
      
      <div className="flex gap-2 bg-white/5 p-1 rounded-2xl mb-8 border border-white/10">
        {[
          { id: 'hierarchy', label: 'Jerarquía' },
          { id: 'colors', label: 'Psicología' },
          { id: 'contrast', label: 'Contraste' },
          { id: 'comp', label: 'Comparativa' },
        ].map((m) => (
          <button
            key={m.id}
            onClick={() => { setActiveExample(m.id); setToggle(false); resetUX(); }}
            className={`px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
              activeExample === m.id ? 'bg-primary-500 text-white shadow-lg' : 'text-white/40 hover:text-white/60'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="w-full grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-left space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExample}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-4"
            >
              {activeExample === 'hierarchy' && (
                <>
                  <h3 className="text-3xl font-bold text-white">Jerarquía Visual</h3>
                  <p className="text-white/60 leading-relaxed">
                    No todos los elementos tienen el mismo peso. El **tamaño** y el **color** le dicen al usuario qué mirar primero.
                  </p>
                </>
              )}
              {activeExample === 'colors' && (
                <>
                  <h3 className="text-3xl font-bold text-white">Psicología del Color</h3>
                  <p className="text-white/60 leading-relaxed">
                    Los colores evocan emociones y comunican estados comerciales o técnicos de forma instantánea.
                  </p>
                </>
              )}
              {activeExample === 'contrast' && (
                <>
                  <h3 className="text-3xl font-bold text-white">Contraste y Accesibilidad</h3>
                  <p className="text-white/60 leading-relaxed">
                    Un buen diseño debe ser legible. El contraste bajo es una barrera invisible para el usuario.
                  </p>
                </>
              )}
              {activeExample === 'comp' && (
                <>
                  <h3 className="text-3xl font-bold text-white">UI (Aesthetics) vs UX (Logic)</h3>
                  <p className="text-white/60 leading-relaxed">
                    **UI** es la "piel", cómo se ve. **UX** es el "cerebro", cómo funciona y qué siente el usuario al navegar.
                  </p>
                  <p className="text-sm text-white/40 italic">
                    {toggle ? "Modo UX: Feedback constante y estados claros." : "Modo UI: Solo estética sin respuesta funcional."}
                  </p>
                </>
              )}
            </motion.div>
          </AnimatePresence>
          
          <button 
            onClick={() => { setToggle(!toggle); resetUX(); }}
            className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2 overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 opacity-20" />
            <Zap size={18} className="text-primary-500" />
            {activeExample === 'comp' 
              ? (toggle ? "Ver Enfoque UI (Visual)" : "Cambiar a Enfoque UX (Proceso)")
              : (toggle ? "Ver Diseño Básico" : `Ver con ${activeExample === 'hierarchy' ? 'Jerarquía' : activeExample === 'colors' ? 'Psicología' : 'Accesibilidad'}`)
            }
          </button>
        </div>

        <div className="relative h-[400px] w-full flex items-center justify-center">
          <AnimatePresence mode="wait">
             <motion.div
               key={`${activeExample}-${toggle}-${step}`}
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 1.1 }}
               className="w-full max-w-sm"
             >
                {activeExample === 'hierarchy' && (
                   <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6 text-center shadow-2xl">
                      <div className={`h-4 w-20 mx-auto rounded ${toggle ? 'bg-primary-500' : 'bg-white/20'}`} />
                      <h4 className={`${toggle ? 'text-4xl font-black text-white' : 'text-lg font-normal text-white/60'}`}>¡Compra Ahora!</h4>
                      <p className="text-white/40 text-xs">Ahorra un 50% solo hoy en todos los productos.</p>
                      <button className={`w-full py-3 rounded-xl font-bold transition-all ${toggle ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/40' : 'bg-white/10 text-white/40 border border-white/5'}`}>
                        {toggle ? 'LO QUIERO' : 'clic aquí'}
                      </button>
                   </div>
                )}
                {activeExample === 'colors' && (
                   <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6 shadow-2xl">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-white/10" />
                        <div className={`w-24 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${toggle ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-white/20 text-white/40'}`}>
                           {toggle ? 'CONECTADO' : 'ESTADO'}
                        </div>
                      </div>
                      <div className="space-y-4">
                        {[1, 2].map(i => (
                          <div key={i} className="flex gap-3">
                            <div className={`w-3 h-3 rounded-full mt-1 ${toggle ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]' : 'bg-white/40'}`} />
                            <div className="flex-1 space-y-2">
                               <div className="h-2 w-full bg-white/10 rounded" />
                               <div className="h-2 w-1/2 bg-white/5 rounded" />
                            </div>
                          </div>
                        ))}
                      </div>
                   </div>
                )}
                {activeExample === 'contrast' && (
                   <div className="p-8 rounded-3xl border border-white/5 space-y-4 shadow-2xl flex flex-col justify-center text-center transition-all h-64" style={{ 
                     backgroundColor: toggle ? '#111111' : '#222222',
                     borderColor: toggle ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)'
                   }}>
                      <h4 className={`text-center font-bold ${toggle ? 'text-white text-2xl' : 'text-white/10 text-lg'}`}>Lectura Crítica</h4>
                      <p className={`text-center transition-all ${toggle ? 'text-white/60' : 'text-white/5 select-none'}`}>
                        El contraste es la diferencia entre el texto y su fondo. Sin él, la información se pierde.
                      </p>
                      <div className={`h-1 w-full mx-auto rounded transition-all ${toggle ? 'bg-primary-500' : 'bg-white/0'}`} />
                   </div>
                )}
                {activeExample === 'comp' && (
                   <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 space-y-8 shadow-2xl relative overflow-hidden h-[300px] flex flex-col justify-center">
                      <div className="absolute top-0 left-0 w-full h-1 bg-white/5" />
                      
                      {step === 0 && (
                        <div className="space-y-6 text-center">
                           <h4 className="text-2xl font-bold text-white">Finalizar Pedido</h4>
                           <button 
                             onClick={toggle ? simulateUX : () => {}}
                             className={`w-full py-4 rounded-2xl font-black text-sm transition-all transform active:scale-95 ${
                               toggle 
                               ? 'bg-primary-500 text-white shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:brightness-110' 
                               : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl'
                             }`}
                           >
                             CONFIRMAR COMPRA
                           </button>
                           {!toggle && <p className="text-[10px] text-white/20 italic">"Pulsas y no sabes si funcionó..."</p>}
                        </div>
                      )}

                      {step === 1 && toggle && (
                        <div className="space-y-6 text-center animate-pulse">
                           <div className="w-16 h-16 border-4 border-primary-500/20 border-t-primary-500 rounded-full animate-spin mx-auto" />
                           <h4 className="text-xl font-bold text-white uppercase tracking-widest">Validando...</h4>
                           <p className="text-white/40 text-xs">Conectando con el banco</p>
                        </div>
                      )}

                      {step === 2 && toggle && (
                        <div className="space-y-6 text-center">
                           <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                              <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} className="h-full bg-emerald-500" />
                           </div>
                           <h4 className="text-xl font-bold text-emerald-400">PAGO SEGURO</h4>
                           <p className="text-white/40 text-xs">Generando factura</p>
                        </div>
                      )}

                      {step === 3 && toggle && (
                        <div className="space-y-6 text-center">
                           <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500/40">
                              <CheckCircle2 size={40} />
                           </motion.div>
                           <h4 className="text-2xl font-black text-white">¡GRACIAS!</h4>
                           <button onClick={resetUX} className="text-primary-400 text-[10px] uppercase font-bold hover:underline">Repetir prueba</button>
                        </div>
                      )}
                   </div>
                )}
             </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export const TypesSlide = () => {
    const [active, setActive] = useState(0);
    const [isDynamicLoading, setIsDynamicLoading] = useState(false);
    const [spaTab, setSpaTab] = useState('feed');
    const [dynamicData, setDynamicData] = useState([
        {name: 'Zapatos Pro', price: '$99'},
        {name: 'Reloj Lux', price: '$299'}
    ]);

    const simulateDynamicLoad = () => {
        setIsDynamicLoading(true);
        setTimeout(() => {
            // Simulate changing data like a real DB update
            setDynamicData(prev => [...prev.reverse()]);
            setIsDynamicLoading(false);
        }, 1500);
    };

    const types = [
        { 
          id: 'static',
          title: 'Web Estática', 
          tag: 'EL ORIGEN',
          desc: 'Información pura y dura. Entrega instantánea de archivos HTML/CSS/JS descargados tal cual están en el servidor.',
          examples: 'Landing Pages, Portafolios, Blogs Sencillos.',
          pros: ['Velocidad Imbatible', 'Seguridad Máxima', 'Coste Bajo'],
          preview: (
            <div className="w-full h-full p-8 flex flex-col items-center justify-center text-center space-y-6">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-12 rounded-3xl bg-white/5 border border-white/10 max-w-2xl w-full">
                <h4 className="text-4xl font-bold text-white mb-4">Portafolio de Juan Pérez</h4>
                <p className="text-white/40 mb-8 leading-relaxed">Soy un desarrollador apasionado por crear interfaces rápidas y seguras. Mi portafolio es una web estática: rápida como el rayo.</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-primary-500 font-bold text-xl">10+</div>
                    <div className="text-[10px] text-white/40 uppercase font-black">Proyectos</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-primary-500 font-bold text-xl">100%</div>
                    <div className="text-[10px] text-white/40 uppercase font-black">LightHouse</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-primary-500 font-bold text-xl">50ms</div>
                    <div className="text-[10px] text-white/40 uppercase font-black">Carga</div>
                  </div>
                </div>
              </motion.div>
              <div className="flex items-center gap-2 text-white/20 text-xs">
                <Info size={14} /> El navegador solo descarga y muestra. Sin lógica en servidor.
              </div>
            </div>
          )
        },
        { 
          id: 'dynamic',
          title: 'Web Dinámica', 
          tag: 'EL SERVIDOR HABLA',
          desc: 'El contenido se fabrica "al vuelo". El servidor mira la base de datos y genera la página personalizada para cada petición.',
          examples: 'E-commerce (Amazon), Blogs (WordPress), CMS.',
          pros: ['Contenido Masivo', 'Personalización', 'Interactividad'],
          preview: (
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-6 p-8 relative">
              {/* Browser Progress Bar Simulation */}
              {isDynamicLoading && (
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: '100%' }} 
                  transition={{ duration: 1.5 }}
                  className="absolute top-0 left-0 h-1 bg-primary-500 z-50 shadow-[0_0_10px_#0ea5e9]"
                />
              )}

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-bold text-white">Mi Tienda Online</h4>
                  <button 
                    onClick={simulateDynamicLoad}
                    disabled={isDynamicLoading}
                    className="p-2 rounded-xl bg-primary-500/20 text-primary-400 hover:bg-primary-500 hover:text-white transition-all disabled:opacity-30"
                  >
                    <Zap size={16} className={isDynamicLoading ? 'animate-pulse' : ''}/>
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {isDynamicLoading ? (
                    [1, 2].map(i => (
                      <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-4 animate-pulse">
                        <div className="aspect-square bg-white/5 rounded-lg" />
                        <div className="h-4 bg-white/10 rounded w-3/4" />
                        <div className="h-4 bg-white/10 rounded w-1/4" />
                      </div>
                    ))
                  ) : (
                    dynamicData.map((p, i) => (
                      <motion.div key={i} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                        <div className="aspect-square bg-white/10 rounded-lg flex items-center justify-center text-white/10 font-black text-4xl">OBJ</div>
                        <div className="text-sm font-bold text-white uppercase tracking-tighter">{p.name}</div>
                        <div className="text-primary-500 font-bold">{p.price}</div>
                      </motion.div>
                    ))
                  )}
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center bg-white/5 rounded-3xl border border-white/10 p-6 text-center">
                <Database size={48} className={`text-primary-500 mb-4 transition-all ${isDynamicLoading ? 'scale-110 opacity-100 rotate-12' : 'opacity-30'}`} />
                <h5 className="text-lg font-bold text-white mb-2 tracking-widest uppercase">Proceso del Servidor</h5>
                <div className="w-full space-y-3 mt-4">
                   <div className={`p-2 rounded text-[9px] font-mono transition-colors ${isDynamicLoading ? 'bg-primary-500/20 text-primary-300' : 'bg-white/5 text-white/20'}`}>
                      1. Recibir Petición HTTP
                   </div>
                   <div className={`p-2 rounded text-[9px] font-mono transition-colors ${isDynamicLoading ? 'bg-primary-500/40 text-primary-200 animate-pulse' : 'bg-white/5 text-white/20'}`}>
                      2. Consultar Base de Datos
                   </div>
                   <div className={`p-2 rounded text-[9px] font-mono transition-colors ${isDynamicLoading ? 'bg-primary-500/20 text-primary-300' : 'bg-white/5 text-white/20'}`}>
                      3. Generar y Enviar HTML
                   </div>
                </div>
              </div>
            </div>
          )
        },
        { 
          id: 'spa',
          title: 'SPA (Modern App)', 
          tag: 'FLUIDEZ TOTAL',
          desc: 'No hay recargas de página. Todo se gestiona en el navegador del usuario como si fuera una aplicación móvil instalada.',
          examples: 'Facebook, Gmail, Spotify, Dashboards.',
          pros: ['Instantáneo', 'UX Superior', 'Cache Inteligente'],
          preview: (
            <div className="w-full h-full flex flex-col p-6 space-y-4">
              <div className="flex gap-4 items-center p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center font-bold text-lg shadow-lg shadow-primary-500/30">F</div>
                <div className="flex-1 h-10 bg-white/5 rounded-full flex items-center px-4 text-white/30 text-sm">
                  {spaTab === 'feed' ? '¿Qué estás pensando, Ricky?' : spaTab === 'messages' ? 'Buscar en mensajes...' : 'Configuración de cuenta'}
                </div>
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary-400"><Bell size={18}/></div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary-400"><Settings size={18}/></div>
                </div>
              </div>
              
              <div className="flex-1 flex gap-4 h-full">
                {/* Internal Navigation Sidebar */}
                <div className="w-48 bg-white/5 rounded-3xl border border-white/10 p-4 space-y-2">
                    {[
                      {id: 'feed', label: 'Inicio', icon: <Layout size={16}/>},
                      {id: 'messages', label: 'Mensajes', icon: <ChevronRight size={16}/>},
                      {id: 'profile', label: 'Perfil', icon: <User size={16}/>}
                    ].map(tab => (
                      <button 
                        key={tab.id}
                        onClick={() => setSpaTab(tab.id)}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl text-xs font-bold transition-all ${spaTab === tab.id ? 'bg-primary-500 text-white' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}
                      >
                        {tab.icon} {tab.label}
                      </button>
                    ))}
                    <div className="mt-8 pt-4 border-t border-white/5">
                       <p className="text-[10px] text-primary-500/60 font-black uppercase tracking-widest pl-2">Estado</p>
                       <div className="flex items-center gap-2 pl-2 mt-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[10px] text-white/40 font-bold">Sin Recarga</span>
                       </div>
                    </div>
                </div>

                {/* Main Content Area - Transitions instantly */}
                <div className="flex-1 p-6 rounded-3xl bg-white/5 border border-white/10 overflow-hidden relative">
                   <AnimatePresence mode="wait">
                      <motion.div
                        key={spaTab}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="h-full flex flex-col justify-center items-center text-center space-y-4"
                      >
                         {spaTab === 'feed' && (
                           <>
                             <div className="w-16 h-16 rounded-2xl bg-primary-500/20 flex items-center justify-center text-primary-500"><Zap size={32}/></div>
                             <h5 className="text-2xl font-bold text-white">Tu Feed Principal</h5>
                             <p className="text-white/40 text-sm max-w-sm">Aquí verías todas las publicaciones cargadas dinámicamente sin que la página parpadee.</p>
                           </>
                         )}
                         {spaTab === 'messages' && (
                           <>
                             <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-500"><Bell size={32}/></div>
                             <h5 className="text-2xl font-bold text-white">Centro de Mensajes</h5>
                             <p className="text-white/40 text-sm max-w-sm">Notificaciones instantáneas. La SPA mantiene una conexión persistente.</p>
                           </>
                         )}
                         {spaTab === 'profile' && (
                           <>
                             <div className="w-16 h-16 rounded-full bg-white/10 border-4 border-primary-500 flex items-center justify-center text-white text-3xl font-black">R</div>
                             <h5 className="text-2xl font-bold text-white">Perfil de Ricky</h5>
                             <p className="text-white/40 text-sm max-w-sm">Información cargada instantáneamente desde el caché del navegador.</p>
                           </>
                         )}
                      </motion.div>
                   </AnimatePresence>
                </div>
              </div>
            </div>
          )
        }
    ];

    return (
        <div className="max-w-6xl w-full px-6 flex flex-col items-center pt-32 pb-12 overflow-y-auto max-h-[90vh]">
            <h2 className="text-3xl font-bold text-white mb-2">Diferentes Caminos, Un Objetivo</h2>
            <p className="text-white/40 mb-8 text-center max-w-2xl text-xs tracking-wide">Toca cada tipo para ver el simulador. Fíjate en el <b>Header</b> y la <b>Barra de Carga</b>.</p>
            
            <div className="grid lg:grid-cols-3 gap-6 w-full mb-8">
                {types.map((type, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -5 }}
                        className={`p-5 rounded-[28px] border transition-all flex flex-col cursor-pointer ${
                            active === i ? 'bg-primary-500/10 border-primary-500/40 shadow-2xl shadow-primary-500/10' : 'bg-white/5 border-white/10 opacity-70 hover:opacity-100'
                        }`}
                        onClick={() => setActive(i)}
                    >
                        <div className="mb-3">
                            <span className="text-[8px] font-black tracking-[0.2em] text-primary-500 uppercase">{type.tag}</span>
                            <h3 className="text-xl font-bold text-white tracking-tight">{type.title}</h3>
                        </div>
                        
                        <p className="text-white/40 text-[11px] mb-2 leading-relaxed">{type.desc}</p>
                        <div className="mb-4">
                            <span className="text-primary-400 text-[9px] font-bold uppercase tracking-widest">Ejemplos:</span>
                            <p className="text-white/60 text-[10px] font-medium leading-tight">{type.examples}</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                           {type.pros.map((pro, j) => (
                             <span key={j} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-white/50 text-[8px] font-bold uppercase tracking-wider">{pro}</span>
                           ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* LIVE PREVIEW SECTION */}
            <div className="w-full flex-1 min-h-[600px] mb-12">
              <motion.div 
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full h-full"
              >
                <div className="text-center mb-4">
                  <span className="text-primary-500 font-black text-[10px] uppercase tracking-[0.3em]">Laboratorio Interactivo: {types[active].title}</span>
                </div>
                <MockBrowser title={`${types[active].id}.mock-app.net`}>
                  <div className="min-h-[500px] h-full">
                    {types[active].preview}
                  </div>
                </MockBrowser>
              </motion.div>
            </div>
        </div>
    );
};

export const FoodHeroSlide = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 'header', label: 'Header', desc: 'Logo + Nav simple' },
    { id: 'hero', label: 'Hero', desc: 'Imagen grande + título' },
    { id: 'features', label: 'Beneficios', desc: '3 columnas de icons' },
    { id: 'menu', label: 'Menú', desc: 'Grid de productos' },
    { id: 'cta', label: 'CTA Final', desc: 'Botón de acción' },
    { id: 'footer', label: 'Footer', desc: 'Contacto + redes' },
  ];

  return (
    <div className="max-w-6xl w-full px-6 pt-24 pb-8 flex flex-col lg:flex-row gap-8 items-start overflow-y-auto max-h-[90vh]">
      <div className="w-full lg:w-[45%] text-left lg:sticky lg:top-0">
        <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold mb-4">
          EJEMPLO REAL: FOOD HERO
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Landing Page Estática</h2>
        <p className="text-white/50 mb-4 text-sm">
          Este es el tipo de página que van a crear en Canva. <b>100% estática</b>.
        </p>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          {sections.map((item, i) => (
            <div 
              key={i}
              onClick={() => setActiveSection(i)}
              onMouseEnter={() => setActiveSection(i)}
              className={`p-2 rounded-lg border cursor-pointer transition-all ${
                activeSection === i ? 'bg-orange-500/20 border-orange-500/40' : 'bg-white/5 border-white/5 hover:border-white/20'
              }`}
            >
              <span className={`text-[10px] font-bold uppercase ${activeSection === i ? 'text-orange-400' : 'text-white/40'}`}>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/40">
          • El menú no cambia a cada rato<br/>
          • No necesita login de usuarios<br/>
          • Solo muestra información<br/>
          • <b>Perfecta para Canva</b>
        </div>
      </div>

      <div className="w-full lg:w-[55%]">
        <MockBrowser title="foodhero.com">
          <div className="h-[500px] overflow-y-auto bg-white">
            {/* Header */}
            <div className={`h-12 bg-white flex items-center justify-between px-3 border-b ${activeSection === 0 ? 'ring-2 ring-orange-500' : ''}`}>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">H</div>
                <span className="font-bold text-gray-800 text-xs">Food Hero</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-600 text-[10px]">Menú</span>
                <span className="text-gray-600 text-[10px]">Nosotros</span>
              </div>
            </div>

            {/* Hero */}
            <div className={`p-6 bg-gradient-to-br from-orange-50 to-orange-100 text-center ${activeSection === 1 ? 'ring-2 ring-orange-500 ring-offset-1' : ''}`}>
              <h1 className="text-xl font-black text-gray-800">Los Mejores Burgers</h1>
              <p className="text-gray-500 text-xs mb-3">Entrega en 30 minutos</p>
              <button className="px-4 py-1.5 bg-orange-500 text-white rounded-full text-xs font-bold">ORDENA YA</button>
            </div>

            {/* Features */}
            <div className={`p-4 grid grid-cols-3 gap-1 ${activeSection === 2 ? 'ring-2 ring-orange-500 ring-offset-1' : ''}`}>
              <div className="text-center p-1">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-1"><Zap size={10} className="text-orange-500"/></div>
                <span className="text-[9px] font-bold text-gray-700">Rápido</span>
              </div>
              <div className="text-center p-1">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-1"><Star size={10} className="text-orange-500"/></div>
                <span className="text-[9px] font-bold text-gray-700">Premium</span>
              </div>
              <div className="text-center p-1">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-1"><ShieldCheck size={10} className="text-orange-500"/></div>
                <span className="text-[9px] font-bold text-gray-700">Fresco</span>
              </div>
            </div>

            {/* Menu */}
            <div className={`p-3 ${activeSection === 3 ? 'ring-2 ring-orange-500 ring-offset-1' : ''}`}>
              <h3 className="text-sm font-bold text-gray-800 mb-2">Nuestro Menú</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-50 rounded p-1.5">
                  <div className="h-8 bg-gray-200 rounded mb-1"/>
                  <div className="h-1.5 bg-gray-200 rounded w-3/4"/>
                </div>
                <div className="bg-gray-50 rounded p-1.5">
                  <div className="h-8 bg-gray-200 rounded mb-1"/>
                  <div className="h-1.5 bg-gray-200 rounded w-3/4"/>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className={`p-4 text-center ${activeSection === 4 ? 'ring-2 ring-orange-500 ring-offset-1' : ''}`}>
              <button className="px-6 py-2 bg-orange-500 text-white rounded-full text-xs font-bold">PEDIR AHORA</button>
            </div>

            {/* Footer */}
            <div className={`h-10 bg-gray-800 flex items-center justify-center ${activeSection === 5 ? 'ring-2 ring-orange-500' : ''}`}>
              <span className="text-white/60 text-[9px]">© 2026 Food Hero</span>
            </div>
          </div>
        </MockBrowser>
      </div>
    </div>
  );
};

export const OGVSlide = () => {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <div className="max-w-6xl w-full px-6 pt-24 pb-8 flex flex-col lg:flex-row gap-8 items-start overflow-y-auto max-h-[90vh]">
      <div className="w-full lg:w-[45%] text-left lg:sticky lg:top-0">
        <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold mb-4">
          EJEMPLO REAL: OGV
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Landing Page Estática</h2>
        <p className="text-white/50 mb-4 text-sm">
          Estilo común para eventos, productos digitales o campañas.
        </p>

        <div className="space-y-2 mb-4 text-xs">
          <div className="p-2 rounded bg-white/5 border border-white/10">
            <span className="text-purple-400 font-bold">Estructura:</span> Hero oscuro + gradientes
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/10">
            <span className="text-purple-400 font-bold">Enfoque:</span> CTA + countdowns
          </div>
        </div>

        <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-white/60">
          • <b>Landing = 1 objetivo</b><br/>
          • <b>Hero en 3 segundos</b><br/>
          • <b>CTA claro</b><br/>
          • <b>Canva → Exportar → Listo</b>
        </div>
      </div>

      <div className="w-full lg:w-[55%]">
        <div className="flex gap-2 mb-3">
          <button 
            onClick={() => setShowMobile(false)}
            className={`px-3 py-1.5 rounded text-xs font-bold ${!showMobile ? 'bg-purple-500 text-white' : 'bg-white/10 text-white/40'}`}
          >
            Desktop
          </button>
          <button 
            onClick={() => setShowMobile(true)}
            className={`px-3 py-1.5 rounded text-xs font-bold ${showMobile ? 'bg-purple-500 text-white' : 'bg-white/10 text-white/40'}`}
          >
            Mobile
          </button>
        </div>

        <MockBrowser title="ogv-oportunidad.com">
          <div className={`h-[500px] overflow-y-auto bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 ${showMobile ? 'max-w-[200px] mx-auto' : ''}`}>
            {/* Header */}
            <div className="h-12 flex items-center justify-between px-4 border-b border-white/10">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded text-white text-xs flex items-center justify-center font-bold">OGV</div>
              <button className="px-2 py-1 bg-white/10 rounded text-white text-[9px]">Ver Más</button>
            </div>

            {/* Hero */}
            <div className="p-4 text-center">
              <div className="inline-block px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[9px] font-bold mb-2">
                ⚡ ÚLTIMAS HORAS
              </div>
              <h1 className="text-lg font-black text-white mb-2 leading-tight">
                Oportunidad<br/>
                <span className="text-purple-400">de Grande Vida</span>
              </h1>
              <p className="text-white/50 text-[10px] mb-3">Cupo limitado</p>
              <button className="px-4 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-bold">
                ¡APROVECHA!
              </button>
            </div>

            {/* Stats */}
            <div className="px-4 flex justify-center gap-4 mb-3">
              <div className="text-center">
                <div className="text-lg font-black text-white">500+</div>
                <div className="text-[8px] text-white/40">Participantes</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-black text-white">98%</div>
                <div className="text-[8px] text-white/40">Satisfacción</div>
              </div>
            </div>

            {/* Features */}
            <div className="px-4 mb-3 space-y-2">
              <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center"><Star size={10} className="text-purple-400"/></div>
                <div>
                  <div className="text-white text-xs font-bold">Contenido Exclusivo</div>
                  <div className="text-white/40 text-[8px]">Acceso premium</div>
                </div>
              </div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-pink-500/20 flex items-center justify-center"><Zap size={10} className="text-pink-400"/></div>
                <div>
                  <div className="text-white text-xs font-bold">Resultados Rápidos</div>
                  <div className="text-white/40 text-[8px]">En 7 días</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="px-4 mb-3">
              <button className="w-full py-2 bg-white text-gray-900 rounded-xl text-xs font-bold">
                QUIERO INSCRIBIRME
              </button>
            </div>

            {/* Footer */}
            <div className="h-8 flex items-center justify-center border-t border-white/10">
              <span className="text-white/30 text-[8px]">© 2026 OGV</span>
            </div>
          </div>
        </MockBrowser>
      </div>
    </div>
  );
};

export const StackSlide = () => (
  <div className="max-w-5xl w-full px-6 flex flex-col items-center overflow-y-auto max-h-[85vh] pt-32 pb-12">
    <h2 className="text-4xl font-bold text-white mb-12">Despliegue: Del Código al Mundo</h2>
    
    <div className="grid md:grid-cols-3 gap-8 w-full mb-12">
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center flex flex-col items-center group hover:bg-white/10 transition-colors">
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="w-16 h-16 rounded-2xl bg-primary-500/20 flex items-center justify-center text-primary-400 mb-6">
                <Globe size={32} />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Dominio</h3>
            <p className="text-white/40 text-sm">Tu dirección en internet. <br /> <span className="text-primary-400 font-mono">tudominio.com</span></p>
        </div>
        
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center flex flex-col items-center group hover:bg-white/10 transition-colors">
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <Server size={32} />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Hosting</h3>
            <p className="text-white/40 text-sm">Donde viven tus archivos. <br /> <span className="text-blue-400 font-mono">cPanel / VPS</span></p>
        </div>
        
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center flex flex-col items-center group hover:bg-white/10 transition-colors">
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <Lock size={32} />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">SSL</h3>
            <p className="text-white/40 text-sm">Seguridad y confianza. <br /> <span className="text-emerald-400 font-mono">HTTPS (Candadito verde)</span></p>
        </div>
    </div>

    <div className="p-10 rounded-[40px] bg-gradient-to-br from-primary-600 to-primary-800 w-full text-white shadow-3xl shadow-primary-500/30 overflow-hidden relative">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4">El Vuelo Final en cPanel</h3>
                <p className="opacity-90 leading-relaxed text-lg">
                    Optimizamos cada byte. Usamos **HTACCESS** para rutas limpias y compresión para que tu página vuele. ¡Tu audiencia merece velocidad instantánea!
                </p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                    <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-xl text-sm border border-white/10 font-mono">.htaccess</div>
                    <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-xl text-sm border border-white/10 font-mono">Brotli/Gzip</div>
                </div>
            </div>
            <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-3xl border border-white/20">
                 <ShieldCheck size={80} className="text-white animate-pulse" />
            </div>
        </div>
        <div className="absolute top-[-20%] right-[-10%] w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-60 h-60 bg-primary-400/20 rounded-full blur-3xl" />
    </div>
  </div>
);
