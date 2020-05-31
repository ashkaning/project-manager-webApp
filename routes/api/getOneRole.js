const router = require("express").Router();
const roleController = require("../../controllers/roleController");

router.route("/")
  .post(roleController.getOneRole)

module.exports = router;
