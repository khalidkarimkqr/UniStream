const router = require("express").Router();
const {signup, login} = require ("../controllers/authController");

router.post("/signup", signup)



module.exports = router;