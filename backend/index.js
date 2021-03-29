const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/lebonplan",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("DB connected");
    }
  );

const port = 8000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});