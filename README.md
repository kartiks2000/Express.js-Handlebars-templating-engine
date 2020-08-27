# Express.js-Handlebars-templating-engine
Express.js Handlebars templating engine


// We import "Handlebars" templating engine

const handleHbs = require('express-handlebars');


// Registering Templating Engine i.e 'pug' in this case

app.engine('handlebars',handleHbs());

app.set('view engine','handlebars')


// We need to specify this for thr location of views and this could also to written for other templating engine
app.set('views','views');


Check docs to know more
