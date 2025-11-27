import { Briefcase } from 'lucide-react';
import { DATA } from '../data/portfolioData';

export default function ResumeSection() {
  return (
    <div className="h-full p-4 md:p-8 animate-fade-in overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-5xl md:text-6xl font-black uppercase text-gray-800">Resume</h2>
          <div className="flex-1 h-0.5 bg-gray-300 hidden md:block"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
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