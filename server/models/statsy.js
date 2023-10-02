const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");

const statsySchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  date_added: { type: String, required: true },
//   player: { type: mongoose.Schema.Types.ObjectId, ref: "Player", required: true},
  player: { type: String, required: true},
//   createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
  createdBy: { type: String, required: true},
});

// statsySchema.plugin(uniqueValidator);

module.exports = mongoose.model("Statsy", statsySchema);