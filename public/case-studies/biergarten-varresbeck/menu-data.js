/* =========================================================
   Biergarten Varresbeck — Speise- & Getränkekarte (Datenquelle)
   Eine Quelle für Speisekarte.html und Getraenkekarte.html.
   Preise nach den aktuellen PDF-Karten. Neue Positionen einfach
   hier ergänzen — Reihenfolge = Anzeige.

   diet:  'veg'  = vegetarisch   'vegan' = vegan
   frei:  true   = alkoholfrei
   Bei mehreren Größen: variants:[{l:'0,3 l', p:'3,90'}, ...]
   ========================================================= */

window.BV_SPEISEKARTE = {
  intro: "Frisch zubereitet — vom bayrischen Klassiker bis zum Biergarten-Schmankerl. Tagesangebote (Suppe, Salat, Dessert) stehen auf der Tafel.",
  categories: [
    { id: "suppen",      label: "Suppen & Eintöpfe",      note: "Tagesangebot — siehe Tafel" },
    { id: "salate",      label: "Salate, Brot & Brezel" },
    { id: "flammkuchen", label: "Flammkuchen & Brizza" },
    { id: "warm",        label: "Warme Speisen" },
    { id: "burger",      label: "Burger & Brett-Spezialitäten" },
    { id: "kinder",      label: "Für die Kleinen" },
    { id: "suesses",     label: "Süßes" },
    { id: "saucen",      label: "Saucen & Extras" }
  ],
  items: [
    // Suppen & Eintöpfe
    { cat: "suppen", name: "Eintopf", desc: "wechselnd — siehe Tafel", price: "6,50", diet: ["vegan"] },
    { cat: "suppen", name: "Eintopf mit Fleisch", desc: "wechselnd — siehe Tafel", price: "7,90" },

    // Salate, Brot & Brezel
    { cat: "salate", name: "Beilagen-Salat", price: "4,90", diet: ["veg"] },
    { cat: "salate", name: "Tagessalat", desc: "siehe Tafel", price: "ab 8,20", diet: ["veg"] },
    { cat: "salate", name: "Kartoffelsalat", price: "5,20", diet: ["veg"] },
    { cat: "salate", name: "Brot mit 2 verschiedenen Dips", price: "6,90", diet: ["veg"] },
    { cat: "salate", name: "Brezel", price: "2,20", diet: ["veg"] },
    { cat: "salate", name: "Brezel-Dips", desc: "Obazda, Kräuter- oder Aioli-Dip", price: "4,80", diet: ["veg"] },
    { cat: "salate", name: "Bratling mit Dip", price: "5,20", diet: ["veg"] },
    { cat: "salate", name: "Bratling mit Dip und Salat", price: "10,90", diet: ["veg"] },

    // Flammkuchen & Brizza
    { cat: "flammkuchen", name: "Flammkuchen mit Lauch", price: "11,50", diet: ["veg"] },
    { cat: "flammkuchen", name: "Flammkuchen mit Tomate, Karottenstreifen & Lauch", price: "12,50", diet: ["veg"] },
    { cat: "flammkuchen", name: "Flammkuchen mit Speck, Schmand & Lauch", price: "12,50" },
    { cat: "flammkuchen", name: "Brizza", desc: "Brezelteigpizza mit Obazda, Lauchzwiebeln & Essiggemüse", price: "12,50", diet: ["veg"] },

    // Warme Speisen
    { cat: "warm", name: "Käseknöpfle mit Schmorzwiebeln", price: "11,20", diet: ["veg"] },
    { cat: "warm", name: "Käseknöpfle mit Speck", price: "12,20" },
    { cat: "warm", name: "Leberkäse / Frikadelle", desc: "mit süß-saurem Kartoffelsalat & süßem Senf", price: "11,20" },
    { cat: "warm", name: "Leberkäse / Frikadelle im Brötchen", desc: "mit süßem Senf", price: "5,40" },
    { cat: "warm", name: "Currywurst mit Brötchen", price: "5,50" },
    { cat: "warm", name: "Currywurst mit Pommes (Dippers)", price: "8,40" },
    { cat: "warm", name: "Pommes (Dippers)", desc: "Portion", price: "4,20", diet: ["veg"] },
    { cat: "warm", name: "Bratwurst / Krakauer im Brötchen", price: "4,90" },
    { cat: "warm", name: "Vegane Bratwurst im Brötchen", price: "5,20", diet: ["vegan"] },

    // Burger & Brett-Spezialitäten
    { cat: "burger", name: "Burger (Rind) oder Pulled-Pork-Burger (Schwein)", desc: "mit Dippers", price: "14,90" },
    { cat: "burger", name: "Vegetarischer Burger (Bratling)", desc: "mit Dippers", price: "15,90", diet: ["veg"] },
    { cat: "burger", name: "Käse-Brett", desc: "mit Brot und 2 Dips", price: "10,50", diet: ["veg"] },
    { cat: "burger", name: "Schinken-Käse-Brett", desc: "mit Brot und 2 Dips", price: "12,50" },

    // Für die Kleinen
    { cat: "kinder", name: "Kinder-Pommes", price: "2,50", diet: ["veg"] },
    { cat: "kinder", name: "Fischnuggets mit Pommes", desc: "und Mayo oder Ketchup", price: "7,20" },

    // Süßes
    { cat: "suesses", name: "Dessert", desc: "wechselndes Angebot — siehe Tafel", price: "3,50" },

    // Saucen & Extras
    { cat: "saucen", name: "Senf / Ketchup / Mayo", desc: "Mayo auf veganer Basis", price: "0,60", diet: ["vegan"] }
  ]
};

