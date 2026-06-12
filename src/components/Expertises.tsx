import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle } from "lucide-react";
import { getExpertises } from "../data";

interface ExpertisesProps {
  onNavigate: (section: string) => void;
  onSelectProject: (projectId: string) => void;
  lang: string;
}

export default function Expertises({ onNavigate, onSelectProject, lang }: ExpertisesProps) {
  const isFr = lang === "fr";
  const expertises = getExpertises(lang);

  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (expertises.length > 0) {
      setActiveTab(expertises[0].id);
    }
  }, [lang]);

  const matchedExpertise = expertises.find((e) => e.id === activeTab) || expertises[0];

  return (
    <div id="expertises-story-page" className="bg-white min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 text-brand-black">
      <div className="max-w-7xl mx-auto">
        
        {/* BACK LINE */}
        <div className="mb-12">
          <button 
            onClick={() => onNavigate("home")}
            className="group flex items-center space-x-2 text-[9px] tracking-[0.25em] font-mono text-neutral-400 hover:text-brand-gold transition-colors uppercase font-bold"
          >
            <span>{isFr ? "← RETOUR À L'ACCUEIL" : "← return to index"}</span>
          </button>
        </div>

        {/* HERO HEADER */}
        <div className="border-b border-neutral-100 pb-12 mb-16">
          <span className="font-mono text-[9px] tracking-[0.3em] text-brand-gold uppercase font-bold">
            {isFr ? "DOMAINES DE SPÉCIALISATION" : "SERVICES & DISCIPLINES"}
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-light tracking-tight text-neutral-950 mt-4 leading-none">
            {isFr ? "Nos expertises" : "Our Expertises"}
          </h1>
          <p className="font-display text-lg sm:text-2xl text-neutral-800 font-light tracking-wide italic mt-4 max-w-3xl">
            {isFr 
              ? "Chaque territoire possède ses réalités. Chaque projet porte une ambition."
              : "Each territory has its realities. Each project carries an ambition."}
          </p>
          <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-3xl mt-4 font-light">
            {isFr 
              ? "Chez FOCUS INTERNATIONAL GROUP, nous mettons l'architecture, l'urbanisme et le conseil stratégique au service de cette ambition afin de concevoir des espaces qui créent de la valeur, améliorent les usages et participent au développement durable des territoires africains."
              : "At FOCUS INTERNATIONAL GROUP, we place architecture, urban planning, and strategic consulting at the service of this ambition, to design spaces that create value, improve utility, and participate in the sustainable development of African territories."}
          </p>
        </div>

        {/* INTERACTIVE WORKSPACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Vertical Menu Sidebar */}
          {expertises.length > 0 && (
            <div className="lg:col-span-4 flex flex-col space-y-4 border-l border-neutral-100">
              {expertises.map((expertise) => (
                <button
                  key={expertise.id}
                  onClick={() => setActiveTab(expertise.id)}
                  className="group flex items-center justify-between text-left py-4 pl-6 border-l-2 transition-all cursor-pointer relative"
                  style={{ 
                    borderColor: activeTab === expertise.id ? "#B89B75" : "transparent",
                    backgroundColor: activeTab === expertise.id ? "rgba(184, 155, 117, 0.03)" : "transparent"
                  }}
                >
                  <div className="flex flex-col">
                    <span className="font-display text-lg font-light text-neutral-900 group-hover:text-brand-gold transition-colors leading-none mb-1">
                      {expertise.name}
                    </span>
                    <span className="font-mono text-[8px] text-neutral-400 uppercase tracking-widest mt-1">
                      STUDIO DIV // 0-{expertise.id.toUpperCase().substring(0, 4)}
                    </span>
                  </div>
                  {activeTab === expertise.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold absolute right-6" />
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Dynamic Content Frame */}
          {matchedExpertise && (
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={matchedExpertise.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  {/* Hero Frame */}
                  <div className="aspect-[21/9] overflow-hidden bg-neutral-50 border border-neutral-200 relative">
                    <img 
                      src={matchedExpertise.heroImage} 
                      alt={matchedExpertise.name} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-opacity duration-500 m-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent pointer-events-none" />
                  </div>

                   {/* Presentation Essay */}
                  <div className="space-y-4">
                    <span className="font-mono text-[8px] tracking-[0.25em] text-[#B89B75] uppercase font-bold">
                      {isFr ? `${matchedExpertise.name} — Présentation` : `${matchedExpertise.name} — Presentation`}
                    </span>
                    {matchedExpertise.tagline && (
                      <h3 className="font-display text-2xl sm:text-3xl font-light text-neutral-950 leading-tight">
                        {matchedExpertise.tagline}
                      </h3>
                    )}
                    <div className="space-y-4">
                      {matchedExpertise.presentation.split("\n\n").map((para, idx) => (
                        <p key={idx} className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* rigorous methodology */}
                  <div className="border-t border-neutral-150 pt-8">
                    <h4 className="font-mono text-[9px] tracking-widest text-[#B89B75] uppercase font-bold mb-6">
                      {isFr ? "Notre Méthodologie" : "Our Methodology"}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {matchedExpertise.methodology.map((step, idx) => {
                        const hasSplit = step.includes(" : ");
                        const title = hasSplit ? step.split(" : ")[0] : "";
                        const desc = hasSplit ? step.split(" : ")[1] : step;
                        return (
                          <div key={idx} className="flex items-start space-x-3 text-xs bg-neutral-50 border border-neutral-100 p-5">
                            <CheckCircle className="w-4 h-4 text-brand-gold mt-1 shrink-0" />
                            <div>
                              <span className="font-mono text-[8px] text-neutral-400 block mb-1">PHASE 0{idx + 1}</span>
                              {title && (
                                <h5 className="font-sans font-medium text-neutral-900 text-xs mb-1">
                                  {title}
                                </h5>
                              )}
                              <p className="text-neutral-600 leading-relaxed font-light">{desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* projects linked */}
                  <div className="border-t border-neutral-150 pt-8">
                    <h4 className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase font-bold mb-4">
                      {isFr ? "Projets de référence liés à notre expertise" : "Commissions referencing this expertise"}
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      {matchedExpertise.cases.map((caseName, idx) => (
                        <div 
                          key={idx}
                          className="bg-neutral-50 border border-neutral-200 px-5 py-3 text-xs flex items-center justify-between space-x-3 hover:border-brand-gold transition-colors select-none"
                        >
                          <span className="text-neutral-700 font-light">{caseName}</span>
                          <span className="text-brand-gold text-[9px] font-mono cursor-pointer font-bold" onClick={() => onNavigate("projects")}>
                            {isFr ? "Découvrir →" : "Discover →"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
