
import { TranslationStrings } from './types';

export const translations: Record<'es' | 'en', TranslationStrings> = {
  es: {
    nav: {
      home: 'Inicio',
      lodging: 'Hospedaje',
      restaurant: 'Restaurante',
      experiences: 'El destino',
      about: 'Nosotros'
    },
    hero: {
      title: 'Vive la magia del Cabo de la Vela',
      subtitle: 'Hospedaje auténtico, gastronomía local y aventuras frente al mar — todo en un solo lugar.',
      cta: 'Reserva ahora'
    },
    home: {
      welcomeTag: 'Bienvenidos',
      quote: '"Bienvenido a Apalanchii, tu refugio frente al mar en el Cabo de la Vela. Aquí todo está diseñado para que encuentres la calma: cabañas y enramadas con identidad Wayuu, habitaciones frescas y un equipo local que te brinda una atención cercana y genuina. Despierta con la brisa, camina por la orilla y al final del día regresa a un espacio acogedor para recargar energías. Estamos a pocos pasos de las experiencias que hacen único al Cabo: atardeceres inolvidables, paseos en lancha y momentos para conectar con lo esencial."'
    },
    lodging: {
      title: 'Tu descanso frente al mar',
      subtitle: '',
      lead: 'En nuestro hospedaje encontrarás un espacio acogedor y auténtico donde podrás descansar y disfrutar plenamente del entorno natural del Cabo de la Vela. Te ofrecemos habitaciones cómodas construidas en material tradicional, diseñadas para brindarte frescura y tranquilidad mientras vives la esencia cultural del territorio.\n\nTambién podrás elegir descansar en chinchorros y hamacas ubicados en cabañas típicas, una forma única de vivir una experiencia cercana a las tradiciones locales. Nuestro ambiente familiar y la atención cercana están pensados para que te sientas cómodo desde tu llegada y disfrutes de una estadía agradable en un entorno natural y diferente.',
      rooms: {
        double: {
          title: 'Habitación Doble (Interior)',
          desc: 'Ideal para parejas o amigos que buscan un descanso reparador. Cuenta con baño privado y ventilación optimizada para el clima del Cabo.',
          includesTitle: '¿Qué incluyen las habitaciones?',
          includes: [
            'Baño privado',
            'Ventilador',
            'Camas según el tipo de habitación',
            'Espacios construidos en material tradicional yotojoro',
            'Espacios cómodos para el descanso',
            'Ambiente fresco y ventilado naturalmente',
            'Ambiente familiar y tranquilo',
            'Iluminación básica',
            'Espacio adecuado para pertenencias'
          ]
        },
        enramada: {
          title: 'Enramada con Chinchorro',
          desc: 'La verdadera experiencia Wayuu: descansa en un chinchorro bajo un techo tradicional, arrullado por la brisa marina y el sonido de las olas.',
          includesTitle: '¿Qué incluye el hospedaje en chinchorro?',
          includes: [
            'Espacio en cabañas típicas',
            'Acceso a duchas',
            'Lockers para guardar pertenencias',
            'Espacios ventilados naturalmente',
            'Ambiente tradicional y familiar',
            'Cercanía al mar'
          ]
        },
        multiple: {
          title: 'Habitación Múltiple',
          desc: 'Perfecta para familias o grupos que desean compartir sin sacrificar comodidad. Incluye baño privado, excelente ventilación y una distribución funcional.',
          includesTitle: '¿Qué incluyen las habitaciones?',
          includes: [
            'Baño privado',
            'Ventilador',
            'Camas según el tipo de habitación',
            'Espacios construidos en material tradicional yotojoro',
            'Espacios cómodos para el descanso',
            'Ambiente fresco y ventilado naturalmente',
            'Ambiente familiar y tranquilo',
            'Iluminación básica',
            'Espacio adecuado para pertenencias'
          ]
        }
      }
    },
    restaurant: {
      tag: 'Tradición en cada plato',
      title: 'Restaurante',
      subtitle: '',
      desc: 'Sabores locales, vista al mar y pesca responsable. Disfruta de una variedad de platos típicos de la región, preparados por manos locales que cuidan cada detalle y la frescura de los ingredientes. Priorizamos los productos de nuestro territorio.',
      galleryAlt: 'Galería del restaurante'
    },
    experiences: {
      tag: 'El destino',
      title: 'El destino',
      lead: 'Ubicado en la mística península de La Guajira, el Cabo de la Vela es uno de los destinos más magnéticos del Caribe colombiano. Este paraje se define por un contraste natural salvaje: dunas de arena dorada que mueren en aguas de un azul profundo, creando un paisaje que parece de otro mundo. Más que un destino visual, es el corazón ancestral del pueblo Wayuu. Visitarlo es sumergirse en una cultura que late a través de su lengua, sus tejidos y su respeto sagrado por la tierra.\n\nMás allá de su mística contemplativa, el Cabo de la Vela se ha consolidado como la meca del kitesurf en el Caribe. Gracias a los vientos alisios del noreste que soplan con una constancia quirúrgica, este destino ofrece una "ventana de viento" excepcionalmente larga que se extiende de diciembre a septiembre. Con intensidades promedio que oscilan entre los 25 y 35 nudos, y ráfagas que raramente bajan de los 15 nudos incluso en temporada baja, las costas guajiras son una pista de velocidad natural sin parangón. Aquí, la configuración geográfica crea condiciones de agua plana ideales tanto para el aprendizaje seguro como para maniobras de freestyle de alto nivel. No es solo un deporte; es una simbiosis perfecta donde el cielo se tiñe con el cromatismo de las velas, convirtiendo cada ráfaga en una oportunidad para desafiar la gravedad sobre un espejo de agua turquesa.',
      ctaButton: 'Descubre el destino',
      reviewsTitle: 'Lo que dicen nuestros visitantes',
      cta: 'Solicitar información de tours',
      items: {
        puntaGallinas: {
          title: 'Punta Gallinas',
          desc: 'Punta Gallinas es el punto más septentrional de Suramérica y uno de los destinos más fascinantes de La Guajira. Este lugar fusiona paisajes desérticos, dunas imponentes y el Mar Caribe, creando un contraste espectacular. El territorio es hogar de comunidades Wayuu que preservan con orgullo sus tradiciones en este entorno majestuoso.'
        },
        pilonAzucar: {
          title: 'Pilón de Azúcar / Cerro Kamaichi',
          desc: 'El Pilón de Azúcar, sagrado para el pueblo Wayuu como Cerro Kamaichi, es un hito emblemático del Cabo de la Vela. Este cerro se alza frente al Caribe y ofrece, tras un breve ascenso, una vista panorámica inigualable del desierto guajiro fundiéndose con el océano.'
        },
        cuevaDiablo: {
          title: 'Jepirra (Cueva del Diablo)',
          desc: 'Conocida turísticamente como Cueva del Diablo, su nombre ancestral es Jepirra. Posee un profundo significado espiritual para los Wayuu: es el lugar sagrado donde las almas de los difuntos descansan antes de seguir su tránsito hacia el mundo espiritual.'
        },
        ojoAgua: {
          title: 'Playa Ojo de Agua / Lojou',
          desc: 'Llamada Lojou en wayuunaiki, esta playa es famosa por sus aguas tranquilas y cristalinas, ideales para un baño relajante. Rodeada de formaciones rocosas y arena clara, ofrece un paisaje de ensueño. En sus cercanías, las rancherías locales ofrecen artesanías y la pesca del día.'
        }
      }
    },
    aboutUs: {
      tag: 'Conoce Apalanchii',
      title: 'Nosotros',
      whoTitle: '¿Quiénes somos?',
      whoP1: 'Somos una empresa familiar profundamente comprometida con la preservación del medio ambiente y la cultura local. En Apalanchii, ofrecemos un espacio diseñado para vivir aventuras auténticas y memorables.',
      whoP2: 'Ubicados en el corazón del Cabo de la Vela, somos el punto de partida ideal para sumergirse en la naturaleza virgen y apreciar la majestuosidad de los paisajes de La Guajira.',
      whoQuote: '"Nuestro objetivo es que cada momento de tu viaje sea especial. Trabajamos con calidez y dedicación para que te sientas parte de nuestra familia y disfrutes de la verdadera esencia del Cabo."',
      missionTitle: 'Misión',
      missionDesc: 'Brindar una hospitalidad excepcional a través de servicios de alojamiento y gastronomía de alta calidad, impulsando el desarrollo económico y turístico sostenible del Cabo de la Vela con un enfoque humano y cultural.',
      visionTitle: 'Visión',
      visionDesc: 'Consolidarnos como el referente de hospitalidad en el Cabo de la Vela, innovando constantemente en nuestros servicios para ofrecer el máximo confort y experiencias inolvidables a nuestros huéspedes.',
      valuesTitle: 'Valores Corporativos',
      valuesSubtitle: 'La brújula que nos guía',
      values: {
        integrity: { n: 'Integridad', d: 'Actuamos con coherencia y ética.' },
        honesty: { n: 'Honradez y Respeto', d: 'Los pilares de nuestra casa.' },
        kindness: { n: 'Amabilidad', d: 'Atención dedicada a cada persona.' },
        commitment: { n: 'Compromiso', d: 'Con nuestra tierra, cultura y clientes.' },
        quality: { n: 'Calidez Humana', d: 'Hacerte sentir siempre en casa.' }
      }
    },
    assistant: {
      greeting: '¡Hola, navegante! Soy Ka\'la. ¿En qué puedo ayudarte hoy?',
      placeholder: 'Escribe tu mensaje...'
    },
    footer: {
      address: 'Cabo de la Vela, Uribia – La Guajira, Colombia',
      contact: 'Contacto',
      follow: 'Síguenos',
      rights: 'Todos los derechos reservados'
    },
    cookie: {
      title: 'Tu privacidad es importante',
      message: 'Utilizamos cookies para garantizar que tengas la mejor experiencia en nuestro sitio web.',
      accept: 'Aceptar',
      reject: 'Rechazar',
      close: 'Cerrar'
    }
  },
  en: {
    nav: {
      home: 'Home',
      lodging: 'Lodging',
      restaurant: 'Restaurant',
      experiences: 'The destination',
      about: 'About Us'
    },
    hero: {
      title: 'Experience the Magic of Cabo de la Vela',
      subtitle: 'Authentic lodging, local gastronomy, and seaside adventures — all in one place.',
      cta: 'Book Now'
    },
    home: {
      welcomeTag: 'Welcome',
      quote: '"Welcome to Apalanchii, your seaside sanctuary in Cabo de la Vela. Everything here is designed for you to find peace: cabins and enramadas with Wayuu identity, fresh rooms, and a local team providing warm and genuine service. Wake up to the breeze, walk along the shore, and at the end of the day return to a cozy space to recharge. We are just steps away from the experiences that make the Cabo unique: unforgettable sunsets, boat trips, and moments to reconnect with the essential."'
    },
    lodging: {
      title: 'Rest Facing the Sea',
      subtitle: '',
      lead: 'In our lodging, you will find a cozy and authentic space where you can rest and fully enjoy the natural environment of Cabo de la Vela. We offer comfortable rooms built with traditional materials, designed to provide you with freshness and tranquility while you experience the cultural essence of the territory.\n\nYou can also choose to rest in hammocks and chinchorros located in typical cabins, a unique way to live an experience close to local traditions. Our family atmosphere and close attention are designed to make you feel comfortable from your arrival and enjoy a pleasant stay in a natural and different setting.',
      rooms: {
        double: {
          title: 'Double Room (Interior)',
          desc: 'Ideal for couples or friends looking for a restful stay. Features a private bathroom and optimized ventilation for the Cabo climate.',
          includesTitle: 'What do the rooms include?',
          includes: [
            'Private bathroom',
            'Fan',
            'Beds according to room type',
            'Spaces built with traditional yotojoro material',
            'Comfortable spaces for rest',
            'Fresh and naturally ventilated environment',
            'Family and quiet atmosphere',
            'Basic lighting',
            'Adequate space for belongings'
          ]
        },
        enramada: {
          title: 'Enramada with Hammock',
          desc: 'The true Wayuu experience: rest in a hammock under a traditional roof, lulled by the sea breeze and the sound of the waves.',
          includesTitle: 'What does hammock lodging include?',
          includes: [
            'Space in typical cabins',
            'Access to showers',
            'Lockers for belongings',
            'Naturally ventilated spaces',
            'Traditional and family atmosphere',
            'Proximity to the sea'
          ]
        },
        multiple: {
          title: 'Multiple Room',
          desc: 'Perfect for families or groups who want to share without sacrificing comfort. Includes a private bathroom, excellent ventilation, and a practical layout.',
          includesTitle: 'What do the rooms include?',
          includes: [
            'Private bathroom',
            'Fan',
            'Beds according to room type',
            'Spaces built with traditional yotojoro material',
            'Comfortable spaces for rest',
            'Fresh and naturally ventilated environment',
            'Family and quiet atmosphere',
            'Basic lighting',
            'Adequate space for belongings'
          ]
        }
      }
    },
    restaurant: {
      tag: 'Tradition in every dish',
      title: 'Restaurant',
      subtitle: '',
      desc: 'Local flavors, ocean views, and responsible fishing. Enjoy a variety of typical regional dishes, prepared by local hands that care for every detail and the freshness of the ingredients. We prioritize products from our territory.',
      galleryAlt: 'Restaurant gallery'
    },
    experiences: {
      tag: 'The destination',
      title: 'The destination',
      lead: 'Located in the mystical La Guajira peninsula, Cabo de la Vela is one of the most magnetic destinations in the Colombian Caribbean. This place is defined by a wild natural contrast: golden sand dunes that meet deep blue waters, creating a landscape that seems out of this world. More than a visual destination, it is the ancestral heart of the Wayuu people. Visiting it is to immerse yourself in a culture that beats through its language, its weavings, and its sacred respect for the land.\n\nBeyond its contemplative mysticism, Cabo de la Vela has established itself as the kitesurfing mecca of the Caribbean. Thanks to the northeast trade winds that blow with surgical consistency, this destination offers an exceptionally long "wind window" that extends from December to September. With average intensities ranging between 25 and 35 knots, and gusts that rarely drop below 15 knots even in the low season, the Guajira coasts are an unparalleled natural speed track. Here, the geographic configuration creates flat water conditions ideal for both safe learning and high-level freestyle maneuvers. It is not just a sport; it is a perfect symbiosis where the sky is tinged with the chromatism of the kites, turning every gust into an opportunity to defy gravity over a mirror of turquoise water.',
      ctaButton: 'Discover the destination',
      reviewsTitle: 'What our visitors say',
      cta: 'Request tour information',
      items: {
        puntaGallinas: {
          title: 'Punta Gallinas',
          desc: 'Punta Gallinas is the northernmost point of South America and one of the most fascinating destinations in La Guajira. This place blends desert landscapes, imposing dunes, and the Caribbean Sea, creating a spectacular contrast. The territory is home to Wayuu communities who proudly preserve their traditions in this majestic setting.'
        },
        pilonAzucar: {
          title: 'Pilón de Azúcar / Kamaichi Hill',
          desc: 'Pilón de Azúcar, sacred to the Wayuu people as Kamaichi Hill, is an iconic landmark of Cabo de la Vela. This hill rises in front of the Caribbean and offers, after a short climb, an unparalleled panoramic view of the Guajira desert merging with the ocean.'
        },
        cuevaDiablo: {
          title: 'Jepirra (Devil\'s Cave)',
          desc: 'Known touristically as Devil\'s Cave, its ancestral name is Jepirra. It holds deep spiritual significance for the Wayuu: it is the sacred place where the souls of the deceased rest before continuing their journey to the spiritual world.'
        },
        ojoAgua: {
          title: 'Ojo de Agua Beach / Lojou',
          desc: 'Called Lojou in Wayuunaiki, this beach is famous for its calm and crystal-clear waters, ideal for a relaxing swim. Surrounded by rock formations and light sand, it offers a dreamlike landscape. Nearby, local rancherías offer crafts and the catch of the day.'
        }
      }
    },
    aboutUs: {
      tag: 'Get to know Apalanchii',
      title: 'About Us',
      whoTitle: 'Who are we?',
      whoP1: 'We are a family business deeply committed to the preservation of the environment and local culture. At Apalanchii, we offer a space designed for authentic and memorable adventures.',
      whoP2: 'Located in the heart of Cabo de la Vela, we are the ideal starting point to immerse yourself in untouched nature and appreciate the majesty of La Guajira\'s landscapes.',
      whoQuote: '"Our goal is to make every moment of your trip special. We work with warmth and dedication so you feel like part of our family and enjoy the true essence of the Cabo."',
      missionTitle: 'Mission',
      missionDesc: 'To provide exceptional hospitality through high-quality accommodation and gastronomy services, driving sustainable economic and tourism development in Cabo de la Vela with a human and cultural focus.',
      visionTitle: 'Vision',
      visionDesc: 'To establish ourselves as the benchmark for hospitality in Cabo de la Vela, constantly innovating our services to offer maximum comfort and unforgettable experiences to our guests.',
      valuesTitle: 'Corporate Values',
      valuesSubtitle: 'The compass that guides us',
      values: {
        integrity: { n: 'Integrity', d: 'We act with coherence and ethics.' },
        honesty: { n: 'Honesty & Respect', d: 'The pillars of our house.' },
        kindness: { n: 'Kindness', d: 'Dedicated attention to every person.' },
        commitment: { n: 'Commitment', d: 'To our land, culture, and clients.' },
        quality: { n: 'Human Warmth', d: 'Making you always feel at home.' }
      }
    },
    assistant: {
      greeting: 'Hello, navigator! I\'m Ka\'la. How can I help you today?',
      placeholder: 'Type your message...'
    },
    footer: {
      address: 'Cabo de la Vela, Uribia – La Guajira, Colombia',
      contact: 'Contact',
      follow: 'Follow us',
      rights: 'All rights reserved'
    },
    cookie: {
      title: 'Your privacy is important',
      message: 'We use cookies to ensure you have the best experience on our website.',
      accept: 'Accept',
      reject: 'Decline',
      close: 'Close'
    }
  }
};
