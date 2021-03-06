const router = require("express").Router();
const serviceController = require("../../controllers/serviceController");

router.route("/")
    .get(serviceController.getAll)
    .post(serviceController.create)
    .delete(serviceController.delete)
    .put(serviceController.updateOne)
    

module.exports = router;
