import { useState, useEffect } from 'react';
import { Star, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';
import { fetchMenuItems, generateWhatsAppLink } from '../utils/googleSheets';
import { getProductImage } from '../utils/productImages';

export default function Menu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = async () => {
    const items = await fetchMenuItems();
    setMenuItems(items);
    setLoading(false);
  };

  const categories = ['Tous', ...new Set(menuItems.map(item => item.categorie))];
  const filteredItems = selectedCategory === 'Tous'
    ? menuItems
    : menuItems.filter(item => item.categorie === selectedCategory);

  const handleOrder = (item: MenuItem) => {
    const message = `Bonjour! Je voudrais commander:\n${item.nomProduit} (${item.taille}) - ${item.prix} DH`;
    window.open(generateWhatsAppLink(message), '_blank');
  };

  if (loading) {
    return (
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">Chargement du menu...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" aria-labelledby="menu-heading" className="py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 opacity-0 animate-fade-in">
          <h2 id="menu-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white text-white">Notre Menu </span>
            <span className="text-red-600">Fast Food</span>
          </h2>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-red-600 to-yellow-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-gray-300 mt-4 text-base md:text-lg">
            Tacos, Pizzas, Burgers et plus encore - Livraison rapide
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-red-600 to-yellow-400 text-white shadow-md scale-105'
                  : 'bg-white/10 dark:bg-white/10 light:bg-gray-200 text-white dark:text-white light:text-gray-800 hover:bg-white/20 dark:hover:bg-white/20 light:hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="menu-card group relative opacity-0 animate-fade-in"
              style={{ animationDelay: `${Math.min(index * 0.05, 0.5)}s` }}
            >
              <div className="relative overflow-hidden rounded-t-2xl h-44 md:h-48">
                <img
                  src={getProductImage(item.nomProduit)}
                  alt={item.nomProduit}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
                {item.bestSeller?.toLowerCase() === 'oui' && (
                  <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                    <span>Best Seller</span>
                  </div>
                )}
              </div>

              <div className="p-5 md:p-6">
                <div className="mb-2">
                  <span className="text-yellow-400 text-yellow-400 text-xs md:text-sm font-semibold uppercase tracking-wide">
                    {item.categorie}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white text-white mb-2 transition-colors">
                  {item.nomProduit}
                </h3>

                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-xs md:text-sm mb-4">{item.taille}</p>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-2xl md:text-3xl font-bold text-yellow-400 text-yellow-400">
                    {item.prix} <span className="text-lg md:text-xl">DH</span>
                  </span>

                  <button
                    onClick={() => handleOrder(item)}
                    className="btn-secondary px-4 md:px-6 py-2 rounded-full font-semibold text-sm md:text-base flex items-center gap-2 whitespace-nowrap"
                  >
                    <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span>Commander</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
