const express = require('express');
const i18n = require('i18n-2');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

i18n.expressBind(app, {
  query: true,
  locales: {
    "en": {
      "about": "About",
      "projects": "Projects",
      "contact": "Contact",
      "test": "english"
    },
    "pl": {
      "about": "O mnie",
      "projects": "Projekty",
      "contact": "Kontakt",
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

app.get('/', (req, res) => {res.render('index', {
  title: req.i18n.__("test")}
)});
app.get('/about', (req, res) => res.render('about'));
app.get('/projects', (req, res) => res.render('projects'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('*', (req, res) => res.render('404'));

app.listen(port, () => {
  console.log('server running');
});