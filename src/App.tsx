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
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="min-h-screen bg-animated-gradient">

      {/* SEO LOCAL JSON-LD */}
      <StructuredData />

      {/* 🔥 SEO GLOBAL */}
      <Helmet>
        <title>
          Snack Labroque Oujda | Tacos, Pizza, Burgers & Fast Food Hay Lqods près de la Fac
        </title>

        <meta
          name="description"
          content="Snack Labroque à Oujda (Hay Lqods près de la fac) : tacos, pizza, burgers, paninis et fast food. Snack rapide, pas cher avec commande à emporter ou livraison."
        />

        <meta
          name="keywords"
          content="
          snack Oujda, snack Hay Qods Oujda, tacos Oujda, pizza Oujda, burger Oujda,
          snack près de la fac Oujda, fast food Oujda, snack rapide Oujda,
          snack tacos pizza Oujda, commande tacos Oujda,
          meilleur snack Oujda, tacos à emporter Oujda, pizza à emporter Oujda,
          snack étudiant Oujda, snack Hay Qods près fac,
          menu tacos Oujda, menu pizza Oujda, snack livraison Oujda,
          snack pas cher Oujda, snack burgers paninis Oujda,
          snack avec livraison Oujda, snack rapide près université Oujda,
          tacos frais Oujda, pizzeria Hay Qods Oujda, Snack Labroque Oujda
          "
        />

        {/* Open Graph */}
        <meta property="og:title" content="Snack Labroque Oujda – Tacos, Pizza & Burgers près de la Fac" />
        <meta property="og:description" content="Meilleur snack à Oujda : tacos, pizza, burgers, livraison et sur place à Hay Lqods près de la fac." />
        <meta property="og:image" content="https://labroque.ma/cover.jpg" />
        <meta property="og:url" content="https://labroque.ma/" />
        <meta property="og:type" content="restaurant" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Snack Labroque Oujda – Tacos, Pizza & Burgers" />
        <meta name="twitter:description" content="Snack rapide à Oujda : tacos, pizza, burgers, livraison et à emporter." />
        <meta name="twitter:image" content="https://labroque.ma/cover.jpg" />
      </Helmet>

      {/* Accessibilité */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded">
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
