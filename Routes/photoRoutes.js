const express = require("express");
const router = express.Router();
const photoController = require("../Controllers/photoController");

router.post("/photos", photoController.createPhoto);
router.get("/photos", photoController.getPhotos);

module.exports = router;
