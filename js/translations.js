module.exports = (function () {
  const config = {
    query: true,
    locales: {
      "en": {
        "nav-about": "about",
        "nav-projects": "projects",
        "nav-contact": "contact",
        "page-about": "lorem lorem",
        "about-breadcrumb" : "who am i",
        "about-heading": "Something about me",
        "about-content": "I'm 23 years old and I was born in Suwalki - a picturesque town in north-east Poland. Currently, I'm studing IT Applications in Business at University of Gdansk. My career goal is to become JavaScript developer aimed at working with React.<br> I've become interested in front-end by doing HTML presentations on portal called Epuls (kind of social network website, popular few years ago) for my colleagues. I've started to learn web technology for serious during my studies and decided that is the job I'd love to be good at.<br>In my free time I discover my web interests, play volleyball or do cycling. I love to spend time with my family and friends, try tasty cuisine and watch worthwhile movies.<p>I'd enjoy to talk about myself more - feel free to <a href=\"contact\" class=\"about__link\">contact me</a> and check my <a href=\"https://github.com/sebastian-kopiczko?tab=repositories\" class=\"about__link\">Github</a> account as well as my <a href=\"projects\" class=\"about__link\">projects</a>.",
        "projects-breadcrumb": "portfolio",
        "projects-heading": "My projects",
        "projects-content": "Technologies that I used and linkages to github repository and live demo.",
        "project-description": {
          "bialaperla": "Website build for Biala Perla (restaurant and marina based on the water) from Augustow - own design.",
          "resume": "Web personal resume.",
          "profil": "Wordpress website done for carpentry from Suwalki based on own graphical project.",
          "weather-app": "Application to check current weather (fetching data from Dark Sky API) for specific location (Google API autocomplete).",
          "notes-app": "Simple app that allows to add, edit and delete notes.",
          "poland-psd": "PSD to HTML project.",
          "youtube-app": "IN PROGRESS - application to fetching data about channels and searching videos. ",
          "tips-calculator": "IN PROGRESS - Simple tip calculator made for university classes.",
          "restaurant-psd": "PSD to HTML project.",
          "shopping-list": "Small app to create shopping list."
        },
        "contact-breadcrumb": "contact",
        "contact-heading": "Contact form",
        "contact-label-name": "Name",
        "contact-label-message": "Message",
        "contact-send": "Send"
      },
      "pl": {
        "nav-about": "o mnie",
        "nav-projects": "projekty",
        "nav-contact": "kontakt",
        "about-breadcrumb": "kim jestem",
        "about-heading": "trochę o mnie",
        "about-content": "Mam 23 lata, pochodzę z malowniczych Suwałk i aktualnie jestem studentem ostatniego roku na kierunku Aplikacje Informatyczne w Biznesie na Uniwersytecie Gdańskim. Moim celem jest zostanie JavaScript developerem ukierunkowanym na React\'a.<br>Moje zainteresowanie front-endem zaczeło się od tworzenia prezentacji znajomym w HTML-u na popularnym kilka lat temu serwisie <a href=\"http://nonsensopedia.wikia.com/wiki/Epuls.pl\" class=\"about__link\">Epuls</a> :). Na poważniej technologii webowych zacząłem uczyć się na własną rękę podczas studiów i podjąłem decyzje, że to jest to, w czym chciałbym rozwijać się zawodowo.<br>Wolny czas spędzam z najbliższymi, siatkówkę oraz jazdę na rowerze. Uwielbiam dobrą kuchnię i ciekawe filmy.<p>Z przyjmenością opowiem o sobie więcej - pozostaję do dyspozycji. Zachęcam do zapoznania się z moimi <a href=\"projects\" class=\"about__link\">projektami</a> oraz kontem na <a href=\"https://github.com/sebastian-kopiczko?tab=repositories\" class=\"about__link\">Githubie</a>.",
        "projects-breadcrumb": "portfolio",
        "projects-heading": "Moje projekty",
        "projects-content": "Użyte technologie, linki do githuba/podglądu na żywo.",
        "project-description": {
          "bialaperla": "Strona internetowa stworzona dla Białej Perły w Augustowie w oparciu o własny projekt graficzny.",
          "resume": "Moje CV, które wykonałem korzystając z technologii webowych.",
          "profil": "Strona interntowa wykonana dla zakładu stolarskiego w Suwałkach oparta na Wordpressie - własny projekt graficzny.",
          "weather-app": "Aplikacja sprawdzająca aktualną pogodę (Dark Sky API) dla podanej lokalizacji (Google API).",
          "notes-app": "Prosta aplikacja pozwalająca na dodawanie, edycję oraz usuwanie notatek.",
          "poland-psd": "Strona internetowa zakodowana na podstawie darmowego szablonu PSD.",
          "youtube-app": "W BUDOWIE - Aplikacja pozwalająca na pobieranie danych o kanałach oraz wyszukiwanie filmów z serwisu YT. ",
          "tips-calculator": "W BUDOWIE - Prosty kalkulator obliczający wysokość napiwku. Projekt wykonany na zaliczenie przedmiotu na uczelni.",
          "restaurant-psd": "Strona internetowa zakodowana na podstawie darmowego szablonu PSD.",
          "shopping-list": "Niewielka aplikacja służąca do robienia listy zakupów."
        },
        "contact-breadcrumb": "kontakt",
        "contact-heading": "Formularz kontaktowy",
        "contact-label-name": "Imię",
        "contact-label-message": "Wiadomość",
        "contact-send": "Wyślij"
      }
    },
    cookieName: 'locale'
  };
  return config;
})();
