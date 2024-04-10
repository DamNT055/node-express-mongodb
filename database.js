const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://cluster0.1ntypho.mongodb.net", {
    user: "damnguyen",
    pass: "adgjl159357",
  })
  .then((db) => {
    console.log(" -> Connected to the database!");
    module.exports = db.connection;
  })
  .catch((err) => {
    console.error(err, "\n -> Cannot connect to the database!");
  });
