const mongoose = require("mongoose");

//schema
const login = new mongoose.Schema(
  {
    
    name: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    collection: "DbCollection",
  }
);

  //local url: mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false
module.exports = mongoose.model("DbCollection", login);