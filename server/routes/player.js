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

router.get("/", auth, PlayerController.Index);
router.post("/add", auth, PlayerController.Create); 
// router.get("/one", auth, PlayerController.getOnePlayer);



module.exports = router;
