import { motion, useScroll, useSpring } from "motion/react";
import { 
  Briefcase, 
  GraduationCap, 
  Users, 
  Code, 
  Mail, 
  Linkedin, 
  Phone, 
  ArrowRight,
  ChevronRight,
  MapPin,
  ExternalLink,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md py-4 border-b border-zinc-100" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-serif text-2xl font-bold tracking-tighter">SE.</a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-zinc-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white border-b border-zinc-100 p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="heading-lg mb-2"
    >
      {title}
    </motion.h2>
    {subtitle && <p className="text-muted text-lg">{subtitle}</p>}
  </div>
);

const ExperienceCard = ({ role, company, period, location, bullets }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group border-b border-zinc-100 py-12 last:border-0"
  >
    <div className="grid md:grid-cols-3 gap-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">{period}</p>
        <h3 className="heading-md group-hover:italic transition-all duration-300">{company}</h3>
        <p className="text-muted flex items-center gap-1 mt-1">
          <MapPin size={14} /> {location}
        </p>
      </div>
      <div className="md:col-span-2">
        <h4 className="text-xl font-medium mb-4">{role}</h4>
        <ul className="space-y-4">
          {bullets.map((bullet: string, i: number) => (
            <li key={i} className="flex gap-3 text-zinc-600 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="font-sans antialiased">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-zinc-900 z-[60] origin-left" style={{ scaleX }} />
      <Nav />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center section-padding pt-32">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-400 mb-6">Business Analytics @ Purdue</p>
            <h1 className="heading-xl mb-8">
              Skylar <br />
              <span className="italic">Eberle</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 max-w-2xl leading-relaxed font-light">
              A student at Purdue University studying business analytics, passionate about data-driven decision making and wealth management.
            </p>
            
            <div className="mt-12 flex flex-wrap gap-6">
              <a href="#experience" className="group flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full hover:bg-zinc-800 transition-all">
                View Experience <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="flex items-center gap-2 border border-zinc-200 px-8 py-4 rounded-full hover:bg-zinc-50 transition-all">
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-zinc-50 section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] bg-zinc-200 rounded-2xl overflow-hidden relative group"
          >
            {/* Headshot from public folder */}
            <img 
              src="/headshot.jpg" 
              alt="Skylar Eberle" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              onError={(e) => {
                // Fallback if headshot.jpg isn't uploaded yet
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/skylar/800/1000";
              }}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
          
          <div>
            <SectionHeading title="About Me" subtitle="Purdue University, Class of 2026" />
            <div className="space-y-6 text-lg text-zinc-600 font-light leading-relaxed">
              <p>
                Currently pursuing a Bachelor of Science in Business Analytics and Information Management at the Mitchell E. Daniels, Jr. School of Business, with a Data Science Certificate.
              </p>
              <p>
                My journey has taken me from the classroom in West Lafayette to studying financial management in Rome, Italy. I've developed a strong foundation in corporate finance, discounted cash flow, and stock valuation.
              </p>
              <p>
                I thrive in environments that challenge my analytical thinking and problem-solving skills, whether it's implementing warehouse management systems or assisting in wealth management strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Professional Experience" subtitle="Internships & Roles" />
          
          <ExperienceCard 
            role="Warehouse Management Systems Intern"
            company="Martin Brower"
            period="May – August 2025"
            location="Rosemont, IL & Baton Rouge, LA"
            bullets={[
              "Collaborated on a traveling project-based team during the go-live phase of a new warehouse management system in Baton Rouge.",
              "Tested tickets and validated system updates to ensure accuracy, reducing approval time for changes to production.",
              "Created standard operating procedures and training modules using Articulate and Tango for nationwide distribution centers."
            ]}
          />

          <ExperienceCard 
            role="Wealth Management Intern"
            company="Four Star Wealth"
            period="June – August 2024"
            location="Wheaton, IL"
            bullets={[
              "Shadowed wealth advisors to learn day-to-day tasks and assisted with client service requests to broaden management skills.",
              "Completed special projects to broaden knowledge of wealth management and received excellent feedback.",
              "Organized presentation materials and created slide decks to improve client engagement and communication."
            ]}
          />
        </div>
      </section>

      {/* Education & Involvement */}
      <section id="education" className="bg-zinc-900 text-white section-padding">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="heading-lg mb-12 text-white">Education</h2>
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-zinc-400 font-bold uppercase tracking-widest mb-2">2022 — 2026</p>
                <h3 className="text-2xl font-serif italic mb-2">Purdue University</h3>
                <p className="text-zinc-300">Mitchell E. Daniels, Jr. School of Business</p>
                <p className="text-zinc-500 mt-2">B.S. Business Analytics and Information Management</p>
                <p className="text-zinc-500 italic">Data Science Certificate</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-zinc-400 font-bold uppercase tracking-widest mb-2">Study Abroad</p>
                <h3 className="text-2xl font-serif italic mb-2">Rome, Italy</h3>
                <p className="text-zinc-300">International Financial Management</p>
                <p className="text-zinc-500 mt-2">Gained international experience applying corporate finance principles to global markets.</p>
              </motion.div>
            </div>
          </div>

          <div>
            <h2 className="heading-lg mb-12 text-white">Involvement</h2>
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border-l border-zinc-800 pl-8"
              >
                <h3 className="text-xl font-medium mb-2">Purdue Panhellenic: Gamma Chi</h3>
                <p className="text-zinc-500 leading-relaxed">
                  Led a group of 50+ potential new members through the recruitment process, serving as an unbiased resource and advisor.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="border-l border-zinc-800 pl-8"
              >
                <h3 className="text-xl font-medium mb-2">Zeta Tau Alpha</h3>
                <p className="text-zinc-500 leading-relaxed">
                  Committee Member for DEI and Recruitment. Assisted in raising over $200,000 for breast cancer awareness and education.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Relevant Skills" subtitle="Technical & Professional" />
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-zinc-50 p-12 rounded-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Code className="text-zinc-900" />
                </div>
                <h3 className="text-2xl font-serif italic">Technical</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Excel", "R Studio", "Python", "Power BI", "Articulate", "Tango"].map((skill) => (
                  <span key={skill} className="bg-white px-6 py-3 rounded-full text-sm font-medium border border-zinc-100 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-zinc-50 p-12 rounded-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Users className="text-zinc-900" />
                </div>
                <h3 className="text-2xl font-serif italic">Professional</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  "Critical Thinking", "Decision Making", "Organizational Skills", 
                  "Analytical Thinking", "Problem-Solving", "Business Analysis", 
                  "Project Management", "Client Management"
                ].map((skill) => (
                  <span key={skill} className="bg-white px-6 py-3 rounded-full text-sm font-medium border border-zinc-100 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-zinc-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-xl mb-8">Let's <span className="italic">Connect.</span></h2>
            <p className="text-xl text-zinc-500 mb-12 max-w-xl mx-auto font-light">
              I'm always open to discussing new opportunities and collaborations.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <a href="mailto:skyebs@comcast.net" className="group flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <span className="font-medium">skyebs@comcast.net</span>
              </a>

              <a href="https://www.linkedin.com/in/skylar-eberle" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
                  <Linkedin size={24} />
                </div>
                <span className="font-medium">LinkedIn Profile</span>
              </a>

              <div className="group flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Phone size={24} />
                </div>
                <span className="font-medium">630-386-7660</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-100 text-center text-sm text-zinc-400 uppercase tracking-widest">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© 2026 Skylar Eberle</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-900 transition-colors">Back to Top</a>
            <a href="https://www.linkedin.com/in/skylar-eberle" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
