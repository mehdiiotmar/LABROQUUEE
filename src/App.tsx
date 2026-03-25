import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Promotions from './components/Promotions';
import OpeningCountdown from './components/OpeningCountdown';
import Order from './components/Order';
import Location from './components/Location';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import FloatingSocial from './components/FloatingSocial';
import StructuredData from './components/StructuredData';

function App() {
  return (
    <div className="min-h-screen bg-animated-gradient">
      {/* SEO JSON-LD */}
      <StructuredData />

      {/* Accessibilité */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded"
      >
        Aller au contenu principal
      </a>

      <Header />
      <FloatingWhatsApp />
      <FloatingSocial />

      <main id="main-content">
        <Hero />
        <OpeningCountdown />
        <Menu />
        <Promotions />
        <Order />
        <Location />
        <SocialProof />
      </main>

      <Footer />
    </div>
  );
}

export default App;
