const mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.connect(process.env.DATABASE_URL);

//shortcut to mongoose.connection obj.
const db = mongoose.connection;

db.on("connected", function () {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
  });