import { useState, useEffect } from 'react';
import { Gift, Clock, Zap } from 'lucide-react';
import { Promotion } from '../types';
import { fetchPromotions, generateWhatsAppLink } from '../utils/googleSheets';

export default function Promotions() {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPromotions();
  }, []);

  const loadPromotions = async () => {
    const promos = await fetchPromotions();
    setPromotions(promos);
    setLoading(false);
  };

  const handleOrder = (promo: Promotion) => {
    const message = `Bonjour! Je voudrais commander la promotion:\n${promo.titre} - ${promo.prix} DH`;
    window.open(generateWhatsAppLink(message), '_blank');
  };

  if (loading || promotions.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-black via-red-950/10 to-black from-black via-red-950/10 to-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 opacity-0 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Gift className="w-10 h-10 md:w-12 md:h-12 text-yellow-400 text-yellow-400" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white text-white">Nos Offres et </span>
            <span className="text-red-600">Promotions</span>
          </h2>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-red-600 to-yellow-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-gray-300 mt-4 text-base md:text-lg">
            Profitez de nos offres spéciales et réductions exceptionnelles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {promotions.map((promo, index) => (
            <div
              key={index}
              className="promo-card group opacity-0 animate-fade-in"
              style={{ animationDelay: `${Math.min(index * 0.1, 0.5)}s` }}
            >
              {promo.urgence?.toLowerCase() === 'oui' && (
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="bg-gradient-to-r from-red-600 to-yellow-400 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm flex items-center shadow-md">
                    <Zap className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 fill-current" />
                    <span>Offre Limitée</span>
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8">
                <div className="flex items-center justify-center mb-5 md:mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-600 to-yellow-400 rounded-full flex items-center justify-center">
                    <Gift className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white text-white mb-4 text-center transition-colors">
                  {promo.titre}
                </h3>

                <p className="text-gray-300 text-gray-300 text-center mb-5 md:mb-6 leading-relaxed text-sm md:text-base">
                  {promo.description}
                </p>

                <div className="text-center mb-5 md:mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-yellow-400 text-yellow-400">
                    {promo.prix} <span className="text-xl md:text-2xl">DH</span>
                  </span>
                </div>

                {promo.dateFin && (
                  <div className="flex items-center justify-center text-gray-400 text-gray-400 text-xs md:text-sm mb-5 md:mb-6">
                    <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2" />
                    <span>Jusqu'au {promo.dateFin}</span>
                  </div>
                )}

                <button
                  onClick={() => handleOrder(promo)}
                  className="w-full btn-primary py-3 md:py-4 rounded-full font-bold text-base md:text-lg"
                >
                  Profiter de l'offre
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
