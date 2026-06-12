import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, Microchip, Layers } from "lucide-react";
import { getLabConcepts, INTERFACE_DICT } from "../data";
import { LabConcept } from "../types";
import AnimateReveal from "./AnimateReveal";

interface AfricaDesignLabProps {
  onNavigate: (section: string) => void;
  lang: string;
}

export default function AfricaDesignLab({ onNavigate, lang }: AfricaDesignLabProps) {
  const isFr = lang === "fr";
  const dict = INTERFACE_DICT[lang === "fr" ? "fr" : "en"];
  const concepts = getLabConcepts(lang);

  // Extract unique categories dynamically from actual localized concepts
  const categories = Array.from(new Set(concepts.map((c) => c.category)));
  
  const [activeTab, setActiveTab] = useState("");

  // Set initial active tab when categories are loaded or changed
  useEffect(() => {
    if (categories.length > 0) {
      setActiveTab(categories[0]);
    }
  }, [lang]);

  const activeConcepts = concepts.filter((c) => c.category === activeTab);

  return (
    <div id="design-lab-page" className="bg-brand-black min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative vector matrix backdrop */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute right-0 top-10 w-96 h-96 bg-[#FFFFFF]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* BACK LINE */}
        <div className="mb-12">
          <button 
            onClick={() => onNavigate("home")}
            className="group flex items-center space-x-2 text-[9px] tracking-[0.25em] font-mono text-brand-concrete/50 hover:text-brand-gold transition-colors uppercase font-bold"
          >
            <span>{isFr ? "← RETOUR À L'ACCUEIL" : "← return to index"}</span>
          </button>
        </div>

        {/* HERO TITLE HEADER */}
        <AnimateReveal delay={0.15} className="border-b border-brand-concrete/10 pb-12 mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] text-brand-gold uppercase font-bold">
            {isFr ? "LABORATOIRE PROSPECTIF" : "INTELLECTUAL FLAGSHIP"}
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-light tracking-tight text-white mt-4">
            Africa Design Lab
          </h1>
          <p className="font-sans text-xs sm:text-sm text-brand-concrete/50 leading-relaxed max-w-xl mt-4 font-light">
            {isFr 
              ? `"Un laboratoire d'idées présidant à l'écologie africaine de demain." Positionné comme le fer de lance de l'innovation chez Focus, il allie ingénierie avancée, physique thermique bioclimatique et savoir-faire traditionnel d'artisans d'élite pour répondre au défi du métissage culturel et du climat.`
              : `"A laboratory imagining Africa's future." Positioned as Focus's intellectual vanguard, the Lab unites structural designers, biochemical material modelers, and regional trade guilds to conceptualize climate-adapted solutions tailored for tomorrow's African metropolis.`}
          </p>
        </AnimateReveal>

        {/* CATEGORY NAV SELECTION STRIP */}
        {categories.length > 0 && (
          <div className="flex border-b border-brand-concrete/5 pb-4 mb-16 overflow-x-auto gap-4 sm:gap-8 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className="font-display text-[10px] tracking-[0.25em] uppercase pb-3 relative transition-all cursor-pointer whitespace-nowrap font-bold"
                style={{ color: activeTab === cat ? "#B89B75" : "rgba(232, 232, 232, 0.4)" }}
              >
                {cat}
                {activeTab === cat && (
                  <motion.div 
                    layoutId="activeLabTab"
                    className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B89B75]"
                  />
                )}
              </button>
            ))}
          </div>
        )}

        {/* LAB PROJECTS CONTENT FRAME */}
        <div className="space-y-16">
          <AnimatePresence mode="wait">
            {activeConcepts.map((concept) => (
              <motion.div
                key={concept.id}
                initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -25, filter: "blur(6px)" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
              >
                {/* Left column: Image & Materials studied */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Photo frame */}
                  <div className="aspect-[4/3] overflow-hidden bg-brand-dark-gray border border-white/5 relative">
                    <img 
                      src={concept.renders[0]} 
                      alt={concept.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-700 m-0"
                    />
                    <div className="absolute inset-0 border border-brand-gold/15 m-3 pointer-events-none" />
                  </div>

                  {/* Materials display */}
                  <div className="bg-brand-dark-gray border border-white/5 p-6 font-mono text-[9px]">
                    <div className="flex items-center space-x-2 text-[#B89B75] uppercase font-bold mb-4">
                      <Layers className="w-4 h-4 shrink-0" />
                      <span>{isFr ? "MATÉRIAUX SPÉCULATION" : "MATERIALS RECONCEIVED"}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {concept.materialsUsed.map((mat, idx) => (
                        <span 
                          key={idx}
                          className="bg-brand-black border border-brand-concrete/10 px-3 py-1.5 text-brand-concrete/70 font-light hover:border-brand-gold transition-colors uppercase whitespace-nowrap"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right column: Details and checklists */}
                <div className="lg:col-span-7 flex flex-col space-y-6 border-l border-brand-concrete/5 lg:pl-10">
                  <div>
                    <span className="font-mono text-[9px] tracking-widest text-[#B89B75] uppercase">DIVISION {concept.category.toUpperCase()}</span>
                    <h2 className="font-display text-2xl sm:text-3xl font-light text-white tracking-tight mt-2 leading-none">
                      {concept.title}
                    </h2>
                    <p className="font-sans text-xs italic text-brand-concrete/50 mt-1">{concept.tagline}</p>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-brand-concrete/70 leading-relaxed font-light">
                    {concept.description}
                  </p>

                  <div className="border-t border-brand-concrete/10 pt-6">
                    <div className="flex items-center space-x-2 text-brand-gold uppercase font-mono text-[9px] tracking-widest mb-4 font-bold">
                      <Microchip className="w-4 h-4 shrink-0" />
                      <span>{isFr ? "MATRICE DE RECHERCHE PRINCIPALE" : "PRIMARY REASSESSMENT MATRIX"}</span>
                    </div>

                    <div className="space-y-3.5">
                      {concept.researchObjectives.map((obj, idx) => (
                        <div key={idx} className="flex items-start space-x-3 text-xs leading-relaxed font-light text-brand-concrete/65">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B89B75] mt-1.5 shrink-0" />
                          <span>{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-brand-concrete/5 flex justify-end">
                    <button 
                      onClick={() => onNavigate("contact")}
                      className="group flex items-center space-x-2 text-[10px] tracking-[0.2em] font-mono text-white hover:text-brand-gold transition-colors uppercase font-bold cursor-pointer"
                    >
                      <span>{isFr ? "Solliciter une consultation diagnostic" : "Inquire about this design diagnostic"}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
