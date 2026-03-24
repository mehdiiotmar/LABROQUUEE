import { useState, useEffect } from 'react';
import { Calendar, Clock, Zap } from 'lucide-react';

export default function OpeningCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-03-12T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Calendar className="w-16 h-16 md:w-20 md:h-20 text-yellow-400 animate-bounce" />
              <Zap className="absolute -top-2 -right-2 w-8 h-8 text-red-600 animate-pulse" fill="currentColor" />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4">
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">Grande </span>
            <span className="text-gradient">Ouverture</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-red-600 rounded-full"></div>
            <Clock className="w-6 h-6 text-yellow-400 animate-spin" style={{ animationDuration: '4s' }} />
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-yellow-400 rounded-full"></div>
          </div>

          <p className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
            12 Mars 2026
          </p>
          <p className="text-gray-300 text-lg md:text-xl">
            Préparez-vous pour une expérience culinaire inoubliable
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {[
            { value: timeLeft.days, label: 'Jours' },
            { value: timeLeft.hours, label: 'Heures' },
            { value: timeLeft.minutes, label: 'Minutes' },
            { value: timeLeft.seconds, label: 'Secondes' },
          ].map((item, index) => (
            <div
              key={item.label}
              className="relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-yellow-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

              {/* Card */}
              <div className="relative rounded-2xl p-6 md:p-8 border border-white/10 transition-all duration-300 hover:border-red-600 hover:scale-105" style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
              }}>
                {/* Number */}
                <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-2 bg-gradient-to-br from-white via-yellow-400 to-red-600 bg-clip-text text-transparent drop-shadow-2xl">
                  {String(item.value).padStart(2, '0')}
                </div>

                {/* Label */}
                <div className="text-sm md:text-base font-bold text-gray-300 uppercase tracking-widest">
                  {item.label}
                </div>

                {/* Pulse indicator */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
                <div className="absolute top-3 right-3 w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-yellow-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-red-600 to-yellow-400 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl shadow-2xl">
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 animate-pulse" fill="currentColor" />
                <span>Soyez Prêts!</span>
                <Zap className="w-6 h-6 animate-pulse" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
