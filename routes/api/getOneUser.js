const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
  .post(userController.getOne)


module.exports = router;
