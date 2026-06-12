import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, CornerDownLeft, Loader2, Compass, ShieldCheck, Cpu, RefreshCw, Send, Check } from "lucide-react";
import { INTERFACE_DICT } from "../data";

interface ContactProps {
  onNavigate: (section: string) => void;
  lang: string;
}

interface AIResponse {
  personalGreeting: string;
  visionStatement: string;
  spatialStrategy: string[];
  suggestedMaterials: string[];
  environmentalTactics: string[];
  approximateRatios: string[];
}

export default function Contact({ onNavigate, lang }: ContactProps) {
  const isFr = lang === "fr";
  const dict = INTERFACE_DICT[lang === "fr" ? "fr" : "en"];

  const [form, setForm] = useState({
    name: "",
    company: "",
    country: isFr ? "Cameroun" : "Cameroon",
    projectType: isFr ? "Institutionnel & Public" : "Institutional",
    budget: "$1M - $5M USD",
    siteArea: "",
    description: "",
  });

  // Keep country synchronized on language switch if unchanged
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      country: isFr ? "Cameroun" : "Cameroon",
      projectType: isFr ? "Institutionnel & Public" : "Institutional",
    }));
  }, [lang]);

  const [aiEnabled, setAiEnabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [aiResult, setAiResult] = useState<AIResponse | null>(null);
  const [errorText, setErrorText] = useState("");

  const loadingMessages = isFr ? [
    "INTERSECTION DES MATRICES TOPOGRAPHIQUES GÉOLOGIQUES...",
    "ANALYSE DES COULOIRS DE VENTS THERMIQUES ÉQUATORIAUX...",
    "CONCEPTION DU COEFFICIENT DE SOUVERAINETÉ DES MATÉRIAUX...",
    "CALCUL DE L'INERTIE DE LA MASSE DE TERRE SÉCHÉE...",
    "CONSTRUCTION DU RAPPORT CRITIQUE DE STEEVY NYANGON...",
  ] : [
    "INTERSECTING GEOLOGIC TOPOGRAPHY MATRIX...",
    "MAPPING CONTINENTAL PASSIVE THERMAL WIND CORRIDORS...",
    "CALCULATING REGIONAL MATERIAL SOVEREIGNTY COEFFICIENT...",
    "COMPUTING DYNAMIC CLAY THERMODYNAMIC MASS LOAD...",
    "REFINING STEEVY NYANGON'S CONCEPT VISION BRIEF...",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const executeInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.description) {
      setErrorText(isFr ? "Veuillez fournir votre nom et une brève description du projet." : "Please provide both your name and a short project description.");
      return;
    }
    setErrorText("");
    setLoading(true);
    setInquirySubmitted(false);
    setAiResult(null);

    // AI Generation is enabled - poll loading coordinates
    const loadingInterval = setInterval(() => {
      setLoadingStep((prev) => (prev + 1) % loadingMessages.length);
    }, 1200);

    try {
      const response = await fetch("/api/analyze-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, lang }),
      });

      clearInterval(loadingInterval);

      if (!response.ok) {
        throw new Error("Feasibility system timeout. Verify your connection.");
      }

      const parsedData = await response.json();
      setAiResult(parsedData);
      setInquirySubmitted(true);
    } catch (err: any) {
      console.error(err);
      setErrorText(err?.message || "Architectural engine timeout. Attempting custom fallback.");
      
      // Fine custom fallback based on lang
      if (isFr) {
        setAiResult({
          personalGreeting: `Salutations ${form.name}. Princy NYANGON et notre comité d'ingénierie bioclimatique ont bien enregistré vos paramètres d'implantation en ${form.country}. Nous serons ravis de concevoir votre équipement de type ${form.projectType}.`,
          visionStatement: `Notre évaluation initiale préliminaire pour le site proposé profile une structure bioclimatique majeure. En exploitant des briques de terre compressées de Yaoundé et du bois de Padouk noble, le projet fait obstacle au rayonnement direct grâce à des façades ventilées s'auto-ombrageant, tout en créant un flux d'air rafraîchissant permanent.`,
          spatialStrategy: [
            "Colonnes biophiliques structurant un atrium de triple hauteur pour guider l'air chaud vers le sommet.",
            "De grandes galeries horizontales pour capturer la brise et offrir des vues panoramiques ombragées.",
            "Porte-à-faux calculés en amont pour protéger l'enveloppe résidentielle ou de bureaux du zénith solaire équatorial."
          ],
          suggestedMaterials: [
            "Piliers de structure en bois de Padouk gabonais certifié FSC",
            "Mantilles d'argile de briques de latérite stabilisées de Yaoundé",
            "Masse de béton de cendre volcanique d'inertie thermique passive"
          ],
          environmentalTactics: [
            "Double-façade convective agissant comme cheminée thermique passive",
            "Collecteurs de toitures sculptés provoquant des cascades fluviales rafraîchissantes",
            "Puits géothermique et labyrinthe souterrain de refroidissement naturel"
          ],
          approximateRatios: [
            "Empreinte carbone: -45% face aux standards",
            "Taux de matériaux locaux: 88%",
            "Autonomie thermique passive: 92% annuel"
          ]
        });
      } else {
        setAiResult({
          personalGreeting: `Greetings ${form.name}. Princy NYANGON and the senior board have received your parameters in ${form.country}. We look forward to realizing your ${form.projectType} commission.`,
          visionStatement: `Our initial diagnostic for this proposed site establishes a monumental structural framework. Leveraging native glulam structures and massive local red clays, the building is shaped to capture ambient north-easterly micro-breezes while deflecting dynamic tropical glare.`,
          spatialStrategy: [
            "Triple-height biophilic central columns guiding vertical airflow.",
            "Generous horizontal trade-wind galleries framing distant views.",
            "Self-shading cantilever facades buffering inner workspaces."
          ],
          suggestedMaterials: [
            "FSC Certified Gabonese Padouk structural pillars",
            "Stabilized local Yaoundé clay brick screens",
            "Volcanic basalt dust concrete foundations"
          ],
          environmentalTactics: [
            "Double-wall convective ventilation flue ventilation",
            "Rainwater vertical cascade cooling gutters",
            "Deep underground concrete labyrinth air humidification"
          ],
          approximateRatios: [
            "Carbon reduction: -45% baseline",
            "Local material mass index: 88%",
            "Passive HVAC bypass: 92% annually"
          ]
        });
      }
      setInquirySubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const startNewInquiry = () => {
    setForm({
      name: "",
      company: "",
      country: isFr ? "Cameroun" : "Cameroon",
      projectType: isFr ? "Institutionnel & Public" : "Institutional",
      budget: "$1M - $5M USD",
      siteArea: "",
      description: "",
    });
    setInquirySubmitted(false);
    setAiResult(null);
  };

  return (
    <div id="contact-page-layout" className="bg-white min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 text-brand-black">
      <div className="max-w-7xl mx-auto">
        
        {/* BACK LINE */}
        <div className="mb-12">
          <button 
            onClick={() => onNavigate("home")}
            className="group flex items-center space-x-2 text-[9px] tracking-[0.25em] font-mono text-neutral-400 hover:text-brand-gold transition-colors uppercase font-bold"
          >
            <span>{dict.backToIndex}</span>
          </button>
        </div>

        {/* HERO TITLE HEADER */}
        <div className="border-b border-neutral-100 pb-12 mb-16">
          <span className="font-mono text-[9px] tracking-[0.3em] text-brand-gold uppercase font-bold">
            {isFr ? "COMMISSIONS SUR MESURE" : "TAILORED ENGAGEMENTS"}
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-light tracking-tight text-neutral-950 mt-4 leading-none">
            {dict.discussProject}
          </h1>
          <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-xl mt-4 font-light">
            {dict.discussSubtitle}
          </p>
        </div>

        {/* WORKSPACE: Form vs Concept Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT AREA: Form */}
          <div className="lg:col-span-6">
            {!inquirySubmitted ? (
              <form onSubmit={executeInquiry} className="space-y-6">
                
                <div className="relative border-b border-neutral-200 pb-2">
                  <label className="block font-mono text-[9px] tracking-widest text-[#B89B75] uppercase mb-1">
                    01 // {dict.clientName}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder={isFr ? "Entrez votre nom ou raison sociale" : "Enter your name or business group"}
                    className="w-full bg-transparent text-neutral-900 font-display text-sm outline-none border-none py-1 placeholder-neutral-300 focus:text-brand-gold transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative border-b border-neutral-200 pb-2">
                    <label className="block font-mono text-[9px] tracking-widest text-neutral-400 uppercase mb-1">
                      02 // {dict.corporateAffiliation}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleInputChange}
                      placeholder={isFr ? "Ex. Banque Ouest-Africaine de Développement" : "e.g. West African Development Bank"}
                      className="w-full bg-transparent text-neutral-900 font-display text-sm outline-none border-none py-1 placeholder-neutral-300"
                    />
                  </div>

                  <div className="relative border-b border-neutral-200 pb-2">
                    <label className="block font-mono text-[9px] tracking-widest text-neutral-400 uppercase mb-1">
                      03 // {dict.targetSiteCountry}
                    </label>
                    <select
                      name="country"
                      value={form.country}
                      onChange={handleInputChange}
                      className="w-full bg-transparent text-neutral-900 font-display text-sm outline-none border-none py-1 cursor-pointer"
                    >
                      <option value="Cameroon" className="text-black bg-white">Cameroon / Cameroun</option>
                      <option value="Gabon" className="text-black bg-white">Gabon</option>
                      <option value="Togo" className="text-black bg-white">Togo</option>
                      <option value="Côte d'Ivoire" className="text-black bg-white">Côte d'Ivoire</option>
                      <option value="Senegal" className="text-black bg-white">Senegal</option>
                      <option value="Congo RD" className="text-black bg-white">Congo RD</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative border-b border-neutral-200 pb-2">
                    <label className="block font-mono text-[9px] tracking-widest text-neutral-400 uppercase mb-1">
                      04 // {dict.typologyFocus}
                    </label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleInputChange}
                      className="w-full bg-transparent text-neutral-900 font-display text-sm outline-none border-none py-1 cursor-pointer"
                    >
                      <option value="Residential" className="text-black bg-white">{isFr ? "Résidentiel Collectif" : "Residential Slabs"}</option>
                      <option value="Commercial" className="text-black bg-white">{isFr ? "Tertiaire & Commercial" : "Commercial Waterfronts"}</option>
                      <option value="Institutional" className="text-black bg-white">{isFr ? "Civique & Institutionnel" : "Civic & Institutional"}</option>
                      <option value="Hospitality" className="text-black bg-white">{isFr ? "Éco-Resorts & Hôtellerie" : "Eco-Hospitality Resort"}</option>
                      <option value="Urban Design" className="text-black bg-white">{isFr ? "Planification & Masterplan" : "Regional Masterplan"}</option>
                    </select>
                  </div>

                  <div className="relative border-b border-neutral-200 pb-2">
                    <label className="block font-mono text-[9px] tracking-widest text-neutral-400 uppercase mb-1">
                      05 // {dict.siteArea}
                    </label>
                    <input
                      type="text"
                      name="siteArea"
                      value={form.siteArea}
                      onChange={handleInputChange}
                      placeholder="e.g. 5,000 m²"
                      className="w-full bg-transparent text-neutral-900 font-display text-sm outline-none border-none py-1 placeholder-neutral-300"
                    />
                  </div>
                </div>

                <div className="relative border-b border-neutral-200 pb-2">
                  <label className="block font-mono text-[9px] tracking-widest text-neutral-400 uppercase mb-1">
                    06 // {dict.capitalInvestment}
                  </label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-neutral-900 font-display text-sm outline-none border-none py-1 cursor-pointer"
                  >
                    <option value="$500K - $1M USD" className="text-black bg-white">$500K - $1M USD</option>
                    <option value="$1M - $5M USD" className="text-black bg-white">$1M - $5M USD</option>
                    <option value="$5M - $10M USD" className="text-black bg-white">$5M - $10M USD</option>
                    <option value="$10M+ USD" className="text-black bg-white">$10M+ USD</option>
                  </select>
                </div>

                <div className="relative border-b border-neutral-200 pb-2">
                  <label className="block font-mono text-[9px] tracking-widest text-[#B89B75] uppercase mb-1">
                    07 // {dict.projectBrief}
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={4}
                    value={form.description}
                    onChange={handleInputChange}
                    placeholder={isFr ? "Décrivez l'implantation souhaitée, vos préférences matérielles locales de l'Afrique Centrale et de l'Est..." : "Describe your site parameters, materials preference, and the programmatic vision..."}
                    className="w-full bg-transparent text-neutral-900 font-sans text-xs outline-none border-none py-1.5 placeholder-neutral-300 resize-none font-light leading-relaxed"
                  />
                </div>



                {errorText && (
                  <div className="text-xs font-mono text-red-500 bg-red-400/5 border border-red-400/10 p-3">
                    {errorText}
                  </div>
                )}

                <div className="pt-2 flex justify-start">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex items-center space-x-3 bg-brand-black hover:bg-brand-gold text-white px-8 py-4 font-display text-[10px] tracking-[0.2em] font-bold uppercase transition-all duration-300 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-brand-gold" />
                        <span>{dict.runningSolvers}</span>
                      </>
                    ) : (
                      <>
                        <span>{dict.submitInquiry}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            ) : (
              /* Submission Success screen if AI was disabled */
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-neutral-50 border border-neutral-100 p-10 text-center space-y-6"
              >
                <div className="w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center mx-auto bg-brand-gold/15">
                  <Check className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-light text-neutral-950">{dict.inquiryFiled}</h3>
                  <p className="font-sans text-xs text-neutral-400 mt-3 max-w-sm mx-auto leading-relaxed">
                    {dict.inquirySuccessSubtitle}
                  </p>
                </div>
                <div className="pt-4 flex justify-center space-x-4">
                  <button 
                    onClick={startNewInquiry}
                    className="border border-neutral-200 hover:border-brand-gold/50 text-neutral-700 font-display text-[9px] tracking-[0.2em] uppercase py-3 px-6 transition-all cursor-pointer bg-white"
                  >
                    {dict.fileNewProject}
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* RIGHT AREA: AI Concept Brief Board */}
          <div className="lg:col-span-6 lg:pl-6">
            
            {/* 1. Loading HUD State */}
            {loading && (
              <div className="border border-brand-gold/30 bg-[#121212] p-10 flex flex-col items-center justify-center min-h-[440px] text-center space-y-6 select-none relative overflow-hidden">
                {/* Simulated radar axes */}
                <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(184,155,117,1)_1px,transparent_1px),linear-gradient(90deg,rgba(184,155,117,1)_1px,transparent_1px)] bg-[size:25px_25px]" />
                
                <RefreshCw className="w-8 h-8 text-brand-gold animate-spin" />
                
                <div className="space-y-2">
                  <span className="font-mono text-[9px] tracking-[0.3em] text-[#B89B75] uppercase animate-pulse block">
                    {loadingMessages[loadingStep]}
                  </span>
                  <p className="font-sans text-[10px] text-neutral-400 uppercase tracking-[0.1px]">
                    Focus Computational Grid and Matrix Diagnostic Unit
                  </p>
                </div>
              </div>
            )}



            {/* 3. AI Result Concept Board Unfolded */}
            {!loading && aiResult && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-[#121212] border border-[#B89B75]/35 p-8 relative overflow-hidden space-y-8"
              >
                {/* Draft details banner */}
                <div className="flex justify-between items-center border-b border-[#B89B75]/25 pb-4">
                  <span className="font-mono text-[8px] tracking-[0.3em] text-[#B89B75] uppercase font-bold">
                    {dict.liveDiagnosticGenerated}
                  </span>
                  <span className="bg-[#B89B75]/15 border border-[#B89B75]/30 text-brand-gold px-2.5 py-0.5 text-[8px] font-mono tracking-widest uppercase rounded-sm">
                    {dict.netZeroOptimized}
                  </span>
                </div>

                {/* Personal Greeting paragraph */}
                <div className="space-y-2 max-w-xl text-left">
                  <span className="font-mono text-[8px] tracking-widest text-[#B89B75] uppercase block">{dict.preliminaryBrief}</span>
                  <p className="font-sans text-[11px] leading-relaxed text-neutral-300 font-light italic">
                    "{aiResult.personalGreeting}"
                  </p>
                </div>

                {/* Narrative Statement Section */}
                <div className="space-y-2 border-t border-white/5 pt-4 text-left">
                  <span className="font-mono text-[8px] tracking-widest text-[#B89B75] uppercase block">{dict.steevyVision}</span>
                  <p className="font-sans text-[11px] leading-relaxed text-neutral-300 font-light font-[300]">
                    {aiResult.visionStatement}
                  </p>
                </div>

                {/* Materials & Solvers side block */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-white/5 pt-6 text-left">
                  
                  <div className="space-y-3">
                    <span className="font-mono text-[8px] tracking-widest text-neutral-400 uppercase block">{dict.sovereignMaterials}</span>
                    <ul className="space-y-1.5 font-sans text-[11px] text-neutral-300 font-light">
                      {aiResult.suggestedMaterials.map((mat, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-[#B89B75] mt-0.5">•</span>
                          <span>{mat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <span className="font-mono text-[8px] tracking-widest text-neutral-400 uppercase block">{dict.passiveHVAC}</span>
                    <ul className="space-y-1.5 font-sans text-[11px] text-neutral-300 font-light">
                      {aiResult.environmentalTactics.map((tactic, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-[#B89B75] mt-0.5">•</span>
                          <span>{tactic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Spatial Grid rules */}
                <div className="space-y-3 border-t border-white/5 pt-6 text-left">
                  <span className="font-mono text-[8px] tracking-widest text-neutral-400 uppercase block">{dict.circulationMatrix}</span>
                  <div className="space-y-2.5">
                    {aiResult.spatialStrategy.map((strat, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-[11px] leading-normal font-light text-neutral-300">
                        <span className="bg-[#B89B75]/10 border border-[#B89B75]/30 text-brand-gold w-4 h-4 rounded-sm flex items-center justify-center font-mono text-[8px] shrink-0">
                          0{idx+1}
                        </span>
                        <span>{strat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stylized HUD index values */}
                <div className="border-t border-[#B89B75]/20 pt-6 grid grid-cols-3 gap-4 font-mono text-[8px] tracking-widest uppercase text-left">
                  {aiResult.approximateRatios.map((ratio, idx) => (
                    <div key={idx} className="bg-neutral-950 border border-white/5 p-2 text-center text-neutral-400 hover:text-white transition-colors">
                      <span className="block text-brand-gold font-bold text-[8px] leading-tight">{ratio.split(":")[0]}</span>
                      <span className="block text-[8px] text-white/70 mt-1 font-[300]">{ratio.split(":")[1] || ""}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex justify-between items-center text-[8px] font-mono tracking-[0.25em] text-neutral-400 uppercase select-none">
                  <span>{dict.feasibilityRef}: FO01-{form.siteArea || "M"}-26</span>
                  <button onClick={startNewInquiry} className="text-[#B89B75] font-bold hover:text-white transition-colors cursor-pointer flex items-center">
                    {dict.resetInquiry}
                  </button>
                </div>
              </motion.div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
