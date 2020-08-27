// Setting Templating Engine i.e 'pug' in this case

// check https://hackersandslackers.com/handlebars-templates-expressjs/ for more info.

const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

// We import "Handlebars" templating engine
const hbs = require('express-handlebars');


const userprops = require('./routes/user');
const backprops = require('./routes/back');

const app = express();
app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,"public")));

// Registering Templating Engine i.e 'pug' in this case
// view engine setup
app.set('view engine', 'hbs');

app.engine( 'hbs', hbs( {
  extname: 'hbs',
  layoutsDir: __dirname + '/views',
  partialsDir: __dirname + '/views'
}));

// We need to specify this for thr location of views and this could also to written for other templating engine
app.set('views','views');


app.use(userprops.router);
app.use(backprops.router);



app.listen(3000);