import React from 'react';
import logo from '@/components/logo.png';

interface SidebarProps {
  lang: 'en' | 'ar';
}

const translations = {
  en: {
    companyName: "AL KHALAWI INTERNATIONAL STEEL PRODUCTS L.L.C",
    partner: "& Oman Pipes International LLC",
    heroTitle: "Precision Steel Manufacturing.",
    heroDesc: "Industry leaders in high-performance piping solutions for Oman and the global market."
  },
  ar: {
    companyName: "الخلاوي العالمية للمنتجات الحديدية ش.م.م    ",
    partner: "انابيب عمان العالمية ش.م.م",
    heroTitle: "دقة في تصنيع الحديد.",
    heroDesc: "الرواد في حلول الأنابيب عالية الأداء لسوق عمان والأسواق العالمية."
  }
};

export const Sidebar: React.FC<SidebarProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <aside className="relative lg:w-[45%] h-[40vh] lg:h-full overflow-hidden bg-navy-base">
      {/* Background Image Container */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM69PFLyzTkYOzHUV-WRI7DYlsIjcPmObkRd8_h925I4UOEgyEYTrGHoLCBMBq-CUw51x995rrFsAj8XLmepgEvUCZlMIx75T7vqMJ0TX6YpbZK7EHjxVolVIyfC5TjN8jy5DiCdJ92PfZMpuaQjVLSOs1qo5mnvHGYfHJsXCPmhUpb2tcBW-kXgZ9hr5_kFPnba6fN8Ue6Rt2BDfxH9_qOuI6x4yvNmuuCg84_TYnIGS6eW5RgsL797NOk1pGCdhWN7la4VEkvX4m"
          alt="Factory"
          className="w-full h-full object-cover opacity-80 animate-subtle-zoom"
        />
        {/* Overlay - تعديل اتجاه التدرج اللوني بناءً على اللغة */}
        <div className={`absolute inset-0 bg-gradient-to-r ${lang === 'ar' ? 'from-transparent via-navy-base/40 to-navy-base/80' : 'from-navy-base/80 via-navy-base/40 to-transparent'}`}></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-20 text-white">
        {/* Logo Section */}
        {/* Logo Section - تصميم يركز على وضوح الشعار */}
        <div
          className={`flex flex-col ${lang === 'ar' ? 'items-end' : 'items-start'} lg:flex-row lg:items-center gap-6 lg:gap-5`}
          data-aos="fade-down"
        >
          {/* حاوية الشعار: كبيرة جداً في الجوال وأكثر وضوحاً */}
          <div className="w-20 h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 bg-white p-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center mx-auto shrink-0 transform hover:scale-105 transition-transform duration-300">
            <img
              src={logo}
              alt="Al-Khalawi Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* نصوص الشركة: تحت الشعار في الجوال، وبجانبه في الكمبيوتر */}
          <div className={`${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            <h2 className={`text-xl md:text-2xl lg:text-2xl font-black leading-tight mb-2 ${lang === 'ar' ? 'font-arabic' : ''}`}>
              {t.companyName}
            </h2>
            <div className={`flex items-center gap-2 ${lang === 'ar' ? 'justify-end' : 'justify-start'}`}>
              <span className="h-[2px] w-6 bg-bronze-accent"></span>
              <p className="text-bronze-accent text-[11px] lg:text-xs font-bold tracking-widest uppercase">
                {t.partner}
              </p>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="max-w-lg mb-12 lg:mb-0" data-aos="fade-up" data-aos-delay="300">
          <h1 className={`text-4xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight ${lang === 'ar' ? 'font-arabic' : ''}`}>
            {t.heroTitle}
          </h1>
          <p className="text-lg lg:text-xl text-white/80 font-medium leading-relaxed max-w-sm">
            {t.heroDesc}
          </p>
        </div>
      </div>
    </aside>
  );
};