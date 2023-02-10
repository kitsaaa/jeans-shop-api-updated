const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

mongoose
  .connect("mongodb+srv://nk:admin@cluster0.nc6ci.mongodb.net/JeansShop?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use("/api", routes);
    app.use(cors());

    

    app.listen(4000, () => {
      console.log("Server has started!");
    });
  });
