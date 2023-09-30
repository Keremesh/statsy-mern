const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
// const multer = require('../middleware/multer-config');
const StatsyController = require("../controllers/statsy");


// router.get("/", auth, playerCtrl.getAllPlayers);
// router.post("/add", auth, playerCtrl.createPlayer); // multer was in the middle, order matters here
// router.get("/:id", auth, playerCtrl.getOnePlayer);
// router.put("/:id", auth,  playerCtrl.modifyPlayer); //multer,
// router.delete("/:id", auth, playerCtrl.deletePlayer);

// router.get("/", auth, PlayerController.Index);
router.post("/add", auth, StatsyController.Create); 
// router.get("/:id", auth, PlayerController.GetOne);
// router.put("/:id", auth,  PlayerController.Update); //multer here
// router.delete("/:id", auth, PlayerController.Delete);


module.exports = router;