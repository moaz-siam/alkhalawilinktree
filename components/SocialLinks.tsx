
import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export const SocialLinks: React.FC = () => {
  return (
    <div className="fixed bottom-12 right-6 lg:right-12 flex flex-col gap-4 z-50" data-aos="fade-left" data-aos-delay="800">
      <a 
        href="#" 
        className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-lg border border-gray-100 text-navy-base hover:text-white hover:bg-navy-base hover:border-navy-base transition-all transform hover:scale-110 active:scale-95"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a 
        href="#" 
        className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-lg border border-gray-100 text-navy-base hover:text-white hover:bg-navy-base hover:border-navy-base transition-all transform hover:scale-110 active:scale-95"
        aria-label="Twitter"
      >
        <Twitter className="w-5 h-5" />
      </a>
      <a 
        href="#" 
        className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-lg border border-gray-100 text-navy-base hover:text-white hover:bg-navy-base hover:border-navy-base transition-all transform hover:scale-110 active:scale-95"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>
    </div>
  );
};
