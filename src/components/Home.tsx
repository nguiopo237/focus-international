import { motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";

interface HomeProps {
  onNavigate: (section: string) => void;
  onSelectProject: (projectId: string) => void;
  lang: string;
}

export default function Home({ onNavigate, onSelectProject, lang }: HomeProps) {
  const isFr = lang === "fr";

  return (
    <div id="home-section" className="relative w-full bg-white text-brand-black">
      
      {/* 1. CINEMATIC HERO */}
      <section id="hero-slider-container" className="relative h-screen w-full overflow-hidden bg-brand-black flex items-center">
        {/* Thin drafting grid lines backdrop */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-25">
          <div className="architect-grid-line left-[20%] w-[1px] h-full bg-white/20" />
          <div className="architect-grid-line left-[50%] w-[1px] h-full bg-white/20" />
          <div className="architect-grid-line left-[80%] w-[1px] h-full bg-white/20" />
          <div className="absolute top-[40%] left-0 w-full h-[1px] bg-white/10" />
          <div className="absolute top-[70%] left-0 w-full h-[1px] bg-white/10" />
        </div>

        {/* Cinematic Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80 md:opacity-85 z-0"
          poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-contemporary-architectural-design-of-a-house-41566-large.mp4"
            type="video/mp4"
          />
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000')" }} />
        </video>

        {/* Ambient Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/60 z-10 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center space-x-2.5 mb-5"
            >
              <span className="w-8 h-[1px] bg-brand-gold" />
              <span className="font-mono text-[9px] tracking-[0.3em] text-brand-gold uppercase font-bold">
                {isFr 
                  ? "MANIFESTE FIG" 
                  : "FIG MANIFESTO"}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-none text-white uppercase"
            >
              {isFr ? "CONCEVOIR L'AFRIQUE DE DEMAIN" : "DESIGNING TOMORROW'S AFRICA"}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.65, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 font-display text-lg sm:text-2xl text-[#E8E8E8] font-light tracking-wide italic"
            >
              {isFr ? "Là où les idées deviennent des territoires." : "Where ideas become territories."}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap gap-4 sm:gap-6"
            >
              <button
                onClick={() => onNavigate("firm")}
                className="group flex items-center space-x-3 bg-white text-brand-black px-6 sm:px-8 py-3.5 sm:py-4 font-display text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-brand-gold hover:text-white transition-all duration-300 rounded-none cursor-pointer"
              >
                <span>{isFr ? "Découvrir FIG" : "Discover FIG"}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
              <button
                onClick={() => onNavigate("projects")}
                className="group flex items-center space-x-3 border border-white/30 text-white px-6 sm:px-8 py-3.5 sm:py-4 font-display text-[10px] tracking-[0.2em] uppercase font-bold hover:border-brand-gold hover:text-brand-gold transition-all duration-300 rounded-none cursor-pointer bg-brand-black/20 backdrop-blur-md"
              >
                <span>{isFr ? "Explorer nos projets" : "Explore our projects"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Cinematic Loop Indicator metadata */}
        <div className="absolute right-4 sm:right-12 bottom-12 z-20 flex items-center space-x-6 font-mono text-[9px] tracking-widest text-[#E8E8E8]/40">
          <div className="hidden sm:block flex flex-col text-right">
            <span className="text-brand-gold font-bold uppercase">{isFr ? "MONUMENTALITÉ TROPICALE" : "EQUATORIAL VOLUMETRIC FORM"}</span>
            <span className="text-white text-[10px] font-display font-medium mt-1">{isFr ? "Yaoundé & Libreville // Flux de Concept" : "Yaoundé & Libreville // Concept stream"}</span>
          </div>
          <div className="flex items-center space-x-2.5 bg-white/5 backdrop-blur-md px-3.5 py-1.5 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
            <span className="text-[8px] text-white tracking-[0.2em] font-semibold uppercase">{isFr ? "LECTURE EN BOUCLE D'ATMOSPHÈRE" : "LIVE ATMOSPHERE LOOP"}</span>
          </div>
        </div>
      </section>

    </div>
  );
}
