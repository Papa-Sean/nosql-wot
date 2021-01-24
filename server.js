require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const chalk = require('chalk');

var success = chalk.greenBright

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(morgan("tiny"))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log(success("Listening on port " +PORT+ " Visit http://localhost:" +PORT));
});

//fin?