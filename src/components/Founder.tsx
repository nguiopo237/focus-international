import { motion } from "motion/react";
import { Award, Compass, Heart, Map, Clock, ArrowRight } from "lucide-react";
import { getTimeline } from "../data";
import AnimateReveal from "./AnimateReveal";

interface FounderProps {
  onNavigate: (section: string) => void;
  lang: string;
}

export default function Founder({ onNavigate, lang }: FounderProps) {
  const isFr = lang === "fr";
  const timeline = getTimeline(lang);

  return (
    <div id="founder-profile-page" className="bg-white min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 text-brand-black">
      <div className="max-w-7xl mx-auto">
        
        {/* BACK BUTTON OR LINK */}
        <div className="mb-12">
          <button 
            onClick={() => onNavigate("home")}
            className="group flex items-center space-x-2 text-[9px] tracking-[0.25em] font-mono text-neutral-400 hover:text-brand-gold transition-colors uppercase font-bold"
          >
            <span>{isFr ? "← RETOUR À L'ACCUEIL" : "← return to index"}</span>
          </button>
        </div>

        {/* HERO HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-neutral-100 pb-16">
          
          {/* Portrait frame with tech overlay metadata */}
          <AnimateReveal delay={0.1} duration={1} className="lg:col-span-4 relative group">
            <div className="aspect-[3/4] overflow-hidden bg-neutral-100 border border-neutral-200 relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000" 
                alt="Princy NYANGON Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-brand-gold/15 m-3 pointer-events-none" />
            </div>

            <div className="mt-6 space-y-4 border-t border-neutral-100 pt-6 font-mono text-[9px] text-[#050505]/70">
              <div className="flex justify-between">
                <span className="text-neutral-400 uppercase">{isFr ? "FORMATION" : "ALUMNUS"}</span>
                <span className="text-brand-black font-bold">EAMAU (LOMÉ, TOGO)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400 uppercase">{isFr ? "CRÉDENTIALS" : "CREDENTIALS"}</span>
                <span className="text-brand-black font-bold">{isFr ? "FILIÈRE EXCELLENCE" : "EXCELLENCE COHORT"}</span>
              </div>
            </div>
          </AnimateReveal>

          {/* Title and visionary biography */}
          <AnimateReveal delay={0.35} duration={1.1} className="lg:col-span-8 flex flex-col space-y-8 lg:pl-6">
            <div>
              <span className="font-mono text-[9px] tracking-[0.3em] text-brand-gold uppercase font-bold">
                {isFr ? "PROFIL DU FONDATEUR" : "FOUNDER PROFILE"}
              </span>
              <h1 className="font-display text-4xl sm:text-6xl font-light tracking-tight text-neutral-950 mt-4 leading-none">
                Princy NYANGON
              </h1>
              <p className="font-display text-lg sm:text-xl font-extralight text-brand-gold italic mt-2">
                {isFr ? "Fondateur & Directeur Général" : "Founder & Managing Director"}
              </p>
            </div>

            <div className="space-y-6 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-2xl font-light">
              {isFr ? (
                <>
                  <h3 className="font-display text-lg font-normal text-neutral-900 leading-snug">
                    Une vision au service du développement de l’Afrique
                  </h3>
                  <p>
                    Architecte et entrepreneur, Princy NYANGON conçoit l’architecture comme un levier stratégique de transformation des territoires africains. Sa vision repose sur la création d'espaces capables de répondre aux enjeux économiques, sociaux et environnementaux contemporains tout en valorisant les identités culturelles du continent.
                  </p>
                  <p>
                    À travers FOCUS INTERNATIONAL GROUP, il porte une architecture contextualisée, durable et tournée vers l'avenir, au service des institutions, des entreprises et des communautés qui façonnent l'Afrique de demain.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="font-display text-lg font-normal text-neutral-900 leading-snug">
                    A vision dedicated to the development of Africa
                  </h3>
                  <p>
                    Architect and entrepreneur, Princy NYANGON conceives architecture as a strategic lever for transforming African territories. His vision is based on creating spaces capable of responding to contemporary economic, social, and environmental challenges while celebrating and enhancing the continent's cultural identities.
                  </p>
                  <p>
                    Through FOCUS INTERNATIONAL GROUP, he champions a contextualized, sustainable, and forward-looking architecture, serving institutions, businesses, and communities shaping the Africa of tomorrow.
                  </p>
                </>
              )}
            </div>

            {/* Quote block */}
            <blockquote className="border-l-2 border-brand-gold pl-6 py-2 italic font-display text-base text-neutral-800 max-w-xl">
              {isFr 
                ? `"Notre architecture n'affronte pas la nature ou la culture africaine ; elle les sublime pour dessiner des espaces contextualisés porteurs d'appartenance et de fraîcheur passive."`
                : `"Our architecture does not oppose nature or African culture; it sublimates them to shape contextual spaces carrying a deep sense of belonging and passive fresco."`}
            </blockquote>
          </AnimateReveal>
        </div>

        {/* FOUR CORE DESIGN DESIGN PHILOSOPHICAL MANTRAS */}
        <section id="founder-philosophy-section" className="py-20 border-b border-neutral-100">
          <AnimateReveal>
            <div className="mb-12">
              <span className="font-mono text-[9px] tracking-[0.3em] text-brand-gold uppercase font-bold">
                {isFr ? "PHILOSOPHIE DE CONCEPTION" : "DESIGN PHILOSOPHY"}
              </span>
              <h2 className="font-display text-3xl font-extralight text-neutral-950 mt-1">
                {isFr ? "Principes Cardinaux" : "Core Design Principles"}
              </h2>
            </div>
          </AnimateReveal>

          <AnimateReveal staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="p-8 border border-neutral-100 bg-white hover:border-brand-gold/35 hover-lift flex flex-col justify-between">
              <div>
                <Compass className="w-6 h-6 text-brand-gold mb-6" />
                <h3 className="font-display text-lg font-light text-neutral-950 mb-3">{isFr ? "01. Identité" : "01. Identity"}</h3>
                <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light">
                  {isFr 
                    ? "Concevoir des projets qui s'inspirent des réalités culturelles, sociales et territoriales africaines afin de créer une architecture porteuse de sens et d'appartenance."
                    : "Design projects inspired by African cultural, social, and territorial realities to create an architecture that fosters meaning and a sense of belonging."}
                </p>
              </div>
            </div>

            <div className="p-8 border border-neutral-100 bg-white hover:border-brand-gold/35 hover-lift flex flex-col justify-between">
              <div>
                <Heart className="w-6 h-6 text-brand-gold mb-6" />
                <h3 className="font-display text-lg font-light text-neutral-950 mb-3">{isFr ? "02. Durabilité" : "02. Sustainability"}</h3>
                <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light">
                  {isFr 
                    ? "Développer des solutions responsables intégrant les enjeux environnementaux, la performance des bâtiments et la préservation des ressources."
                    : "Develop responsible solutions integrating environmental issues, building performance, and resource preservation."}
                </p>
              </div>
            </div>

            <div className="p-8 border border-neutral-100 bg-white hover:border-brand-gold/35 hover-lift flex flex-col justify-between">
              <div>
                <Map className="w-6 h-6 text-brand-gold mb-6" />
                <h3 className="font-display text-lg font-light text-neutral-950 mb-3">{isFr ? "03. Innovation" : "03. Innovation"}</h3>
                <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light">
                  {isFr 
                    ? "Associer créativité, technologies et meilleures pratiques internationales pour imaginer des espaces adaptés aux usages de demain."
                    : "Combine creativity, technology, and international best practices to imagine spaces tailored for tomorrow's uses."}
                </p>
              </div>
            </div>

            <div className="p-8 border border-neutral-100 bg-white hover:border-brand-gold/35 hover-lift flex flex-col justify-between">
              <div>
                <Award className="w-6 h-6 text-brand-gold mb-6" />
                <h3 className="font-display text-lg font-light text-neutral-950 mb-3">{isFr ? "04. Impact" : "04. Impact"}</h3>
                <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light">
                  {isFr 
                    ? "Faire de chaque projet un outil de développement capable de générer de la valeur économique, sociale et territoriale durable."
                    : "Make every project a development tool capable of generating sustainable economic, social, and territorial value."}
                </p>
              </div>
            </div>

          </AnimateReveal>
        </section>

        {/* TIMELINE OF PRINCY'S DEVELOPMENT */}
        <section id="founder-timeline" className="py-20">
          <AnimateReveal>
            <div className="mb-16">
              <span className="font-mono text-[9px] tracking-[0.3em] text-brand-gold uppercase font-bold">
                {isFr ? "PARCOURS & ÉTAPES CLÉS" : "JOURNEY & KEY MILESTONES"}
              </span>
              <h2 className="font-display text-3xl font-extralight text-neutral-950 mt-1">
                {isFr ? "Chronologie Professionnelle" : "Professional Journey"}
              </h2>
            </div>
          </AnimateReveal>

          {/* Interactive timeline path */}
          <AnimateReveal staggerChildren={0.12} className="relative border-l border-neutral-200 pl-6 sm:pl-12 max-w-4xl mx-auto space-y-12">
            
            {timeline.map((event) => (
              <motion.div 
                key={event.year} 
                className="relative group primal-timeline-item"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                {/* timeline gold bullet indicator */}
                <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-brand-gold group-hover:bg-brand-gold transition-colors duration-300" />
                
                <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-8">
                  <span className="font-display text-2xl font-light text-brand-gold/80 group-hover:text-brand-gold transition-colors block w-20 shrink-0 select-none">
                    {event.year}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-light text-neutral-950 group-hover:text-brand-gold transition-colors">
                      {event.title}
                    </h3>
                    <p className="font-sans text-xs text-neutral-500 leading-relaxed mt-2 max-w-xl font-light">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

          </AnimateReveal>
        </section>

        {/* ACTION CTA */}
        <AnimateReveal delay={0.1} className="mt-16 bg-neutral-50 border border-neutral-100 p-12 text-center max-w-3xl mx-auto hover-lift">
          <span className="font-mono text-[8px] tracking-[0.25em] text-neutral-400 uppercase block mb-3">{isFr ? "COLLABORER AVEC LE CABINET" : "COLLABORATE WITH THE PRACTICE"}</span>
          <h3 className="font-display text-2xl font-light text-neutral-950 mb-6">
            {isFr ? "Bâtissons ensemble les repères institutionnels du nouveau siècle." : "Let's craft the landmarks of the new century together."}
          </h3>
          <button 
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center space-x-3 bg-brand-black hover:bg-brand-gold text-white px-8 py-4 font-display text-[9px] tracking-[0.2em] uppercase font-bold transition-all duration-300 cursor-pointer"
          >
            <span>{isFr ? "Inscrire une demande de projet" : "Inquire Consultation"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </AnimateReveal>

      </div>
    </div>
  );
}
