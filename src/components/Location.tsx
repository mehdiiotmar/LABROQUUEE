import { MapPin, Clock, Phone } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" aria-labelledby="location-heading" className="py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 opacity-0 animate-fade-in">
          <h2 id="location-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white text-white">Où Nous </span>
            <span className="text-red-600">Trouver</span>
          </h2>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-red-600 to-yellow-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-gray-300 mt-4 text-base md:text-lg">
            Visitez-nous ou commandez en livraison - Oujda, Maroc
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="location-card opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="mb-6 md:mb-8">
              <div className="flex items-start md:items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-600 to-yellow-400 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white text-white">Adresse</h3>
                  <p className="text-gray-400 text-gray-400 text-sm md:text-base">Trouvez-nous ici</p>
                </div>
              </div>
              <p className="text-base md:text-xl text-gray-300 text-gray-300 leading-relaxed">
                Hay Al Qods, près de la Faculté<br />
                Oujda, Maroc
              </p>
            </div>

            <div className="mb-6 md:mb-8">
              <div className="flex items-start md:items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-600 to-yellow-400 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white text-white">Horaires</h3>
                  <p className="text-gray-400 text-gray-400 text-sm md:text-base">Nous sommes ouverts</p>
                </div>
              </div>
              <div className="space-y-2 text-base md:text-lg">
                <div className="flex justify-between text-gray-300 text-gray-300">
                  <span>Lundi - Dimanche</span>
                  <span className="text-yellow-400 text-yellow-400 font-semibold">11h00 - 23h00</span>
                </div>
                <div className="text-xs md:text-sm text-gray-500 dark:text-gray-500 light:text-gray-600">
                  Service continu
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start md:items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-600 to-yellow-400 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white text-white">Contact</h3>
                  <p className="text-gray-400 text-gray-400 text-sm md:text-base">Appelez-nous</p>
                </div>
              </div>
              <a
                href="tel:+212688468409"
                className="text-lg md:text-xl text-yellow-400 text-yellow-400 hover:text-yellow-300 dark:hover:text-yellow-300 light:hover:text-amber-700 transition-colors"
              >
                +212 688-468409
              </a>
            </div>
          </div>

          <div className="location-card overflow-hidden p-0 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full h-full min-h-[350px] md:min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.123456789!2d-1.9086789!3d34.6805623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQwJzUwLjAiTiAxwrA1NCczMS4yIlc!5e0!3m2!1sen!2sma!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
