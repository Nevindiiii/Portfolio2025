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

        <div className="grid md:grid-cols-3 gap-12">
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