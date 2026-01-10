
import React, { ReactNode } from 'react';

interface ServiceLinkProps {
  icon: ReactNode;
  title: string;
  description: string;
  suffix: ReactNode;
  delay?: number;
}

export const ServiceLink: React.FC<ServiceLinkProps> = ({ icon, title, description, suffix, delay = 0 , link , target }) => {
  return (
    <a 
      href={link}
      target={target}
      rel="noopener noreferrer"
      className="group relative flex items-center gap-6 w-full bg-navy-base text-white p-6 transition-all duration-300 ease-out border-l-[6px] border-bronze-accent shadow-xl hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 cursor-pointer"
      data-aos="fade-left"
      data-aos-delay={delay}
    >
      {/* Icon Area */}
      <div className="flex-shrink-0 bg-white/5 p-2 rounded transition-colors group-hover:bg-white/10">
        {icon}
      </div>

      {/* Text Area */}
      <div className="flex-1 text-left">
        <span className="block text-xl lg:text-2xl font-bold tracking-tight mb-0.5 group-hover:text-bronze-accent transition-colors">
          {title}
        </span>
        <span className="text-sm opacity-60 font-medium group-hover:opacity-90 transition-opacity">
          {description}
        </span>
      </div>

      {/* Suffix Icon */}
      <div className="flex-shrink-0">
        {suffix}
      </div>
      
      {/* Decorative Accent */}
      <div className="absolute inset-0 border-t border-white/5 pointer-events-none"></div>
    </a>
  );
};
