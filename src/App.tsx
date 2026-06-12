import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Expertises from "./components/Expertises";
import AfricaDesignLab from "./components/AfricaDesignLab";
import Founder from "./components/Founder";
import Firm from "./components/Firm";
import Contact from "./components/Contact";

// Helper to parse localized URL pathways
function parseUrl(path: string): { lang: "en" | "fr"; activeSection: string; selectedProjectId: string | null } {
  const segments = path.split("/").filter(Boolean);
  
  let lang: "en" | "fr" = "fr"; // Default to "fr" (headquarters based in Yaoundé)
  let activeSection = "home";
  let selectedProjectId: string | null = null;
  
  if (segments[0] === "fr") {
    lang = "fr";
    segments.shift();
  } else if (segments[0] === "en") {
    lang = "en";
    segments.shift();
  }

  const viewSegment = segments[0] || "home";
  
  if (viewSegment === "projets" || viewSegment === "projects") {
    activeSection = "projects";
    if (segments[1]) {
      selectedProjectId = segments[1];
    }
  } else if (viewSegment === "expertises") {
    activeSection = "expertises";
  } else if (viewSegment === "africa-design-lab" || viewSegment === "lab") {
    activeSection = "lab";
  } else if (viewSegment === "fondateur" || viewSegment === "founder") {
    activeSection = "founder";
  } else if (viewSegment === "cabinet" || viewSegment === "firm") {
    activeSection = "firm";
  } else if (viewSegment === "contact" || viewSegment === "inquire") {
    activeSection = "contact";
  } else {
    activeSection = "home";
  }

  return { lang, activeSection, selectedProjectId };
}

// Helper to generate beautifully structured localized URLs
function generateUrl(lang: "en" | "fr", section: string, projectId: string | null): string {
  const prefix = lang === "fr" ? "/fr" : "/en";
  const isFr = lang === "fr";
  
  if (projectId) {
    const viewWord = isFr ? "projets" : "projects";
    return `${prefix}/${viewWord}/${projectId}`;
  }

  switch (section) {
    case "home":
      return `${prefix}`;
    case "projects":
      return `${prefix}/${isFr ? "projets" : "projects"}`;
    case "expertises":
      return `${prefix}/expertises`;
    case "lab":
      return `${prefix}/africa-design-lab`;
    case "founder":
      return `${prefix}/${isFr ? "fondateur" : "founder"}`;
    case "firm":
      return `${prefix}/${isFr ? "cabinet" : "firm"}`;
    case "contact":
      return `${prefix}/${isFr ? "contact" : "inquire"}`;
    default:
      return `${prefix}`;
  }
}

export default function App() {
  const [lang, setLangState] = useState<"en" | "fr">("fr");
  const [activeSection, setActiveSection] = useState<string>("home");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Synchronize with active URL pathways and support backward/forward browser navigation
  useEffect(() => {
    const handleUrlChange = () => {
      const { lang: urlLang, activeSection: urlSec, selectedProjectId: urlProj } = parseUrl(window.location.pathname);
      setLangState(urlLang);
      setActiveSection(urlSec);
      setSelectedProjectId(urlProj);
    };

    // Initial parse
    handleUrlChange();

    // Prevent blank paths at host roots, redirect to default /fr index
    if (window.location.pathname === "/" || window.location.pathname === "") {
      window.history.replaceState(null, "", "/fr");
    }

    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, []);

  // Smooth scroll resets on section transitions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as any });
  }, [activeSection, selectedProjectId]);

  const handleNavigate = (section: string) => {
    const nextUrl = generateUrl(lang, section, null);
    window.history.pushState(null, "", nextUrl);
    setSelectedProjectId(null);
    setActiveSection(section);
  };

  const handleSelectProject = (projectId: string) => {
    const nextUrl = generateUrl(lang, "projects", projectId);
    window.history.pushState(null, "", nextUrl);
    setSelectedProjectId(projectId);
    setActiveSection("projects");
  };

  const handleSetLang = (nextLang: "en" | "fr") => {
    const nextUrl = generateUrl(nextLang, activeSection, selectedProjectId);
    window.history.pushState(null, "", nextUrl);
    setLangState(nextLang);
  };

  const renderActiveView = () => {
    if (selectedProjectId) {
      return (
        <ProjectDetail 
          projectId={selectedProjectId}
          onNavigateBack={() => {
            const nextUrl = generateUrl(lang, "projects", null);
            window.history.pushState(null, "", nextUrl);
            setSelectedProjectId(null);
          }}
          lang={lang}
        />
      );
    }

    switch (activeSection) {
      case "home":
        return (
          <Home 
            onNavigate={handleNavigate}
            onSelectProject={handleSelectProject}
            lang={lang}
          />
        );
      case "projects":
        return (
          <Projects 
            onNavigate={handleNavigate}
            onSelectProject={handleSelectProject}
            lang={lang}
          />
        );
      case "expertises":
        return (
          <Expertises 
            onNavigate={handleNavigate}
            onSelectProject={handleSelectProject}
            lang={lang}
          />
        );
      case "lab":
        return (
          <AfricaDesignLab 
            onNavigate={handleNavigate}
            lang={lang}
          />
        );
      case "founder":
        return (
          <Founder 
            onNavigate={handleNavigate}
            lang={lang}
          />
        );
      case "firm":
        return (
          <Firm 
            onNavigate={handleNavigate}
            lang={lang}
          />
        );
      case "contact":
        return (
          <Contact 
            onNavigate={handleNavigate}
            lang={lang}
          />
        );
      default:
        return (
          <Home 
            onNavigate={handleNavigate}
            onSelectProject={handleSelectProject}
            lang={lang}
          />
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-black flex flex-col justify-between selection:bg-brand-gold selection:text-white">
      
      {/* Dynamic Header */}
      <Header 
        activeSection={selectedProjectId ? "projects" : activeSection} 
        onNavigate={handleNavigate} 
        lang={lang}
        setLang={(l) => handleSetLang(l as "en" | "fr")}
      />

      {/* Primary Workspace featuring AnimatePresence for cinematic sections transition fade */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProjectId ? `${lang}-${selectedProjectId}` : `${lang}-${activeSection}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full"
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Dynamic unified Footer */}
      <Footer onNavigate={handleNavigate} lang={lang} />

    </div>
  );
}
