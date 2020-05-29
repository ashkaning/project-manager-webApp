const router = require("express").Router();
const serviceController = require("../../controllers/serviceController");

router.route("/")
    .get(serviceController.getAll)
    .post(serviceController.create)
    

module.exports = router;
