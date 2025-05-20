import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the language context
export const LanguageContext = createContext();

// Create the provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  // Detect user's browser language on initial load
  useEffect(() => {
    const detectInitialLanguage = () => {
      const browserLang = navigator.language || navigator.userLanguage;
      if (browserLang.startsWith('he')) {
        return 'he';
      } else if (browserLang.startsWith('ru')) {
        return 'ru';
      } else if (browserLang.startsWith('uk')) {
        return 'ua';
      }
      return 'en';
    };
    
    // Try to get language from localStorage first, otherwise detect from browser
    const savedLanguage = localStorage.getItem('preferredLanguage');
    setLanguage(savedLanguage || detectInitialLanguage());
  }, []);
  
  // Function to change language
  const changeLanguage = (lang) => {
    setLanguage(lang);
    // Save to localStorage for persistence
    localStorage.setItem('preferredLanguage', lang);
    
    // Set dir attribute for RTL language (Hebrew)
    document.documentElement.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');
  };
  
  // Translations data object for the whole site
  const translations = {
    en: {
      header: {
        tour: "Tour",
        info: "Info"
      },
      tabs: {
        tourDates: "TOUR DATES",
        artistInfo: "ARTIST INFO"
      },
      tourDates: {
        sectionTitle: "TOUR DATES",
        subtitle: "Official Tour 2025",
        buyTickets: "Buy Tickets",
        comingSoon: "Coming Soon",
        notifyMe: "Notify Me",
        startTime: "START 20:00"
      },
      artistInfo: {
        sectionTitle: "ARTIST INFO",
        monthlyListeners: "Monthly Listeners",
        platinumSingles: "Platinum Singles",
        soldOutTours: "Sold-out Tours",
        musicAwards: "Music Awards",
        quote: '"My music is about freedom, power, and breaking boundaries."',
        officialVideos: "OFFICIAL VIDEOS",
        latestTracks: "LATEST TRACKS",
        spotifyNote: "To enable the Spotify widget, you need to:",
        spotifyInstructions: [
          "Have a Spotify account (free or premium)",
          "Allow third-party cookies in your browser",
          "Ensure your ad-blocker isn't blocking Spotify embeds"
        ]
      },
      footer: {
        tour: "Tour 2025",
        contact: "CONTACT",
        follow: "FOLLOW",
        allRights: "All rights reserved."
      },
      subscription: {
        title: "FIRST Concert Agency",
        subtitle: "Subscribe not to miss a concert!",
        benefits: [
          "Be the first to know about concerts",
          "Get tickets before official sales",
          "Promo codes and bonuses",
          "Event updates"
        ],
        fullName: "FULL NAME",
        phone: "Enter your phone number",
        email: "Enter your email address to subscribe",
        consent: "I agree to receive concert updates and accept the privacy policy.",
        unsubscribe: "You may unsubscribe at any time using the link in our newsletter.",
        submit: "SUBSCRIBE",
        success: "🎉 You're all set! Please check your inbox to confirm your subscription.",
        error: "Something went wrong. Please try again later or refresh the page.",
        example: "Example: name@email.com",
        placeholder: {
          name: "FULL NAME",
          phone: "PHONE",
          email: "EMAIL"
        }
      }
    },
    ua: {
      header: {
        tour: "Тур",
        info: "Інфо"
      },
      tabs: {
        tourDates: "ДАТИ ТУРНЕ",
        artistInfo: "ПРО АРТИСТА"
      },
      tourDates: {
        sectionTitle: "ДАТИ ТУРНЕ",
        subtitle: "Офіційний Тур 2025",
        buyTickets: "Купити Квитки",
        comingSoon: "Незабаром",
        notifyMe: "Сповістити мене",
        startTime: "ПОЧАТОК 20:00"
      },
      artistInfo: {
        sectionTitle: "ПРО АРТИСТА",
        monthlyListeners: "Слухачів щомісяця",
        platinumSingles: "Платинових синглів",
        soldOutTours: "Розпроданих турів",
        musicAwards: "Музичних нагород",
        quote: '"Моя музика — це про свободу, силу та подолання кордонів."',
        officialVideos: "ОФІЦІЙНІ ВІДЕО",
        latestTracks: "ОСТАННІ ТРЕКИ",
        spotifyNote: "Щоб увімкнути віджет Spotify, вам потрібно:",
        spotifyInstructions: [
          "Мати обліковий запис Spotify (безкоштовний або преміум)",
          "Дозволити сторонні куки у вашому браузері",
          "Переконатися, що ваш блокувальник реклами не блокує вставки Spotify"
        ]
      },
      footer: {
        tour: "Тур 2025",
        contact: "КОНТАКТИ",
        follow: "СОЦМЕРЕЖІ",
        allRights: "Всі права захищені."
      },
      subscription: {
        title: "FIRST Концертна Агенція",
        subtitle: "Підпишись, щоб не пропустити концерти!",
        benefits: [
          "Дізнатись про концерти першими",
          "Купуйте квитки заздалегідь",
          "Промокоди та бонуси",
          "Сповіщення про зміни"
        ],
        fullName: "Ім'я та прізвище",
        phone: "Введіть свій номер телефону",
        email: "Введіть свою email-адресу для підписки",
        consent: "Я погоджуюсь отримувати оновлення про концерти та приймаю політику конфіденційності.",
        unsubscribe: "Ви можете відписатися будь-коли за посиланням у листі.",
        submit: "ПІДПИСАТИСЬ",
        success: "🎉 Підписку успішно оформлено.",
        error: "Не вдалося зберегти підписку. Спробуйте ще раз.",
        example: "Наприклад: name@email.com",
        placeholder: {
          name: "Ім'я та прізвище",
          phone: "Телефон",
          email: "Email"
        }
      }
    },
    ru: {
      header: {
        tour: "Тур",
        info: "Инфо"
      },
      tabs: {
        tourDates: "ДАТЫ ТУРА",
        artistInfo: "ОБ АРТИСТЕ"
      },
      tourDates: {
        sectionTitle: "ДАТЫ ТУРА",
        subtitle: "Официальный Тур 2025",
        buyTickets: "Купить Билеты",
        comingSoon: "Скоро",
        notifyMe: "Уведомить меня",
        startTime: "НАЧАЛО 20:00"
      },
      artistInfo: {
        sectionTitle: "ОБ АРТИСТЕ",
        monthlyListeners: "Слушателей ежемесячно",
        platinumSingles: "Платиновых синглов",
        soldOutTours: "Распроданных туров",
        musicAwards: "Музыкальных наград",
        quote: '"Моя музыка — это о свободе, силе и преодолении границ."',
        officialVideos: "ОФИЦИАЛЬНЫЕ ВИДЕО",
        latestTracks: "ПОСЛЕДНИЕ ТРЕКИ",
        spotifyNote: "Чтобы включить виджет Spotify, вам нужно:",
        spotifyInstructions: [
          "Иметь аккаунт Spotify (бесплатный или премиум)",
          "Разрешить сторонние куки в вашем браузере",
          "Убедиться, что ваш блокировщик рекламы не блокирует встроенные элементы Spotify"
        ]
      },
      footer: {
        tour: "Тур 2025",
        contact: "КОНТАКТЫ",
        follow: "СОЦСЕТИ",
        allRights: "Все права защищены."
      },
      subscription: {
        title: "FIRST Концертное Агентство",
        subtitle: "Подпишись, чтобы не пропустить концерты!",
        benefits: [
          "Узнавайте о концертах первыми",
          "Покупайте билеты до официального старта продаж",
          "Промокоды и бонусы",
          "Обновления о событиях"
        ],
        fullName: "Имя и фамилия",
        phone: "Введите свой номер телефона",
        email: "Введите свой email-адрес для подписки",
        consent: "Я соглашаюсь получать обновления о концертах и принимаю политику конфиденциальности.",
        unsubscribe: "Вы можете отписаться в любое время используя ссылку в нашей рассылке.",
        submit: "ПОДПИСАТЬСЯ",
        success: "🎉 Подписка успешно оформлена. Проверьте свою почту для подтверждения подписки.",
        error: "Произошла ошибка. Пожалуйста, попробуйте позже или обновите страницу.",
        example: "Пример: name@email.com",
        placeholder: {
          name: "Имя и фамилия",
          phone: "Телефон",
          email: "Email"
        }
      }
    },
    he: {
      header: {
        tour: "סיבוב הופעות",
        info: "מידע"
      },
      tabs: {
        tourDates: "תאריכי הופעות",
        artistInfo: "מידע על האמן"
      },
      tourDates: {
        sectionTitle: "תאריכי הופעות",
        subtitle: "סיבוב הופעות רשמי 2025",
        buyTickets: "רכישת כרטיסים",
        comingSoon: "בקרוב",
        notifyMe: "עדכנו אותי",
        startTime: "התחלה 20:00"
      },
      artistInfo: {
        sectionTitle: "מידע על האמן",
        monthlyListeners: "מאזינים חודשיים",
        platinumSingles: "סינגלים פלטינה",
        soldOutTours: "סיבובי הופעות אזלו",
        musicAwards: "פרסי מוזיקה",
        quote: '"המוזיקה שלי עוסקת בחופש, כוח ופריצת גבולות."',
        officialVideos: "סרטונים רשמיים",
        latestTracks: "הרצועות האחרונות",
        spotifyNote: "כדי להפעיל את הוידג'ט של Spotify, עליך:",
        spotifyInstructions: [
          "להיות בעל חשבון Spotify (חינמי או פרימיום)",
          "לאפשר קובצי עוגיות צד שלישי בדפדפן שלך",
          "לוודא שחוסם המודעות שלך אינו חוסם הטמעות Spotify"
        ]
      },
      footer: {
        tour: "סיבוב הופעות 2025",
        contact: "צור קשר",
        follow: "עקבו אחרינו",
        allRights: "כל הזכויות שמורות."
      },
      subscription: {
        title: "סוכנות הקונצרטים FIRST",
        subtitle: "הירשמו כדי לא להחמיץ הופעות!",
        benefits: [
          "היו הראשונים לדעת על הופעות",
          "קבלו כרטיסים לפני המכירה הרשמית",
          "קודי קופון והטבות",
          "עדכונים על אירועים"
        ],
        fullName: "שם מלא",
        phone: "הזינו את מספר הטלפון שלכם",
        email: "הזינו את כתובת האימייל שלכם להרשמה",
        consent: "אני מסכים/ה לקבל עדכונים על הופעות ומקבל/ת את מדיניות הפרטיות.",
        unsubscribe: "תוכלו לבטל את ההרשמה בכל עת באמצעות הקישור בניוזלטר שלנו.",
        submit: "הרשמה",
        success: "🎉 ההרשמה הושלמה בהצלחה! אנא בדקו את תיבת הדואר הנכנס לאישור ההרשמה.",
        error: "אירעה שגיאה. אנא נסו שוב מאוחר יותר או רעננו את הדף.",
        example: "דוגמה: name@email.com",
        placeholder: {
          name: "שם מלא",
          phone: "טלפון",
          email: "אימייל"
        }
      }
    }
  };
  
  // Context value to be provided
  const value = {
    language,
    changeLanguage,
    t: translations[language] || translations.en,
    availableLanguages: [
      { code: 'en', name: 'English' },
      { code: 'ua', name: 'Українська' },
      { code: 'ru', name: 'Русский' },
      { code: 'he', name: 'עברית' }
    ]
  };
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 