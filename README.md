# Express.js-Handlebars-templating-engine
Express.js Handlebars templating engine


// We import "Handlebars" templating engine

const handleHbs = require('express-handlebars');


// Registering Templating Engine i.e 'pug' in this case

app.engine('handlebars',handleHbs());

app.set('view engine','handlebars')



Check docs to know more
