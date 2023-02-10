const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose
  .connect("mongodb+srv://nk:admin@cluster0.nc6ci.mongodb.net/JeansShop?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => {
    const app = express();
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });
    app.use(express.json());
    app.use("/api", routes);

    

    app.listen(4000, () => {
      console.log("Server has started!");
    });
  });
