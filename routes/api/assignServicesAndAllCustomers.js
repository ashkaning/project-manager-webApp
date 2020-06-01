const router = require("express").Router();
const serviceController = require("../../controllers/serviceController");

router.route("/")
    .get(serviceController.getAllCustomers)
    .post(serviceController.serviceToCustomer)

module.exports = router;
