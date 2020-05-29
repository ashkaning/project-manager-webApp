const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
  .post(userController.create)
  .get(userController.getAll)


module.exports = router;
