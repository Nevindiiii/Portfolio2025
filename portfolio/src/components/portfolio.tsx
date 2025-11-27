import { useState } from 'react';
import { 
  Home, User, Briefcase, Image as ImageIcon, 
  MessageSquare, Mail, Phone, MapPin, 
  Facebook, Twitter, Instagram, Linkedin, 
  Send, Menu, X, Download, Monitor, Camera, Printer,
  ChevronRight, Star
} from 'lucide-react';
import myImage from '../assets/myNew.jpg';

/**
 * ====================================================================================
 * 📝 MOCK DATA - EDIT THIS SECTION TO CUSTOMIZE YOUR PORTFOLIO
 * ====================================================================================
 */
const DATA = {
  theme: {
    primary: "bg-yellow-400", // Main accent color (yellow)
    primaryText: "text-yellow-400",
    dark: "bg-zinc-900",      // Main dark background
    light: "bg-gray-100",     // Main light background
  },
  profile: {
    name: "NEVINDI SADEERA",
    firstName: "NEVINDI",
    lastName: "SADEERA",
    role: "TRAINEE FULL STACK DEVELOPER | UI/UX DESIGNER",
    shortBio: "I'm a dedicated IT undergraduate with a strong foundation in problem-solving, critical thinking, and communication, passionate about full-stack development.",
    longBio: "I am a dedicated and fast-learning IT undergraduate with a strong foundation in problem-solving, critical thinking, and communication. I am passionate about expanding my technical skills across various domains in the IT field and enjoy applying knowledge to real-world projects. My self-driven learning mindset allows me to quickly adapt to new tools and technologies, stay updated with industry trends, and continuously grow both personally and professionally.",
    // Using local image
    mainImage: myImage, 
    sidebarImage: myImage,
    email: "nevindisadeera@gmail.com",
    phone: "+94-76 3862252",
    address: "Nevindi, Navimana-South, Matara",
  },
  social: [
    { icon: <Facebook size={18} />, link: "#" },
    { icon: <Twitter size={18} />, link: "#" },
    { icon: <Instagram size={18} />, link: "#" },
    { icon: <Linkedin size={18} />, link: "#" },
  ],
  services: [
    {
      title: "PRINT DESIGN",
      icon: <Printer size={32} />,
      desc: "Creating stunning print materials including brochures, business cards, and posters that leave a lasting impression."
    },
    {
      title: "WEB DESIGN",
      icon: <Monitor size={32} />,
      desc: "Designing responsive, modern, and user-friendly websites that look great on all devices."
    },
    {
      title: "PHOTOGRAPHY",
      icon: <Camera size={32} />,
      desc: "Professional photography services for events, portraits, and commercial products."
    }
  ],
  stats: [
    { value: "10+", label: "YEARS EXPERIENCE" },
    { value: "450", label: "PROJECTS DONE" },
    { value: "65", label: "AWARDS WON" },
    { value: "300+", label: "HAPPY CLIENTS" },
  ],
  resume: {
    education: [
      { year: "2018 - 2020", degree: "Master in Graphics", school: "New York University", desc: "Specialized in advanced typography and brand identity systems." },
      { year: "2015 - 2018", degree: "Bachelor of Arts", school: "London Art Institute", desc: "Graduated with honors. Focused on visual communication and digital media." },
      { year: "2014 - 2015", degree: "Diploma in Design", school: "Design Academy", desc: "Foundation course in design principles and color theory." },
    ],
    experience: [
      { year: "2020 - Present", role: "Senior Designer", company: "Creative Agency", desc: "Leading a team of designers to deliver high-quality creative solutions for global clients." },
      { year: "2018 - 2020", role: "Web Designer", company: "Tech Solutions Inc.", desc: "Designed user interfaces for web and mobile applications, focusing on UX best practices." },
      { year: "2016 - 2018", role: "Junior Designer", company: "StartUp Hub", desc: "Assisted in the creation of marketing materials and social media graphics." },
    ]
  },
  portfolio: [
    { id: 1, title: "Modern Brand", category: "print", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "Dark UI Kit", category: "web", img: "https://images.unsplash.com/photo-1555421689-492633762719?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "Portrait Session", category: "photo", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "Magazine Layout", category: "print", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800" },
    { id: 5, title: "E-commerce App", category: "web", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" },
    { id: 6, title: "Urban Shot", category: "photo", img: "https://images.unsplash.com/photo-1517799094727-4843e50936e2?auto=format&fit=crop&q=80&w=800" },
  ],
  testimonials: [
    { name: "Alex Doe", role: "CEO, Company", text: "Sarita is an incredible designer. She understood our vision perfectly and delivered beyond expectations.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" },
    { name: "Jane Smith", role: "Marketing Director", text: "Professional, creative, and timely. The rebranding project was a huge success thanks to her work.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
    { name: "Mike Johnson", role: "Developer", text: "Great understanding of web constraints. Her designs were easy to implement and looked amazing.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
  ]
};

/**
 * ====================================================================================
 * 🎨 COMPONENTS
 * ====================================================================================
 */

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

/**
 * ====================================================================================
 * 🏠 SECTION COMPONENTS
 * ====================================================================================
 */

function HomeSection({ setActiveTab }: { setActiveTab: (t: NavItem) => void }) {
  return (
    <div className="h-full w-full flex relative overflow-hidden bg-white">
      {/* Yellow Background Shape (Desktop) */}
      <div className="hidden md:block absolute top-0 left-0 w-1/3 h-full bg-yellow-400 skew-x-12 -ml-20 z-0"></div>

      <div className="container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-center relative z-10">
        
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 pt-10 md:pt-0">
          <h2 className="text-yellow-400 text-2xl md:text-3xl font-bold uppercase tracking-widest">Hi There!</h2>
          <h1 className="text-gray-900 text-5xl md:text-7xl font-black uppercase leading-tight">
            I'm <span className="text-yellow-400">{DATA.profile.firstName}</span>
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

        {/* Hero Image */}
        <div className="md:w-1/2 h-[50vh] md:h-full flex items-center justify-center relative">
            {/* Decorative Circle */}
            <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gray-200 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
            {/* Image Mask */}
            <div className="w-[280px] h-[280px] md:w-[480px] md:h-[480px] rounded-full overflow-hidden border-8 border-gray-100 shadow-2xl z-10 relative">
               <img src={DATA.profile.mainImage} className="w-full h-full object-cover" alt="Hero" />
            </div>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="h-full p-4 md:p-8 animate-fade-in overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-5xl md:text-6xl font-black uppercase text-gray-800">About <span className="text-yellow-400">Me</span></h2>
          <div className="flex-1 h-0.5 bg-gray-300 hidden md:block"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">I'm {DATA.profile.firstName} {DATA.profile.lastName}, {DATA.profile.role}</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              {DATA.profile.longBio}
            </p>
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-colors flex items-center gap-2">
              <Download size={18} /> Download Resume
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
             <div className="space-y-1">
               <span className="text-gray-400 text-sm uppercase">Name</span>
               <p className="font-bold text-gray-800">{DATA.profile.name}</p>
             </div>
             <div className="space-y-1">
               <span className="text-gray-400 text-sm uppercase">Email</span>
               <p className="font-bold text-gray-800">{DATA.profile.email}</p>
             </div>
             <div className="space-y-1">
               <span className="text-gray-400 text-sm uppercase">Role</span>
               <p className="font-bold text-gray-800">Freelance</p>
             </div>
             <div className="space-y-1">
               <span className="text-gray-400 text-sm uppercase">Phone</span>
               <p className="font-bold text-gray-800">{DATA.profile.phone}</p>
             </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 uppercase border-b-2 border-yellow-400 inline-block pb-2">What I Do?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {DATA.services.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-yellow-400">
                <div className="text-yellow-400 mb-4">{s.icon}</div>
                <h4 className="font-bold text-lg mb-2 uppercase">{s.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div>
          <h3 className="text-2xl font-bold mb-8 uppercase border-b-2 border-yellow-400 inline-block pb-2">Fun Facts</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {DATA.stats.map((stat, i) => (
              <div key={i} className="bg-gray-900 text-white rounded-full aspect-square flex flex-col items-center justify-center p-4 border-4 border-gray-800 hover:border-yellow-400 transition-colors">
                <span className="text-4xl font-black text-yellow-400 mb-2">{stat.value}</span>
                <span className="text-xs uppercase tracking-widest text-center opacity-80">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function ResumeSection() {
  return (
    <div className="h-full p-4 md:p-8 animate-fade-in overflow-y-auto">
       <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-5xl md:text-6xl font-black uppercase text-gray-800">Resume</h2>
          <div className="flex-1 h-0.5 bg-gray-300 hidden md:block"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="flex items-center gap-3 text-2xl font-bold mb-8 uppercase">
              <span className="bg-yellow-400 p-2 rounded-full"><Briefcase size={20}/></span> Education
            </h3>
            <div className="space-y-8 border-l-2 border-gray-200 ml-5 pl-8">
              {DATA.resume.education.map((item, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full bg-gray-800 border-4 border-white"></span>
                  <span className="inline-block px-3 py-1 bg-gray-200 text-xs font-bold rounded-full mb-2">{item.year}</span>
                  <h4 className="text-xl font-bold uppercase text-gray-800">{item.degree}</h4>
                  <p className="text-gray-500 text-sm mb-2">{item.school}</p>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="flex items-center gap-3 text-2xl font-bold mb-8 uppercase">
              <span className="bg-yellow-400 p-2 rounded-full"><Briefcase size={20}/></span> Experience
            </h3>
            <div className="space-y-8 border-l-2 border-gray-200 ml-5 pl-8">
              {DATA.resume.experience.map((item, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full bg-gray-800 border-4 border-white"></span>
                  <span className="inline-block px-3 py-1 bg-gray-200 text-xs font-bold rounded-full mb-2">{item.year}</span>
                  <h4 className="text-xl font-bold uppercase text-gray-800">{item.role}</h4>
                  <p className="text-gray-500 text-sm mb-2">{item.company}</p>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioSection() {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? DATA.portfolio 
    : DATA.portfolio.filter(item => item.category === filter);

  return (
    <div className="h-full p-4 md:p-8 animate-fade-in overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-5xl md:text-6xl font-black uppercase text-gray-800">Portfolio</h2>
          <div className="flex-1 h-0.5 bg-gray-300 hidden md:block"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
          {['all', 'print', 'web', 'photo'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-6 py-2 rounded-full uppercase text-sm font-bold tracking-wider transition-colors
                ${filter === cat ? 'bg-yellow-400 text-black' : 'text-gray-500 hover:text-black hover:bg-gray-200'}
              `}
            >
              {cat === 'all' ? 'All Works' : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg aspect-4/3 cursor-pointer bg-gray-900">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-yellow-400/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-xl font-bold uppercase text-gray-900 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h4>
                <span className="text-sm uppercase tracking-widest text-white mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <div className="h-full p-4 md:p-8 animate-fade-in flex flex-col overflow-y-auto">
       <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-gray-800">Testimonials</h2>
          <div className="flex-1 h-0.5 bg-gray-300 hidden md:block"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {DATA.testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-md border-b-4 border-yellow-400 relative">
              <div className="flex items-center gap-4 mb-6">
                 <img src={t.img} className="w-16 h-16 rounded-full object-cover border-2 border-gray-200" alt={t.name} />
                 <div>
                   <h4 className="font-bold text-lg text-gray-900">{t.name}</h4>
                   <span className="text-xs uppercase text-yellow-500 font-bold">{t.role}</span>
                 </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
            </div>
          ))}
        </div>
       </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="h-full p-4 md:p-8 animate-fade-in overflow-y-auto">
       <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-5xl md:text-6xl font-black uppercase text-gray-800">Contact</h2>
          <div className="flex-1 h-0.5 bg-gray-300 hidden md:block"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-1 space-y-8">
             <div>
               <h3 className="text-xl font-bold uppercase mb-4">Don't be shy!</h3>
               <p className="text-gray-600 mb-6">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
             </div>
             
             <div className="flex items-start gap-4">
               <div className="bg-yellow-400 p-3 rounded-full text-gray-900"><MapPin size={24}/></div>
               <div>
                 <h4 className="font-bold text-gray-900 uppercase">Address Point</h4>
                 <p className="text-gray-600 text-sm">{DATA.profile.address}</p>
               </div>
             </div>
             
             <div className="flex items-start gap-4">
               <div className="bg-yellow-400 p-3 rounded-full text-gray-900"><Mail size={24}/></div>
               <div>
                 <h4 className="font-bold text-gray-900 uppercase">Mail Me</h4>
                 <p className="text-gray-600 text-sm">{DATA.profile.email}</p>
               </div>
             </div>

             <div className="flex items-start gap-4">
               <div className="bg-yellow-400 p-3 rounded-full text-gray-900"><Phone size={24}/></div>
               <div>
                 <h4 className="font-bold text-gray-900 uppercase">Call Me</h4>
                 <p className="text-gray-600 text-sm">{DATA.profile.phone}</p>
               </div>
             </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid md:grid-cols-2 gap-6">
                 <input type="text" placeholder="YOUR NAME" className="w-full bg-white border border-gray-300 rounded-lg p-4 outline-none focus:border-yellow-400 transition-colors" />
                 <input type="email" placeholder="YOUR EMAIL" className="w-full bg-white border border-gray-300 rounded-lg p-4 outline-none focus:border-yellow-400 transition-colors" />
               </div>
               <input type="text" placeholder="YOUR SUBJECT" className="w-full bg-white border border-gray-300 rounded-lg p-4 outline-none focus:border-yellow-400 transition-colors" />
               <textarea placeholder="YOUR MESSAGE" rows={6} className="w-full bg-white border border-gray-300 rounded-lg p-4 outline-none focus:border-yellow-400 transition-colors resize-none"></textarea>
               
               <button type="submit" className="bg-yellow-400 text-gray-900 px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-all flex items-center gap-2">
                 Send Message <Send size={18} />
               </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}