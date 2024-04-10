const morgan = require("morgan");
const express = require("express");
const app = express();
const port = 3000;

var path = require("path");
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
