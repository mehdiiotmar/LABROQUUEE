import { ChefHat, Sparkles, Phone } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/googleSheets';
import { useState } from 'react';

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);

  const handleOrder = () => {
    window.open(generateWhatsAppLink('Bonjour! Je voudrais commander de LabroQue Fast Food.'), '_blank');
  };

  return (
    <section aria-label="Bienvenue chez LabroQue Fast Food" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{
        backgroundImage: `url('https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1920')`
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black from-black/70 via-black/60 to-black"></div>
      </div>

      <div className="relative z-10 w-full py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-4 mb-6 opacity-0 animate-bounce-in">
            <ChefHat className="w-12 h-12 md:w-16 md:h-16 text-yellow-400 animate-float" style={{ animationDelay: '0.2s' }} />
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-red-600 animate-rotate-pulse" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-in-scale" style={{ animationDelay: '0.1s' }}>
            <span className="text-white text-white inline-block hover:scale-110 transition-transform duration-300">Labro</span>
            <span className="text-red-600 inline-block hover:scale-110 transition-transform duration-300">Que</span>
            <span className="text-yellow-400 inline-block hover:scale-110 transition-transform duration-300"> Fast Food</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-yellow-400 text-yellow-400 font-semibold mb-3 opacity-0 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            Chef b Tajriba Kbira
          </p>

          <p className="text-lg sm:text-xl md:text-2xl text-white text-white mb-10 opacity-0 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            Votre snack de confiance
          </p>

          <button
            onClick={handleOrder}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative btn-shimmer text-white text-lg sm:text-xl md:text-2xl px-8 sm:px-10 md:px-12 py-4 md:py-5 rounded-full font-bold opacity-0 animate-pulse-glow shadow-lg overflow-hidden group"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <Phone className={`w-6 h-6 ${isHovering ? 'animate-shake' : ''}`} />
              Commander sur WhatsApp
              <Sparkles className={`w-5 h-5 ${isHovering ? 'animate-rotate-pulse' : ''}`} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-white text-white opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center group cursor-pointer">
              <Sparkles className="w-5 h-5 text-yellow-400 text-yellow-400 mr-2 group-hover:animate-rotate-pulse" />
              <span className="text-sm sm:text-base group-hover:text-yellow-400 transition-colors">Livraison Rapide</span>
            </div>
            <div className="hidden sm:block text-red-600 animate-pulse">•</div>
            <div className="flex items-center group cursor-pointer">
              <Sparkles className="w-5 h-5 text-yellow-400 text-yellow-400 mr-2 group-hover:animate-rotate-pulse" />
              <span className="text-sm sm:text-base group-hover:text-yellow-400 transition-colors">Qualité Premium</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black from-black to-transparent pointer-events-none"></div>
    </section>
  );
}
