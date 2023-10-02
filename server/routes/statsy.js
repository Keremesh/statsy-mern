const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
// const multer = require('../middleware/multer-config');
const StatsyController = require("../controllers/statsy");

router.get("/", auth, StatsyController.Index);
router.post("/add", auth, StatsyController.Create); 
router.get("/:id", auth, StatsyController.GetOne);
router.put("/:id", auth,  StatsyController.Update); //multer here
// router.delete("/:id", auth, StatsyController.Delete);

module.exports = router;