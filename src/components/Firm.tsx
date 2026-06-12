import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Building2, Eye, ShieldCheck, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { getTeamMembers } from "../data";
import { TeamMember } from "../types";

interface FirmProps {
  onNavigate: (section: string) => void;
  lang: string;
}

export default function Firm({ onNavigate, lang }: FirmProps) {
  const isFr = lang === "fr";
  const teamMembers = getTeamMembers(lang);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Bound check whenever viewport-driven itemsToShow changes
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, Math.max(0, teamMembers.length - itemsToShow)));
  }, [itemsToShow, teamMembers.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, teamMembers.length - itemsToShow));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div id="firm-story-page" className="bg-white min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 text-brand-black">
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

        {/* MAJESTIC TEAM HEADER BANNER */}
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-neutral-100 border border-neutral-200 mb-16 group/team">
          <img 
            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2000" 
            alt="L'équipe de FOCUS INTERNATIONAL GROUP" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-90 grayscale contrast-125 hover:grayscale-0 transition-all duration-[1000ms] ease-out"
          />
          {/* Technical Reticles Overlay matching other design highlights */}
          <div className="absolute inset-0 border border-brand-gold/15 m-3 sm:m-6 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute left-6 sm:left-12 bottom-6 sm:bottom-12 z-20">
            <span className="font-mono text-[8px] tracking-[0.35em] text-[#B89B75] uppercase font-bold">
              {isFr ? "REPRÉSENTATION TECHNIQUE" : "TECHNICAL SPECIFICATIONS"}
            </span>
            <p className="font-display text-lg sm:text-2xl font-light text-white tracking-widest mt-1 uppercase">
              {isFr ? "L'ÉQUIPE FOCUS INTERNATIONAL GROUP" : "FOCUS INTERNATIONAL GROUP TEAM"}
            </p>
          </div>

          <div className="absolute right-6 bottom-6 z-20 hidden sm:flex items-center space-x-2 bg-neutral-950/80 backdrop-blur-md text-white border border-[#B89B75]/30 px-3 py-1.5 font-mono text-[8px] tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span>{isFr ? "SÉANCE COLLABORATIVE // YAOUNDÉ" : "COLLABORATIVE SESSION // YAOUNDÉ"}</span>
          </div>
        </div>

        {/* HERO HEADER */}
        <div id="firm-hero-section" className="border-b border-neutral-100 pb-16 mb-20">
          <span className="font-mono text-[9px] tracking-[0.3em] text-brand-gold uppercase font-bold">
            {isFr ? "LE CABINET" : "THE PRACTICE"}
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-light tracking-tight text-neutral-950 mt-4 max-w-4xl leading-none">
            {isFr ? (
              <>Une architecture engagée pour <br /> <span className="font-light italic text-neutral-500">le développement de l'Afrique</span></>
            ) : (
              <>Architecture committed to <br /> <span className="font-light italic text-neutral-500">the development of Africa</span></>
            )}
          </h1>
          <div className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-3xl mt-6 space-y-4 font-light">
            {isFr ? (
              <>
                <p className="font-medium text-neutral-900 text-sm sm:text-base leading-relaxed">
                  FOCUS INTERNATIONAL GROUP est né d'une conviction forte : l'architecture est un moteur de transformation économique, sociale et territoriale.
                </p>
                <p>
                  Fondé au Cameroun et tourné vers l'ensemble du continent, le cabinet accompagne les institutions, les entreprises, les investisseurs et les collectivités dans la conception de projets à fort impact.
                </p>
                <p>
                  Notre ambition est de proposer une architecture qui répond aux défis contemporains de l'Afrique : urbanisation, attractivité des territoires, durabilité, innovation et qualité de vie.
                </p>
                <p>
                  À travers une approche pluridisciplinaire, nous concevons des projets qui créent de la valeur, structurent les territoires et participent à construire les villes africaines de demain.
                </p>
              </>
            ) : (
              <>
                <p className="font-medium text-neutral-900 text-sm sm:text-base leading-relaxed">
                  FOCUS INTERNATIONAL GROUP was born from a strong conviction: architecture is a motor of economic, social, and territorial transformation.
                </p>
                <p>
                  Founded in Cameroon and oriented towards the entire continent, the firm supports institutions, businesses, investors, and local communities in designing high-impact projects.
                </p>
                <p>
                  Our ambition is to deliver architecture that answers contemporary African challenges: urbanization, territorial attractiveness, sustainability, innovation, and quality of life.
                </p>
                <p>
                  Through a multidisciplinary approach, we design projects that create value, structure territories, and participate in building tomorrow's African cities.
                </p>
              </>
            )}
          </div>
        </div>

        {/* KEY FIGURES SECTION */}
        <div id="firm-key-figures" className="py-12 border-b border-neutral-100 mb-20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 pb-6 border-b border-neutral-200/50">
            <span className="font-mono text-[9px] tracking-[0.25em] text-neutral-400 uppercase font-bold">
              {isFr ? "NOTRE CABINET EN CHIFFRES" : "OUR PRACTICE BY THE NUMBERS"}
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-l border-neutral-200 pl-6 py-4 flex flex-col justify-between hover:border-brand-gold hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="font-display text-5xl font-extralight text-brand-black group-hover:text-brand-gold transition-colors">10+</h3>
              <div>
                <h4 className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase font-bold mt-4">
                  {isFr ? "ANNÉES D'EXPÉRIENCE" : "YEARS OF EXPERIENCE"}
                </h4>
                <p className="font-sans text-xs text-neutral-500 mt-1">
                  {isFr ? "Une expertise développée sur des projets institutionnels, résidentiels, tertiaires et urbains." : "An expertise developed on institutional, residential, commercial, and urban projects."}
                </p>
              </div>
            </div>

            <div className="border-l border-neutral-200 pl-6 py-4 flex flex-col justify-between hover:border-brand-gold hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="font-display text-5xl font-extralight text-brand-black group-hover:text-brand-gold transition-colors">50+</h3>
              <div>
                <h4 className="font-mono text-[9px] tracking-widest text-[#B89B75] uppercase font-bold mt-4">
                  {isFr ? "PROJETS & ÉTUDES" : "PROJECTS & STUDIES"}
                </h4>
                <p className="font-sans text-xs text-neutral-500 mt-1">
                  {isFr ? "Des missions de conception, d'assistance, de planification et de maîtrise d'œuvre." : "Missions of design, advisory, planning, and master builder stewardship."}
                </p>
              </div>
            </div>

            <div className="border-l border-neutral-200 pl-6 py-4 flex flex-col justify-between hover:border-brand-gold hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="font-display text-5xl font-extralight text-brand-black group-hover:text-brand-gold transition-colors">10+</h3>
              <div>
                <h4 className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase font-bold mt-4">
                  {isFr ? "COLLABORATEURS & PARTENAIRES" : "COLLABORATORS & PARTNERS"}
                </h4>
                <p className="font-sans text-xs text-neutral-500 mt-1">
                  {isFr ? "Architectes, ingénieurs, urbanistes et experts mobilisés selon les besoins de chaque projet." : "Architects, structural engineers, urbanists, and specialists mobilized for each project."}
                </p>
              </div>
            </div>

            <div className="border-l border-neutral-200 pl-6 py-4 flex flex-col justify-between hover:border-brand-gold hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="font-display text-5xl font-extralight text-brand-black group-hover:text-brand-gold transition-colors">1</h3>
              <div>
                <h4 className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase font-bold mt-4">
                  {isFr ? "VISION COMMUNE" : "COMMON VISION"}
                </h4>
                <p className="font-sans text-xs text-neutral-500 mt-1">
                  {isFr ? "Concevoir une architecture durable, utile et adaptée aux réalités africaines." : "Design a highly tailored, functional, and bioclimatic architecture tuned to African soils."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* STATS STRIP / NOS PILIERS D'ACTION */}
        <div className="border-b border-neutral-100 pb-16 mb-20 text-brand-black">
          <div className="mb-10">
            <span className="font-mono text-[9px] tracking-[0.25em] text-brand-gold uppercase font-bold">
              {isFr ? "NOS PILIERS D'ACTION" : "OUR ACTION PILLARS"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col space-y-4 border border-neutral-100 p-6 bg-neutral-50/50 hover:bg-neutral-50 transition-all">
              <Building2 className="w-5 h-5 text-brand-gold shrink-0" />
              <div>
                <h4 className="text-neutral-950 font-bold uppercase text-[10px] tracking-wider">
                  {isFr ? "DÉVELOPPEMENT TERRITORIAL" : "TERRITORIAL DEVELOPMENT"}
                </h4>
                <p className="text-neutral-500 mt-2 font-sans font-light text-[11px] leading-relaxed">
                  {isFr 
                    ? "Concevoir des projets qui participent à la transformation durable des villes, des territoires et des infrastructures africaines." 
                    : "Design flagship projects contributing to the sustainable transformation of African cities, territories, and core infrastructures."}
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-4 border border-neutral-100 p-6 bg-neutral-50/50 hover:bg-neutral-50 transition-all">
              <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0" />
              <div>
                <h4 className="text-neutral-950 font-bold uppercase text-[10px] tracking-wider">
                  {isFr ? "EXCELLENCE OPÉRATIONNELLE" : "OPERATIONAL EXCELLENCE"}
                </h4>
                <p className="text-neutral-500 mt-2 font-sans font-light text-[11px] leading-relaxed">
                  {isFr 
                    ? "Garantir la qualité de la conception, la maîtrise des délais, le respect des budgets et la performance globale des projets." 
                    : "Benchmark design excellence, rigorous project scheduling, strict budget controls, and premium final indicators."}
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-4 border border-neutral-100 p-6 bg-neutral-50/50 hover:bg-neutral-50 transition-all">
              <Eye className="w-5 h-5 text-brand-gold shrink-0" />
              <div>
                <h4 className="text-neutral-950 font-bold uppercase text-[10px] tracking-wider">
                  {isFr ? "INNOVATION & DURABILITÉ" : "INNOVATION & SUSTAINABILITY"}
                </h4>
                <p className="text-neutral-500 mt-2 font-sans font-light text-[11px] leading-relaxed">
                  {isFr 
                    ? "Intégrer les meilleures pratiques architecturales, environnementales et technologiques pour répondre aux défis de demain." 
                    : "Wielding custom green computational models and low-emission building tech to answer equatorial environmental shifts."}
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-4 border border-neutral-100 p-6 bg-neutral-50/50 hover:bg-neutral-50 transition-all">
              <Info className="w-5 h-5 text-brand-gold shrink-0" />
              <div>
                <h4 className="text-neutral-950 font-bold uppercase text-[10px] tracking-wider">
                  {isFr ? "INTELLIGENCE COLLECTIVE" : "COLLECTIVE INTELLIGENCE"}
                </h4>
                <p className="text-neutral-500 mt-2 font-sans font-light text-[11px] leading-relaxed">
                  {isFr 
                    ? "Mobiliser des expertises complémentaires afin d'apporter des réponses pertinentes aux enjeux complexes de chaque projet." 
                    : "Rallying specialized local and international expertise to generate cohesive solutions for master plans."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SYSTEM VALUES MODULE */}
        <section id="firm-values-section" className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28">
          <div className="lg:col-span-4">
            <span className="font-mono text-[9px] tracking-[0.25em] text-brand-gold uppercase font-bold">
              {isFr ? "PRINCIPES ET ENGAGEMENTS" : "VALUES & ETHICAL ANCHORS"}
            </span>
            <h3 className="font-display text-2xl font-light text-neutral-950 mt-1 border-b border-neutral-100 pb-4">
              {isFr ? "Ce qui guide nos décisions" : "What Guides Our Decisions"}
            </h3>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs font-light leading-relaxed text-neutral-600">
            <div>
              <h4 className="font-display text-neutral-900 text-base font-semibold mb-3">
                {isFr ? "01. Responsabilité" : "01. Responsibility"}
              </h4>
              <p className="font-sans text-[11px] font-light text-neutral-500 leading-relaxed">
                {isFr 
                  ? "Nous concevons chaque projet avec la conscience de son impact sur les territoires, les communautés et les générations futures." 
                  : "We design every infrastructure with a strong awareness of its lasting footprint on geographic areas, communities, and future cohorts."}
              </p>
            </div>
            <div>
              <h4 className="font-display text-neutral-900 text-base font-semibold mb-3">
                {isFr ? "02. Excellence" : "02. Excellence"}
              </h4>
              <p className="font-sans text-[11px] font-light text-neutral-500 leading-relaxed">
                {isFr 
                  ? "Nous plaçons la rigueur, la qualité et l'exigence professionnelle au cœur de chacune de nos interventions." 
                  : "Rigor, aesthetic and legal compliance, and extreme detail control form the foundation of our work."}
              </p>
            </div>
            <div>
              <h4 className="font-display text-neutral-900 text-base font-semibold mb-3">
                {isFr ? "03. Innovation" : "03. Innovation"}
              </h4>
              <p className="font-sans text-[11px] font-light text-neutral-500 leading-relaxed">
                {isFr 
                  ? "Nous explorons continuellement de nouvelles approches pour imaginer des espaces plus performants, durables et adaptés aux usages contemporains." 
                  : "We consistently break away from standard paradigms to structure spaces that outperform in thermal isolation and future uses."}
              </p>
            </div>
            <div>
              <h4 className="font-display text-neutral-900 text-base font-semibold mb-3">
                {isFr ? "04. Engagement" : "04. Engagement"}
              </h4>
              <p className="font-sans text-[11px] font-light text-neutral-500 leading-relaxed">
                {isFr 
                  ? "Nous croyons que l'architecture doit contribuer activement au développement économique, social et environnemental de l'Afrique." 
                  : "We hold that modern building forms must serve as dynamic catalyst tools for the real development of African societies."}
              </p>
            </div>
          </div>
        </section>

        {/* TEAM MEMBERS MODULE */}
        <section id="firm-team-section" className="overflow-hidden">
          <div className="mb-12 border-b border-neutral-100 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <span className="font-mono text-[9px] tracking-[0.3em] text-brand-gold uppercase font-bold">
                {isFr ? "L'ÉQUIPE FIG" : "THE FIG TEAM"}
              </span>
              <h2 className="font-display text-3xl font-extralight text-neutral-950 mt-2">
                {isFr ? "Des talents mobilisés au cœur de chaque projet" : "Assembled talents at the core of each project"}
              </h2>
            </div>
            
            {/* Navigation Slider Buttons */}
            <div className="flex items-center space-x-4 self-end md:self-auto shrink-0 select-none">
              <span className="font-mono text-[10px] text-neutral-400 tracking-wider">
                {String(currentIndex + 1).padStart(2, '0')} — {String(Math.min(currentIndex + itemsToShow, teamMembers.length)).padStart(2, '0')} / {String(teamMembers.length).padStart(2, '0')}
              </span>
              <div className="flex items-center space-x-1.5">
                <button
                  disabled={currentIndex === 0}
                  onClick={prevSlide}
                  className="p-2 border border-neutral-200 text-neutral-500 hover:text-neutral-950 hover:border-brand-gold disabled:text-neutral-300 disabled:border-neutral-200 disabled:opacity-30 transition-all duration-300 cursor-pointer"
                  aria-label="Previous staff member"
                >
                  <ChevronLeft className="w-4.5 h-4.5" />
                </button>
                <button
                  disabled={currentIndex >= teamMembers.length - itemsToShow}
                  onClick={nextSlide}
                  className="p-2 border border-neutral-200 text-neutral-500 hover:text-neutral-950 hover:border-brand-gold disabled:text-neutral-300 disabled:border-neutral-200 disabled:opacity-30 transition-all duration-300 cursor-pointer"
                  aria-label="Next staff member"
                >
                  <ChevronRight className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Slider Track Container */}
          <div className="relative overflow-hidden w-full -mx-2 sm:-mx-3 px-2 sm:px-3">
            <motion.div 
              className="flex"
              animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
            >
              {teamMembers.map((member) => (
                <div 
                  key={member.name}
                  className="shrink-0 px-2 sm:px-3 flex flex-col"
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <div className="relative group border border-neutral-200 bg-neutral-50 hover:border-brand-gold/50 transition-all duration-350 flex flex-col justify-between h-full">
                    <div className="aspect-[4/5] bg-neutral-100 overflow-hidden relative">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="p-6 bg-white border-t border-neutral-100 flex-grow flex flex-col justify-between">
                      <div>
                        {member.name === "NYANGON Steevy Princy" ? (
                          <span className="inline-block px-1.5 py-0.5 bg-brand-gold/15 text-brand-gold font-mono text-[7.5px] uppercase tracking-wider font-semibold mb-2">
                            {isFr ? "Principal / Manager" : "Principal Lead"}
                          </span>
                        ) : (
                          <span className="inline-block px-1.5 py-0.5 bg-neutral-100 text-neutral-500 font-mono text-[7.5px] uppercase tracking-wider font-medium mb-2">
                            {isFr ? "Collaborateur" : "Collaborator"}
                          </span>
                        )}
                        <h3 className="font-display text-lg font-light text-neutral-950 leading-tight mb-1">
                          {member.name}
                        </h3>
                        <p className="font-mono text-[9px] text-[#B89B75] uppercase tracking-wider mt-1">
                          {member.role}
                        </p>
                      </div>

                      <button 
                        onClick={() => setSelectedMember(member)}
                        className="mt-6 flex items-center space-x-1.5 font-mono text-[8.5px] tracking-widest text-[#B89B75] hover:text-neutral-950 uppercase transition-colors font-bold text-left self-start"
                      >
                        <Info className="w-3.5 h-3.5 shrink-0" />
                        <span>{isFr ? "Visualiser le profil" : "View profile"}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* TEAM MEMBER BIOGRAPHY DRAWER POPUP */}
        <AnimatePresence>
          {selectedMember && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/80 p-4 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-neutral-200 rounded-none max-w-xl w-full p-8 md:p-10 relative overflow-hidden text-brand-black"
              >
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-6 right-6 p-1.5 text-neutral-400 hover:text-neutral-900 border border-neutral-200 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-center space-x-6 mb-6 pb-6 border-b border-neutral-100">
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name} 
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-full object-cover border border-[#B89B75]/25 grayscale"
                  />
                  <div>
                    <h3 className="font-display text-xl font-light text-neutral-950 leading-none mb-1">{selectedMember.name}</h3>
                    <p className="font-mono text-[9px] text-[#B89B75] uppercase tracking-widest mt-1">{selectedMember.role}</p>
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm leading-relaxed text-neutral-600 font-light mt-4">
                  {selectedMember.bio || (isFr ? "Associé principal supervisant nos opérations durables régionales." : "Principal lead guiding sustainable operations across the region.")}
                </p>

                <div className="mt-8 pt-4 border-t border-neutral-100 flex justify-end">
                  <button 
                    onClick={() => setSelectedMember(null)}
                    className="bg-brand-black hover:bg-brand-gold text-white font-display text-[9px] tracking-[0.25em] uppercase font-bold py-2.5 px-6 transition-colors cursor-pointer"
                  >
                    {isFr ? "Fermer le Profil" : "Close Profile"}
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
