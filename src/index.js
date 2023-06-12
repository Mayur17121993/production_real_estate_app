const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const formRoutes = require("./routes/crud");
const loginRoutes = require("./routes/loginRoutes");
require("./connectionAndSchema/config");
const path = require("path");

app.use("/api/property", formRoutes);
app.use("/api", loginRoutes);

//static files
app.use(express.static(path.join(__dirname, "./Client/build")));

app.get("*", function (req, res) {
  res.sendFile(__dirname, "./Client/build/index.html");
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
