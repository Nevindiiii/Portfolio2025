import { ChevronRight } from 'lucide-react';
import { DATA } from '../data/portfolioData';
import { useState, useEffect } from 'react';

type NavItem = 'home' | 'about' | 'resume' | 'portfolio' | 'testimonials' | 'contact';

interface HomeSectionProps {
  setActiveTab: (tab: NavItem) => void;
}

export default function HomeSection({ setActiveTab }: HomeSectionProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [yearsCount, setYearsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);

  useEffect(() => {
    const yearsTimer = setInterval(() => {
      setYearsCount(prev => prev < 1 ? prev + 1 : 1);
    }, 1000);
    
    const projectsTimer = setInterval(() => {
      setProjectsCount(prev => prev < 5 ? prev + 1 : 5);
    }, 200);

    return () => {
      clearInterval(yearsTimer);
      clearInterval(projectsTimer);
    };
  }, []);

  return (
    <div className="h-full w-full flex relative overflow-hidden bg-yellow-400">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-100 transform -skew-x-12 origin-top-right z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 h-full flex flex-col md:flex-row items-center justify-center relative z-10">
        <div className="md:w-1/2 text-center md:text-left space-y-4 sm:space-y-6 pt-8 md:pt-0">
          <h1 className="text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase leading-tight">
            I'M <span className="text-gray-800">{DATA.profile.firstName}</span>
          </h1>
          <div className="inline-block bg-gray-900 text-white px-4 py-2 text-sm md:text-base tracking-widest uppercase font-bold">
            {DATA.profile.role}
          </div>
          <p className="text-gray-800 leading-relaxed max-w-lg mx-auto md:mx-0 text-base md:text-lg font-medium">
            {DATA.profile.shortBio}
          </p>
          <button 
            onClick={() => setActiveTab('about')}
            className="mt-6 md:mt-8 bg-gray-900 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold uppercase tracking-wider hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 mx-auto md:mx-0 text-sm md:text-base"
          >
            More About Me <ChevronRight size={18} className="md:w-5 md:h-5" />
          </button>
          
          <div className="flex gap-4 md:gap-6 justify-center md:justify-start mt-6 md:mt-8">
            <div className="bg-white text-gray-900 px-4 py-3 md:px-6 md:py-4 rounded-full flex items-center gap-2 shadow-lg">
              <span className="text-xl md:text-2xl font-black">{yearsCount}+</span>
              <span className="text-sm md:text-base font-bold uppercase tracking-wider">Years Exp</span>
            </div>
            <div className="bg-gray-900 text-white px-4 py-3 md:px-6 md:py-4 rounded-full flex items-center gap-2 shadow-lg">
              <span className="text-xl md:text-2xl font-black text-yellow-400">{projectsCount}+</span>
              <span className="text-sm md:text-base font-bold uppercase tracking-wider">Projects</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 h-[40vh] sm:h-[50vh] md:h-full flex items-center justify-center relative mt-6 md:mt-0">
          <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] rounded-full overflow-hidden shadow-2xl z-10 relative transition-all duration-500 hover:scale-105 border-8 md:border-12 border-yellow-300">
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