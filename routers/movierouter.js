const express = require("express");
const router = express.Router();
const movieControllers = require("../controllers/movieController")
//Lista rotte corrispondente

//index
router.get("/", movieControllers.index)

//show
router.get("/:id", movieControllers.show)


//esportiamo
module.exports = router