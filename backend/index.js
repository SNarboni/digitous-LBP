const express = require('express');
const app = express();
const config = require("./config")

const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/lebonplan",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("DB connected");
    }
  );

app.listen(config.PORT, () => {
  console.log('Server started on port: ' + PÖRT);
});