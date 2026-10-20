export type Locale = "tr" | "en";

export const messages = {
  tr: {
    nav: { home: "Anasayfa", about: "Hakkımızda", projects: "Projeler", contact: "İletişim", menu: "Menü", close: "Kapat", label: "Ana menü" },
    language: "Dil seçimi",
    previous: "Önceki sayfa",
    next: "Sonraki sayfa",
    eyebrow: "PROJE · TASARIM · UYGULAMA",
    copyright: "Tüm hakları saklıdır.",
    home: "Mimari tasarım, iç mekan ve proje geliştirme alanlarında sade, çağdaş ve güçlü çözümler üreten bir mimarlık ofisi.",
    about: [
      "Afa Mimarlık; mimari tasarım, uygulama, iç mekan ve proje geliştirme süreçlerinde işlevsel ve estetik çözümler üretmek amacıyla Mimar Ahmet Faruk Arabacı tarafından 2026 yılında kuruldu.",
      "Ahmet Faruk Arabacı, 2020 yılında Karabük Üniversitesi Safranbolu Mimarlık Fakültesinden, 2021 yılında Atatürk Üniversitesi İş Sağlığı Ve Güvenliği Bölümünden mezun oldu. Halen Kütahya Dumlupınar Üniversitesi Arkeoloji Bölümünde yüksek lisans eğitimine devam etmektedir. Çeşitli firmalarda mimari proje yürütücülüğü yaptı.",
      "Afa Mimarlık firmasında çalışmalarına devam etmektedir.",
    ],
    contact: { address: "Adres", email: "E-Posta", phone: "Telefon", map: "Afa Mimarlık Konum", mapLanguage: "tr" },
    image: "görsel",
    metadata: {
      description: "Afa Mimarlık; mimari tasarım, iç mekan, uygulama ve proje geliştirme alanlarında çağdaş ve işlevsel çözümler sunan mimarlık ofisidir.",
      socialDescription: "Mimari tasarım, iç mekan, uygulama ve proje geliştirme.",
      locale: "tr_TR",
    },
  },
  en: {
    nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact", menu: "Menu", close: "Close", label: "Main navigation" },
    language: "Select language",
    previous: "Previous page",
    next: "Next page",
    eyebrow: "PROJECT · DESIGN · CONSTRUCTION",
    copyright: "All rights reserved.",
    home: "An architecture studio creating simple, contemporary and distinctive solutions in architectural design, interiors and project development.",
    about: [
      "Afa Mimarlık was founded in 2026 by architect Ahmet Faruk Arabacı to create functional and thoughtful designs across architecture, construction, interiors and project development.",
      "Ahmet Faruk Arabacı graduated from the Faculty of Architecture in Safranbolu at Karabük University in 2020 and from the Department of Occupational Health and Safety at Atatürk University in 2021. He is currently pursuing a master's degree in Archaeology at Kütahya Dumlupınar University. He has led architectural projects at various firms.",
      "He continues his work at Afa Mimarlık.",
    ],
    contact: { address: "Address", email: "Email", phone: "Phone", map: "Afa Mimarlık location", mapLanguage: "en" },
    image: "image",
    metadata: {
      description: "Afa Mimarlık is an architecture studio offering contemporary, functional solutions in architectural design, interiors, construction and project development.",
      socialDescription: "Architectural design, interiors, construction and project development.",
      locale: "en_GB",
    },
  },
};

export function resolveLocale(value: string | undefined): Locale {
  return value === "en" ? "en" : "tr";
}
