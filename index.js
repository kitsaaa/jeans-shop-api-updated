const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose
  .connect("mongodb+srv://nk:admin@cluster0.nc6ci.mongodb.net/JeansShop?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => {
    const app = express();
    const cors = require('cors');
    app.use(cors());
    app.use(express.json());
    app.use("/api", routes);

    

    app.listen(4000, () => {
      console.log("Server has started!");
    });
  });
