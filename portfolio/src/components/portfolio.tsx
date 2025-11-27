import { useState } from 'react';
import { Home, User, Briefcase, Image as ImageIcon, MessageSquare, Mail, Menu, X } from 'lucide-react';
import { DATA } from '../data/portfolioData';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import ResumeSection from './ResumeSection';
import PortfolioSection from './PortfolioSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';

type NavItem = 'home' | 'about' | 'resume' | 'portfolio' | 'testimonials' | 'contact';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavItem>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { id: NavItem; label: string; icon: any }[] = [
    { id: 'home', label: 'HOME', icon: Home },
    { id: 'about', label: 'ABOUT ME', icon: User },
    { id: 'resume', label: 'RESUME', icon: Briefcase },
    { id: 'portfolio', label: 'PORTFOLIO', icon: ImageIcon },
    { id: 'testimonials', label: 'TESTIMONIALS', icon: MessageSquare },
    { id: 'contact', label: 'CONTACT', icon: Mail },
  ];

  // Component to render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeSection setActiveTab={setActiveTab} />;
      case 'about': return <AboutSection />;
      case 'resume': return <ResumeSection />;
      case 'portfolio': return <PortfolioSection />;
      case 'testimonials': return <TestimonialsSection />;
      case 'contact': return <ContactSection />;
      default: return <HomeSection setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="h-screen bg-gray-100 font-sans text-gray-800 overflow-hidden relative">
      
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full z-50 bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="font-bold text-xl uppercase tracking-wider">{DATA.profile.lastName}</h1>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Main Layout Container */}
      <div className="flex h-screen pt-16 md:pt-0">
        
        {/* SIDEBAR - Hidden on Home (Desktop), Visible on inner pages (Desktop) */}
        {/* On Mobile, this acts as the slide-out menu */}
        <aside 
          className={`
            fixed md:relative z-40 h-full w-64 bg-yellow-400 transition-transform duration-300 ease-in-out shadow-xl flex flex-col
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
            ${activeTab !== 'home' ? 'md:translate-x-0' : 'md:-translate-x-full md:w-0 md:overflow-hidden'}
            md:block
          `}
        >
          {/* Profile Circle Top */}
          <div className="flex flex-col items-center pt-10 pb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
              <img src={DATA.profile.sidebarImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold uppercase text-gray-900">{DATA.profile.firstName} {DATA.profile.lastName}</h2>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col justify-center space-y-1 px-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  flex items-center space-x-4 px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all
                  ${activeTab === item.id ? 'text-white bg-gray-900 rounded-r-full -ml-4 pl-8' : 'text-gray-900 hover:text-white hover:translate-x-2'}
                `}
              >
                {/* Use the icon if you want icons in sidebar, currently text only based on image */}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-6 flex justify-center space-x-4">
            {DATA.social.map((s, i) => (
              <a key={i} href={s.link} className="bg-gray-900 text-white p-2 rounded-full hover:bg-white hover:text-gray-900 transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className={`flex-1 overflow-hidden bg-gray-100 relative transition-all duration-500`}>
          {renderContent()}
        </main>

        {/* Floating Nav for HOME screen (Desktop) - Replicates the curved nav in the design */}
        {activeTab === 'home' && (
           <div className="hidden md:flex fixed right-10 top-1/2 -translate-y-1/2 flex-col space-y-6 z-50">
             {navItems.map((item) => (
               <button
                 key={item.id}
                 onClick={() => setActiveTab(item.id)}
                 className="group relative flex items-center justify-end"
               >
                 <span className="absolute right-12 opacity-0 group-hover:opacity-100 transition-opacity bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded uppercase whitespace-nowrap">
                   {item.label}
                 </span>
                 <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300
                    ${activeTab === item.id ? 'bg-yellow-400 text-gray-900 scale-110' : 'bg-gray-800 text-white hover:bg-yellow-400 hover:text-gray-900'}
                 `}>
                   <item.icon size={20} />
                 </div>
               </button>
             ))}
           </div>
        )}
      </div>
    </div>
  );
}

