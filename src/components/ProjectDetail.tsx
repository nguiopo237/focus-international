import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileCode, ChevronLeft, ChevronRight, Image } from "lucide-react";
import { getProjects } from "../data";

interface ProjectDetailProps {
  projectId: string;
  onNavigateBack: () => void;
  lang: string;
}

export default function ProjectDetail({ projectId, onNavigateBack, lang }: ProjectDetailProps) {
  const isFr = lang === "fr";
  const projects = getProjects(lang);
  const project = projects.find((p) => p.id === projectId) || projects[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const imagesList = project.images && project.images.length ? project.images : [project.imageUrl || ""];

  useEffect(() => {
    setActiveImageIndex(0);
  }, [projectId]);

  const handleNextImg = () => {
    setActiveImageIndex((prev) => (prev + 1) % imagesList.length);
  };

  const handlePrevImg = () => {
    setActiveImageIndex((prev) => (prev - 1 + imagesList.length) % imagesList.length);
  };

  return (
    <div id="project-detail-layout" className="bg-white min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 text-brand-black">
      <div className="max-w-7xl mx-auto">
        
        {/* BACK LINE */}
        <div className="mb-12">
          <button 
            onClick={onNavigateBack}
            className="group flex items-center space-x-2 text-[9px] tracking-[0.25em] font-mono text-neutral-400 hover:text-brand-gold transition-colors uppercase font-bold"
          >
            <span>{isFr ? "← RETOURNER AU PORTFOLIO" : "← return to exhibition portfolio"}</span>
          </button>
        </div>

        {/* MONUMENTAL HERO CANOPY IMAGE FRAME */}
        <div id="project-monumental-slider" className="relative aspect-[21/9] overflow-hidden bg-neutral-100 border border-neutral-200 mb-16 group/hero">
          {/* Image slide with animation */}
          <div className="w-full h-full relative">
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeImageIndex}
                src={imagesList[activeImageIndex]} 
                alt={`${project.name} - view ${activeImageIndex + 1}`} 
                referrerPolicy="no-referrer"
                initial={{ opacity: 0, scale: 1.01 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover opacity-90 transition-all duration-700 m-0"
              />
            </AnimatePresence>
          </div>

          {/* Left Arrow button */}
          {imagesList.length > 1 && (
            <button
              onClick={handlePrevImg}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 bg-neutral-950/40 hover:bg-brand-gold hover:text-white text-white rounded-full transition-all duration-300 pointer-events-auto cursor-pointer border border-white/5 shadow-md flex items-center justify-center"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          {/* Right Arrow button */}
          {imagesList.length > 1 && (
            <button
              onClick={handleNextImg}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 bg-neutral-950/40 hover:bg-brand-gold hover:text-white text-white rounded-full transition-all duration-300 pointer-events-auto cursor-pointer border border-white/5 shadow-md flex items-center justify-center"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}

          {/* Image index counter badge in top-right */}
          <div className="absolute right-6 top-6 z-20 font-mono text-[9px] tracking-wider bg-neutral-950/80 backdrop-blur-md text-white border border-[#B89B75]/30 px-3 py-1.5 flex items-center space-x-2">
            <Image className="w-3.5 h-3.5 text-brand-gold shrink-0" />
            <span>IMAGE {String(activeImageIndex + 1).padStart(2, '0')} // {String(imagesList.length).padStart(2, '0')}</span>
          </div>

          {/* Centered dots at bottom */}
          {imagesList.length > 1 && (
            <div className="absolute left-1/2 -translate-x-1/2 bottom-5 z-30 flex items-center space-x-2 bg-neutral-950/60 backdrop-blur-sm px-4 py-1.5 border border-white/5">
              {imagesList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-2.5 h-2.5 transition-all duration-300 cursor-pointer ${
                    activeImageIndex === idx ? "bg-brand-gold scale-110" : "bg-neutral-400/50 hover:bg-white"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* Subtle Technical Reticles Overlay */}
          <div className="absolute inset-0 border border-brand-gold/15 m-3 sm:m-6 pointer-events-none" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute left-6 sm:left-12 bottom-6 sm:bottom-12 z-20">
            <span className="font-mono text-[8px] tracking-[0.35em] text-[#B89B75] uppercase font-bold">
              CASE STUDY DIVISION // {project.category.toUpperCase()}
            </span>
            <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight mt-2 max-w-2xl leading-none drop-shadow-md">
              {project.name}
            </h1>
          </div>
        </div>

        {/* TWO COLUMN GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Narrative Sections */}
          <div className="lg:col-span-8 space-y-12 pr-0 lg:pr-8">
            
            {/* Section A: Context & Challenges */}
            <section id="detail-context" className="space-y-4">
              <h2 className="font-mono text-[9px] tracking-[0.3em] text-[#B89B75] uppercase font-bold">
                01 // {isFr ? "Contexte géologique & défi" : "Geological Context & Challenge"}
              </h2>
              <h3 className="font-display text-2xl font-light text-neutral-950 leading-snug">
                {isFr ? "Restructuration des standards tropicaux." : "Restructuring tropical spatial standards."}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                {project.description}
              </p>
              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed mt-4 font-light">
                <strong className="text-neutral-900">{isFr ? "Le Défi : " : "The Challenge: "}</strong> {project.challenge}
              </p>
            </section>

            {/* Section B: Architectural Concept & Strategy */}
            <section id="detail-concept" className="border-t border-neutral-150 pt-8 space-y-4">
              <h2 className="font-mono text-[9px] tracking-[0.3em] text-[#B89B75] uppercase font-bold">
                02 // {isFr ? "Étude du concept thermodynamique" : "Thermodynamic Concept Design"}
              </h2>
              <h3 className="font-display text-2xl font-light text-neutral-950 leading-snug">
                {isFr ? "Coopérer avec la physique microclimatique." : "Cooperating with microclimate physics."}
              </h3>
              <div className="bg-neutral-50 border border-neutral-200 p-6 md:p-8 rounded-none">
                <p className="font-display text-base font-light italic text-neutral-700 leading-relaxed">
                  "{project.concept}"
                </p>
              </div>
              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed mt-4 font-light">
                <strong className="text-neutral-900">{isFr ? "Notre Réponse : " : "Our Response: "}</strong> {project.response}
              </p>
            </section>

            {/* Section C: Technical Integration */}
            <section id="detail-technical" className="border-t border-neutral-150 pt-8 space-y-4">
              <h2 className="font-mono text-[9px] tracking-[0.3em] text-[#B89B75] uppercase font-bold">
                03 // {isFr ? "Stratégie technique & exécution BIM" : "Technical Strategy & BIM Execution"}
              </h2>
              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                {project.technicalStrategy}
              </p>
              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed mt-4 font-light">
                <strong className="text-neutral-900">{isFr ? "Expérience Utilisateur : " : "The User Experience: "}</strong> {project.experience}
              </p>
            </section>

            {/* Section D: Drawings and Blueprints */}
            <section id="detail-drawings" className="border-t border-neutral-150 pt-8 space-y-4">
              <h2 className="font-mono text-[9px] tracking-[0.3em] text-[#B89B75] uppercase font-bold mb-6">
                04 // {isFr ? "Dessins d'architecture & plans techniques" : "Architectural Drawings & Plans"}
              </h2>
              
              {/* STYLISH MOCK DRAFT BOX */}
              <div className="bg-neutral-950 border border-[#B89B75]/25 p-8 relative overflow-hidden font-mono text-[10px] text-neutral-300 space-y-4 min-h-[220px]">
                {/* Visual grid backdrop lines */}
                <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(184,155,117,1)_1px,transparent_1px),linear-gradient(90deg,rgba(184,155,117,1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                
                <div className="flex items-center space-x-2 text-[#B89B75] uppercase font-bold">
                  <FileCode className="w-4 h-4" />
                  <span>CAD_CORE_MATRIX_OUTPUT // R-GRID-E</span>
                </div>

                <div className="space-y-2 relative z-10 pl-6 border-l border-white/10 font-light text-neutral-400">
                  {project.drawings && project.drawings.map((drawing, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <span className="text-brand-gold select-none font-bold">•</span>
                      <span>{drawing}</span>
                    </div>
                  ))}
                  {!project.drawings && (
                    <>
                      <div>CAD M1: Global Elevation profile matrix // structural axes scale 1:200</div>
                      <div>CAD M2: Subterranean wind vector mapping // passive draft flues</div>
                    </>
                  )}
                </div>

                <div className="absolute bottom-4 right-4 text-[7px] text-[#B89B75]/40 tracking-[0.25em] uppercase select-none font-bold">
                  Focus Drafting Studio // CM-Y-2026
                </div>
              </div>
            </section>

          </div>

          {/* Right Column: Parameters and Technical Facts */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Parameters Block */}
            <div className="bg-neutral-50 border border-neutral-200 p-6 sm:p-8">
              <h3 className="font-mono text-[9px] tracking-[0.3em] text-[#B89B75] uppercase font-bold mb-6 pb-2 border-b border-neutral-100">
                {isFr ? "Détails de la commande" : "Commission Facts"}
              </h3>

              <div className="space-y-4 text-xs">
                
                <div className="flex justify-between py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-400 uppercase font-bold text-[9px]">{isFr ? "MAÎTRE D'OUVRAGE" : "CLIENT"}</span>
                  <span className="text-neutral-900 font-medium text-right max-w-[160px] truncate">{project.client}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-400 uppercase font-bold text-[9px]">{isFr ? "LOCALISATION" : "LOCATION"}</span>
                  <span className="text-neutral-900 font-medium text-right">{project.location}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-400 uppercase font-bold text-[9px]">{isFr ? "SUPERFICIE DU SITE" : "SITE AREA"}</span>
                  <span className="text-neutral-900 font-medium text-right">{project.area}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-400 uppercase font-bold text-[9px]">{isFr ? "BUDGET ESTIMATIVAL" : "ESTIMATED INVESTMENT"}</span>
                  <span className="text-[#B89B75] font-bold text-right">{project.budget}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-400 uppercase font-bold text-[9px]">{isFr ? "ANNÉE DE LIVRAISON" : "YEAR DELIVERED"}</span>
                  <span className="text-neutral-900 font-medium text-right">{project.year}</span>
                </div>

              </div>
            </div>

            {/* Performance Indicators */}
            <div className="bg-neutral-50 border border-neutral-200 p-6 sm:p-8">
              <h3 className="font-mono text-[9px] tracking-[0.3em] text-brand-gold uppercase font-bold mb-6 pb-2 border-b border-neutral-100">
                {isFr ? "Mesures d'Éco-Performance" : "Technical Performance Metrics"}
              </h3>

              <div className="space-y-4">
                {project.facts.map((fact, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-mono text-[8.5px] tracking-widest text-[#B89B75] uppercase font-bold mt-0.5">{fact.label}</span>
                    <span className="font-display text-neutral-900 text-base font-light mt-1">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Institutional Stamp */}
            <div className="bg-neutral-50 border border-[#B89B75]/25 p-6 flex flex-col items-center text-center justify-center relative">
              <span className="font-display text-[9px] tracking-[0.4em] font-extrabold text-neutral-900">FOCUS</span>
              <span className="font-mono text-[7px] tracking-widest text-neutral-400 uppercase mt-1.5 font-bold">EAMAU-CERTIFIED DESIGN COMPLIANCE</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
