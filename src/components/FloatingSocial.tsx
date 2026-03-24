import { Instagram, Music, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingSocial() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleTikTok = () => {
    window.open('https://www.tiktok.com/@snack_labroque?_r=1&_t=ZG-94MTMd8wuh7', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/snack_labroque?igsh=Mmo2andrNTFibzE%3D&utm_source=qr', '_blank');
  };

  return (
    <div className={`fixed bottom-6 left-6 z-50 flex flex-col gap-4 transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }`}>
      {/* TikTok Button */}
      <button
        onClick={handleTikTok}
        className="group relative"
        aria-label="Suivez-nous sur TikTok"
      >
        <div className="relative">
          {/* Pulsation externe */}
          <div className="absolute inset-0 bg-black rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 rounded-full animate-pulse opacity-75 blur-md"></div>

          {/* Bouton principal */}
          <div className="relative bg-black text-white p-4 rounded-full shadow-2xl transform transition-all duration-300 group-hover:scale-110">
            <Music className="w-7 h-7 sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform duration-300" />

            {/* Badge décoratif */}
            <div className="absolute -top-1 -right-1 bg-gradient-to-r from-cyan-400 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce shadow-lg">
              <Sparkles className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Tooltip */}
        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <div className="relative z-10 font-semibold text-sm flex items-center gap-2">
            <Music className="w-4 h-4 text-pink-400" />
            Suivez sur TikTok
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full">
            <div className="border-8 border-transparent border-r-gray-900"></div>
          </div>
        </div>
      </button>

      {/* Instagram Button */}
      <button
        onClick={handleInstagram}
        className="group relative"
        aria-label="Suivez-nous sur Instagram"
      >
        <div className="relative">
          {/* Pulsation externe */}
          <div className="absolute inset-0 bg-pink-500 rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-full animate-pulse opacity-75 blur-md"></div>

          {/* Bouton principal */}
          <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 text-white p-4 rounded-full shadow-2xl transform transition-all duration-300 group-hover:scale-110">
            <Instagram className="w-7 h-7 sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform duration-300" />

            {/* Badge décoratif */}
            <div className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce shadow-lg">
              <Sparkles className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Tooltip */}
        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <div className="relative z-10 font-semibold text-sm flex items-center gap-2">
            <Instagram className="w-4 h-4 text-pink-400" />
            Suivez sur Instagram
            <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full">
            <div className="border-8 border-transparent border-r-gray-900"></div>
          </div>
        </div>
      </button>
    </div>
  );
}
