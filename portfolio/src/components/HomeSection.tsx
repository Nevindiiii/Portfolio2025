import { ChevronRight } from 'lucide-react';
import { DATA } from '../data/portfolioData';

type NavItem = 'home' | 'about' | 'resume' | 'portfolio' | 'testimonials' | 'contact';

interface HomeSectionProps {
  setActiveTab: (tab: NavItem) => void;
}

export default function HomeSection({ setActiveTab }: HomeSectionProps) {
  return (
    <div className="h-full w-full flex relative overflow-hidden bg-white">
      <div className="hidden md:block absolute top-0 left-0 w-1/3 h-full bg-yellow-400 skew-x-12 -ml-20 z-0"></div>

      <div className="container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-center relative z-10">
        <div className="md:w-1/2 text-center md:text-left space-y-6 pt-10 md:pt-0">
          <h2 className="text-yellow-400 text-2xl md:text-3xl font-bold uppercase tracking-widest">Hi There!</h2>
          <h1 className="text-gray-900 text-5xl md:text-7xl font-black uppercase leading-tight">
            I'm <span className="text-black">{DATA.profile.firstName}</span>
          </h1>
          <div className="inline-block bg-gray-900 text-white px-4 py-2 text-sm md:text-base tracking-widest uppercase font-bold rounded-sm">
            {DATA.profile.role}
          </div>
          <p className="text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
            {DATA.profile.shortBio}
          </p>
          <button 
            onClick={() => setActiveTab('about')}
            className="mt-8 bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-yellow-400 hover:text-black transition-colors flex items-center gap-2 mx-auto md:mx-0"
          >
            More About Me <ChevronRight size={18} />
          </button>
        </div>

        <div className="md:w-1/2 h-[50vh] md:h-full flex items-center justify-center relative">
          <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gray-200 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
          <div className="w-[280px] h-[280px] md:w-[480px] md:h-[480px] rounded-full overflow-hidden border-8 border-gray-100 shadow-2xl z-10 relative">
            <img src={DATA.profile.mainImage} className="w-full h-full object-cover" alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
}