const router = require("express").Router();
const loginController = require("../../controllers/loginController");

router.route("/")
  .get(loginController.checkSession)

module.exports = router;
