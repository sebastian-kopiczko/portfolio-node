const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const i18n = require('i18n-2');
const i18n_config = require('./js/translations')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

i18n.expressBind(app, i18n_config);

let globalLang = 'pl';
app.use((req, res, next) => {
  req.i18n.setLocale(globalLang);
  next();
});

app.get('/', (req, res) => {
  res.render('index', {
    navAbout: req.i18n.__("nav-about"),
    navProjects: req.i18n.__("nav-projects"),
    navContact: req.i18n.__("nav-contact"),
  });
});
app.get('/about', (req, res) => {
  res.render('about', {
    navAbout: req.i18n.__("nav-about"),
    navProjects: req.i18n.__("nav-projects"),
    navContact: req.i18n.__("nav-contact"),
    aboutContent: req.i18n.__("about-content"),
    aboutHeading: req.i18n.__("about-heading"),
    aboutBreadcrumb: req.i18n.__("about-breadcrumb"),

  });
});

app.get('/projects', (req, res) => {
  const projects = require('./js/projects');

  res.render('projects', {
    projectsItems: projects,
    navAbout: req.i18n.__("nav-about"),
    navProjects: req.i18n.__("nav-projects"),
    navContact: req.i18n.__("nav-contact"),
    projectsHeading: req.i18n.__("projects-heading"),
    projectsBreadcrumb: req.i18n.__("projects-breadcrumb"),
    projectsContent: req.i18n.__("projects-content")
  });
});

app.get('/contact', (req, res) => res.render('contact'));
app.get('*', (req, res) => res.render('404'));

app.post('/set', (req, res) => {
  const lang = req.body.language;
  if(lang !== globalLang){
    globalLang = lang;
    req.i18n.setLocale(lang);
    res.json({ ok: true });
  } else { return }
});

app.listen(8090, "0.0.0.0");