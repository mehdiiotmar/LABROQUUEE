import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getProductImage } from '../utils/productImages';
import { generateWhatsAppLink } from '../utils/googleSheets';
import { useState } from 'react';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, getItemCount, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckout = () => {
    if (items.length === 0) return;

    let message = '🍔 Nouvelle Commande LabroQue Fast Food\n\n';
    message += '📦 Commande:\n';
    
    items.forEach(item => {
      message += `• ${item.quantity}x ${item.nomProduit} (${item.taille}) - ${item.prix} DH\n`;
    });
    
    message += `\n💰 Total: ${getTotalPrice()} DH\n`;
    message += '\nMerci de confirmer ma commande!';

    window.open(generateWhatsAppLink(message), '_blank');
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <>
      {/* Bouton Flottant du Panier */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-red-600 to-yellow-400 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-pulse"
        aria-label="Ouvrir le panier"
      >
        <ShoppingCart className="w-6 h-6" />
        {getItemCount() > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-800 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
            {getItemCount()}
          </span>
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Panier Latéral */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-gradient-to-b from-gray-900 to-black border-l border-white/10 z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* En-tête */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-2xl font-bold text-white">
              <ShoppingCart className="inline-block w-6 h-6 mr-2" />
              Votre Panier
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Fermer le panier"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Articles */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <p className="text-white/50 text-center py-8">Votre panier est vide</p>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.cartId}
                    className="flex gap-4 bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <img
                      src={item.imageUrl || getProductImage(item.nomProduit)}
                      alt={item.nomProduit}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">{item.nomProduit}</h3>
                      <p className="text-white/60 text-sm">{item.taille}</p>
                      <p className="text-yellow-400 font-bold mt-1">{item.prix} DH</p>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="bg-white/10 hover:bg-white/20 p-1 rounded transition-colors"
                          aria-label="Diminuer la quantité"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-white font-semibold w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="bg-white/10 hover:bg-white/20 p-1 rounded transition-colors"
                          aria-label="Augmenter la quantité"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="ml-auto text-red-500 hover:text-red-400 transition-colors"
                          aria-label="Supprimer l'article"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pied de page avec Total et Commander */}
          {items.length > 0 && (
            <div className="p-6 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between text-white">
                <span className="text-lg">Total:</span>
                <span className="text-2xl font-bold text-yellow-400">{getTotalPrice()} DH</span>
              </div>
              
              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-red-600 to-yellow-400 text-white py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-transform shadow-xl"
              >
                Commander sur WhatsApp
              </button>
              
              <button
                onClick={clearCart}
                className="w-full bg-white/10 text-white/70 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors"
              >
                Vider le panier
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
