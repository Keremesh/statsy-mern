const Player = require("../models/player");
// const fs = require("fs"); // node file system package
// const TokenGenerator = require("../models/token_generator");

const PlayerController = {
  Create: async (req, res, next) => {
    try {
      const { nickname, email, agent } = req.body;
      const player = new Player({
        nickname: nickname,
        email: email,
        agent: agent,
      });

      await player.save();
      res.status(201).json({ player, message: 'Player created successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};


module.exports = { PlayerController} ;

// exports.createPlayer = (req, res, next) => {  
//   console.log("req body", req.body);
//   // req.body.player = JSON.parse(req.body.player); //its only for multer and below one too
//   // const url = req.protocol + "://" + req.get("host");
//   //post middleware, SAVE player TO THE DB
//   const player = new Player({
//     nickname: req.body.nickname,
//     email: req.body.email,
//     agent: req.body.agent,
//     // userId: req.body.userId,
//   }); //will receive a JS object that corresponds to the json that was sent by the frontend
//   //send a response otherwise the req will hang
//   player
//     .save()
//     .then(
//       //save method returns a promise, in then block send back a success response
//       () => {
//         res.status(201).json({
//           message: "Player created successfully",
//         });
//       }
//     )
//     .catch((error) => {
//       res.status(400).json({
//         error: error,
//       });
//     });
// };

// exports.getOnePlayer = (req, res, next) => {
//   Player.findOne({
//     _id: req.params.id,
//   })
//     .then((player) => {
//       res.status(200).json(player);
//     })
//     .catch((error) => {
//       res.status(404).json({
//         error: error,
//       });
//     });
// };

// exports.modifyPlayer = (req, res, next) => {
//   let player = new Player({ _id: req.params._id });
//   if (req.file) {
//     const url = req.protocol + "://" + req.get("host");
//     req.body.player = JSON.parse(req.body.player); //some issue here
//     player = {
//       _id: req.params.id,
//       nickname: req.body.player.nickname,
//       email: req.body.player.email,
//       agent: req.body.player.agent,
//       // userId: req.body.player.userId,
//     };
//   } else {
//     player = {
//       _id: req.params.id,
//       nickname: req.body.nickname,
//       email: req.body.email,
//       agent: req.body.agent,
//       // userId: req.body.userId,
//     };
//   }
//   Player.updateOne({ _id: req.params.id }, player)
//     .then(() => {
//       res.status(201).json({
//         message: "Player updated successfully",
//       });
//     })
//     .catch((error) => {
//       res.status(400).json({
//         error: error,
//       });
//     });
// };


// exports.deletePlayer = (req, res, next) => {
//   Player.findOne({ _id: req.params.id }).then((player) => {
//     if (!player) {
//       //check if Player exists
//       return res.status(404).json({
//         //note the return here and on line 76, its amust otherwise the app will crash after trying to respond twice
//         error: new Error("No such player!"), //potentially an issue as well because we are revealing that there is not such Player
//       });
//     }
//     if (player.userId !== req.auth.userId) {
//       //check if player's userId is the same as request's authentication object userId
//       return res.status(400).json({
//         error: new Error("Unauthorized request!"),
//       });
//     }
//     //     const filename = player.imageUrl.split("/images")[1];
//     //     fs.unlink("images/" + filename, () => {
//     //       Player.deleteOne({ _id: req.params.id })
//     //         .then(() => {
//     //           res.status(200).json({
//     //             message: "Deleted!",
//     //           });
//     //         })
//     //         .catch((error) => {
//     //           res.status(400).json({
//     //             error: error,
//     //           });
//     //         });
//     //     });
//     //   }
//   });
// };

// exports.getAllPlayers = (req, res, next) => {
//   //retrieve/return all players in the db
//   Player.find()
//     .then((players) => {
//       res.status(200).json(players);
//     })
//     .catch((error) => {
//       res.status(400).json({
//         error: error,
//       });
//     });
//   // next();
// };
