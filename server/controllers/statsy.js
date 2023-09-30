const Statsy = require("../models/statsy");
const Player = require("../models/player");
// const fs = require("fs"); // node file system package
// const TokenGenerator = require("../models/token_generator");

const StatsyController = {
  Create: async (req, res, next) => {
    try {
      const { amount, date_added, player } = req.body;
      const existingPlayer = await Player.findOne({ nickname: player });
    //   console.log("ExistingPlayer", existingPlayer)
      if (!existingPlayer) {
        return res.status(400).json({ error: "Player not found" });
      }
      const existingNickname = existingPlayer.nickname;
      const statsy = new Statsy({
        amount,
        date_added,
        player: existingNickname,
        // user_id,
      });

      await statsy.save();

      res.status(201).json({ statsy, message: "Statsy created successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = StatsyController;
