import { MessageCircle, Sparkles } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/googleSheets';
import { useState, useEffect } from 'react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const pulseInterval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 500);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(pulseInterval);
    };
  }, []);

  const handleClick = () => {
    window.open(
      generateWhatsAppLink('Bonjour! Je voudrais passer une commande 🍔'),
      '_blank'
    );
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`fixed bottom-6 right-6 z-50 group transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
        aria-label="Commander sur WhatsApp"
      >
        <div className="relative">
          {/* Cercles de pulsation externes */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse"></div>

          {/* Anneau brillant rotatif */}
          <div className="absolute -inset-2 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 rounded-full opacity-75 blur-md group-hover:opacity-100 animate-pulse"></div>

          {/* Bouton principal */}
          <div className={`relative bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl transform transition-all duration-300 group-hover:scale-110 ${
            isPulsing ? 'animate-shake' : ''
          }`}>
            <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform duration-300" />

            {/* Badge de notification */}
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce shadow-lg">
              <Sparkles className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Tooltip animé */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <div className="relative z-10 font-semibold text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            Commandez maintenant!
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="border-8 border-transparent border-l-gray-900"></div>
          </div>

          {/* Effet de brillance */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-lg"></div>
        </div>
      </button>

      {/* Message flottant périodique */}
      <div
        className={`fixed bottom-28 right-6 z-40 max-w-xs transition-all duration-500 ${
          isPulsing && isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}
      >
        <div className="bg-white bg-gray-800 rounded-2xl shadow-2xl p-4 border-2 border-green-400 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-emerald-400/10 to-green-400/10 animate-pulse"></div>

          <div className="relative z-10">
            <p className="text-sm font-semibold text-gray-900 text-white mb-1 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              Commande rapide
            </p>
            <p className="text-xs text-gray-600 text-gray-300">
              Cliquez pour commander via WhatsApp
            </p>
          </div>

          {/* Flèche pointant vers le bouton */}
          <div className="absolute -bottom-2 right-6">
            <div className="border-8 border-transparent border-t-white border-t-gray-800"></div>
          </div>
        </div>
      </div>
    </>
  );
}
