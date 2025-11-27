import { Download } from 'lucide-react';
import { DATA } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <div className="h-full p-4 md:p-8 animate-fade-in overflow-y-auto">
      <div className="max-w-6xl mx-auto">
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