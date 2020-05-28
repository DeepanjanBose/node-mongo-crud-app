require("./models/db");

const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");

const employeeController = require("./controllers/employeeController");

var app = express();
PORT = 3000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.set("views", path.join(__dirname, "/views/"));
// Register `exphbs` with the Express app.
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: __dirname + "/views/layouts/",
  })
);
app.set("view engine", "hbs");

app.listen(PORT, () => {
  console.log(`express server started at port : ${PORT}`);
});

app.use("/employee", employeeController);
