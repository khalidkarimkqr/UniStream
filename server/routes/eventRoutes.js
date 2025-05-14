const router = require("express").Router()

const { createEvent} = require("../controllers/eventController")

router.post("/create-event",verifyToken, createEvent)


module.exports = router;