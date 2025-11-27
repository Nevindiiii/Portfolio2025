import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { DATA } from '../data/portfolioData';

export default function ContactSection() {
  return (
    <div className="h-full p-4 md:p-8 animate-fade-in overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-5xl md:text-6xl font-black uppercase text-gray-800">Contact</h2>
          <div className="flex-1 h-0.5 bg-gray-300 hidden md:block"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1 space-y-6 md:space-y-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold uppercase mb-3 md:mb-4">Don't be shy!</h3>
              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            </div>
            
            <div className="flex items-start gap-3 md:gap-4">
              <div className="bg-yellow-400 p-2 md:p-3 rounded-full text-gray-900 shrink-0"><MapPin size={20} className="md:w-6 md:h-6"/></div>
              <div>
                <h4 className="font-bold text-gray-900 uppercase text-sm md:text-base">Address Point</h4>
                <p className="text-gray-600 text-xs md:text-sm wrap-break-word">{DATA.profile.address}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 md:gap-4">
              <div className="bg-yellow-400 p-2 md:p-3 rounded-full text-gray-900 shrink-0"><Mail size={20} className="md:w-6 md:h-6"/></div>
              <div>
                <h4 className="font-bold text-gray-900 uppercase text-sm md:text-base">Mail Me</h4>
                <p className="text-gray-600 text-xs md:text-sm break-all">{DATA.profile.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="bg-yellow-400 p-2 md:p-3 rounded-full text-gray-900 shrink-0"><Phone size={20} className="md:w-6 md:h-6"/></div>
              <div>
                <h4 className="font-bold text-gray-900 uppercase text-sm md:text-base">Call Me</h4>
                <p className="text-gray-600 text-xs md:text-sm">{DATA.profile.phone}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 mt-8 lg:mt-0">
            <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <input type="text" placeholder="YOUR NAME" className="w-full bg-white border border-gray-300 rounded-lg p-3 md:p-4 outline-none focus:border-yellow-400 transition-colors text-sm md:text-base" />
                <input type="email" placeholder="YOUR EMAIL" className="w-full bg-white border border-gray-300 rounded-lg p-3 md:p-4 outline-none focus:border-yellow-400 transition-colors text-sm md:text-base" />
              </div>
              <input type="text" placeholder="YOUR SUBJECT" className="w-full bg-white border border-gray-300 rounded-lg p-3 md:p-4 outline-none focus:border-yellow-400 transition-colors text-sm md:text-base" />
              <textarea placeholder="YOUR MESSAGE" rows={5} className="w-full bg-white border border-gray-300 rounded-lg p-3 md:p-4 outline-none focus:border-yellow-400 transition-colors resize-none text-sm md:text-base md:rows-6"></textarea>
              
              <button type="submit" className="bg-yellow-400 text-gray-900 px-8 md:px-10 py-3 md:py-4 rounded-full font-bold uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-all flex items-center gap-2 text-sm md:text-base">
                Send Message <Send size={16} className="md:w-[18px] md:h-[18px]" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}