import express from "express"
import bodyParser from "body-parser";
import methodOverride from "method-override";

import router from './routes'

const port = process.env.PORT || 8000;
const app = express();


app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

app.use('/', router);


app.listen(port, (err, data) => {
	err ? console.log(err) : console.log('Your site at http://localhost: ', port)
});