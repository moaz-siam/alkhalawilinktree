import React, { useEffect, useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ServiceLink } from './components/ServiceLink';
import { SocialLinks } from './components/SocialLinks';
import { Globe, BookOpen, Phone, MapPin, ChevronRight, Download, ArrowUpRight, Map, Languages } from 'lucide-react';
// @ts-ignore
import AOS from 'aos';
// @ts-ignore
import catalogPdf from './catalog.pdf';

// 1. تعريف النصوص المترجمة
const translations = {
  en: {
    subtitle: "Explore Our Services",
    title: "Industrial Connection",
    website: "Main Website",
    websiteDesc: "Official corporate portal",
    catalog: "Company Profile",
    catalogDesc: "Official 2026 Steel & Pipes Collection",
    executive: "CEO Office",
    executiveDesc: "Direct communication with the CEO",
    location: "Factory Location",
    locationDesc: "Sohar Industrial Estate, Oman",
    terms: "TERMS",
    privacy: "PRIVACY",
    rights: "© 2024 Al-Khalawi & Oman Pipes Group.",
    langBtn: "العربية"
  },
  ar: {
    subtitle: "استكشف خدماتنا",
    title: "الاتصال الصناعي",
    website: "الموقع الرئيسي",
    websiteDesc: "البوابة الرسمية للشركة",
    catalog: "ملف الشركة",
    catalogDesc: "كتالوج الحديد والأنابيب الرسمي 2026",
    executive: "مكتب الرئيس التنفيذي",
    executiveDesc: "تواصل مباشر مع الرئيس التنفيذي للشركة",
    location: "موقع المصنع",
    locationDesc: "منطقة صحار الصناعية، سلطنة عمان",
    terms: "الشروط",
    privacy: "الخصوصية",
    rights: "© 2024 مجموعة الخلاوي وأنابيب عمان.",
    langBtn: "English"
  }
};

const App: React.FC = () => {
  const [showPhone, setShowPhone] = useState(false);
  const [lang, setLang] = useState<'en' | 'ar'>('en'); // حالة اللغة

  const t = translations[lang]; // اختصار للوصول للنصوص

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessCode = "khl-2026";
    if (params.get('view') === accessCode) {
      setShowPhone(true);
    }

    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  // تبديل اللغة وتغيير اتجاه الصفحة
  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <div className={`flex min-h-screen lg:h-screen w-full flex-col lg:flex-row bg-white ${lang === 'ar' ? 'font-arabic' : ''}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <style>{`
        html, body { overflow-x: hidden; }
        .font-arabic { font-family: 'Tajawal', sans-serif; } /* تأكد من استدعاء الخط في index.html */
      `}</style>
      
      <Sidebar lang={lang} />

      <main className="flex-1 lg:h-full lg:overflow-y-auto custom-scrollbar relative">
        {/* زر تبديل اللغة العائم */}
        <button 
          onClick={toggleLanguage}
          className="fixed top-6 right-6 lg:right-auto lg:left-6 z-50 flex items-center gap-2 bg-navy-base text-white px-4 py-2 rounded-full shadow-lg hover:bg-bronze-accent transition-all text-sm font-bold"
        >
          <Languages size={18} />
          {t.langBtn}
        </button>

        <div className="max-w-xl mx-auto px-5 md:px-8 lg:px-16 pt-10 pb-32 lg:py-24">

          {/* Header Section */}
          <header className="mb-12" data-aos="fade-up">
            <span className="text-bronze-accent font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
              {t.subtitle}
            </span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-navy-base leading-tight">
              {t.title}
            </h1>
          </header>

          {/* Links Section */}
          <div className="flex flex-col gap-4 lg:gap-6 mb-16">
            <ServiceLink
              icon={<Globe className="w-8 h-8 text-bronze-accent" />}
              title={t.website}
              description={t.websiteDesc}
              suffix={<ChevronRight className={`w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity ${lang === 'ar' ? 'rotate-180' : ''}`} />}
              delay={100}
              link="https://alkhalawisteel.com/en/"
              target="_blank"
            />
            
            <ServiceLink
              icon={<BookOpen className="w-8 h-8 text-bronze-accent" />}
              title={t.catalog}
              description={t.catalogDesc}
              suffix={<Download className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />}
              delay={200}
              link={catalogPdf}
              target="_blank"
              download={"Al-Khalawi-Catalog-2026.pdf"}
            />

            {showPhone && (
              <ServiceLink
                icon={<Phone className="w-8 h-8 text-bronze-accent" />}
                title={t.executive}
                description={t.executiveDesc}
                suffix={<ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />}
                delay={300}
                link="tel:+96891111191"
              />
            )}

            <ServiceLink
              icon={<MapPin className="w-8 h-8 text-bronze-accent" />}
              title={t.location}
              description={t.locationDesc}
              suffix={<Map className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />}
              delay={500}
              link="https://goo.gl/maps/example"
              target="_blank"
              // lang ={lang}
            />
          </div>

          {/* Footer Section */}
          <footer className="pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6" data-aos="fade-up" data-aos-delay="600">
            <div className="flex items-center gap-6">
              <a href="#" className="text-[10px] font-bold tracking-widest text-navy-base hover:text-bronze-accent transition-colors">{t.terms}</a>
              <a href="#" className="text-[10px] font-bold tracking-widest text-navy-base hover:text-bronze-accent transition-colors">{t.privacy}</a>
            </div>
            <p className="text-[10px] text-gray-400 font-medium tracking-tight">
              {t.rights}
            </p>
          </footer>
        </div>

        <SocialLinks lang={lang} />
      </main>
    </div>
  );
};

export default App;