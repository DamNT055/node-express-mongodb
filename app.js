const morgan = require("morgan");
const express = require("express");
const app = express();
const port = 3000;

var path = require("path");
var bodyParser = require("body-parser");
var cors = require("cors");
var passport = require("passport")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use(passport.initialize());

app.use(express.static(path.join(__dirname, "public")));

// SECTION - routes
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.post(/signup/, (req, res) => {
  console.log(req.body);
  res.json({ message: "User created" });
});
// !SECTION - routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
