const router = require("express").Router();
const loginController = require("../../controllers/loginController");

router.route("/")
  .post(loginController.verify)
  .get(loginController.checkSecurity)
module.exports = router;
