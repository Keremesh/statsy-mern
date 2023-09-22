const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
// const multer = require('../middleware/multer-config');
const { PlayerController } = require("../controllers/player");


// router.get("/", auth, playerCtrl.getAllPlayers);
// router.post("/add", auth, playerCtrl.createPlayer); // multer was in the middle, order matters here
// router.get("/:id", auth, playerCtrl.getOnePlayer);
// router.put("/:id", auth,  playerCtrl.modifyPlayer); //multer,
// router.delete("/:id", auth, playerCtrl.deletePlayer);
router.post("/add", auth, PlayerController.Create); // multer was in the middle, order matters here


module.exports = router;
