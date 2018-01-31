var express    = require('express'),
    app        = express(),
    port       = process.env.PORT || 8080,
    mongoose   = require('mongoose'),
    Liquid     = require('./model/liquidModel'),
    bodyParser = require('body-parser');

mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost/vapeplanner');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./routes/liquidRoutes');
routes(app);

app.listen(port);
console.log('El servidor esta abierto en ' + port);