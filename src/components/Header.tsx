import { ChefHat, Sparkles, Phone, Zap, Flame } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/googleSheets';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const pulseInterval = setInterval(() => {
      setPulseCount(prev => prev + 1);
    }, 4000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(pulseInterval);
    };
  }, []);

  const handleOrder = () => {
    window.open(generateWhatsAppLink('Bonjour! Je voudrais commander maintenant 🍔'), '_blank');
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-lg shadow-2xl py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-4" aria-label="Navigation principale">
        <div className="flex items-center justify-center">
          {/* Logo Ultra-Moderne - Agrandi */}
          <a href="#main-content" className="flex items-center gap-4 md:gap-6 group cursor-pointer" aria-label="LabroQue Fast Food - Retour à l'accueil">
            {/* Icône Chef Géante avec Effets 3D */}
            <div className="relative">
              {/* Glow layers multiples */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 rounded-full blur-2xl opacity-40 group-hover:opacity-80 animate-pulse scale-150"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-600 rounded-full blur-xl opacity-60 group-hover:opacity-100 animate-pulse"></div>

              {/* Anneaux rotatifs */}
              <div className="absolute inset-0 -m-3">
                <div className="absolute inset-0 rounded-full border-2 border-yellow-400/30 animate-spin" style={{ animationDuration: '8s' }}></div>
                <div className="absolute inset-0 rounded-full border-2 border-red-600/30 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
              </div>

              {/* Flammes en arrière-plan */}
              <Flame className="absolute -top-2 -left-2 w-8 h-8 md:w-10 md:h-10 text-orange-500 opacity-60 animate-pulse" />
              <Flame className="absolute -top-3 -right-1 w-6 h-6 md:w-8 md:h-8 text-red-500 opacity-40 animate-pulse" style={{ animationDelay: '0.3s' }} />

              {/* Chef Hat Principal - AGRANDI */}
              <div className="relative bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 p-4 md:p-6 rounded-full transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 animate-float shadow-2xl">
                <ChefHat className="w-10 h-10 md:w-16 md:h-16 text-white drop-shadow-2xl" strokeWidth={2.5} />
                {/* Langue animée */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 md:w-3 h-6 md:h-10 bg-gradient-to-b from-pink-400 to-red-600 rounded-full origin-top animate-tongue shadow-lg"></div>
              </div>

              {/* Particules brillantes */}
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 text-yellow-300 animate-rotate-pulse drop-shadow-glow" />
              <Sparkles className="absolute -bottom-1 -left-1 w-4 h-4 md:w-6 md:h-6 text-orange-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Texte Logo AGRANDI avec Effets Premium */}
            <div className="relative">
              <div className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">
                <span className="relative inline-block">
                  <span className="text-white group-hover:text-yellow-400 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ textShadow: '0 0 20px rgba(251,191,36,0.3), 2px 2px 4px rgba(0,0,0,0.8)' }}>
                    Labro
                  </span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/30 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                </span>
                <span className="relative inline-block">
                  <span className="text-red-600 group-hover:scale-110 inline-block transition-transform duration-300 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]" style={{ textShadow: '0 0 30px rgba(220,38,38,0.6), 2px 2px 4px rgba(0,0,0,0.8)' }}>
                    Que
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 md:h-1.5 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full shadow-lg"></div>
                </span>
              </div>
              <p className="text-xs md:text-sm lg:text-base text-yellow-400 font-bold tracking-widest opacity-90 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg mt-1">
                FAST FOOD PREMIUM
              </p>
            </div>
          </a>
        </div>
      </nav>

      {/* Bouton Commander Ultra-Moderne - Repositionné */}
      <div className="absolute top-1/2 -translate-y-1/2 right-4">
        <button
            onClick={handleOrder}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative group overflow-hidden"
          >
            {/* Anneaux de pulsation externes */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-yellow-400 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300 ${
              pulseCount % 2 === 0 ? 'animate-ping' : ''
            }`}></div>

            {/* Bordure animée */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 rounded-full opacity-75 group-hover:opacity-100 animate-pulse blur-sm"></div>

            {/* Contenu du bouton */}
            <div className="relative btn-shimmer text-white px-4 md:px-8 py-2.5 md:py-3.5 rounded-full font-bold text-sm md:text-base shadow-2xl transform group-hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-2 md:gap-3 relative z-10">
                {/* Icône téléphone avec animations */}
                <div className="relative">
                  <Phone className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-300 ${
                    isHovering ? 'animate-shake rotate-12' : ''
                  }`} />
                  {isHovering && (
                    <div className="absolute inset-0 bg-white rounded-full blur-md animate-pulse"></div>
                  )}
                </div>

                {/* Texte principal */}
                <span className="font-bold tracking-wide">
                  Commander
                </span>

                {/* Icône Zap animée */}
                <Zap className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-300 ${
                  isHovering ? 'rotate-12 scale-125' : ''
                } animate-pulse`} fill="currentColor" />

                {/* Sparkles décoratif */}
                <Sparkles className={`hidden md:block w-4 h-4 transition-all duration-500 ${
                  isHovering ? 'animate-rotate-pulse scale-125' : ''
                }`} />
              </div>

              {/* Effet de brillance qui traverse */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-full"></div>

              {/* Particules qui flottent au hover */}
              {isHovering && (
                <>
                  <div className="absolute top-0 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
                  <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                </>
              )}

              {/* Ombre interne pour profondeur */}
              <div className="absolute inset-0 rounded-full shadow-inner opacity-50"></div>

              {/* Effet de ripple au clic */}
              <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 opacity-0 group-active:opacity-100 transition-all duration-300"></div>
            </div>

            {/* Badge "Rapide" animé */}
            <div className={`absolute -top-2 -right-2 bg-green-500 text-white text-[8px] md:text-[10px] font-bold px-1.5 md:px-2 py-0.5 rounded-full shadow-lg transition-all duration-300 ${
              isHovering ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
            } animate-bounce`}>
              <div className="flex items-center gap-0.5">
                <Zap className="w-2 h-2 md:w-2.5 md:h-2.5" fill="currentColor" />
                <span>Rapide</span>
              </div>
            </div>
          </button>
        </div>

      {/* Ligne de séparation animée */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent transition-opacity duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="h-full bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 animate-pulse"></div>
      </div>
    </header>
  );
}
