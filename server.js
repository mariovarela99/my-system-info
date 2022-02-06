const express = require("express");
const path = require("path");
const cors = require("cors");
const routes = require("./routes/information");

const app = express();
const server = require("http").createServer(app);

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use("/", cors());
app.use("/", routes);

server.listen(process.env.PORT || 3000, () =>
  console.log("Server running on port 3000")
);
