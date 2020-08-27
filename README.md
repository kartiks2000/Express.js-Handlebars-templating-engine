# Express.js-Handlebars-templating-engine
Express.js Handlebars templating engine


// We import "Handlebars" templating engine

const handleHbs = require('express-handlebars');


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


Check below link to know more

check https://hackersandslackers.com/handlebars-templates-expressjs/ for more info.
