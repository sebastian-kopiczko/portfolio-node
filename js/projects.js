const translation = require('./translations');
module.exports = (function(){
  const projects = [
    {
      name: 'bialaperla',
      title: "Biała Perła",
      desc: `Strona internetowa stworzona dla Białej Perły w Augustowie w oparciu o własny projekt graficzny.`,
      tags: "html, scss, gulp, wordpress, illustrator",
      live: "http://biala-perla.pl/",
      github: "https://github.com/sebastian-kopiczko/biala-perla"
    },
    {
      name: 'resume',
      title: 'CV',
      desc: 'Webowe CV',
      tags: 'css grid, html, webpack',
      live: 'https://sebastiankopiczko.pl/resume/',
      github: 'https://github.com/sebastian-kopiczko/resume'
    },
    {
      name: 'profil',
      title: "Meble Profil",
      desc: "Strona interntowa wykonana dla zakładu stolarskiego w Suwałkach oparta na  Wordpressie - własny projekt graficzny.",
      tags: "html, scss, gulp, wordpress, ACF, illustrator",
      live: "https://meble-profil.pl/",
      github: "https://github.com/sebastian-kopiczko/ProfilSuwalki"
    },
    {
      name: 'weather-app',
      title: 'weather-app',
      desc: 'Aplikacja sprawdzająca aktualną pogodę (Dark Sky API) dla podanej lokalizacji (Google API).',
      tags: 'javascript, webpack, API, local storage, materialize css',
      live: 'https://s-kopiczko.usermd.net/weather-app/',
      github: 'https://github.com/sebastian-kopiczko/weather-app'
    },
    {
      name: 'notes-app',
      title: 'notes-app',
      desc: 'Prosta aplikacja pozwalająca na dodawanie, edycję oraz usuwanie notatek.',
      tags: 'javascript, webpack, local storage, picnic css',
      live: 'https://s-kopiczko.usermd.net/notes-app/',
      github: 'https://github.com/sebastian-kopiczko/notes-manager'
    },
    {
      name: 'restaurant-psd',
      title: 'restaurant-psd',
      desc: 'One page zakodowany na podstawie darmowego szablonu PSD.',
      tags: 'html, scss, bs4, webpack',
      live: 'http://s-kopiczko.usermd.net/psd-restaurant/',
      github: 'https://github.com/sebastian-kopiczko/restaurant-website'
    },
    {
      name: 'poland-psd',
      title: 'poland-psd',
      desc: 'Strona zakodowana na podstawie darmowego szablonu PSD.',
      tags: 'html, scss, gulp',
      live: 'http://s-kopiczko.usermd.net/psd-poland/',
      github: 'https://github.com/sebastian-kopiczko/Fall-in-love-with-Poland---coding-PSD'
    },
    {
      name: 'youtube-app',
      title: 'youtube-app',
      desc: 'W BUDOWIE - Aplikacja pozwalająca na pobieranie danych o kanałach oraz wyszukiwanie filmów z serwisu YT.',
      tags: 'materialize css, javascript',
      // live: 'https://s-kopiczko.usermd.net/youtube-app/',
      github: 'https://github.com/sebastian-kopiczko/youtube-api'
    },
    {
      name: 'tips-calculator',
      title: 'tips-calculator',
      desc: 'W BUDOWIE - Prosty kalkulator obliczający wysokość napiwku. Projekt wykonany na zaliczenie przedmiotu na uczelni.',
      tags: 'html, ionic, typescript',
      // live: 'http://s-kopiczko.usermd.net/tip-calculator/',
      github: 'https://github.com/sebastian-kopiczko/tip-calculator-ionic'
    },
    {
      name: 'shopping-list',
      title: 'shopping-list',
      desc: 'Prosta aplikacją służąca do tworzenia listy zakupów.',
      tags: 'bulma css, javascript',
      live: 'https://s-kopiczko.usermd.net/shopping-list/',
      github: 'https://github.com/sebastian-kopiczko/shopping-list'
    } 
  ];
  return projects;
})();