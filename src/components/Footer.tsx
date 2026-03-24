import { Phone, Instagram, Mail, MapPin, ChefHat, Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 border-white/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 mb-10 md:mb-12">
          <div>
            <div className="flex items-center mb-4 md:mb-6">
              <ChefHat className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 text-yellow-400 mr-2 md:mr-3" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white text-white">LabroQue</h3>
                <p className="text-red-600 text-xs md:text-sm">Fast Food</p>
              </div>
            </div>
            <p className="text-gray-400 text-gray-400 leading-relaxed text-sm md:text-base">
              Chef b Tajriba Kbira - Votre snack de confiance à Oujda
            </p>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-bold text-white text-white mb-4 md:mb-6">Navigation</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="#menu" className="text-gray-400 text-gray-400 hover:text-yellow-400 hover:text-yellow-400 transition-colors text-sm md:text-base">
                  Notre Menu
                </a>
              </li>
              <li>
                <a href="#order" className="text-gray-400 text-gray-400 hover:text-yellow-400 hover:text-yellow-400 transition-colors text-sm md:text-base">
                  Commander
                </a>
              </li>
              <li>
                <a href="#location" className="text-gray-400 text-gray-400 hover:text-yellow-400 hover:text-yellow-400 transition-colors text-sm md:text-base">
                  Localisation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-bold text-white text-white mb-4 md:mb-6">Contact</h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-center text-gray-400 text-gray-400 text-sm md:text-base">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 text-yellow-400 mr-2 md:mr-3 flex-shrink-0" />
                <a href="tel:+212688468409" className="hover:text-yellow-400 hover:text-yellow-400 transition-colors">
                  +212 688-468409
                </a>
              </li>
              <li className="flex items-center text-gray-400 text-gray-400 text-sm md:text-base">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 text-yellow-400 mr-2 md:mr-3 flex-shrink-0" />
                <span>labroque@gmail.com</span>
              </li>
              <li className="flex items-start text-gray-400 text-gray-400 text-sm md:text-base">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 text-yellow-400 mr-2 md:mr-3 mt-1 flex-shrink-0" />
                <span>Hay Al Qods, près de la Faculté, Oujda</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Suivez-nous</h4>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/snack_labroque?igsh=Mmo2andrNTFibzE%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-pink-500 transition-colors group"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-2 md:mr-3 group-hover:scale-105 transition-transform">
                  <Instagram className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <span className="text-sm md:text-base">@snack_labroque</span>
              </a>
              <a
                href="https://www.tiktok.com/@snack_labroque?_r=1&_t=ZG-94MTMd8wuh7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center mr-2 md:mr-3 group-hover:scale-105 transition-transform border-2 border-cyan-400">
                  <Music className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <span className="text-sm md:text-base">@snack_labroque</span>
              </a>
            </div>
            <div className="mt-5 md:mt-6">
              <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2">Horaires</p>
              <p className="text-white font-semibold text-sm md:text-base">11h00 - 23h00</p>
              <p className="text-gray-500 text-xs md:text-sm">7 jours / 7</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 border-white/10 pt-6 md:pt-8">
          <div className="text-center text-gray-400 text-gray-400">
            <p className="text-sm md:text-base">&copy; 2026 LabroQue Fast Food. Tous droits réservés.</p>
            <p className="text-xs md:text-sm mt-2">
              Développé avec <span className="text-red-600">❤️</span> à Oujda
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
