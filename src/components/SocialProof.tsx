import { Star, Quote, Instagram, QrCode, Music } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed M.',
    comment: 'Les meilleurs tacos d\'Oujda! La qualité est toujours au rendez-vous.',
    rating: 5,
  },
  {
    name: 'Fatima Z.',
    comment: 'Service rapide et nourriture délicieuse. Je recommande vivement!',
    rating: 5,
  },
  {
    name: 'Youssef K.',
    comment: 'Excellent rapport qualité-prix. Les portions sont généreuses.',
    rating: 5,
  },
];

export default function SocialProof() {
  return (
    <section aria-labelledby="testimonials-heading" className="py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 opacity-0 animate-fade-in">
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white text-white">Avis et </span>
            <span className="text-red-600">Témoignages Clients</span>
          </h2>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-red-600 to-yellow-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-gray-300 mt-4 text-base md:text-lg">
            Découvrez ce que nos clients satisfaits disent de nous
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mb-12 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card group opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 md:w-12 md:h-12 text-yellow-400 text-yellow-400 mb-4 opacity-50" />

              <div className="flex mb-4 gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 text-gray-300 text-base md:text-lg mb-5 md:mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              <div className="border-t border-white/10 dark:border-white/10 light:border-gray-200 pt-4">
                <p className="text-white text-white font-bold text-sm md:text-base">{testimonial.name}</p>
                <p className="text-gray-500 dark:text-gray-500 light:text-gray-600 text-xs md:text-sm">Client vérifié</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 max-w-6xl mx-auto">
          <div className="social-card opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center mb-5 md:mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <Instagram className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Instagram</h3>
            <p className="text-gray-400 mb-5 md:mb-6 text-sm md:text-base">
              Découvrez nos dernières créations
            </p>
            <a
              href="https://www.instagram.com/snack_labroque?igsh=Mmo2andrNTFibzE%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base inline-flex items-center gap-2"
            >
              <span>@snack_labroque</span>
              <Instagram className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>

          <div className="social-card opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center mb-5 md:mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-black rounded-full flex items-center justify-center border-4 border-cyan-400">
                <Music className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">TikTok</h3>
            <p className="text-gray-400 mb-5 md:mb-6 text-sm md:text-base">
              Nos vidéos et moments fun
            </p>
            <a
              href="https://www.tiktok.com/@snack_labroque?_r=1&_t=ZG-94MTMd8wuh7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base inline-flex items-center gap-2"
            >
              <span>@snack_labroque</span>
              <Music className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>

          <div className="social-card opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center justify-center mb-5 md:mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-600 to-yellow-400 rounded-full flex items-center justify-center">
                <QrCode className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Laissez un avis</h3>
            <p className="text-gray-400 mb-5 md:mb-6 text-sm md:text-base">
              Partagez votre expérience
            </p>
            <button className="btn-secondary px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base inline-flex items-center gap-2">
              <span>Scanner le QR</span>
              <QrCode className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
