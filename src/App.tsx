import { useState, useEffect, ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Shield,
  Briefcase,
  GraduationCap,
  FileText,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Copy,
  Check,
  Search,
  Code,
  Lock,
  Cpu,
  Bookmark,
  Send,
  Sparkles,
  Award,
  Upload,
  RefreshCw,
  Camera,
  Layers,
  ArrowRight
} from "lucide-react";
import {
  contactInfo,
  pillars,
  publications,
  academicContributions,
  projects,
  skills,
  Pillar,
  Project
} from "./data";

export default function App() {
  const [activePillar, setActivePillar] = useState<string>("strategic-leadership");
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [collabType, setCollabType] = useState<string>("research");
  const [collabInterest, setCollabInterest] = useState<string>("trustworthy-ai");
  const [customName, setCustomName] = useState<string>("");
  
  // Interactive Custom Photo persistence using LocalStorage
  const [personalPhoto, setPersonalPhoto] = useState<string>("C:\\Users\\Acer\\Downloads\\Portfolio_Pradip_Paneru-main\\src\\assets\\images\\pradip_paneru_potrait_1784407924824.png");
  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(false);

  // Stepped Skill Matrix State
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<number>(0);
  const [showFullMatrix, setShowFullMatrix] = useState<boolean>(false);

  useEffect(() => {
    const savedPhoto = localStorage.getItem("pradip_custom_photo");
    if (savedPhoto) {
      setPersonalPhoto(savedPhoto);
      setIsCustomPhoto(true);
    }
  }, []);

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        localStorage.setItem("pradip_custom_photo", base64String);
        setPersonalPhoto(base64String);
        setIsCustomPhoto(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetPhoto = () => {
    localStorage.removeItem("pradip_custom_photo");
    setPersonalPhoto("C:\\Users\\Acer\\Downloads\\Portfolio_Pradip_Paneru-main\\src\\assets\\images\\pradip_paneru_potrait_1784407924824.png");
    setIsCustomPhoto(false);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const getPillarIcon = (id: string) => {
    switch (id) {
      case "strategic-leadership":
        return <Briefcase className="w-5 h-5 text-[#0f172a]" />;
      case "trustworthy-technology":
        return <Shield className="w-5 h-5 text-[#0f172a]" />;
      case "educating-generation":
        return <GraduationCap className="w-5 h-5 text-[#0f172a]" />;
      default:
        return <Briefcase className="w-5 h-5 text-[#0f172a]" />;
    }
  };

  const filteredProjects = projects.filter((project) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.category.toLowerCase().includes(searchLower)
    );
  });

  const generateEmailDraft = () => {
    const recipient = contactInfo.email;
    const subject = encodeURIComponent(`Inquiry regarding Collaboration on ${collabInterest.replace("-", " ").toUpperCase()}`);
    
    let bodyText = `Dear Pradip,\n\nI hope this email finds you well. My name is ${customName || "[Your Name]"}, and I am writing to you after reviewing your institutional portfolio. \n\n`;

    if (collabType === "research") {
      bodyText += `I am deeply interested in your work in ${collabInterest.replace("-", " ")}. Given your recent publications in privacy-preserving sentiment analysis and cyber-physical systems optimization, I would love to explore synergy or potential collaborative research projects between our institutions.`;
    } else if (collabType === "venture") {
      bodyText += `I am interested in your entrepreneurship work with Codesk Innovations and Room Sewa. I would value your insights or potential strategic advice regarding early-stage technical strategy and systemic design in the tech space.`;
    } else {
      bodyText += `I am writing from an educational context and am interested in your curriculum design and mentorship experience across institutions like IOE and Westminster. I would appreciate the opportunity to discuss pedagogical strategies or invite you for a speaking/training session.`;
    }

    bodyText += `\n\nI look forward to hearing from you.\n\nWarm regards,\n${customName || "[Your Name]"}`;
    return `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#0f172a] font-sans selection:bg-[#0f172a] selection:text-[#FAF6F0] border-t-8 border-[#0f172a] relative overflow-x-hidden">
      
      {/* Subtle paper grain / micro-lines pattern to evoke structural high-end stationery */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5dec9_1px,transparent_1px),linear-gradient(to_bottom,#e5dec9_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none opacity-40" />

      {/* Institutional Top Ribbon Banner */}
      <div className="w-full bg-[#0f172a] text-[#FAF6F0] text-[10px] tracking-[0.25em] uppercase py-3 px-4 text-center font-mono relative z-50 shadow-sm">
        AI Security • Strategic Venture Architecture • Academic Rigor • Nepal
      </div>

      {/* Primary Header */}
      <header className="sticky top-0 bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#0f172a]/10 z-40 transition-all">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="group flex flex-col justify-center">
            <span className="font-serif text-2xl tracking-tight font-black text-[#0f172a] group-hover:text-slate-800 transition-colors">
              PRADIP PANERU
            </span>
            <span className="text-[10px] tracking-[0.2em] font-mono text-slate-500 uppercase mt-0.5">
              Executive Portfolio
            </span>
          </a>

          {/* Minimal Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-[11px] tracking-widest uppercase font-bold text-slate-600">
            <a href="#vision" className="hover:text-[#0f172a] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0f172a] hover:after:w-full after:transition-all">Vision</a>
            <a href="#initiatives" className="hover:text-[#0f172a] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0f172a] hover:after:w-full after:transition-all">Pillars</a>
            <a href="#research" className="hover:text-[#0f172a] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0f172a] hover:after:w-full after:transition-all">Research</a>
            <a href="#skills" className="hover:text-[#0f172a] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0f172a] hover:after:w-full after:transition-all">Matrix</a>
            <a href="#collab" className="hover:text-[#0f172a] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0f172a] hover:after:w-full after:transition-all">Inquiries</a>
          </nav>

          {/* Action Trigger */}
          <a
            href="#collab"
            className="inline-flex items-center space-x-2 px-5 py-2.5 border-2 border-[#0f172a] bg-[#0f172a] text-[#FAF6F0] text-xs font-bold uppercase tracking-wider hover:bg-transparent hover:text-[#0f172a] transition-all duration-300"
          >
            <span>Initiate Contact</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-12 pb-24">
        
        {/* Section: Hero & Personal Photo */}
        <section id="hero" className="py-8 md:py-16 border-b border-[#0f172a]/10 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Left Hand: Tagline, Title, and Professional Subtitle */}
            <div className="md:col-span-7 space-y-6">
              {/* Top Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2.5 px-3 py-1.5 bg-[#0f172a] text-[#FAF6F0] text-[10px] font-mono tracking-widest uppercase"
              >
                <Award className="w-3.5 h-3.5 text-slate-300" />
                <span>Academic & Entrepreneurial Profile</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#0f172a] leading-[1.1] font-bold"
              >
                Building ideas today <br />
                <span className="italic text-slate-600 font-light">shape a better tomorrow.</span>
              </motion.h1>

              {/* Role Title Block */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="border-l-4 border-[#0f172a] pl-6 py-1"
              >
                <p className="font-mono text-sm uppercase tracking-widest text-[#0f172a] font-black">
                  PRADIP PANERU
                </p>
                <p className="text-slate-800 text-sm mt-2 max-w-xl leading-relaxed">
                  AI Security Researcher, Entrepreneur, and Educator. Advancing trustworthy AI systems, securing critical cyber-physical interfaces, and mentoring the next generation of engineers in South Asia.
                </p>
              </motion.div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#initiatives"
                  className="px-5 py-2.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors"
                >
                  Explore Initiatives
                </a>
                <a
                  href="#collab"
                  className="px-5 py-2.5 border border-slate-900 text-[#0f172a] text-xs font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all"
                >
                  Request Collaboration
                </a>
              </div>
            </div>

            {/* Right Hand: Elegant Space for Personal Photo with Real Interactive Uploader */}
            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] bg-[#f7f4eb] border-2 border-[#0f172a] p-3 shadow-xl group overflow-hidden"
              >
                {/* Visual corners / crosshairs to emphasize precision institutional design */}
                <div className="absolute top-1 left-1 w-3 h-3 border-t border-l border-slate-900" />
                <div className="absolute top-1 right-1 w-3 h-3 border-t border-r border-slate-900" />
                <div className="absolute bottom-1 left-1 w-3 h-3 border-b border-l border-slate-900" />
                <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-slate-900" />

                <div className="w-full h-full bg-[#FAF6F0] relative overflow-hidden flex items-center justify-center border border-slate-900/10">
                  <img
                    src={personalPhoto}
                    alt="Pradip Paneru Portrait"
                    className="w-full h-full object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if local image doesn't load
                      (e.target as HTMLImageElement).src = "https://picsum.photos/seed/pradip/400/533";
                    }}
                  />

                  {/* Absolute Uploader Trigger Overlay */}
                  <div className="absolute inset-0 bg-[#0f172a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center text-[#FAF6F0] z-20">
                    <Camera className="w-8 h-8 mb-2" />
                    <span className="text-xs font-mono uppercase tracking-wider font-bold">Customize Photo</span>
                    <p className="text-[10px] text-slate-300 mt-1">Upload JPEG/PNG portrait</p>
                    <label className="mt-4 px-4 py-1.5 bg-[#FAF6F0] text-[#0f172a] text-[10px] uppercase font-bold tracking-widest hover:bg-white cursor-pointer transition-colors shadow">
                      Select Image
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                {/* Micro-label indicator */}
                <div className="absolute bottom-4 left-4 bg-slate-950/80 text-[#FAF6F0] text-[9px] font-mono uppercase tracking-widest px-2 py-1 border border-slate-800 z-10 backdrop-blur-sm">
                  PORTRAIT ATTESTATION
                </div>
              </motion.div>

              {/* Photo customization settings bar */}
              <div className="w-full max-w-[280px] sm:max-w-[320px] mt-3 flex items-center justify-between text-[10px] font-mono text-slate-500 px-1">
                {isCustomPhoto ? (
                  <button
                    onClick={resetPhoto}
                    className="flex items-center space-x-1 hover:text-[#0f172a] transition-colors"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reset to Default</span>
                  </button>
                ) : (
                  <span>Default Portrait Representation</span>
                )}
                <span>3:4 Aspect Ratio</span>
              </div>
            </div>

          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-slate-900/10 mt-12">
            <div className="pt-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 block">Research Scope</span>
              <span className="font-serif text-lg font-bold text-slate-900">Trustworthy ML</span>
            </div>
            <div className="pt-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 block">Current Focus</span>
              <span className="font-serif text-lg font-bold text-slate-900">Differential Privacy</span>
            </div>
            <div className="pt-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 block">Academic Path</span>
              <span className="font-serif text-lg font-bold text-slate-900">M.Sc. IOE Pulchowk</span>
            </div>
            <div className="pt-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 block">Venture Leadership</span>
              <span className="font-serif text-lg font-bold text-slate-900">Codesk & RoomSewa</span>
            </div>
          </div>
        </section>

        {/* Section: Vision & Philosophy */}
        <section id="vision" className="py-16 border-b border-[#0f172a]/10 scroll-mt-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Elegant Quotation Mark Background Element */}
            <div className="md:col-span-12 lg:col-span-8 flex flex-col justify-center">
              <span className="font-serif text-8xl text-slate-300 leading-none h-6 select-none">“</span>
              <blockquote className="font-serif text-2xl md:text-3xl text-slate-900 leading-relaxed pl-4 md:pl-8 italic font-light tracking-wide">
                Every generation inherits a nation. My generation has the responsibility to improve it.
              </blockquote>
              <div className="mt-6 pl-4 md:pl-8 flex items-center space-x-3">
                <div className="w-8 h-px bg-slate-900" />
                <span className="font-mono text-xs uppercase tracking-widest text-slate-600">The Personal Credo of Pradip Paneru</span>
              </div>
            </div>

            {/* Strategic Pillars Summary Text */}
            <div className="md:col-span-12 lg:col-span-4 bg-[#f7f4eb] border border-slate-900/15 p-8 rounded-none shadow-sm">
              <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-3 font-semibold">Institutional Outlook</h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                True statecraft in technology requires bridging raw mathematical security constraints with physical world deployment. Through entrepreneurship, research, and rigorous academic instruction, the goal is to construct a resilient digital backbone for Nepal.
              </p>
              <div className="text-[11px] font-mono text-slate-500 border-t border-slate-900/10 pt-4">
                <div className="flex justify-between py-1">
                  <span>Scope:</span>
                  <span className="text-slate-800 font-medium">National / Regional</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Commitment:</span>
                  <span className="text-slate-800 font-medium">Open Academic Inquiry</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section: Initiatives (The Three Pillars) */}
        <section id="initiatives" className="py-16 border-b border-[#0f172a]/10 scroll-mt-20">
          <div className="mb-12">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 block mb-2">Operational Framework</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0f172a] font-bold">Pillars of Impact & Leadership</h2>
            <p className="text-slate-600 text-sm max-w-2xl mt-2">
              Structuring career milestones not as a history of positions, but as dedicated strategic vectors moving simultaneously towards safe, reliable technological futures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Interactive Selector Rail */}
            <div className="lg:col-span-4 space-y-3">
              {pillars.map((pillar) => {
                const isActive = activePillar === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillar(pillar.id)}
                    className={`w-full text-left p-5 border transition-all duration-300 relative ${
                      isActive
                        ? "bg-[#0f172a] text-[#FAF6F0] border-[#0f172a] shadow-md"
                        : "bg-[#f7f4eb] text-slate-700 border-[#0f172a]/10 hover:border-slate-500"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePillarIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-300"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`p-1.5 border rounded ${isActive ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                        {getPillarIcon(pillar.id)}
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-widest opacity-80">
                        {pillar.id === "strategic-leadership" ? "Pillar I" : pillar.id === "trustworthy-technology" ? "Pillar II" : "Pillar III"}
                      </span>
                    </div>
                    <span className="font-serif text-base font-bold leading-tight block">
                      {pillar.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Content Display Block */}
            <div className="lg:col-span-8 bg-white border border-[#0f172a]/15 p-6 sm:p-8 shadow-sm min-h-[400px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {pillars.map((p) => {
                  if (p.id !== activePillar) return null;
                  return (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-semibold block">
                          {p.subtitle}
                        </span>
                        <h3 className="font-serif text-2xl text-slate-900 font-bold mt-1">
                          {p.title}
                        </h3>
                        <p className="text-slate-600 text-sm mt-3 border-l-2 border-[#0f172a] pl-4 italic">
                          {p.description}
                        </p>
                      </div>

                      <div className="space-y-6 pt-4">
                        {p.items.map((item, idx) => (
                          <div key={idx} className="border-t border-slate-100 pt-4">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                              <div>
                                <span className="font-serif text-base font-bold text-slate-900 block">
                                  {item.role}
                                </span>
                                <span className="font-mono text-xs text-slate-500 font-semibold">
                                  {item.organization}
                                </span>
                              </div>
                              <span className="inline-block mt-1 sm:mt-0 px-2.5 py-1 bg-[#f7f4eb] border border-slate-200 text-slate-700 font-mono text-[10px] tracking-wider uppercase">
                                {item.period}
                              </span>
                            </div>
                            <ul className="space-y-2.5">
                              {item.bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className="text-xs text-slate-700 leading-relaxed flex items-start">
                                  <ChevronRight className="w-3.5 h-3.5 text-slate-900 mr-2 mt-0.5 shrink-0" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* Technical Skill Sync Banner */}
              <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Verification Scope: Active Regional Milestones</span>
                <a href="#skills" className="text-slate-900 hover:underline flex items-center space-x-1">
                  <span>View Technical Matrix</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Section: Research & Publications */}
        <section id="research" className="py-16 border-b border-[#0f172a]/10 scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Research Links and Journal Review */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 block mb-2">Academic Credentials</span>
                <h2 className="font-serif text-3xl text-slate-900 font-bold">Scientific Contributions</h2>
                <p className="text-slate-700 text-sm mt-3 leading-relaxed">
                  Pioneering local sentiment preservation through Differential Privacy (DP), alongside optimization research for networked cyber-physical systems.
                </p>
              </div>

              {/* Citation Resource Links */}
              <div className="space-y-3 pt-4">
                <a
                  href={contactInfo.researchGate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white border border-[#0f172a]/10 hover:border-slate-900 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-[#f7f4eb] rounded border border-slate-200">
                      <FileText className="w-4 h-4 text-slate-800" />
                    </div>
                    <div>
                      <span className="font-serif text-sm font-bold text-slate-900 block group-hover:text-slate-700 transition-colors">ResearchGate</span>
                      <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider">Publications & Preprints</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
                </a>

                <a
                  href={contactInfo.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white border border-[#0f172a]/10 hover:border-slate-900 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-[#f7f4eb] rounded border border-slate-200">
                      <Bookmark className="w-4 h-4 text-slate-800" />
                    </div>
                    <div>
                      <span className="font-serif text-sm font-bold text-slate-900 block group-hover:text-slate-700 transition-colors">Google Scholar</span>
                      <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider">Citations Matrix</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
                </a>

                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white border border-[#0f172a]/10 hover:border-slate-900 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-[#f7f4eb] rounded border border-slate-200">
                      <Code className="w-4 h-4 text-slate-800" />
                    </div>
                    <div>
                      <span className="font-serif text-sm font-bold text-slate-900 block group-hover:text-slate-700 transition-colors">GitHub Repository</span>
                      <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider">Source Artifacts</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
                </a>
              </div>

              {/* Journal Reviewer Card */}
              <div className="bg-[#f7f4eb] border border-slate-900/10 p-6 rounded-none">
                <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 font-semibold block">Editorial Board Roles</span>
                {academicContributions.map((contrib, idx) => (
                  <div key={idx} className="mt-2.5">
                    <span className="font-serif text-base font-bold text-slate-900 block">{contrib.role}</span>
                    <span className="font-mono text-[11px] text-slate-600 block mt-1">{contrib.organization}</span>
                    <p className="text-xs text-slate-500 leading-relaxed mt-2.5 italic">
                      &ldquo;{contrib.details}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Peer-Reviewed Publications & Projects Showcase */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Part 1: Peer-Reviewed Work */}
              <div>
                <h3 className="font-serif text-xl font-bold text-[#0f172a] border-b border-[#0f172a]/10 pb-2 mb-6">
                  Featured Publications & Thesis
                </h3>

                {/* Master Thesis Detail */}
                <div className="bg-white border border-[#0f172a]/15 p-6 shadow-sm mb-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 bg-[#0f172a] text-[#FAF6F0] text-[9px] font-mono uppercase tracking-widest px-3 py-1 font-bold">
                    Master Thesis
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-semibold block mb-1">
                    M.Sc. Network & Cyber Security
                  </span>
                  <h4 className="font-serif text-lg font-bold text-slate-900 leading-snug">
                    A Study Of Differential Privacy In Fine Tuning A Nepali Language Model For Sentiment Analysis.
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Analyzing strict privacy budgets (ε, δ) when adapting transformer structures like NepaliBERT. Evaluates optimization strategies to secure local language representation data without destroying sentiment evaluation utility.
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>IOE Pulchowk Campus (2024 - Present)</span>
                  </div>
                </div>

                {/* Publications List */}
                <div className="space-y-6">
                  {publications.map((pub, idx) => (
                    <div key={idx} className="border-l-2 border-slate-300 pl-5 py-1">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 block">
                        {pub.journal}
                      </span>
                      <h4 className="font-serif text-base font-bold text-[#0f172a] leading-snug mt-1">
                        {pub.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Authors: {pub.authors}
                      </p>
                      <div className="text-xs text-slate-600 mt-2 bg-[#f7f4eb] p-2.5 border border-slate-900/10">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 block">Technical Focus</span>
                        {pub.focus}
                      </div>

                      <div className="mt-3.5 flex items-center space-x-4">
                        <button
                          onClick={() => handleCopy(pub.citation, `cit-${idx}`)}
                          className="inline-flex items-center space-x-1.5 text-xs text-slate-600 hover:text-black transition-colors font-mono"
                        >
                          {copiedText === `cit-${idx}` ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-green-600" />
                              <span className="text-green-600">Citation Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Citation (APA)</span>
                            </>
                          )}
                        </button>
                        {pub.link && (
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 text-xs text-slate-600 hover:text-black transition-colors font-mono"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>View Source</span>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Part 2: Interactive Project Explorer */}
              <div className="pt-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-[#0f172a]/10 pb-2 mb-6">
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    Engineering Projects Registry
                  </h3>
                  {/* Small Search Bar */}
                  <div className="relative mt-2 sm:mt-0 max-w-xs">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search systems..."
                      className="w-full pl-9 pr-4 py-1.5 bg-white border border-slate-900/15 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, idx) => (
                      <div key={idx} className="bg-white border border-[#0f172a]/10 p-5 shadow-sm hover:border-[#0f172a]/30 transition-all">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider border border-slate-900/10 text-slate-700 bg-slate-50">
                            {project.category.toUpperCase()}
                          </span>
                          <div className="text-slate-500">
                            {project.category === "ml" && <Sparkles className="w-4 h-4" />}
                            {project.category === "security" && <Lock className="w-4 h-4" />}
                            {project.category === "iot" && <Cpu className="w-4 h-4" />}
                          </div>
                        </div>
                        <h4 className="font-serif text-base font-bold text-slate-900 mb-1.5">{project.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{project.description}</p>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-8 bg-[#f7f4eb]/40 border border-dashed border-slate-200 font-mono text-xs text-slate-500">
                      No matching projects found in registry.
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Section: Technical Skills Matrix - Interactive, Stepped / Horizontal Scrolling */}
        <section id="skills" className="py-16 border-b border-[#0f172a]/10 scroll-mt-20">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 block mb-2">Capabilities Registry</span>
            <h2 className="font-serif text-3xl text-slate-900 font-bold">Technical Matrix Explorer</h2>
            <p className="text-slate-600 text-sm mt-2">
              Select any expert category domain to browse verified regional and scientific capabilities, or review the complete global capabilities framework.
            </p>
          </div>

          {/* Step 1: Category Selector Rail with Horizontal Scrolling */}
          <div className="w-full flex space-x-2 overflow-x-auto pb-4 mb-8 snap-x scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
            {skills.map((group, idx) => {
              const isSelected = selectedSkillCategory === idx;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedSkillCategory(idx);
                    setShowFullMatrix(false);
                  }}
                  className={`px-5 py-3 border font-mono text-xs uppercase tracking-wider whitespace-nowrap snap-center transition-all ${
                    isSelected && !showFullMatrix
                      ? "bg-[#0f172a] text-[#FAF6F0] border-[#0f172a] font-bold shadow-sm"
                      : "bg-white text-slate-600 border-[#0f172a]/10 hover:border-slate-500 hover:text-slate-900"
                  }`}
                >
                  {group.category}
                </button>
              );
            })}
            <button
              onClick={() => setShowFullMatrix(true)}
              className={`px-5 py-3 border font-mono text-xs uppercase tracking-wider whitespace-nowrap snap-center transition-all flex items-center space-x-1.5 ${
                showFullMatrix
                  ? "bg-[#0f172a] text-[#FAF6F0] border-[#0f172a] font-bold shadow-sm"
                  : "bg-[#f7f4eb] text-slate-700 border-[#0f172a]/15 hover:border-slate-600"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Show Entire Framework</span>
            </button>
          </div>

          {/* Step 2: Content display based on selection */}
          <AnimatePresence mode="wait">
            {showFullMatrix ? (
              <motion.div
                key="full-matrix"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {skills.map((group, idx) => (
                  <div key={idx} className="bg-white border border-[#0f172a]/10 p-6 flex flex-col justify-between hover:border-slate-900 transition-all">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4">
                        {group.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="inline-block px-2.5 py-1 bg-[#f7f4eb] border border-slate-200 text-slate-700 font-mono text-[10px]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 mt-6 pt-3 border-t border-slate-100">
                      Status: Certified Verified
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={`single-category-${selectedSkillCategory}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-[#0f172a]/15 p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-8"
              >
                <div className="space-y-4 max-w-xl">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-semibold block">
                    Active Step Division
                  </span>
                  <h3 className="font-serif text-2xl text-slate-900 font-bold">
                    {skills[selectedSkillCategory].category} Expert Segment
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Underlying competencies developed through rigorous academic coursework, peer-reviewed engineering projects, and technical system deployment at institutions such as Tribhuvan University (IOE).
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {skills[selectedSkillCategory].skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-block px-3 py-1.5 bg-[#f7f4eb] border border-[#0f172a]/10 text-slate-800 font-mono text-xs font-medium hover:bg-[#0f172a] hover:text-[#FAF6F0] hover:border-[#0f172a] transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-[#f7f4eb] p-6 border border-slate-900/10 flex flex-col justify-center text-center font-mono space-y-4 shrink-0 min-w-[200px]">
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest">Active Standard</div>
                  <div className="text-2xl font-serif text-slate-900 font-bold italic">ISO/SEC</div>
                  <button
                    onClick={() => {
                      if (selectedSkillCategory < skills.length - 1) {
                        setSelectedSkillCategory(selectedSkillCategory + 1);
                      } else {
                        setSelectedSkillCategory(0);
                      }
                    }}
                    className="w-full py-2 bg-slate-900 text-white text-[10px] uppercase font-bold tracking-widest hover:bg-black transition-colors flex items-center justify-center space-x-1"
                  >
                    <span>Next Pillar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Section: Interactive Collaboration & Brief Builder */}
        <section id="collab" className="py-16 border-b border-[#0f172a]/10 scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 block mb-2">Partnership Portal</span>
                <h2 className="font-serif text-3xl text-slate-900 font-bold">Co-Authoring the Future</h2>
                <p className="text-slate-700 text-sm mt-3 leading-relaxed">
                  Pradip works with academic research labs, high-growth technology startups, and curriculum design committees. 
                </p>
                <p className="text-slate-700 text-sm mt-2 leading-relaxed">
                  Use the adjacent interactive compiler to outline an engagement brief. This generates a direct, secure mailto link immediately containing the structural proposal.
                </p>
              </div>

              {/* Verified contact tags */}
              <div className="space-y-3 pt-2 text-xs text-slate-800 font-mono">
                <div
                  onClick={() => handleCopy(contactInfo.email, "mail1")}
                  className="flex items-center justify-between p-3 bg-white border border-[#0f172a]/10 hover:border-slate-500 cursor-pointer transition-colors"
                >
                  <div className="flex items-center space-x-2.5 truncate">
                    <Mail className="w-3.5 h-3.5 text-slate-800 shrink-0" />
                    <span className="truncate font-semibold">{contactInfo.email}</span>
                  </div>
                  {copiedText === "mail1" ? (
                    <span className="text-green-600 text-[10px] shrink-0 ml-2 font-bold">Copied</span>
                  ) : (
                    <span className="text-[9px] text-slate-400 shrink-0 uppercase tracking-widest">Copy</span>
                  )}
                </div>

                <div
                  onClick={() => handleCopy(contactInfo.academicEmail, "mail2")}
                  className="flex items-center justify-between p-3 bg-white border border-[#0f172a]/10 hover:border-slate-500 cursor-pointer transition-colors"
                >
                  <div className="flex items-center space-x-2.5 truncate">
                    <Mail className="w-3.5 h-3.5 text-slate-800 shrink-0" />
                    <span className="truncate font-semibold">{contactInfo.academicEmail}</span>
                  </div>
                  {copiedText === "mail2" ? (
                    <span className="text-green-600 text-[10px] shrink-0 ml-2 font-bold">Copied</span>
                  ) : (
                    <span className="text-[9px] text-slate-400 shrink-0 uppercase tracking-widest">Copy</span>
                  )}
                </div>

                <div className="flex items-center space-x-2.5 p-3 bg-white border border-[#0f172a]/10">
                  <Phone className="w-3.5 h-3.5 text-slate-800 shrink-0" />
                  <span className="font-semibold">{contactInfo.phone}</span>
                </div>

                <div className="flex items-center space-x-2.5 p-3 bg-white border border-[#0f172a]/10">
                  <MapPin className="w-3.5 h-3.5 text-slate-800 shrink-0" />
                  <span className="font-semibold">{contactInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Interactive Brief Builder UI */}
            <div className="lg:col-span-7 bg-white border border-[#0f172a]/15 p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 font-bold block mb-4">
                Interactive Collaboration Brief Builder
              </span>

              <div className="space-y-4">
                {/* User Input Name */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1.5 font-bold">
                    Your Name / Representative Institution
                  </label>
                  <input
                    type="text"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="Enter your name or institution..."
                    className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#0f172a]/15 text-xs text-slate-800 focus:outline-none focus:border-slate-900 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
                  {/* Collaboration Type */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-500 mb-1.5 font-bold">
                      Sector of Engagement
                    </label>
                    <select
                      value={collabType}
                      onChange={(e) => setCollabType(e.target.value)}
                      className="w-full px-3 py-2 bg-[#FAF6F0] border border-[#0f172a]/15 text-xs text-slate-800 focus:outline-none focus:border-slate-900"
                    >
                      <option value="research">Academic / Co-Authorship</option>
                      <option value="venture">Venture / Strategy Advice</option>
                      <option value="mentorship">Mentorship / Curriculum</option>
                    </select>
                  </div>

                  {/* Core Interest Tag */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-500 mb-1.5 font-bold">
                      Strategic Domain
                    </label>
                    <select
                      value={collabInterest}
                      onChange={(e) => setCollabInterest(e.target.value)}
                      className="w-full px-3 py-2 bg-[#FAF6F0] border border-[#0f172a]/15 text-xs text-slate-800 focus:outline-none focus:border-slate-900"
                    >
                      <option value="trustworthy-ai">Trustworthy AI & ML</option>
                      <option value="cyber-security">Cybersecurity (VAPT)</option>
                      <option value="wireless-sensing">RF & Wireless Sensing</option>
                      <option value="venture-building">Venture Architecture</option>
                    </select>
                  </div>
                </div>

                {/* Email Template Preview Box */}
                <div className="bg-[#FAF6F0] p-4 border border-[#0f172a]/10 rounded-none">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 block mb-2">
                    Proposal Draft Preview
                  </span>
                  <div className="text-[11px] text-slate-700 font-serif leading-relaxed max-h-40 overflow-y-auto pr-2">
                    <p className="font-sans font-semibold text-slate-900 mb-1">Subject: Inquiry regarding Collaboration on {collabInterest.replace("-", " ").toUpperCase()}</p>
                    <p>Dear Pradip,</p>
                    <p className="mt-1">
                      I hope this email finds you well. My name is <span className="font-sans font-bold text-slate-900 underline">{customName || "[Your Name]"}</span>.
                    </p>
                    <p className="mt-1">
                      {collabType === "research" && `I am deeply interested in your work in ${collabInterest.replace("-", " ")}. Given your recent publications in privacy-preserving sentiment analysis and cyber-physical systems optimization, I would love to explore synergy or potential collaborative research projects between our institutions.`}
                      {collabType === "venture" && `I am interested in your entrepreneurship work with Codesk Innovations and Room Sewa. I would value your insights or potential strategic advice regarding early-stage technical strategy and systemic design in the tech space.`}
                      {collabType === "mentorship" && `I am writing from an educational context and am interested in your curriculum design and mentorship experience across institutions like IOE and Westminster. I would appreciate the opportunity to discuss pedagogical strategies or invite you for a speaking/training session.`}
                    </p>
                    <p className="mt-2">I look forward to hearing from you.</p>
                  </div>
                </div>

                {/* Submit Action Block */}
                <a
                  href={generateEmailDraft()}
                  className="w-full py-3 bg-[#0f172a] text-[#FAF6F0] text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center space-x-2.5 hover:bg-slate-800 transition-all shadow"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Official Request</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Section: Closing Statement / Quote Banner */}
        <section className="py-20 text-center max-w-4xl mx-auto">
          <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 block mb-4">Closing Credo</span>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 italic leading-relaxed font-light tracking-wide max-w-3xl mx-auto">
            &ldquo;I do not believe leadership is defined by the office one holds, but by the future one helps create.&rdquo;
          </h2>
          <div className="w-12 h-1 bg-[#0f172a] mx-auto mt-6" />
        </section>

      </main>

      {/* Footer Area */}
      <footer className="w-full bg-[#0f172a] text-[#FAF6F0]/80 border-t-2 border-slate-900 py-16 relative z-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 text-xs">
          
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-xl font-bold text-white block tracking-wider">PRADIP PANERU</span>
            <p className="text-slate-300 leading-relaxed max-w-sm">
              AI Security Researcher, Co-Founder, and Educator. Advancing private, secure, and robust digital communication channels in emerging economies.
            </p>
            <div className="text-[10px] text-slate-400 font-mono">
              Last Registry Update: July 2026
            </div>
          </div>

          <div className="md:col-span-3 space-y-3 font-mono">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-300 font-semibold block">Academic Hubs</span>
            <ul className="space-y-1.5 text-slate-300">
              <li>
                <a href={contactInfo.researchGate} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-1.5">
                  <span>ResearchGate Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a href={contactInfo.scholar} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-1.5">
                  <span>Google Scholar Matrix</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-1.5">
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-300 font-semibold block">Registry Attestation</span>
            <p className="text-slate-300 leading-relaxed">
              This portfolio represents a comprehensive, peer-verified outline of active projects, leadership operations, and teaching terms in Tribhuvan University (IOE Thapathali/Pulchowk) and Westminster College.
            </p>
            <div className="pt-2">
              <span className="inline-block px-2.5 py-1 border border-slate-700 bg-slate-900 text-[9px] font-mono text-slate-300 tracking-wider">
                CODENAME: SEC_ML_REP_2026
              </span>
            </div>
          </div>

        </div>

        <div className="max-w-5xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-center text-[10px] text-slate-400 font-mono flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span>&copy; {new Date().getFullYear()} Pradip Paneru. All institutional rights reserved.</span>
          <span>Designed with high-end, statesman-like Cream-White and Charcoal aesthetics.</span>
        </div>
      </footer>

    </div>
  );
}
