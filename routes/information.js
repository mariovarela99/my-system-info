const express = require("express");
const routes = express();
const Info = require("../lib/allInfo");

routes.get("/", (req, res) => {
  res.render("index.html");
});

routes.get("/information", (req, res) => {
  res.send({ message: "All Info is There", Info });
});

module.exports = routes;
