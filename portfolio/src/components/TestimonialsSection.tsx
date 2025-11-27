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
        
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-10">
          {DATA.testimonials.map((t) => (
            <div key={`${t.name}-${t.role}`} className="bg-white p-6 md:p-8 rounded-lg shadow-md border-b-4 border-yellow-400 relative">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <img src={t.img} className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-gray-200" alt={t.name} onError={(e) => { e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIzMiIgZmlsbD0iI0Y5RkFGQiIvPjxjaXJjbGUgY3g9IjMyIiBjeT0iMjQiIHI9IjgiIGZpbGw9IiM5Q0EzQUYiLz48cGF0aCBkPSJNMTYgNTJjMC04LjgzNyA3LjE2My0xNiAxNi0xNnMxNiA3LjE2MyAxNiAxNnYxMkgxNlY1MloiIGZpbGw9IiM5Q0EzQUYiLz48L3N2Zz4='; }} />
                <div>
                  <h4 className="font-bold text-base md:text-lg text-gray-900">{t.name}</h4>
                  <span className="text-xs uppercase text-yellow-500 font-bold">{t.role}</span>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed text-sm md:text-base">"{t.text}"</p>
              <div className="flex text-yellow-400 mt-3 md:mt-4">
                {Array.from({ length: 5 }, (_, i) => <Star key={`star-${i}`} size={14} className="md:w-4 md:h-4" fill="currentColor" />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}