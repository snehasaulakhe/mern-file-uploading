// const { addDocController } = require("../controller/docController")

const { addDocController, getAllDocController, deleteAllDocss } = require("../controller/docController")

const router = require("express").Router()

router.get("/", getAllDocController)
router.post("/add", addDocController)
router.delete("/destroy", deleteAllDocss)


module.exports = router