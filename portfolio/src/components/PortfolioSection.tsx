import { useState } from 'react';
import { DATA } from '../data/portfolioData';

export default function PortfolioSection() {
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

        <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start mb-8 md:mb-10">
          {Array.from(new Set(['all', ...DATA.portfolio.map(item => item.category)])).map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-4 md:px-6 py-2 rounded-full uppercase text-xs md:text-sm font-bold tracking-wider transition-colors
                ${filter === cat ? 'bg-yellow-400 text-black' : 'text-gray-500 hover:text-black hover:bg-gray-200'}
              `}
            >
              {cat === 'all' ? 'All Works' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-lg shadow-lg aspect-square sm:aspect-4/3 cursor-pointer bg-gray-900"
              tabIndex={0}
              role="button"
              aria-label={`${item.title} - ${item.category} portfolio item`}
              onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
            >
              <img 
                src={item.img} 
                alt={item.title} 
                onError={(e) => { e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg=='; }}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-yellow-400/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-lg md:text-xl font-bold uppercase text-gray-900 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center px-2">{item.title}</h4>
                <span className="text-xs md:text-sm uppercase tracking-widest text-white mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}