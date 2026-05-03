import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, ExternalLink } from "lucide-react";

const DRA_NAME = "Dra. Rosa Gabriela Alcázar Rodríguez";
const CLINIC_NAME = "Dra. Rosa";

// Smooth scroll helper
const scrollToForm = (e: React.MouseEvent) => {
  e.preventDefault();
  const element = document.getElementById("form");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Section 1: Header
const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm overflow-hidden h-[72px]">
    <div className="max-w-[430px] mx-auto px-6 h-full flex items-center justify-between">
      <div className="font-serif font-bold text-brand-primary text-xl tracking-tight">
        {CLINIC_NAME}
      </div>
      <button 
        onClick={scrollToForm}
        className="bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-accent transition-colors shadow-lg active:scale-95 cursor-pointer"
        id="header-cta"
      >
        Agendar Cita
      </button>
    </div>
  </header>
);

// Section 2: Hero
const Hero = () => (
  <section className="pt-32 pb-16 px-6 bg-white overflow-hidden">
    <div className="max-w-[430px] mx-auto">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase block mb-4"
      >
        Estética Dental
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-serif text-[38px] leading-[1.1] text-brand-primary mb-8"
      >
        Rediseñamos tu <span className="italic font-normal">sonrisa</span> con excelencia y precisión.
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative mb-10"
      >
        <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden relative group">
          {/* Placeholder for specialist photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center text-slate-300">
             <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full border-2 border-brand-accent mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle size={32} />
                </div>
                <p className="font-serif italic text-slate-500">Foto Profesional Dra. Alcázar</p>
             </div>
          </div>
        </div>
        
        <div className="absolute -bottom-6 -right-2 bg-brand-primary text-white p-5 rounded-2xl shadow-xl max-w-[180px]">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle size={16} className="text-brand-accent" />
            <span className="text-2xl font-bold">19</span>
          </div>
          <p className="text-[10px] uppercase tracking-wider font-semibold opacity-80 decoration-brand-accent">Años de Experiencia Profesional</p>
        </div>
      </motion.div>

      <motion.button 
        onClick={scrollToForm}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full bg-slate-50 border border-slate-200 text-brand-primary py-4 rounded-xl flex items-center justify-center gap-3 font-semibold hover:bg-slate-100 transition-colors cursor-pointer"
      >
        Quiero mi sesión de valoración
        <ArrowRight size={18} />
      </motion.button>
    </div>
  </section>
);

// Section 3: Bio
const Bio = () => (
  <section className="py-20 px-6 bg-brand-bg">
    <div className="max-w-[430px] mx-auto">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-serif text-2xl text-brand-primary mb-6"
      >
        {DRA_NAME}
      </motion.h2>
      
      <p className="text-slate-600 leading-relaxed mb-6">
        Soy una persona empática y perfeccionista comprometida con hacer sentir a cada paciente en confianza y tranquilidad. Me apasiona mi profesión como dentista y disfruto cuidar la salud bucal de manera integral, buscando siempre resultados de la mejor calidad.
      </p>
      
      <blockquote className="font-serif italic text-brand-accent border-l-2 border-brand-accent pl-6 py-2 mb-10 text-lg">
        "La excelencia estética nace de la armonía facial y la sensibilidad humana."
      </blockquote>

      <div className="space-y-4 mb-10">
        {["Especialidad en Prótesis y Estética Dental", "19 años de trayectoria clínica", "Trato humano y personalizado", "Certificación UACJ"].map((item, i) => (
          <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
              <CheckCircle size={14} className="text-brand-primary" />
            </div>
            <span className="text-xs font-bold text-brand-primary uppercase tracking-wide">{item}</span>
          </div>
        ))}
      </div>

      <button 
        onClick={scrollToForm}
        className="w-full bg-brand-primary text-white py-4 rounded-xl flex items-center justify-center font-bold shadow-lg hover:shadow-xl transition-all cursor-pointer"
      >
        Quiero mi sesión de valoración
      </button>
    </div>
  </section>
);

// Section 4: Schedule
const Schedule = () => (
  <section className="py-20 px-6 bg-white border-b border-slate-100">
    <div className="max-w-[430px] mx-auto">
      <div className="flex items-center gap-3 mb-4 text-brand-accent">
        <Clock size={20} />
        <h2 className="font-serif italic text-xl">Horarios</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest block mb-2 opacity-60">Días Laborales</span>
          <div className="bg-brand-bg p-5 rounded-2xl border border-slate-100">
            <p className="font-medium text-brand-primary">Martes a jueves</p>
            <p className="text-sm text-slate-500">12:00 pm – 8:00 pm</p>
            <div className="h-px bg-slate-200 my-4" />
            <p className="font-medium text-brand-primary">Viernes</p>
            <p className="text-sm text-slate-500">3:00 pm – 8:00 pm</p>
          </div>
        </div>

        <div>
           <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest block mb-2 opacity-60">Fin de semana</span>
           <div className="bg-brand-bg p-5 rounded-2xl border border-slate-100">
            <p className="font-medium text-brand-primary">Sábado</p>
            <p className="text-sm text-slate-500">8:00 am – 2:00 pm</p>
          </div>
        </div>

        <button onClick={scrollToForm} className="flex items-center gap-2 text-brand-accent font-semibold text-sm group cursor-pointer">
          Quiero mi sesión de valoración 
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </section>
);

// Section 5: Services
const Services = () => {
  const list = [
    { 
      name: "Implantes Dentales", 
      desc: "Sustitución permanente de piezas faltantes con materiales de alta gama.", 
      price: "$1,860 USD",
      oldPrice: "$2,160 USD"
    },
    { 
      name: "Diseño de Sonrisa", 
      desc: "Transformación integral estética personalizada por pieza dental.", 
      price: "$515 USD" 
    },
  ];

  return (
    <section className="py-20 px-6 bg-brand-bg">
      <div className="max-w-[430px] mx-auto">
        <h2 className="font-serif text-3xl text-brand-primary mb-10">Nuestra Especialidad</h2>
        <div className="space-y-6">
          {list.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-serif italic text-xl text-brand-primary">{s.name}</h3>
                <div className="text-right">
                  {s.oldPrice && <span className="text-slate-400 line-through text-xs block mb-1">{s.oldPrice}</span>}
                  <span className={`text-brand-accent font-bold ${s.oldPrice ? 'text-lg bg-brand-accent/10 px-2 py-1 rounded-lg' : 'text-sm'}`}>
                    {s.price}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 6: Results
const Results = () => (
  <section className="py-20 px-6 bg-white overflow-hidden">
    <div className="max-w-[430px] mx-auto">
      <h2 className="font-serif italic text-2xl text-brand-primary mb-10">Transformaciones Reales</h2>
      
      <div className="space-y-6">
        <div className="aspect-[16/10] bg-slate-100 rounded-3xl flex items-center justify-center border border-slate-200">
           <p className="text-xs text-slate-400 font-serif italic uppercase tracking-widest">Galería antes / después</p>
        </div>
      </div>

      <p className="text-[10px] italic text-slate-400 mt-6 block text-center">
        Los resultados varían en cada paciente.
      </p>

      <button 
        onClick={scrollToForm}
        className="w-full mt-10 bg-brand-primary text-white py-4 rounded-xl flex items-center justify-center font-bold shadow-lg hover:shadow-xl transition-all cursor-pointer"
      >
        Quiero mi sesión de valoración
      </button>
    </div>
  </section>
);

// Section 7: Form
const LeadForm = () => (
  <section id="form" className="py-20 px-6 bg-brand-primary text-white scroll-mt-24">
    <div className="max-w-[430px] mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 aspect-square flex flex-col items-center justify-center text-center">
        <h2 className="font-serif text-3xl mb-4 italic">Agenda tu cita</h2>
        <p className="text-white/60 text-sm mb-8">
          Completa tus datos para recibir una llamada de nuestro equipo especializado.
        </p>
        <div className="w-full p-12 border-2 border-dashed border-white/20 rounded-2xl bg-white/5">
          <span className="font-bold tracking-[0.2em] uppercase text-xs">FORMULARIO</span>
        </div>
      </div>
    </div>
  </section>
);

// Section 8: Location
const Location = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-[430px] mx-auto">
      <div className="flex items-center gap-3 mb-4 text-brand-accent">
        <MapPin size={20} />
        <h2 className="font-serif italic text-xl">Ubicación</h2>
      </div>

      <div className="bg-brand-bg p-8 rounded-[32px] border border-slate-100 overflow-hidden">
        <p className="text-brand-primary font-medium mb-1">Av. Pase de la Victoria 4370 Int 614</p>
        <p className="text-slate-500 text-sm mb-6">Cerrada Arboledas, CP 32543</p>
        
        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-inner border border-slate-200 mb-2">
          <iframe 
            src="https://www.google.com/maps?q=Av.%20Pase%20de%20la%20Victoria%204370%20Int%20614%2C%20Ciudad%20Juarez&t=&z=17&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <button 
        onClick={scrollToForm}
        className="w-full mt-10 bg-brand-primary text-white py-4 rounded-xl flex items-center justify-center font-bold shadow-lg cursor-pointer"
      >
        Quiero mi sesión de valoración
      </button>
    </div>
  </section>
);

// Section 9: Footer
const Footer = () => (
  <footer className="py-16 px-6 bg-brand-bg border-t border-slate-100">
    <div className="max-w-[430px] mx-auto">
      <div className="font-serif font-bold text-brand-primary text-2xl mb-8">
        {CLINIC_NAME}
      </div>

      <div className="pt-8 border-t border-slate-200 space-y-4">
        <a href="#" className="text-[10px] uppercase tracking-widest text-slate-400 block font-bold">Aviso de Privacidad</a>
        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
          © {new Date().getFullYear()} {CLINIC_NAME}. <br />
          Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Bio />
      <Schedule />
      <Services />
      <Results />
      <LeadForm />
      <Location />
      <Footer />
    </main>
  );
}