window.BV_GETRAENKEKARTE = {
  intro: "Bestes Bier vom Fass, charaktervolle Weine und feine Alkoholfreie. Selbstbedienung — bitte hinterlasst euren Platz so ordentlich, wie ihr ihn vorgefunden habt. Danke!",
  categories: [
    { id: "bier",        label: "Bier" },
    { id: "wein",        label: "Wein & Sekt" },
    { id: "alkoholfrei", label: "Limos & Wasser" },
    { id: "heiss",       label: "Kaffee, Kakao & Tee" },
    { id: "longdrinks",  label: "Longdrinks & Schnaps" }
  ],
  items: [
    // Bier — vom Fass
    { cat: "bier", group: "Vom Fass", name: "Bitburger Pils", variants: [{ l: "0,3 l", p: "3,90" }, { l: "0,5 l", p: "5,50" }, { l: "1,0 l · Maß", p: "9,90" }] },
    { cat: "bier", group: "Vom Fass", name: "Benediktiner Helles", variants: [{ l: "0,3 l", p: "3,90" }, { l: "0,5 l", p: "5,50" }, { l: "1,0 l · Maß", p: "9,90" }] },
    // Bier — aus der Flasche
    { cat: "bier", group: "Aus der Flasche", name: "Bitburger Radler", desc: "auch als 0,0 % alkoholfrei", variants: [{ l: "0,33 l", p: "3,90" }], frei: true },
    { cat: "bier", group: "Aus der Flasche", name: "Benediktiner Hefe-Weizen", variants: [{ l: "0,5 l", p: "5,50" }] },
    { cat: "bier", group: "Aus der Flasche", name: "Benediktiner Weizen alkoholfrei", variants: [{ l: "0,5 l", p: "5,50" }], frei: true },
    { cat: "bier", group: "Aus der Flasche", name: "Benediktiner Hell alkoholfrei", variants: [{ l: "0,33 l", p: "3,90" }], frei: true },
    { cat: "bier", group: "Aus der Flasche", name: "Füchschen Alt", variants: [{ l: "0,33 l", p: "3,90" }] },

    // Wein & Sekt
    { cat: "wein", name: "Sekt (Hausmarke)", desc: "sehr brut — schön trocken; gerne mit Eiswürfeln oder als Aperol", variants: [{ l: "0,1 l", p: "3,20" }, { l: "0,75 l", p: "22,–" }] },
    { cat: "wein", name: "Hausweine — Rot, Rosé, Weiß", desc: "trocken und fruchtig, von uns für euch", variants: [{ l: "0,2 l", p: "5,60" }, { l: "0,75 l", p: "21,–" }] },
    { cat: "wein", name: "Hauck — Grauburgunder", desc: "trocken und fruchtig, ein Wein für jeden Tag", variants: [{ l: "0,2 l", p: "6,10" }, { l: "0,75 l", p: "22,50" }] },
    { cat: "wein", name: "Franz Mann — Riesling", desc: "trocken, alte Reben", variants: [{ l: "0,2 l", p: "6,50" }, { l: "0,75 l", p: "24,–" }] },
    { cat: "wein", name: "Les Sardines — Rosé", desc: "sehr typischer Rosé mit wunderbarer Frucht", variants: [{ l: "0,2 l", p: "5,10" }, { l: "0,75 l", p: "21,80" }] },
    { cat: "wein", name: "Weinschorle", desc: "alle Weine sind auch als Schorle erhältlich", variants: [{ l: "0,2 l", p: "5,30" }] },

    // Limos & Wasser (alkoholfrei)
    { cat: "alkoholfrei", name: "CLIMAID", desc: "Rhabarber, Zitrone oder Apfelschorle", variants: [{ l: "0,33 l", p: "3,90" }], frei: true },
    { cat: "alkoholfrei", name: "Proviant Cola / Cola zuckerfrei / Orange", variants: [{ l: "0,33 l", p: "3,90" }], frei: true },
    { cat: "alkoholfrei", name: "Krombacher Fassbrause Maracuja", variants: [{ l: "0,33 l", p: "3,90" }], frei: true },
    { cat: "alkoholfrei", name: "Spezi", variants: [{ l: "0,33 l", p: "3,90" }], frei: true },
    { cat: "alkoholfrei", name: "Almdudler", variants: [{ l: "0,35 l", p: "3,90" }], frei: true },
    { cat: "alkoholfrei", name: "Haaner Sprudel", desc: "medium oder still", variants: [{ l: "0,25 l", p: "2,90" }, { l: "0,75 l", p: "4,90" }], frei: true },

    // Kaffee, Kakao & Tee
    { cat: "heiss", name: "Kaffee", price: "3,10", frei: true },
    { cat: "heiss", name: "Espresso", price: "2,70", frei: true },
    { cat: "heiss", name: "Milchkaffee", price: "3,90", frei: true },
    { cat: "heiss", name: "Cappuccino", price: "3,60", frei: true },
    { cat: "heiss", name: "Latte Macchiato", price: "4,40", frei: true },
    { cat: "heiss", name: "Kakao", desc: "mit Hafermilch +0,60 €", price: "3,70", frei: true },
    { cat: "heiss", name: "Messmer Tee", desc: "Früchte-, Kräuter-, Chai-, Schwarz- oder Grüntee", price: "3,10", frei: true },

    // Longdrinks & Schnaps
    { cat: "longdrinks", name: "Aperol Spritz", price: "7,90" },
    { cat: "longdrinks", name: "Lillet Wild Berry", price: "7,90" },
    { cat: "longdrinks", name: "Déjà-Vu Wild Berry", desc: "alkoholfreie Alternative", price: "7,90", frei: true },
    { cat: "longdrinks", group: "Hauseigener Schnaps", name: "Korn / Kristall", variants: [{ l: "2 cl", p: "3,50" }] },
    { cat: "longdrinks", group: "Hauseigener Schnaps", name: "Pflaumenlikör", variants: [{ l: "2 cl", p: "3,50" }] },
    { cat: "longdrinks", group: "Hauseigener Schnaps", name: "Wacholder", variants: [{ l: "2 cl", p: "3,50" }] },
    { cat: "longdrinks", group: "Hauseigener Schnaps", name: "Jagdtropfen", variants: [{ l: "2 cl", p: "3,50" }] }
  ]
};

/* Aktionen & Angebote (Getränkekarte) */
window.BV_AKTIONEN = [
  { k: "Jeden Mittwoch",     title: "Studi-Tag",            desc: "Bier (0,2 l) und Schnaps (2 cl)",     price: "je 1,50 €" },
  { k: "Do. 18 – 20 Uhr",    title: "Happy Hour",           desc: "Alle Longdrinks",                     price: "je 6,50 €" },
  { k: "Zum Mitnehmen",      title: "Souvenir-Flaschen",    desc: "Hauseigener Schnaps · alle Sorten (100 ml)", price: "19,– €" },
  { k: "Zum Teilen",         title: "Bitburger 10-L-Fass",  desc: "Zum Selber-Zapfen direkt am Tisch",   price: "96,– €" }
];
