import { Mail, Phone, MapPin, Globe } from "lucide-react";
import FIGLogo from "./FIGLogo";

interface FooterProps {
  onNavigate: (section: string) => void;
  lang: string;
}

export default function Footer({ onNavigate, lang }: FooterProps) {
  const isFr = lang === "fr";

  return (
    <footer id="main-footer" className="bg-brand-black border-t border-brand-concrete/5 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 sm:gap-16">
        
        {/* Brand Segment */}
        <div id="footer-logo-section" className="lg:col-span-4 flex flex-col space-y-4">
          <div className="flex items-center cursor-pointer max-w-[200px]" onClick={() => onNavigate("home")}>
            <FIGLogo light={true} height={50} className="w-full" />
          </div>
          <p className="font-display text-xs text-brand-gold italic font-light tracking-wide">
            {isFr 
              ? "Concevoir les territoires, révéler les potentiels, bâtir l'Afrique de demain." 
              : "Conceiving territories, revealing potentials, building tomorrow's Africa."}
          </p>
          <p className="font-sans text-xs text-[#E8E8E8]/50 leading-relaxed pt-2">
            {isFr 
              ? "FOCUS INTERNATIONAL GROUP est un cabinet d'architecture, d'urbanisme et de conseil qui accompagne les institutions, entreprises et investisseurs dans la conception de projets durables, innovants et adaptés aux réalités africaines." 
              : "FOCUS INTERNATIONAL GROUP is an architecture, urban planning and design consultancy supporting institutions, companies and investors in designing sustainable, innovative projects tailored to African realities."}
          </p>
        </div>

        {/* Column 2: Coordonnées */}
        <div id="footer-coordinates-section" className="lg:col-span-3 flex flex-col space-y-4 text-xs">
          <h4 className="font-display text-[10px] tracking-[0.2em] uppercase text-brand-gold font-bold">
            {isFr ? "Coordonnées" : "Coordinates"}
          </h4>
          <div className="space-y-3">
            <div className="text-[#E8E8E8]/80">
              <span className="block font-bold text-[#E8E8E8]">{isFr ? "Siège Social" : "Headquarters"}</span>
              <div className="flex items-start space-x-2 mt-1.5 text-[#E8E8E8]/65">
                <MapPin className="w-3.5 h-3.5 text-brand-gold mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  Carrefour Coron, en face de CAMI Toyota<br />
                  Yaoundé, Cameroun
                </span>
              </div>
            </div>

            <div className="space-y-1.5 font-mono text-[10px] text-[#E8E8E8]/60 pt-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-brand-gold/70" />
                <span>Tél. : +237 222 309 018</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-brand-gold/70" />
                <span>Mobile : +237 696 231 378</span>
              </div>
              <div className="flex items-center space-x-2 pt-1">
                <Mail className="w-3.5 h-3.5 text-brand-gold/70" />
                <span className="hover:text-brand-gold transition-colors">info@focusinternationalgroup.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Explorer */}
        <div id="footer-explore-links" className="lg:col-span-2 flex flex-col space-y-4 text-xs">
          <h4 className="font-display text-[10px] tracking-[0.2em] uppercase text-brand-gold font-bold">
            {isFr ? "Explorer" : "Explore"}
          </h4>
          <div className="flex flex-col space-y-2 text-[#E8E8E8]/65 font-display text-[10px] tracking-wider uppercase">
            <button onClick={() => onNavigate("home")} className="text-left hover:text-brand-gold transition-colors py-0.5 font-bold font-medium mb-1">{isFr ? "Accueil" : "Home"}</button>
            <button onClick={() => onNavigate("firm")} className="text-left hover:text-brand-gold transition-colors py-0.5 font-bold font-medium mb-1">{isFr ? "Notre Vision" : "Our Vision"}</button>
            <button onClick={() => onNavigate("founder")} className="text-left hover:text-brand-gold transition-colors py-0.5 font-bold font-medium mb-1">{isFr ? "Le Fondateur" : "The Founder"}</button>
            <button onClick={() => onNavigate("firm")} className="text-left hover:text-brand-gold transition-colors py-0.5 font-bold font-medium mb-1">{isFr ? "Le Cabinet" : "The Firm"}</button>
            <button onClick={() => onNavigate("expertises")} className="text-left hover:text-brand-gold transition-colors py-0.5 font-bold font-medium mb-1">{isFr ? "Nos Expertises" : "Our Expertise"}</button>
            <button onClick={() => onNavigate("projects")} className="text-left hover:text-brand-gold transition-colors py-0.5 font-bold font-medium mb-1">{isFr ? "Nos Réalisations" : "Our Realizations"}</button>
            <button onClick={() => onNavigate("projects")} className="text-left hover:text-brand-gold transition-colors py-0.5 font-bold font-medium mb-1">{isFr ? "Actualités" : "News"}</button>
            <button onClick={() => onNavigate("contact")} className="text-left hover:text-brand-gold transition-colors py-0.5 font-bold font-medium mb-1">Contact</button>
          </div>
        </div>

        {/* Column 4: Nos domaines d'intervention */}
        <div id="footer-interventions-section" className="lg:col-span-3 flex flex-col space-y-4 text-xs">
          <h4 className="font-display text-[10px] tracking-[0.2em] uppercase text-brand-gold font-bold">
            {isFr ? "Nos domaines d'intervention" : "Our Areas of Intervention"}
          </h4>
          <ul className="space-y-2 text-[#E8E8E8]/65 font-display text-[10px] tracking-wider uppercase">
            <li className="hover:text-brand-gold transition-colors">{isFr ? "Architecture" : "Architecture"}</li>
            <li className="hover:text-brand-gold transition-colors">{isFr ? "Urbanisme" : "Urban Planning"}</li>
            <li className="hover:text-brand-gold transition-colors">{isFr ? "Maîtrise d'œuvre" : "Project Management"}</li>
            <li className="hover:text-brand-gold transition-colors">{isFr ? "Conseil stratégique" : "Strategic Consulting"}</li>
            <li className="hover:text-brand-gold transition-colors">{isFr ? "Design d'espaces" : "Space Design"}</li>
            <li className="hover:text-brand-gold transition-colors">{isFr ? "Développement territorial" : "Territorial Development"}</li>
          </ul>
        </div>
      </div>



      {/* Sub-footer line credits */}
      <div id="footer-bottom-credits" className="max-w-7xl mx-auto mt-12 pt-8 border-t border-brand-concrete/5 flex flex-col md:flex-row items-center justify-between text-[10px] tracking-wider text-[#E8E8E8]/35 uppercase">
        <div className="flex items-center space-x-1 font-mono">
          <span>
            {isFr 
              ? "© 2026 FOCUS INTERNATIONAL GROUP. Tous droits réservés." 
              : "© 2026 FOCUS INTERNATIONAL GROUP. All rights reserved."}
          </span>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0 font-display font-semibold text-center md:text-right">
          <span>
            {isFr 
              ? "Architecture • Urbanisme • Conseil • Développement territorial" 
              : "Architecture • Urban Planning • Consulting • Territorial Development"}
          </span>
        </div>
      </div>
    </footer>
  );
}
