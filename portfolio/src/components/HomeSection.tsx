import { ChevronRight } from 'lucide-react';
import { DATA } from '../data/portfolioData';
import { useState } from 'react';

type NavItem = 'home' | 'about' | 'resume' | 'portfolio' | 'testimonials' | 'contact';

interface HomeSectionProps {
  setActiveTab: (tab: NavItem) => void;
}

export default function HomeSection({ setActiveTab }: HomeSectionProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="h-full w-full flex relative overflow-hidden bg-white">
      <div className="hidden lg:block absolute top-0 left-0 w-200 h-full bg-yellow-400 skew-x-20 -ml-32 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 h-full flex flex-col md:flex-row items-center justify-center relative z-10">
        <div className="md:w-1/2 text-center md:text-left space-y-4 sm:space-y-6 pt-8 md:pt-0">
          <h2 className="text-yellow-400 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-widest">Hi There!</h2>
          <h1 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase leading-tight">
            I'm <span className="text-black">{DATA.profile.firstName}</span>
          </h1>
          <div className="inline-block bg-gray-900 text-white px-3 py-2 md:px-4 text-xs sm:text-sm md:text-base tracking-widest uppercase font-bold rounded-sm">
            {DATA.profile.role}
          </div>
          <p className="text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0 text-sm md:text-base">
            {DATA.profile.shortBio}
          </p>
          <button 
            onClick={() => setActiveTab('about')}
            className="mt-6 md:mt-8 bg-black text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-bold uppercase tracking-wider hover:bg-yellow-400 hover:text-black transition-colors flex items-center gap-2 mx-auto md:mx-0 text-sm md:text-base"
          >
            More About Me <ChevronRight size={16} className="md:w-[18px] md:h-[18px]" />
          </button>
          
          <div className="flex gap-3 md:gap-4 justify-center md:justify-start mt-4 md:mt-6">
            <div className="bg-yellow-400 text-gray-900 px-3 py-2 rounded-full flex items-center gap-2 shadow-md">
              <span className="text-lg md:text-xl font-black">1+</span>
              <span className="text-xs md:text-sm font-bold uppercase">Years Exp</span>
            </div>
            <div className="bg-gray-900 text-white px-3 py-2 rounded-full flex items-center gap-2 shadow-md">
              <span className="text-lg md:text-xl font-black text-yellow-400">5+</span>
              <span className="text-xs md:text-sm font-bold uppercase">Projects</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 h-[40vh] sm:h-[50vh] md:h-full flex items-center justify-center relative mt-6 md:mt-0">
          <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-gray-200 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
          <div className={`w-[230px] h-[230px] sm:w-[280px] sm:h-[280px] md:w-[380px] md:h-[380px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden shadow-2xl z-10 relative transition-all duration-500 ${imageLoaded ? 'border-4 md:border-8 border-yellow-400' : 'border-2 border-gray-300 animate-pulse'}`}>
            <img 
              src={DATA.profile.mainImage} 
              className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              alt={`${DATA.profile.firstName} - ${DATA.profile.role}`}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}