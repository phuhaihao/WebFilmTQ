const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const Router = require("./resource/routes/indexRoute");
const { engine, create } = require("express-handlebars");
const dbConnect = require("./resource/toolConfig/dbConnect");

// view engine setup
const handlebars = create({
  helpers: {
  },
});

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resource", "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

Router(app);

//connect database
dbConnect();

app.listen(port, () => {
  console.log(`website run with port: ${port}`);
});
