const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");

const statsySchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  date_added: { type: String, required: true },
//   player: { type: mongoose.Schema.Types.ObjectId, ref: "Player", required: true},
  player: { type: String, required: true},
//   user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
// //   user_id: { type: String},
});

// statsySchema.plugin(uniqueValidator);

module.exports = mongoose.model("Statsy", statsySchema);