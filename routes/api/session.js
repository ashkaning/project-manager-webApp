const router = require("express").Router();
const loginController = require("../../controllers/loginController");

router.route("/")
  .get(loginController.checkSecurity)

module.exports = router;
