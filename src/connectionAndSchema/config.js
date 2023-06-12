const mongoose = require("mongoose");
let url =
  "mongodb+srv://mayur:pass123@cluster0.sbmxaof.mongodb.net/realestateapp?retryWrites=true&w=majority";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log(`Error connecting to the database. \n${err}`);
  });
