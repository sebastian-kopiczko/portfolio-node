const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const i18n = require('i18n-2');
const i18n_config = require('./js/translations');

const app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

i18n.expressBind(app, i18n_config);

app.locals = { 
  // default language
  pageLang: 'pl',
 };
app.use((req, res, next) => {
  req.i18n.setLocale(app.locals.pageLang);
  next();
});

app.post('/language', (req, res) => {
  const lang = req.body.language;
  if (lang !== app.locals.pageLang) {
    app.locals.pageLang = lang;
    req.i18n.setLocale(app.locals.pageLang);
    res.json({
      ok: true
    });
  } else { return }
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
  });
});
app.get('*', (req, res) => res.render('404'));

app.post('/send', (req, res) => {
  const output = `
    <h1>Nowa wiadomość od: ${req.body.name}</h1>
    <h3>${req.body.email}</h3>
    <h5>Treść: </h5>
    <p>${req.body.message}</p>
  `
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: '#',
      clientId: '#',
      clientSecret: '#',
      refreshToken: '#',
      accessToken: '#',
      expires: 1484314697598
    }
  });

  let mailOptions = {
    from: '"Portfolio Contact Page" <#>',
    to: '#',
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
    res.send('Email sent');
  });
})

app.listen(8090, "0.0.0.0");