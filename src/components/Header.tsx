import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Clock } from "lucide-react";
import FIGLogo from "./FIGLogo";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  lang: string;
  setLang: (lang: string) => void;
}

export default function Header({ activeSection, onNavigate, lang, setLang }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cmrTime, setCmrTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Douala",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCmrTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const isDarkHeader = activeSection === "home" || activeSection === "lab";

  const navItems = lang === "fr" ? [
    { id: "home", label: "Accueil" },
    { id: "founder", label: "Fondateur" },
    { id: "firm", label: "Cabinet" },
    { id: "expertises", label: "Expertises" },
    { id: "projects", label: "Projets" },
    { id: "lab", label: "FIG Design Lab" },
    { id: "contact", label: "Contact" },
  ] : [
    { id: "home", label: "Home" },
    { id: "founder", label: "Founder" },
    { id: "firm", label: "The Firm" },
    { id: "expertises", label: "Expertises" },
    { id: "projects", label: "Projects" },
    { id: "lab", label: "FIG Design Lab" },
    { id: "contact", label: "Inquire" },
  ];

  return (
    <>
      <header 
        id="main-header" 
        className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-500 backdrop-blur-xl ${
          isDarkHeader 
            ? "bg-brand-black/75 border-white/5 text-white" 
            : "bg-white/80 border-neutral-150 text-brand-black"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <div 
            id="header-brand-logo"
            className="flex items-center cursor-pointer group" 
            onClick={() => onNavigate("home")}
          >
            <FIGLogo light={isDarkHeader} height={36} className="transition-opacity duration-300 group-hover:opacity-85" />
          </div>

          {/* Desktop Nav Items */}
          <nav id="desktop-navigation" className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => onNavigate(item.id)}
                className="relative py-2 font-display text-[9px] tracking-[0.2em] uppercase font-semibold cursor-pointer transition-colors"
                style={{ 
                  color: activeSection === item.id 
                    ? "#B89B75" 
                    : (isDarkHeader ? "rgba(232, 232, 232, 0.70)" : "rgba(5, 5, 5, 0.65)") 
                }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-gold"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Language Selector AND Status/Clock */}
          <div className="hidden md:flex items-center space-x-6">
            
            {/* Language switch HUD element */}
            <div className={`flex items-center space-x-2 font-mono text-[9px] tracking-[0.1em] font-bold border-r pr-6 ${isDarkHeader ? "border-white/10" : "border-neutral-150"}`}>
              <button 
                onClick={() => setLang("fr")}
                className={`px-1.5 py-0.5 rounded transition-all ${lang === "fr" ? "bg-brand-gold text-white font-black" : (isDarkHeader ? "text-[#E8E8E8]/55 hover:text-white" : "text-neutral-500 hover:text-brand-black")}`}
              >
                FR
              </button>
              <span className={isDarkHeader ? "text-white/20" : "text-neutral-300"}>|</span>
              <button 
                onClick={() => setLang("en")}
                className={`px-1.5 py-0.5 rounded transition-all ${lang === "en" ? "bg-brand-gold text-white font-black" : (isDarkHeader ? "text-[#E8E8E8]/55 hover:text-white" : "text-neutral-500 hover:text-brand-black")}`}
              >
                EN
              </button>
            </div>

            {/* Status Indicators & Clock Client */}
            <div id="desktop-time-indicator" className="flex items-center space-x-4 text-[9px] tracking-[0.15em] font-mono text-neutral-400">
              <div className="flex items-center space-x-2">
                <Clock className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <span className={isDarkHeader ? "text-white/40" : "text-neutral-500"}>WAT:</span>
                <span className={`font-mono ${isDarkHeader ? "text-white" : "text-brand-black"}`}>{cmrTime || "00:00:00"}</span>
              </div>
            </div>

          </div>

          {/* Mobile Right Block */}
          <div className="flex items-center md:hidden space-x-4">
            
            {/* Mobile Lang Button */}
            <button 
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className={`font-mono text-[10px] uppercase font-bold border rounded px-2.5 py-1 ${isDarkHeader ? "border-white/10 text-brand-gold" : "border-brand-black/10 text-brand-gold"}`}
            >
              {lang === "fr" ? "🇬🇧 EN" : "🇫🇷 FR"}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${isDarkHeader ? "text-[#E8E8E8]/80 hover:text-white" : "text-brand-black/80 hover:text-brand-black"}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-navigation-dropdown"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`md:hidden border-b px-6 py-6 overflow-hidden ${isDarkHeader ? "border-white/5 bg-brand-black/95 text-white" : "border-neutral-100 bg-white/95 text-brand-black"}`}
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    id={`mobile-nav-item-${item.id}`}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center justify-between text-left font-display text-[11px] tracking-[0.2em] uppercase py-2 border-b text-neutral-600 hover:text-brand-gold transition-colors ${isDarkHeader ? "border-white/5" : "border-neutral-100"}`}
                  >
                    <span style={{ color: activeSection === item.id ? "#B89B75" : "inherit" }} className="font-semibold">
                      {item.label}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-50 text-brand-gold" />
                  </button>
                ))}

                {/* Localized language selector in mobile dropdown list */}
                <div className={`pt-3 pb-1 border-b flex items-center justify-between font-mono text-[9px] tracking-[0.1em] ${isDarkHeader ? "border-white/5" : "border-neutral-100"}`}>
                  <span className="text-neutral-400 font-bold uppercase">{lang === "fr" ? "Choix de la langue :" : "Language select :"}</span>
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => {
                        setLang("fr");
                        setIsOpen(false);
                      }}
                      className={`px-2 py-0.5 rounded transition-all font-bold ${lang === "fr" ? "bg-brand-gold text-white" : (isDarkHeader ? "text-[#E8E8E8]/55 hover:text-white" : "text-neutral-500 hover:text-brand-black")}`}
                    >
                      FRANÇAIS
                    </button>
                    <span className={isDarkHeader ? "text-white/20" : "text-neutral-300"}>|</span>
                    <button 
                      onClick={() => {
                        setLang("en");
                        setIsOpen(false);
                      }}
                      className={`px-2 py-0.5 rounded transition-all font-bold ${lang === "en" ? "bg-brand-gold text-white" : (isDarkHeader ? "text-[#E8E8E8]/55 hover:text-white" : "text-neutral-500 hover:text-brand-black")}`}
                    >
                      ENGLISH
                    </button>
                  </div>
                </div>

                <div className="pt-2 flex flex-col space-y-2 text-[9px] tracking-[0.12em] font-mono text-neutral-400">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3 h-3 text-brand-gold" />
                    <span>WAT : <span className={isDarkHeader ? "text-white" : "text-brand-black"}>{cmrTime || "00:00:00"}</span></span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
