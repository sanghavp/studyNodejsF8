const express = require('express');
const {exphbs} = require('express-handlebars');
const { engine } = require('express-handlebars');
const app = express();
const path = require('path');
const port = 3000;

//  static file
app.use(express.static(path.join(__dirname,'\\resources\\public')));

app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'\\resources\\views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})