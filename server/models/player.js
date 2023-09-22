const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const playerSchema = new mongoose.Schema({
  nickname: { type: String, required: true },
  email: { type: String },
  agent: { type: String },
//   userId: { type: String, required: true },
});

playerSchema.plugin(uniqueValidator);


module.exports = mongoose.model("Player", playerSchema);