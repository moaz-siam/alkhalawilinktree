
import React, { useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ServiceLink } from './components/ServiceLink';
import { SocialLinks } from './components/SocialLinks';
import { Globe, BookOpen, Phone, Mail, MapPin, ChevronRight, Download, ArrowUpRight, Send, Map } from 'lucide-react';
// @ts-ignore
import AOS from 'aos';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className="flex h-screen w-full flex-col lg:flex-row bg-white">
      {/* Left Panel: Hero Image & Identity */}
      <Sidebar />

      {/* Right Panel: Content & Links */}
      <main className="flex-1 h-full overflow-y-auto custom-scrollbar relative">
        <div className="max-w-xl mx-auto px-6 lg:px-16 py-12 lg:py-24">

          {/* Header Section */}
          <header className="mb-12" data-aos="fade-up">
            <span className="text-bronze-accent font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
              Explore Our Services
            </span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-navy-base leading-tight">
              Industrial Connection
            </h1>
          </header>

          {/* Links Section */}
          <div className="flex flex-col gap-6 mb-16">
            <ServiceLink
              icon={<Globe className="w-8 h-8 text-bronze-accent" />}
              title="Main Website"
              description="Official corporate portal"
              suffix={<ChevronRight className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />}
              delay={100}
              link="https://alkhalawisteel.com/en/"
            />
            <ServiceLink
              icon={<BookOpen className="w-8 h-8 text-bronze-accent" />}
              title="Company Profile"
              description="Official 2026 Steel & Pipes Collection"
              suffix={<Download className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />}
              delay={200}
              link="./components/catalog.pdf"
            />
            <ServiceLink
              icon={<Phone className="w-8 h-8 text-bronze-accent" />}
              title="Direct Call"
              description="Speak with our sales engineers"
              suffix={<ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />}
              delay={300}
              link="tel:+96891111191"
            />
            <ServiceLink
              icon={<MapPin className="w-8 h-8 text-bronze-accent" />}
              title="Factory Location"
              description="Sohar Industrial Estate, Oman"
              suffix={<Map className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />}
              delay={500}
              link="https://maps.app.goo.gl/U8cnozEA8iDbnvVBA"
            />
          </div>

          {/* Footer Section */}
          <footer className="pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6" data-aos="fade-up" data-aos-delay="600">
            <div className="flex items-center gap-6">
              <a href="#" className="text-[10px] font-bold tracking-widest text-navy-base hover:text-bronze-accent transition-colors">TERMS</a>
              <a href="#" className="text-[10px] font-bold tracking-widest text-navy-base hover:text-bronze-accent transition-colors">PRIVACY</a>
            </div>
            <p className="text-[10px] text-gray-400 font-medium tracking-tight">
              © 2024 Al-Khalawi & Oman Pipes Group.
            </p>
          </footer>
        </div>

        {/* Floating Social Icons */}
        <SocialLinks />
      </main>
    </div>
  );
};

export default App;
