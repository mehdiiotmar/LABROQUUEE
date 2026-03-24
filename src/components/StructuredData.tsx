import { useEffect } from 'react';

export default function StructuredData() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "LabroQue Fast Food",
      "description": "Restaurant fast food à Oujda proposant tacos, pizzas, burgers et sandwiches avec livraison rapide. Chef expérimenté, qualité premium garantie.",
      "image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "url": "https://labroque-fastfood.com",
      "telephone": "+212-XXX-XXXXXX",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hay Al Qods, près de la Faculté",
        "addressLocality": "Oujda",
        "addressCountry": "MA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "34.6814",
        "longitude": "-1.9086"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "11:00",
          "closes": "23:00"
        }
      ],
      "servesCuisine": ["Fast Food", "Tacos", "Pizza", "Burgers", "Sandwiches"],
      "priceRange": "$$",
      "acceptsReservations": "False",
      "hasDelivery": true,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "150"
      },
      "paymentAccepted": "Cash, WhatsApp Order",
      "currenciesAccepted": "MAD"
    });
    document.head.appendChild(script);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://labroque-fastfood.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Menu",
          "item": "https://labroque-fastfood.com#menu"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Commander",
          "item": "https://labroque-fastfood.com#order"
        }
      ]
    });
    document.head.appendChild(breadcrumbScript);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (breadcrumbScript.parentNode) {
        breadcrumbScript.parentNode.removeChild(breadcrumbScript);
      }
    };
  }, []);

  return null;
}
