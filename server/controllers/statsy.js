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
      // console.log("-1 userid", statsy);

      await statsy.save();

      res.status(201).json({ statsy, message: "Statsy created successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  Index: async (req, res, next) => {
    try {
      const statsys = await Statsy.find();
      res.status(200).json({ statsys: statsys });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  GetOne: async (req, res, next) => {
    try {
      const statsyId = req.params.id;
      const statsy = await Statsy.findById(statsyId);
      if (!statsy) {
        return res.status(404).json({ error: "Statsy not found" });
      }
      res.status(200).json({ statsy: statsy });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  Update: async (req, res, next) => {
    try {
      const statsyId = req.params.id;
      const { amount, date_added, player, createdBy } = req.body;
      const updatedStatsy = {
        amount: amount,
        date_added: date_added,
        player: player,
        createdBy: createdBy,
      };

      const statsy = await Statsy.findByIdAndUpdate(statsyId, updatedStatsy, {
        new: true,
      });
      if (!statsy) {
        return res.status(404).json({ error: "Statsy not found" });
      }

      res
        .status(200)
        .json({ statsy: statsy, message: "Statsy updated successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  Delete: async (req, res, next) => { 
    try {
      const statsyId = req.params.id;
      const statsy = await Statsy.findByIdAndDelete(statsyId);
      if (!statsy) {
        return res.status(404).json({ message: 'Statsy not found' });
      }

      res.status(200).json({ message: 'statsy deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

};

module.exports = StatsyController;
