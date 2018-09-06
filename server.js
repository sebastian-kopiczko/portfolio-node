const express = require('express');
const app = express();
const port = 5000;
app.listen(port, function(){
  console.log('server running');
});

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index', {
  pageTitle: 'Sebastian Kopiczko - junior developer',
  fullName: 'Sebastian Kopiczko'
}));
app.get('/about', (req, res) => res.render('about'));
app.get('/projects', (req, res) => res.render('projects'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('*', (req, res) => res.render('404'));