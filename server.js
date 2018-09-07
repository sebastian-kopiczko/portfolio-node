const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

const i18n = require('i18n-2');
const i18n_config = require('./js/translations')
const { check, validationResult } = require('express-validator/check');


app.use(bodyParser.urlencoded({
  extended: false
}));
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
    aboutBreadcrumb: req.i18n.__("about-breadcrumb")
  });
});

app.get('/projects', (req, res) => {
  const projects = require('./js/projects');

  res.render('projects', {
    projectsItems: projects,
    projectsDesc: req.i18n.__("project-description"),
    projectsHeading: req.i18n.__("projects-heading"),
    projectsBreadcrumb: req.i18n.__("projects-breadcrumb"),
    projectsContent: req.i18n.__("projects-content"),
    navAbout: req.i18n.__("nav-about"),
    navProjects: req.i18n.__("nav-projects"),
    navContact: req.i18n.__("nav-contact")
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    contactHeading: req.i18n.__("contact-heading"),
    contactBreadcrumb: req.i18n.__("contact-breadcrumb"),
    contactLabelName: req.i18n.__("contact-label-name"),
    contactLabelMessage: req.i18n.__("contact-label-message"),
    contactSend: req.i18n.__("contact-send"),
    navAbout: req.i18n.__("nav-about"),
    navProjects: req.i18n.__("nav-projects"),
    navContact: req.i18n.__("nav-contact")
  })
});
app.get('*', (req, res) => res.render('404'));

app.post('/set', (req, res) => {
  const lang = req.body.language;
  if (lang !== globalLang) {
    globalLang = lang;
    req.i18n.setLocale(lang);
    res.json({
      ok: true
    });
  } else { return }
});

app.post('/send', [
  check('email').isEmail(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.redirect('back');
  }
  const output = `
    <h1>Nowa wiadomość od: ${req.body.name}</h1>
    <h3>${req.body.email}</h3>
    <h5>Treść: </h5>
    <p>${req.body.message}</p>
  `
  // let transporter = nodemailer.createTransport

  let mailOptions = {
    from: '"Portfolio Contact Page" <bastun2007@gmail.com>',
    to: 'sebastian.kopiczko@gmail.com',
    subject: 'Wiadomość z https://sebastiankopiczko.pl',
    text: '',
    html: output
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
})

app.listen(8090, "0.0.0.0");