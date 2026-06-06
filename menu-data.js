// ===== DATOS DEL MENÚ - LA REYNA DEL SABOR =====
// Las imágenes usan URLs de Unsplash (fotorealistas, no caricaturas)

const MENU = [
  // --- HAMBURGUESAS ---
  {
    id: 1,
    category: "hamburguesas",
    name: "Hamburguesa Sencilla",
    desc: "Carne de res jugosa, lechuga fresca, jitomate, cebolla y mostaza en pan brioche tostado. Incluye papas.",
    price: 80,
    badge: "🔥 Popular",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    variants: [],
    tag: "hamburguesas"
  },
  {
    id: 2,
    category: "hamburguesas",
    name: "Hamburguesa Hawaiana",
    desc: "Doble carne, piña caramelizada, queso amarillo derretido, tocino crujiente y salsa BBQ. Incluye papas.",
    price: 100,
    badge: "⭐ Especial",
    img: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=600&q=80",
    variants: [],
    tag: "hamburguesas"
  },
  {
    id: 3,
    category: "hamburguesas",
    name: "Hamburguesa Pollo Crunchy",
    desc: "Pechuga empanizada extra crujiente, queso cheddar, pepinillos, coleslaw y salsa especial de la Reyna. Con papas.",
    price: 100,
    badge: "🍗 Crunch",
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80",
    variants: [],
    tag: "hamburguesas"
  },

  // --- ALITAS ---
  {
    id: 4,
    category: "alitas",
    name: "6 Alitas BBQ + Papas",
    desc: "6 alitas bañadas en salsa BBQ ahumada, acompañadas de papas fritas y ensalada fresca.",
    price: 100,
    badge: "🔥 BBQ",
    img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&q=80",
    variants: ["BBQ", "Mango Habanero"],
    tag: "alitas"
  },
  {
    id: 5,
    category: "alitas",
    name: "6 Boneless + Papas",
    desc: "6 trozos de pollo sin hueso, crocantes por fuera y jugosos por dentro, bañados en tu salsa favorita.",
    price: 100,
    badge: "💥 Sin Hueso",
    img: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80",
    variants: ["BBQ", "Mango Habanero"],
    tag: "alitas"
  },

  // --- PAPAS ---
  {
    id: 6,
    category: "papas",
    name: "Papas Gajo",
    desc: "Gajos de papa dorados al horno con especias, crujientes por fuera y suaves por dentro. La botana perfecta.",
    price: 56,
    badge: "🍟 Crujientes",
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80",
    variants: [],
    tag: "papas"
  },
  {
    id: 7,
    category: "papas",
    name: "Papas a la Francesa",
    desc: "Papas fritas estilo clásico, doradas y perfectamente saladas. El acompañamiento infaltable.",
    price: 56,
    badge: "🥇 Clásico",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&q=80",
    variants: [],
    tag: "papas"
  },

  // --- CREPAS DULCES ---
  {
    id: 8,
    category: "crepas",
    name: "Crepa de Cajeta",
    desc: "Crepa suave rellena de cajeta artesanal, queso crema y nuez. Un postre que enamora.",
    price: 55,
    badge: "🍮 Artesanal",
    img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600&q=80",
    variants: ["Cajeta", "Nutella", "Lechera", "Hershey's", "Fresas con Queso"],
    tag: "crepas"
  },
  {
    id: 9,
    category: "crepas",
    name: "Crepa de Nutella",
    desc: "Crepa esponjosa con Nutella generosa, fresas naturales y azúcar glass. El favorito de los niños.",
    price: 55,
    badge: "🍫 Favorita",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",
    variants: ["Cajeta", "Nutella", "Lechera", "Hershey's", "Fresas con Queso"],
    tag: "crepas"
  },
  {
    id: 10,
    category: "crepas",
    name: "Crepa Fresas con Queso",
    desc: "Fresas frescas con crema de queso, coronadas con leche condensada. Frescura y dulzura en cada mordida.",
    price: 55,
    badge: "🍓 Fresco",
    img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80",
    variants: ["Cajeta", "Nutella", "Lechera", "Hershey's", "Fresas con Queso"],
    tag: "crepas"
  },

  // --- PLÁTANOS ---
  {
    id: 11,
    category: "platanos",
    name: "Plátanos Machos",
    desc: "Plátanos machos fritos al punto perfecto, dorados y caramelizados. La orden viene con crema y queso.",
    price: 40,
    badge: "🍌 Tradicional",
    img: "https://images.unsplash.com/photo-1603201897553-18bb6f702fdc?w=600&q=80",
    variants: [],
    tag: "platanos"
  },

  // --- CURADOS ---
  {
    id: 12,
    category: "curados",
    name: "Curado Blanco",
    desc: "El clásico curado de pulque blanco natural. Refrescante y auténtico, servido en jarrito de barro.",
    price: 35,
    badge: "🏆 Clásico",
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80",
    variants: [],
    tag: "curados"
  },
  {
    id: 13,
    category: "curados",
    name: "Curado de Limón",
    desc: "Curado natural con toque de limón fresco. Perfecto para refrescarte con todo el sabor.",
    price: 60,
    badge: "🍋 Refrescante",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80",
    variants: ["Limón", "Piña", "Mango"],
    tag: "curados"
  },
  {
    id: 14,
    category: "curados",
    name: "Curado Piña Colada",
    desc: "La mezcla tropical que todos aman. Piña, coco y pulque en perfecta armonía.",
    price: 65,
    badge: "🌴 Tropical",
    img: "https://images.unsplash.com/photo-1508867895491-9649a5ef4bc6?w=600&q=80",
    variants: ["Piña Colada", "Frutos Rojos", "Fresas con Crema"],
    tag: "curados"
  },
  {
    id: 15,
    category: "curados",
    name: "Curado de Pistache",
    desc: "El curado premium de la Reyna. Pistache finamente molido con pulque cremoso. Experiencia de dioses.",
    price: 70,
    badge: "👑 Premium",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
    variants: ["Pistache", "Rompope"],
    tag: "curados"
  },
  {
    id: 16,
    category: "curados",
    name: "Curado de Piñón",
    desc: "Nuestro curado más exclusivo. Piñón tostado con pulque artesanal. Solo para los que saben.",
    price: 80,
    badge: "💎 Exclusivo",
    img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80",
    variants: [],
    tag: "curados"
  },

  // --- POSTRES EXTRA ---
  {
    id: 17,
    category: "crepas",
    name: "Brownie con Helado",
    desc: "Brownie de chocolate tibio con bola de helado de vainilla y caramelo. El postre que cierra perfecto.",
    price: 65,
    badge: "🍫 Nuevo",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    variants: [],
    tag: "crepas"
  },
  {
    id: 18,
    category: "crepas",
    name: "Churros con Cajeta",
    desc: "Churros recién hechos con canela, acompañados de cajeta artesanal y chocolate caliente para botanear.",
    price: 55,
    badge: "🥨 Crujiente",
    img: "https://images.unsplash.com/photo-1624391439159-4b9f4e43ce04?w=600&q=80",
    variants: ["Cajeta", "Nutella", "Cajeta + Nutella"],
    tag: "crepas"
  },
  {
    id: 19,
    category: "crepas",
    name: "Waffle con Fresas",
    desc: "Waffle esponjoso con fresas naturales, crema batida y miel de maple. Desayuno o postre perfecto.",
    price: 70,
    badge: "🧇 Deluxe",
    img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    variants: ["Fresas", "Nutella", "Cajeta", "Mixto"],
    tag: "crepas"
  },
  {
    id: 20,
    category: "crepas",
    name: "Helado Artesanal",
    desc: "2 bolas de helado artesanal hecho en casa. Sabores del día: pregunta a tu mesero.",
    price: 45,
    badge: "🍨 Artesanal",
    img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&q=80",
    variants: ["Vainilla", "Chocolate", "Fresa", "Nuez"],
    tag: "crepas"
  }
];
