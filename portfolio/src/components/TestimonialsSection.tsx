import { Star } from 'lucide-react';
import { DATA } from '../data/portfolioData';

export default function TestimonialsSection() {
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