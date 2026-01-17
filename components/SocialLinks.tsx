import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

// 1. تعريف نوع الـ Props
interface SocialLinksProps {
  lang: 'en' | 'ar';
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ lang }) => {
  return (
    <div 
      // 2. تعديل الموقع: في الإنجليزية يميناً (right-6) وفي العربية يساراً (left-6)
      className={`fixed bottom-12 z-50 flex flex-col gap-4 transition-all duration-500 ${
        lang === 'ar' ? 'left-6 lg:left-12' : 'right-6 lg:right-12'
      }`} 
      data-aos-delay="800"
    >
      <a 
        href="https://linkedin.com" 
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-lg border border-gray-100 text-navy-base hover:text-white hover:bg-navy-base hover:border-navy-base transition-all transform hover:scale-110 active:scale-95"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>

      <a 
        href="https://twitter.com" 
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-lg border border-gray-100 text-navy-base hover:text-white hover:bg-navy-base hover:border-navy-base transition-all transform hover:scale-110 active:scale-95"
        aria-label="Twitter"
      >
        <Twitter className="w-5 h-5" />
      </a>

      <a 
        href="https://instagram.com" 
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-lg border border-gray-100 text-navy-base hover:text-white hover:bg-navy-base hover:border-navy-base transition-all transform hover:scale-110 active:scale-95"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>
    </div>
  );
};