const express = require('express');
const i18n = require('i18n-2');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

i18n.expressBind(app, {
  locales: {
    "en": {
      "nav-about": "about",
      "nav-projects": "projects",
      "nav-contact": "contact",
      "page-about": "lorem lorem",
      "test": "english"
    },
    "pl": {
      "nav-about": "o mnie",
      "nav-projects": "projekty",
      "nav-contact": "kontakt",
      "about-breadcrumb": "kim jestem",
      "about-heading": "trochę o mnie",
      "about-content": "Mam 23 lata, pochodzę z malowniczych Suwałk i aktualnie jestem studentem ostatniego roku na kierunku Aplikacje Informatyczne w Biznesie na Uniwersytecie Gdańskim. Moim celem jest zostanie JavaScript developerem ukierunkowanym na React\'a.<br>Moje zainteresowanie front-endem zaczeło się od tworzenia prezentacji znajomym w HTML-u na popularnym kilka lat temu serwisie <a href=\"http://nonsensopedia.wikia.com/wiki/Epuls.pl\" class=\"about__link\">Epuls</a> :). Na poważniej technologii webowych zacząłem uczyć się na własną rękę podczas studiów i podjąłem decyzje, że to jest to, w czym chciałbym rozwijać się zawodowo.<br>Wolny czas spędzam z najbliższymi, siatkówkę oraz jazdę na rowerze. Uwielbiam dobrą kuchnię i ciekawe filmy. <p>Z przyjmenością opowiem o sobie więcej - pozostaję do dyspozycji. Zachęcam do zapoznania się z moimi <a href=\"projects\" class=\"about__link\">projektami</a> oraz kontem na <a href=\"https://github.com/sebastian-kopiczko?tab=repositories\" class=\"about__link\">Githubie</a>. ",
      "projects-breadcrumb": "projekty",
      "projects-heading": "Moje prace",
      "projects-content": "Użyte technologie, linki do githuba/podglądu na żywo.",
      "bialaperla": {
        "title": "biała perła"
      },
      "profil": {
        "title": "profil suwałki"
      },
      "test": "polski"
    }
  },
  cookieName: 'locale'
});

let globalLang = 'pl';
app.use((req, res, next) => {
  req.i18n.setLocale(globalLang);
  next();
});

app.post('/set', (req, res) => {
  const lang = req.body.language;
  if(lang !== globalLang){
    globalLang = lang;
    req.i18n.setLocale(lang);
    res.json({ ok: true });
  } else { return }
});

app.get('/', (req, res) => {
  res.render('index', {
    about: req.i18n.__("nav-about"),
    projects: req.i18n.__("nav-projects"),
    contact: req.i18n.__("nav-contact") 
  });
});
app.get('/about', (req, res) => {
  res.render('about',{
    about: req.i18n.__("nav-about"),
    projects: req.i18n.__("nav-projects"),
    contact: req.i18n.__("nav-contact"),
    pageAbout: req.i18n.__("about-content")
  });
});
app.get('/projects', (req, res) => {
  const projects = [
    {
      title: req.i18n.__('bialaperla.title'),
      desc: "Strona internetowa stworzona dla Białej Perły w Augustowie w oparciu o własny projekt graficzny.",
      tags: "html, scss, gulp, wordpress, illustrator",
      live: "http://biala-perla.pl/",
      github: "https://github.com/sebastian-kopiczko/biala-perla"
    },
    {
      title: req.i18n.__('profil.title'),
      desc: "Strona interntowa wykonana dla zakładu stolarskiego w Suwałkach oparta na  Wordpressie - własny projekt graficzny.",
      tags: "html, scss, gulp, wordpress, ACF, illustrator",
      live: "https://meble-profil.pl/",
      github: "https://github.com/sebastian-kopiczko/ProfilSuwalki"
    }
  ];
  res.render('projects', {
    projects: projects,
    projectsHeading: req.i18n.__("projects-heading"),
    projectsBreadcrumb: req.i18n.__("projects-breadcrumb"),
    projectsContent: req.i18n.__("projects-content")
  });
});

app.get('/contact', (req, res) => res.render('contact'));
app.get('*', (req, res) => res.render('404'));

app.listen(8090, "0.0.0.0");

/* <ul>
  <% projects.forEach(project () =>{ %>
    <li><%= project.title %></li>
  <% } %>
</ul> */
