import { useState } from 'react';
import { Send, Phone, User, ShoppingBag, Sparkles } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/googleSheets';

export default function Order() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    items: '',
    orderType: 'livraison',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `🍔 Nouvelle Commande LabroQue Fast Food\n\n` +
      `👤 Nom: ${formData.name}\n` +
      `📱 Téléphone: ${formData.phone}\n` +
      `🛍️ Commande: ${formData.items}\n` +
      `📦 Type: ${formData.orderType === 'livraison' ? 'Livraison' : 'À emporter'}`;

    window.open(generateWhatsAppLink(message), '_blank');

    setFormData({ name: '', phone: '', items: '', orderType: 'livraison' });
  };

  return (
    <section id="order" aria-labelledby="order-heading" className="py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 md:mb-16 opacity-0 animate-fade-in">
            <h2 id="order-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white text-white">Commander </span>
              <span className="text-red-600">sur WhatsApp</span>
            </h2>
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-red-600 to-yellow-400 mx-auto rounded-full"></div>
            <p className="text-gray-300 text-gray-300 mt-4 md:mt-6 text-base md:text-lg px-4">
              Commandez facilement via WhatsApp et profitez de nos délices
            </p>
          </div>

          <div className="order-card opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div>
                <label className="flex items-center text-white text-white font-semibold mb-2 text-sm md:text-base">
                  <User className="w-4 h-4 md:w-5 md:h-5 mr-2 text-yellow-400 text-yellow-400" />
                  Votre Nom
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/5 dark:bg-white/5 light:bg-white border-2 border-white/10 dark:border-white/10 light:border-gray-300 rounded-xl text-white text-white placeholder-gray-500 dark:placeholder-gray-500 light:placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="Mohammed Ali"
                />
              </div>

              <div>
                <label className="flex items-center text-white text-white font-semibold mb-2 text-sm md:text-base">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 text-yellow-400 text-yellow-400" />
                  Numéro de Téléphone
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/5 dark:bg-white/5 light:bg-white border-2 border-white/10 dark:border-white/10 light:border-gray-300 rounded-xl text-white text-white placeholder-gray-500 dark:placeholder-gray-500 light:placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="06XX-XXXXXX"
                />
              </div>

              <div>
                <label className="flex items-center text-white text-white font-semibold mb-2 text-sm md:text-base">
                  <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 mr-2 text-yellow-400 text-yellow-400" />
                  Votre Commande
                </label>
                <textarea
                  required
                  value={formData.items}
                  onChange={(e) => setFormData({ ...formData, items: e.target.value })}
                  rows={4}
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/5 dark:bg-white/5 light:bg-white border-2 border-white/10 dark:border-white/10 light:border-gray-300 rounded-xl text-white text-white placeholder-gray-500 dark:placeholder-gray-500 light:placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors resize-none"
                  placeholder="Ex: 2 Tacos Mixte, 1 Pizza Margherita, 2 Boissons..."
                />
              </div>

              <div>
                <label className="text-white text-white font-semibold mb-3 md:mb-4 block text-sm md:text-base">Type de Commande</label>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, orderType: 'livraison' })}
                    className={`py-3 md:py-4 rounded-xl font-semibold text-sm md:text-base transition-all ${
                      formData.orderType === 'livraison'
                        ? 'bg-gradient-to-r from-red-600 to-yellow-400 text-white shadow-md'
                        : 'bg-white/5 dark:bg-white/5 light:bg-white text-white dark:text-white light:text-gray-800 border-2 border-white/10 dark:border-white/10 light:border-gray-300 hover:border-white/30 dark:hover:border-white/30 light:hover:border-gray-400'
                    }`}
                  >
                    🚚 Livraison
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, orderType: 'emporter' })}
                    className={`py-3 md:py-4 rounded-xl font-semibold text-sm md:text-base transition-all ${
                      formData.orderType === 'emporter'
                        ? 'bg-gradient-to-r from-red-600 to-yellow-400 text-white shadow-md'
                        : 'bg-white/5 dark:bg-white/5 light:bg-white text-white dark:text-white light:text-gray-800 border-2 border-white/10 dark:border-white/10 light:border-gray-300 hover:border-white/30 dark:hover:border-white/30 light:hover:border-gray-400'
                    }`}
                  >
                    🏪 À Emporter
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="relative w-full btn-shimmer py-4 md:py-5 rounded-xl font-bold text-lg md:text-xl flex items-center justify-center gap-3 overflow-hidden group animate-pulse-glow shadow-xl hover:scale-[1.02] active:scale-95 transition-transform"
              >
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 animate-rotate-pulse" />
                <Send className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                <span className="relative z-10">Envoyer la Commande</span>
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 animate-rotate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </form>

            <div className="mt-6 md:mt-8 text-center text-gray-400 dark:text-gray-400 light:text-gray-600 text-xs md:text-sm">
              <p>En cliquant sur "Envoyer", vous serez redirigé vers WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
