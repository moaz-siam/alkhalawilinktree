
import React from 'react';
import logo from '@/components/logo.png';
export const Sidebar: React.FC = () => {
  return (
    <aside className="relative lg:w-[45%] h-[40vh] lg:h-full overflow-hidden bg-navy-base">
      {/* Background Image Container */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM69PFLyzTkYOzHUV-WRI7DYlsIjcPmObkRd8_h925I4UOEgyEYTrGHoLCBMBq-CUw51x995rrFsAj8XLmepgEvUCZlMIx75T7vqMJ0TX6YpbZK7EHjxVolVIyfC5TjN8jy5DiCdJ92PfZMpuaQjVLSOs1qo5mnvHGYfHJsXCPmhUpb2tcBW-kXgZ9hr5_kFPnba6fN8Ue6Rt2BDfxH9_qOuI6x4yvNmuuCg84_TYnIGS6eW5RgsL797NOk1pGCdhWN7la4VEkvX4m" 
          alt="Factory" 
          className="w-full h-full object-cover opacity-80 animate-subtle-zoom"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-base/80 via-navy-base/40 to-transparent"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-20 text-white">
        {/* Logo Section */}
        <div className="flex items-center gap-4" data-aos="fade-down">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white flex items-center justify-center p-2 rounded shadow-2xl">
            <img src={logo} alt="" className="w-full h-full object-contain"/>
          </div>
          <div>
            <h2 className="text-xl lg:text-3xl font-black tracking-tighter leading-none mb-1">AL KHALAWI INTERNATIONAL STEEL PRODUCTS L.L.C</h2>
            <p className="text-bronze-accent text-[10px] lg:text-xs font-bold tracking-[0.3em] uppercase opacity-90">& Oman Pipes International LLC
</p>
          </div>
        </div>

        {/* Hero Text */}
        <div className="max-w-lg mb-12 lg:mb-0" data-aos="fade-up" data-aos-delay="300">
          <h1 className="text-4xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight">
            Precision Steel Manufacturing.
          </h1>
          <p className="text-lg lg:text-xl text-white/80 font-medium leading-relaxed max-w-sm">
            Industry leaders in high-performance piping solutions for Oman and the global market.
          </p>
        </div>
      </div>
    </aside>
  );
};
