import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Grid, Eye, MapPin, SlidersHorizontal } from "lucide-react";
import { Project } from "../types";
import { getProjects } from "../data";
import AnimateReveal from "./AnimateReveal";

interface ProjectsProps {
  onNavigate: (section: string) => void;
  onSelectProject: (projectId: string) => void;
  lang: string;
}

const CATEGORIES_EN = [
  "All",
  "Residential",
  "Commercial",
  "Institutional",
  "Urban Design"
];

const CATEGORIES_FR = [
  "Tous",
  "Résidentiel",
  "Commercial",
  "Institutionnel",
  "Urbanisme"
];

export default function Projects({ onNavigate, onSelectProject, lang }: ProjectsProps) {
  const isFr = lang === "fr";
  const categories = isFr ? CATEGORIES_FR : CATEGORIES_EN;
  const [selectedCategory, setSelectedCategory] = useState(isFr ? "Tous" : "All");

  const projectsToFilter = getProjects(lang);

  const filteredProjects = selectedCategory === "All" || selectedCategory === "Tous"
    ? projectsToFilter
    : projectsToFilter.filter((p) => {
        // Match base category by comparing English lowercased counterparts or directly
        const enCatIdx = categories.indexOf(selectedCategory);
        const enCatEquivalent = CATEGORIES_EN[enCatIdx];
        const frCatEquivalent = CATEGORIES_FR[enCatIdx];
        
        return p.category.toLowerCase() === selectedCategory.toLowerCase() || 
               p.category.toLowerCase() === enCatEquivalent?.toLowerCase() ||
               p.category.toLowerCase() === frCatEquivalent?.toLowerCase();
      });

  return (
    <div id="portfolio-exhibition-page" className="bg-white min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 text-brand-black">
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
        <AnimateReveal delay={0.1} className="border-b border-neutral-100 pb-12 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="font-mono text-[9px] tracking-[0.3em] text-brand-gold uppercase font-bold">
              {isFr ? "COMMISSIONS RÉGIONALES" : "COMMISSION ARCHIVE"}
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-light tracking-tight text-neutral-950 mt-4 leading-none">
              {isFr ? "Nos Projets" : "Our Projects"}
            </h1>
          </div>
          <p className="font-sans text-xs text-neutral-500 max-w-md leading-relaxed font-light">
            {isFr 
              ? "Études d’ingénierie et d’architecture à travers l’Afrique centrale et de l’Ouest, intégrant des approches de conception durable, une optimisation bioclimatique des bâtiments et une valorisation raisonnée des ressources locales."
              : "Engineering and architectural studies across Central and West Africa, integrating sustainable design approaches, bioclimatic optimization of buildings, and the responsible use of local resources."}
          </p>
        </AnimateReveal>

        {/* CATEGORY FILTER STRIP */}
        <div className="flex items-center justify-between border-b border-neutral-100 pb-6 mb-12">
          <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto pb-2 sm:pb-0 scrollbar-none scroll-smooth">
            <SlidersHorizontal className="w-4 h-4 text-brand-gold shrink-0 mr-2 latent-icon" />
            
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-4 py-2 font-display text-[9px] tracking-[0.2em] uppercase font-bold border transition-all duration-300 rounded-none cursor-pointer whitespace-nowrap"
                style={{
                  backgroundColor: selectedCategory === cat ? "#050505" : "transparent",
                  color: selectedCategory === cat ? "#FFFFFF" : "rgba(5, 5, 5, 0.6)",
                  borderColor: selectedCategory === cat ? "#050505" : "rgba(5, 5, 5, 0.1)"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="hidden sm:flex items-center space-x-2 font-mono text-[9px] text-neutral-400 uppercase tracking-widest pl-4">
            <Grid className="w-3.5 h-3.5" />
            <span>{isFr ? `EXHIBITION : ${filteredProjects.length} PROJETS` : `EXHIBITION STATUS: ${filteredProjects.length} LISTED`}</span>
          </div>
        </div>

        {/* EXHIBITION GALLERY INTERACTIVE GRID */}
        <AnimatePresence mode="popLayout">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectProject(project.id)}
                className="group border border-neutral-150 bg-white hover:border-[#B89B75] cursor-pointer hover-lift flex flex-col justify-between"
              >
                {/* Visual Image frame */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img 
                    src={project.imageUrl} 
                    alt={project.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 m-0"
                  />
                  {/* Subtle Blueprint Grid layout revealed on hover */}
                  <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 m-3 border border-[#B89B75]/25">
                    {/* CAD crossbars */}
                    <div className="absolute left-[30%] w-[1px] h-full bg-brand-gold/10" />
                    <div className="absolute top-[40%] h-[1px] w-full bg-brand-gold/10" />
                  </div>

                  <div className="absolute right-4 bottom-4 bg-[#050505]/95 border border-white/5 px-3 py-1 font-mono text-[9px] tracking-widest text-[#B89B75]">
                    {project.year}
                  </div>
                </div>

                {/* Content details */}
                <div className="p-6 relative">
                  <div className="flex items-center space-x-2 text-[8px] font-mono tracking-widest text-neutral-400 uppercase mb-2">
                    <MapPin className="w-3 h-3 text-brand-gold shrink-0" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="font-display text-lg font-light text-neutral-950 group-hover:text-brand-gold transition-colors truncate">
                    {project.name}
                  </h3>
                  
                  <p className="font-sans text-xs text-neutral-500 mt-2 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-[9px] font-mono tracking-widest uppercase">
                    <span className="text-neutral-400 font-medium">{project.category}</span>
                    <span className="text-brand-black group-hover:text-brand-gold transition-colors flex items-center space-x-1.5 font-bold">
                      <span>{isFr ? "DOSSIER BRIEF" : "EXPLORE BRIEF"}</span>
                      <Eye className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
