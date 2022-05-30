const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const Router = require('./resource/routes/indexRoute');
const { engine } = require ('express-handlebars');
const dbConnect = require ('./resource/toolConfig/dbConnect')


// view engine setup
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource', 'views'));

app.use(express.static(path.join(__dirname, 'public')));

Router(app);

//connect database
dbConnect();

app.listen(port, () => {
  console.log(`website run with port: ${port}`)
});
