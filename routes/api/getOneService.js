const router = require("express").Router();
const serviceController = require("../../controllers/serviceController");

router.route("/")
  .post(serviceController.getOneService)

module.exports = router;
