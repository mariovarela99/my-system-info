const express = require("express");
const app = express();
const path = require("path");
const server = require("http").createServer(app);
const routes = require("./routes/information");
const cors = require("cors");

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use("/", cors());
app.use("/", routes);

server.listen(3333, () => console.log("Server running on port 3333"));
