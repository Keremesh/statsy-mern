const Statsy = require("../models/statsy");
const Player = require("../models/player");
const mongoose = require("mongoose");
// const User = require("../models/user"); // Import the User model

// const fs = require("fs"); // node file system package
// const TokenGenerator = require("../models/token_generator");

const StatsyController = {
  Create: async (req, res, next) => {
    try {
      const { amount, date_added, player } = req.body;
      const { userId } = req;
      // console.log("-2 userid", userId);

      const existingPlayer = await Player.findOne({ nickname: player });
      //   console.log("ExistingPlayer", existingPlayer)
      if (!existingPlayer) {
        return res.status(400).json({ error: "Player not found" });
      }
      const existingNickname = existingPlayer.nickname;

    //   const user = await User.findOne({ _id: userId });
    //   if (!user) {
    //     return res.status(400).json({ error: "User not found for userId: " + userId });
    //   }

    const createdByObjectId = new mongoose.Types.ObjectId(userId);

      const statsy = new Statsy({
        amount,
        date_added,
        player: existingNickname,
        createdBy: createdByObjectId,
      });
      console.log("-1 userid", statsy);

      await statsy.save();

      res.status(201).json({ statsy, message: "Statsy created successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = StatsyController;
